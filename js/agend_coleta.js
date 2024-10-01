function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function gerar_coleta_manual() {
    var solicitante = document.getElementById('nome_solicitante').value;
    var cidade_destino = document.getElementById('cidade_destino').value;
    var cnpj_coleta = document.getElementById('cnpj_loc_coleta').value;
    var nome_coleta = document.getElementById('nome_loc_coleta').value;
    var end_loc_coleta = document.getElementById('end_loc_coleta').value;
    var num_loc_coleta = document.getElementById('num_loc_coleta').value;
    var bairro_loc_coleta = document.getElementById('bairro_loc_coleta').value;
    var cidade_coleta = document.getElementById('cidade_loc_coleta').value;
    var uf_coleta = document.getElementById('uf_loc_coleta').value;
    var observacao_col = document.getElementById('observacao_col').value;
    var material_pronto = document.getElementById('mat_pronto').value;
    var volume = document.getElementById('volume').value;
    var peso = document.getElementById('peso').value;
    var hora_de = document.getElementById('hora_de').value;
    var hora_ate = document.getElementById('hora_ate').value;
    var numero_coleta = getRandomInt(10000).toString();
    var atendente = document.getElementById('nome_atendente').value;

    var data = new Date()
    let options = { timeZone: 'America/Sao_Paulo', day:'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};
    let data_hoje = data.toLocaleString('pt-BR', options);

    if (atendente == '') {
        alert('É necessário informar o nome do atendente');
        document.getElementById('nome_atendente').focus();
    } else if (solicitante == '') {
        alert('É necessário informar um solicitante');
        document.getElementById('nome_solicitante').focus();
    } else if (cnpj_coleta == '') {
        alert('É necessário informar um CNPJ');
        document.getElementById('cnpj_loc_coleta').focus();
    } else if (nome_coleta == '') {
        alert('É necessário informar o nome/razão social do CNPJ');
        nome_coleta = document.getElementById('nome_loc_coleta').focus();
    } else if (end_loc_coleta == '') {
        alert('É necessário informar o endereço da coleta');
        document.getElementById('end_loc_coleta').focus();
    } else if (num_loc_coleta == '') {
        alert('É necessário informar o numero do endereço da coleta');
        document.getElementById('num_loc_coleta').focus();
    } else if (bairro_loc_coleta == '') {
        alert('É necessário informar o bairro da coleta');
        document.getElementById('bairro_loc_coleta').focus();
    } else if (cidade_coleta == '') {
        alert('É necessário informar a cidade da coleta');
        document.getElementById('cidade_loc_coleta').focus();
    } else if (uf_coleta == '') {
        alert('É necessário informar a unidade federativa da coleta');
        document.getElementById('uf_loc_coleta').focus();
    } else if (volume == '') {
        alert('É necessário informar a quantidade de volumes a ser coletada');
        document.getElementById('volume').focus();
    } else if (peso == '') {
        alert('É necessário informar o peso dos volumes');
        document.getElementById('peso').focus();
    } else if (hora_de == '' || hora_ate == '') {
        alert('É necessário informar o horário da coleta');
        document.getElementById('hora_de').focus('');
    } else {
        console.log(numero_coleta);
        document.getElementById('numero_coleta').value = numero_coleta;
        
        const {jsPDF} = window.jspdf;
        
        const pdf = new jsPDF();
        
        const img = new Image();
        img.src = 'img/logo_esm.png';
        
        //borda em volta da folha
        pdf.line(1, 1, 209, 1);
        pdf.line(1, 1, 1, 294);
        pdf.line(1, 294, 209, 294);
        pdf.line(209,1,209,294);
        
        pdf.addImage(img, "PNG", 1,2,40,25)
        
        pdf.setFontSize(14);
        pdf.setFont('Arial', 'bold');
        pdf.text('CADASTRO DE COLETA MANUAL', 115, 10, 'center');
        pdf.text(data_hoje, 115, 20, 'center');
        pdf.line(1,30,209,30); // borda abaixo da 
        
        pdf.setFontSize(12);
        pdf.text('Coleta',5,37);
        pdf.setFont('Arial','normal');
        pdf.text(numero_coleta,5,42)
        
        pdf.setFont('Arial','bold');
        pdf.text('Solicitante',20,37);
        pdf.setFont('Arial','normal');
        pdf.text(solicitante,20,42);
        pdf.setFont('Arial','bold');
        pdf.text('Cidade de Destino',140,37);
        pdf.setFont('Arial','normal');
        pdf.text(cidade_destino,140,42);
        
        
        pdf.setFont('Arial','bold');
        pdf.text('CNPJ', 5, 50);
        pdf.setFont('Arial','normal');
        pdf.text(cnpj_coleta, 5, 55);
        pdf.setFont('Arial','bold');
        pdf.text('Nome',38,50);
        pdf.setFont('Arial','normal');
        pdf.text(nome_coleta,38,55);
        pdf.setFont('Arial','bold');
        pdf.text('Endereço',5,62)
        pdf.setFont('Arial','normal');
        pdf.text(end_loc_coleta,5,67);
        pdf.setFont('Arial','bold');
        pdf.text('Número',115,62);
        pdf.setFont('Arial','normal');
        pdf.text(num_loc_coleta,115,67);
        pdf.setFont('Arial','bold');
        pdf.text('Bairro',5,73);
        pdf.setFont('Arial','normal');
        pdf.text(bairro_loc_coleta,5,78);
        pdf.setFont('Arial','bold');
        pdf.text('Cidade',75,73);
        pdf.setFont('Arial','normal');
        pdf.text(cidade_coleta,75,78);
        pdf.setFont('Arial','bold');
        pdf.text('UF',125,73);
        pdf.setFont('Arial','normal');
        pdf.text(uf_coleta,125,78)
        pdf.setFont('Arial','bold');
        pdf.text('Observação',5,84);
        pdf.setFont('Arial','normal');
        pdf.text(observacao_col,5,89);
        pdf.setFont('Arial','bold');
        pdf.text('Material Pronto',5,95);
        pdf.setFont('Arial','normal');
        pdf.text(material_pronto,5,100);
        pdf.setFont('Arial','bold');
        pdf.text('Volumes',50,95);
        pdf.setFont('Arial','normal');
        pdf.text(volume,50,100);
        pdf.setFont('Arial','bold');
        pdf.text('Peso',75,95);
        pdf.setFont('Arial','normal');
        pdf.text(peso+'Kg',75,100);
        pdf.setFont('Arial','bold');
        pdf.text('Hora de',115,95);
        pdf.setFont('Arial','normal');
        pdf.text(hora_de,115,100);
        pdf.setFont('Arial','bold');
        pdf.text('Hora até',145,95);
        pdf.setFont('Arial','normal');
        pdf.text(hora_ate,145,100);
        pdf.setFont('Arial','bold');
        pdf.text('Atendente',5,106);
        pdf.setFont('Arial','normal');
        pdf.text(atendente, 5, 111);
        
        pdf.save('Coleta '+numero_coleta+' - Atendente '+atendente+'.pdf')
    }
}