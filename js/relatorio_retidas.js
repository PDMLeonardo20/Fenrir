var data = new Date();
var dia = data.getDay();
var mes = data.getMonth();
var ano = data.getFullYear();
var dia_hoje = `${dia}-${mes}-${ano}`;
let options = { timeZone: 'America/Sao_Paulo', day:'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};
let data_hoje = data.toLocaleString('pt-BR', options);
document.getElementById('data_atual').innerHTML = data_hoje;

var lista_nota_fiscal = []
var lista_nome_cliente = []
var lista_cidade_dest = []
var lista_motivo_ret = []
var lista_volumes = []
var lista_status_merc = []
var lista_observacoes = []
var lista_perecivel = []
var lista_nome_responsavel = []

function inserir_registros_retida() {
    var nota_fiscal = document.getElementById('numero_nota_fiscal').value;
    var nome_cliente = document.getElementById('nome_remetente').value;
    var cidade_dest = document.getElementById('cidade_dest').value;
    var motivo_retencao = document.getElementById('motivo_retencao').value;
    var observacao = document.getElementById('obs_ret').value;
    var volumes = document.getElementById('volume_nf').value;
    volumes = parseInt(volumes);
    var perecivel = document.getElementById('perecivel').value;
    var status = document.getElementById('status_ret').value;
    var responsavel = document.getElementById('nome_responsavel').value;

    lista_nota_fiscal.push(nota_fiscal)
    lista_nome_cliente.push(nome_cliente)
    lista_cidade_dest.push(cidade_dest)
    lista_motivo_ret.push(motivo_retencao)
    lista_volumes.push(volumes)
    lista_status_merc.push(status)
    lista_observacoes.push(observacao)
    lista_perecivel.push(perecivel)
    lista_nome_responsavel.push(responsavel)

    document.getElementById('dados_adicionados').innerHTML = lista_status_merc.length;

    document.getElementById('dados_inseridos_ret').innerHTML += "<th scope='row'>#</th><td>"+nota_fiscal+"</td><td>"+nome_cliente+"</td><td>"+cidade_dest+"</td><td>"+motivo_retencao+"</td><td>"+observacao+"</td><td>"+volumes+"</td><td>"+perecivel+"</td><td>"+status+'</td><td>'+responsavel+'</td>';

    document.getElementById('numero_nota_fiscal').value = '';
    document.getElementById('nome_remetente').value = '';
    document.getElementById('cidade_dest').value = '';
    document.getElementById('motivo_retencao').value = '';
    document.getElementById('obs_ret').value = '';
    document.getElementById('volume_nf').value = '';
    //document.getElementById('perecivel').value = '';
    //document.getElementById('status_ret').value = '';
    document.getElementById('nome_responsavel').value = '';
    document.getElementById('numero_nota_fiscal').focus();
}
function gerar_pdf_notas_retidas() {

    const {jsPDF} = window.jspdf;
    
    const pdf = new jsPDF('landscape');

    const img = new Image();
    img.src = 'img/logo_esm_presenca.png';

    var volumes = lista_volumes.reduce((accumulator, value) => {
        return accumulator + value;
    },0);

    

    //borda em volta da folha
    pdf.line(1, 1, 296, 1);
    pdf.line(1, 1, 1, 209);
    pdf.line(1, 209, 296, 209);
    pdf.line(296,1,296,209);

    pdf.addImage(img, "PNG", 5,2,125,27)

    pdf.line(135,1,135,30)

    pdf.setFontSize(14);
    pdf.setFont('Arial', 'bold');
    pdf.text('Planilha das Notas Retidas de Porto Alegre', 215, 8,'center');
    pdf.text('Data: '+data_hoje,215,13,'center')
    pdf.line(135,17,296,17)
    pdf.setFontSize(9);
    pdf.text('Volumes: '+volumes.toString(),136,20.5)

    let retidas = 0
    let pereciveis = 0

    for (let i = 0; i < lista_status_merc.length; i++) {
        const status = lista_status_merc[i];
        if (status == 'Retida'){
            retidas++
        }
    }

    for (let i = 0; i < lista_perecivel.length; i++) {
        const status = lista_perecivel[i];
        if (status == 'Sim'){
            pereciveis++
        }
    }
    pdf.text('Notas Retidas: '+retidas.toString(),136,24.4)

    pdf.text('Perecíveis: '+pereciveis.toString(),136,28.5)

    pdf.line(170,17,170,30)

    pdf.line(1,30,296,30); // borda abaixo da logo

    pdf.line(1,35,296,35)

    pdf.setFontSize(9);
    pdf.text('N', 2, 33.5)
    pdf.line(6,30,6,209)
    pdf.text('Nota Fiscal', 7, 33.5)
    pdf.line(26, 30, 26, 209)
    pdf.text('Remetente', 27, 33.5)
    pdf.line(61,30,61,209)
    pdf.text('Cidade Dest.',62,33.5)
    pdf.line(115,30,115,209)
    pdf.text('Motivo', 116, 33.5)
    pdf.line(154,30,154,209)
    pdf.text('Observação', 155,33.5)
    pdf.line(220,30,220,209)
    pdf.text('Vol.',221,33.5)
    pdf.line(235,30,235,209)
    pdf.text('Perecível', 235.6, 33.5)
    pdf.line(254, 30, 254, 209)
    pdf.text('Status',255,33.5)
    pdf.line(272,30,272,209)
    pdf.text('Responsável', 273, 33.5)

    var y_texto = 38.5;
    var numero_linha = 1
    var y_linha = 40;

    for (let i = 0; i < lista_nota_fiscal.length; i++) {
        const nf = lista_nota_fiscal[i];
        pdf.text(numero_linha.toString(), 2, y_texto)
        numero_linha += 1;
        y_texto +=5
    }
    pdf.setFont('Arial', 'normal');
    y_texto = 38.5;

    for (let i = 0; i < lista_nota_fiscal.length; i++) {
        const nf = lista_nota_fiscal[i];
        pdf.text(nf, 6.5, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_nome_cliente.length; i++) {
        const nf = lista_nome_cliente[i];
        pdf.text(nf, 27, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_cidade_dest.length; i++) {
        const nf = lista_cidade_dest[i];
        pdf.text(nf, 62, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_motivo_ret.length; i++) {
        const nf = lista_motivo_ret[i];
        pdf.text(nf, 116, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_observacoes.length; i++) {
        const nf = lista_observacoes[i];
        pdf.text(nf, 155, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_volumes.length; i++) {
        const nf = lista_volumes[i];
        pdf.text(nf.toString(), 221, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_perecivel.length; i++) {
        const nf = lista_perecivel[i];
        pdf.text(nf, 235.6, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_status_merc.length; i++) {
        const nf = lista_status_merc[i];
        pdf.text(nf, 255, y_texto)
        y_texto += 5;
    }
    y_texto = 38.5;
    for (let i = 0; i < lista_nome_responsavel.length; i++) {
        const nf = lista_nome_responsavel[i];
        pdf.text(nf, 273, y_texto)
        pdf.line(1,y_linha,296, y_linha)

        y_linha += 5;
        y_texto += 5;
    }
    y_texto = 38.5;


    pdf.save('Notas retidas - '+data_hoje)
}