const convertToDateTimeLocalString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
}

var data_atual = new Date();
document.getElementById('data_cad_cubagem').value = convertToDateTimeLocalString(data_atual);

var data = new Date();
var dia = data.getDay();
var mes = data.getMonth();
var ano = data.getFullYear();
var dia_hoje = `${dia}-${mes}-${ano}`;
let options = { timeZone: 'America/Sao_Paulo', day:'numeric', month: 'numeric', year: 'numeric'};
let data_hoje = data.toLocaleString('pt-BR', options);

var l_data_cad = []
var l_conferentes = []
var l_n_cliente = []
var l_cod_cte = []
var l_volumes = []
var l_peso_a = []
var l_cubagem_a = []
var l_s_v_peso = []
var l_s_v_cubagem = []
var l_val_diferenca = []

var real_brasileiro = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'});

function cadastra_dados_cubagem() {
    var data_cadastro = document.getElementById('data_cad_cubagem').value;
    var conferente = document.getElementById('conferente').value;
    var n_cliente = document.getElementById('n_cliente').value;
    var cod_cte = document.getElementById('cod_cte').value;
    var volumes = document.getElementById('volume').value;
    var peso_aferido = document.getElementById('peso_aferido').value;
    var cubagem_aferida = document.getElementById('cubagem_aferida').value;
    var sim_valor_peso = document.getElementById('sim_valor_peso').value;
    var sim_valor_cubagem = document.getElementById('sim_valor_cubagem').value;

    if (data_cadastro == ''){
        alert('É necessário informar uma data');
    } else if (conferente == '') {
        alert('É necessário informar o nome do conferente');
    } else if (n_cliente == '') {
        alert('É necessário informar o nome do cliente');
    } else if (cod_cte == ''){
        alert('É necessário informar o código do CT-e');
    } else if (peso_aferido == '') {
        alert('É necessário informar o peso da nota fiscal')
    } else if (cubagem_aferida == ''){
        alert('É necessário informar a cubagem');
    } else if (sim_valor_peso == '') {
        alert('É necessário informar a simulação do valor sobre o peso')
    } else if(sim_valor_cubagem == ''){
        alert('É necessário informar a simulação do valor sobre a cubagem');
    } else {
        sim_valor_peso.replace(",",".");
        sim_valor_cubagem.replace(",",".");
        peso_aferido.replace(",",".");
        cubagem_aferida.replace(",",".");

        sim_valor_peso = parseFloat(sim_valor_peso);
        sim_valor_cubagem = parseFloat(sim_valor_cubagem);
        peso_aferido = parseFloat(peso_aferido);
        cubagem_aferida = parseFloat(cubagem_aferida);
        volumes = parseInt(volumes);

        l_data_cad.push(data_cadastro);
        l_conferentes.push(conferente)
        l_n_cliente.push(n_cliente);
        l_cod_cte.push(cod_cte);
        l_volumes.push(volumes)
        l_peso_a.push(peso_aferido);
        l_cubagem_a.push(cubagem_aferida);
        l_s_v_peso.push(sim_valor_peso);
        l_s_v_cubagem.push(sim_valor_cubagem);
        
        var val_diferenca = sim_valor_cubagem - sim_valor_peso;
        console.log(val_diferenca);
        l_val_diferenca.push(val_diferenca);

        document.getElementById('dados_inseridos').innerHTML += "<th scope='row'><td>"+data_cadastro+"</td><td>"+conferente+"</td><td>"+n_cliente+"</td><td>"+cod_cte+"</td><td>"+volumes+"</td><td>"+peso_aferido.toFixed(2)+"</td><td>"+cubagem_aferida.toFixed(2)+"</td><td>"+real_brasileiro.format(sim_valor_peso)+"</td><td>"+real_brasileiro.format(sim_valor_cubagem)+"</td><td>"+real_brasileiro.format(val_diferenca)+"</td></th>";
    }

}

function gerar_pdf_sim_peso_cubagem() {

    var total_vol = l_volumes.reduce((accumulator,value) =>{
        return accumulator + value
    },0)

    var total_peso = l_peso_a.reduce((accumulator,value) =>{
        return accumulator + value
    },0)

    var total_cubagem = l_cubagem_a.reduce((accumulator,value) =>{
        return accumulator + value
    },0)
    var total_valor_dif = l_val_diferenca.reduce((accumulator,value) =>{
        return accumulator + value
    },0)

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

    pdf.line(42,1,42,30)

    pdf.setFontSize(14);
    pdf.setFont('Arial', 'bold');
    pdf.text('RELATÓRIO DE SIMULAÇÃO PESO/CUBAGEM', 50, 9.5);
    pdf.line(170,1,170,15)
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Data',171,4)
    pdf.setFontSize(22);
    pdf.setFont('Arial', 'bold');
    pdf.text(data_hoje,171,12)
    pdf.line(42,15,209,15)
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Total Volumes',43,18);
    pdf.setFontSize(26);
    pdf.setFont('Arial', 'bold');
    pdf.text(total_vol.toString(),43,27)
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.line(63,15,63,30)
    pdf.text('Total Peso',64,18)
    pdf.setFontSize(26);
    pdf.setFont('Arial', 'bold');
    pdf.text(total_peso.toFixed(2),64,27)
    pdf.line(100,15,100,30)
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Total Cubagem',101,18);
    pdf.setFontSize(26);
    pdf.setFont('Arial', 'bold');
    pdf.text(total_cubagem.toFixed(2),101,27)
    pdf.line(135,15,135,30)
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Total Diferença',136,18)
    pdf.setFontSize(26);
    pdf.setFont('Arial', 'bold');
    pdf.text(real_brasileiro.format(total_valor_dif),136,27)


    pdf.line(1,30,209,30); // borda abaixo da logo

    

    pdf.setFontSize(10);
    pdf.setFont('Arial','bold');
    pdf.text('Data',2,34);
    pdf.text("Conferente",25, 34);
    pdf.text("Cliente",45, 34);
    pdf.text("Cód. CT-e",75,34);
    pdf.text("Num. CT-e",95,34)
    pdf.text('Vol.',120,34)
    pdf.text('Peso',129,34)
    pdf.text('M³',144,34)
    pdf.text("Sim. Peso", 157,34)
    pdf.text('Sim. Cub.', 173,34)
    pdf.text('Diferença',190,34)

    pdf.line(1, 35, 209, 35)
    pdf.line(24, 30, 24, 294)
    pdf.line(44, 30, 44, 294)
    pdf.line(74, 30, 74, 294)
    pdf.line(94, 30, 94, 294)
    pdf.line(119, 30, 119, 294)
    pdf.line(143, 30, 143, 294)
    pdf.line(128, 30, 128, 294)
    pdf.line(156, 30, 156, 294)
    pdf.line(172, 30, 172, 294)
    pdf.line(189,30,189,294)

    pdf.setFontSize(8)
    pdf.setFont('Arial', 'normal')
    var y_dados = 39;
    var y_linha = 40;
    for (const i in l_data_cad) {
        if (Object.prototype.hasOwnProperty.call(l_data_cad, i)) {
            pdf.text(l_data_cad[i],2,y_dados)
            y_dados += 5.5
        }
    }
    y_dados = 39
    for (const i in l_conferentes) {
        if (Object.prototype.hasOwnProperty.call(l_conferentes, i)) {
            const conferente = l_conferentes[i];
            pdf.text(conferente,25,y_dados)
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in l_n_cliente) {
        if (Object.prototype.hasOwnProperty.call(l_n_cliente, i)) {
            const n_cliente = l_n_cliente[i];
            pdf.text(n_cliente,45, y_dados)
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in l_cod_cte) {
        if (Object.prototype.hasOwnProperty.call(l_cod_cte, i)) {
            const cod_cte = l_cod_cte[i];
            pdf.text(cod_cte,75,y_dados)
            y_dados += 5.5
        }
    }
    y_dados = 39
    for (const i in l_volumes) {
        if (Object.prototype.hasOwnProperty.call(l_volumes, i)) {
            const volumes = l_volumes[i];
            pdf.text(volumes.toString(),120, y_dados)
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in l_peso_a) {
        if (Object.prototype.hasOwnProperty.call(l_peso_a, i)) {
            const peso_aferido = l_peso_a[i];
            pdf.text(peso_aferido.toString(),129,y_dados)
            y_dados += 5.5
        }
    }
    y_dados = 39;
    for (const i in l_cubagem_a) {
        if (Object.prototype.hasOwnProperty.call(l_cubagem_a, i)) {
            const cubagem = l_cubagem_a[i];
            pdf.text(cubagem.toString(),144,y_dados)
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in l_s_v_peso) {
        if (Object.prototype.hasOwnProperty.call(l_s_v_peso, i)) {
            const sim_valor_peso = l_s_v_peso[i];
            pdf.text(real_brasileiro.format(sim_valor_peso),157,y_dados)
            y_dados += 5.5
        }
    }
    y_dados = 39
    for (const i in l_s_v_cubagem) {
        if (Object.prototype.hasOwnProperty.call(l_s_v_cubagem, i)) {
            const sim_valor_cubagem = l_s_v_cubagem[i];
            pdf.text(real_brasileiro.format(sim_valor_cubagem),173,y_dados);
            y_dados += 5.5
        }
    }
    y_dados = 39
    for (const i in l_val_diferenca) {
        if (Object.prototype.hasOwnProperty.call(l_val_diferenca, i)) {
            const val_diferenca = l_val_diferenca[i];
            pdf.text(real_brasileiro.format(val_diferenca),190,y_dados)
            y_dados +=5.5
            pdf.line(1, y_linha, 209, y_linha)
            y_linha += 5.5;
        }
    }
    y_dados = 39



    pdf.save('Cubagens embarcadas.pdf');
}