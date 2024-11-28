function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function preenchimento_automatico_cliente() {
    let numero_cnpj_rem = document.getElementById("cnpj_loc_coleta").value;
    let cadastros_salvos = JSON.parse(localStorage.getItem(numero_cnpj_rem));
    document.getElementById("nome_loc_coleta").value = "";
    document.getElementById("end_loc_coleta").value = "";
    document.getElementById("num_loc_coleta").value = "";
    document.getElementById("bairro_loc_coleta").value = "";
    document.getElementById("cidade_loc_coleta").value = "";
    document.getElementById("uf_loc_coleta").value = "";

    if (localStorage.getItem(numero_cnpj_rem) !== null) {
        if(typeof cadastros_salvos.cnpj_cliente !== 'undefined')document.getElementById("nome_loc_coleta").value = cadastros_salvos.nome_cliente;
        if(typeof cadastros_salvos.nome_logradouro !== 'undefined')document.getElementById("end_loc_coleta").value = cadastros_salvos.nome_logradouro;
        if(typeof cadastros_salvos.numero_logradouro !== 'undefined')document.getElementById("num_loc_coleta").value = cadastros_salvos.numero_logradouro;
        if(typeof cadastros_salvos.bairro_cad_cliente !== 'undefined')document.getElementById("bairro_loc_coleta").value = cadastros_salvos.bairro_cad_cliente;
        if(typeof cadastros_salvos.cidade_cad_cliente !== 'undefined')document.getElementById("cidade_loc_coleta").value = cadastros_salvos.cidade_cad_cliente;
        if(typeof cadastros_salvos.uf_cad_cliente !== "undefined")document.getElementById("uf_loc_coleta").value = cadastros_salvos.uf_cad_cliente;
        
    }
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

        var dados_coleta = {
            numero_coleta: numero_coleta,
            solicitante: solicitante,
            cidade_destino: cidade_destino,
            cnpj_coleta: cnpj_coleta,
            nome_coleta: nome_coleta,
            end_loc_coleta: end_loc_coleta,
            num_loc_coleta: num_loc_coleta,
            bairro_loc_coleta: bairro_loc_coleta,
            cidade_coleta: cidade_coleta,
            uf_coleta: uf_coleta,
            observacao_col: observacao_col,
            material_pronto: material_pronto,
            volume: volume,
            peso: peso,
            hora_de: hora_de,
            hora_ate: hora_ate,
            atendente: atendente,
            data_hoje: data_hoje
        }

        localStorage.setItem(numero_coleta,JSON.stringify(dados_coleta));
        
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

function consultar_coleta() {
    var numero_coleta = document.getElementById('busca_coleta').value;
    var cons_dados_coleta = JSON.parse(localStorage.getItem(numero_coleta));

    document.getElementById('nome_atendente_cons').value = '';
    document.getElementById('nome_solicitante_cons').value = '';
    document.getElementById('cidade_destino_cons').value = '';
    document.getElementById('cnpj_loc_coleta_cons').value = '';
    document.getElementById('nome_loc_coleta_cons').value = '';
    document.getElementById('end_loc_coleta_cons').value = '';
    document.getElementById('num_loc_coleta_cons').value = '';
    document.getElementById('bairro_loc_coleta_cons').value = '';
    document.getElementById('cidade_loc_coleta_cons').value = '';
    document.getElementById('uf_loc_coleta_cons').value = '';
    document.getElementById('mat_pronto').value = '';
    document.getElementById('volume').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('hora_de').value = '';
    document.getElementById('hora_ate').value = '';
    document.getElementById('numero_coleta').value = '';

    if (localStorage.getItem(numero_coleta) !== null) {
        console.log(cons_dados_coleta)
        if(typeof cons_dados_coleta.numero_coleta !== 'undefined') document.getElementById('numero_coleta').value = cons_dados_coleta.numero_coleta;
        if(typeof cons_dados_coleta.solicitante !== 'undefined') document.getElementById('nome_solicitante_cons').value = cons_dados_coleta.solicitante;
        if(typeof cons_dados_coleta.cidade_destino !== 'undefined') document.getElementById('cidade_destino_cons').value = cons_dados_coleta.cidade_destino;
        if(typeof cons_dados_coleta.cnpj_coleta !== 'undefined') document.getElementById('cnpj_loc_coleta_cons').value = cons_dados_coleta.cnpj_coleta;
        if(typeof cons_dados_coleta.nome_coleta !== 'undefined') document.getElementById('nome_loc_coleta_cons').value = cons_dados_coleta.nome_coleta;
        if(typeof cons_dados_coleta.end_loc_coleta !== 'undefined') document.getElementById('end_loc_coleta_cons').value = cons_dados_coleta.end_loc_coleta;
        if(typeof cons_dados_coleta.num_loc_coleta !== 'undefined') document.getElementById('num_loc_coleta_cons').value = cons_dados_coleta.num_loc_coleta;
        if(typeof cons_dados_coleta.cidade_coleta !== 'undefined') document.getElementById('cidade_loc_coleta_cons').value = cons_dados_coleta.cidade_coleta;
        if(typeof cons_dados_coleta.uf_coleta !== 'undefined') document.getElementById('uf_loc_coleta_cons').value = cons_dados_coleta.uf_coleta;
        if(typeof cons_dados_coleta.material_pronto !== 'undefined') document.getElementById('mat_pronto').value = cons_dados_coleta.material_pronto;
        if(typeof cons_dados_coleta.volume !== 'undefined') document.getElementById('volume').value = cons_dados_coleta.volume;
        if(typeof cons_dados_coleta.peso !== 'undefined') document.getElementById('peso').value = cons_dados_coleta.peso;
        if(typeof cons_dados_coleta.hora_de !== 'undefined') document.getElementById('hora_de').value = cons_dados_coleta.hora_de;
        if(typeof cons_dados_coleta.hora_ate !== 'undefined') document.getElementById('hora_ate').value = cons_dados_coleta.hora_ate;
        if(typeof cons_dados_coleta.atendente !== 'undefined') document.getElementById('nome_atendente_cons').value = cons_dados_coleta.atendente;
    }
}