var lista_cte = [];
var lista_tomador = [];
var lista_forma_pgto = [];
var lista_dest = [];
var lista_conf = [];
var lista_hora_ret = [];

function insere_registro() {
    var numero_cte = document.getElementById('numero_cte').value;
    var tomador = document.getElementById('tomador_frete').value;
    var forma_pagamento = document.getElementById('forma_pagamento').value;
    var destinatario = document.getElementById('destinatario').value;
    var conferente = document.getElementById('conferente').value;
    var hora_retira = document.getElementById('hora_retira').value;

    if (numero_cte == '' || tomador == '' || forma_pagamento == '' || destinatario == '' || conferente == '' || hora_retira == '') {
        alert('Campo(s) Vazio(s), verifique');
    } else{
        lista_cte.push(numero_cte);
        lista_tomador.push(tomador);
        lista_forma_pgto.push(forma_pagamento);
        lista_dest.push(destinatario);
        lista_conf.push(conferente);
        lista_hora_ret.push(hora_retira);

        document.getElementById('registros_inseridos').innerHTML = '';

        for (let i = 0; i < lista_cte.length; i++) {
            document.getElementById('registros_inseridos').innerHTML += "<th scope='row'>#</th><td>"+lista_cte[i]+"</td><td>"+lista_tomador[i]+"</td><td>"+lista_forma_pgto[i]+"</td><td>"+lista_dest[i]+"</td><td>"+lista_conf[i]+"</td><td>"+lista_hora_ret[i]+"</td>";
        }
    }
}
var data = new Date();
var dia = data.getDay();
var mes = data.getMonth();
var ano = data.getFullYear();
var dia_hoje = `${dia}-${mes}-${ano}`;
let options = { timeZone: 'America/Sao_Paulo', day:'numeric', month: 'numeric', year: 'numeric'};
let data_hoje = data.toLocaleString('pt-BR', options);

var dados_fodas = {
    l_cte: lista_cte,
    l_tomador: lista_tomador,
    l_f_pgto: lista_forma_pgto,
    l_dest: lista_dest,
    l_conf: lista_conf,
    l_hora: lista_hora_ret,
}

function salvar_dados() {
    localStorage.setItem('dados_retira',JSON.stringify(dados_fodas));
    console.log(JSON.parse(localStorage.getItem('dados_retira')));
}

function carrega_dados(){
    var dados_salvos = JSON.parse(localStorage.getItem('dados_retira'));
    if (typeof dados_salvos.l_cte !== 'undefined') {
        for (const i in dados_salvos.l_cte) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_cte, i)) {
                const cte_s = dados_salvos.l_cte[i];
                lista_cte.push(cte_s);
            }
        }
    }
    if (typeof dados_salvos.l_tomador !== 'undefined') {
        for (const i in dados_salvos.l_tomador) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_tomador, i)) {
                const tomador_s = dados_salvos.l_tomador[i];
                lista_tomador.push(tomador_s);
            }
        }
    }
    if (typeof dados_salvos.l_f_pgto !== 'undefined') {
        for (const i in dados_salvos.l_f_pgto) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_f_pgto, i)) {
                const f_pgto_s = dados_salvos.l_f_pgto[i];
                lista_forma_pgto.push(f_pgto_s);
            }
        }
    }
    if (typeof dados_salvos.l_dest !== 'undefined') {
        for (const i in dados_salvos.l_dest) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_dest, i)) {
                const dest_s = dados_salvos.l_dest[i];
                lista_dest.push(dest_s);
            }
        }
    }
    if (typeof dados_salvos.l_conf !== 'undefined') {
        for (const i in dados_salvos.l_conf) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_conf, i)) {
                const conf_s = dados_salvos.l_conf[i];
                lista_conf.push(conf_s);
            }
        }
    }
    if (typeof dados_salvos.l_hora !== 'undefined') {
        for (const i in dados_salvos.l_hora) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_hora, i)) {
                const hora_ret_s = dados_salvos.l_hora[i];
                lista_hora_ret.push(hora_ret_s);
            }
        }
    }
    for (let i = 0; i < lista_cte.length; i++) {
        document.getElementById('registros_inseridos').innerHTML += "<th scope='row'>#</th><td>"+lista_cte[i]+"</td><td>"+lista_tomador[i]+"</td><td>"+lista_forma_pgto[i]+"</td><td>"+lista_dest[i]+"</td><td>"+lista_conf[i]+"</td><td>"+lista_hora_ret[i]+"</td>";
    }
}

function cria_pedefi() {
    var conf_resp = document.getElementById('conf_resp').value;
    const {jsPDF} = window.jspdf;
    
    const pdf = new jsPDF();

    const img = new Image();
    img.src = 'img/logo_esm.png';

    //borda em volta da folha
    pdf.line(1, 1, 209, 1);
    pdf.line(1, 1, 1, 294);
    pdf.line(1, 294, 209, 294);
    pdf.line(209,1,209,294);

    pdf.addImage(img, "PNG", 2.5,3,40,25);
    pdf.line(45,1,45,30)

    pdf.setFontSize(14);
    pdf.setFont('Arial', 'bold');
    pdf.text('CONTROLE DOS MATERIAIS DO RETIRA', 125, 10,'center');
    pdf.line(45,15,209,15);
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Conferente Responsável',47,19);
    pdf.setFontSize(15);
    pdf.text(conf_resp,47,27);
    pdf.setFontSize(9);
    pdf.line(170,15,170,30);
    pdf.text('Data',172,19);
    pdf.setFontSize(20);
    pdf.text(data_hoje,172,27);
    pdf.line(1,30,209,30); // borda abaixo da logo

    pdf.setFontSize(10);
    pdf.setFont('Arial', 'bold');
    pdf.text('CT-e',2,34);
    pdf.line(20,30,20,294);
    pdf.text('Tomador',21,34);
    pdf.line(37,30,37,294);
    pdf.text('Pgto',38,34);
    pdf.line(55,30,55,294);
    pdf.text('Destinatário',56,34);
    pdf.line(135,30,135,294);
    pdf.text('Conferente',136,34);
    pdf.line(190,30,190,294);
    pdf.text('Hora',191,34);
    pdf.line(1,35,209,35);
    pdf.setFont('Arial', 'normal');

    var y_dados = 39;
    var y_linha = 40;

    for (const i in lista_cte) {
        if (Object.prototype.hasOwnProperty.call(lista_cte, i)) {
            const ctes = lista_cte[i];
            pdf.text(ctes,2,y_dados);
            y_dados+=5.5;
            
        }
    }
    y_dados = 39;
    for (const i in lista_tomador) {
        if (Object.prototype.hasOwnProperty.call(lista_tomador, i)) {
            const tomador = lista_tomador[i];
            pdf.text(tomador,21,y_dados);
            y_dados+=5.5;
        }
    }
    y_dados = 39;
    for (const i in lista_forma_pgto) {
        if (Object.prototype.hasOwnProperty.call(lista_forma_pgto, i)) {
            const pgto = lista_forma_pgto[i];
            pdf.text(pgto,38,y_dados)
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in lista_dest) {
        if (Object.prototype.hasOwnProperty.call(lista_dest, i)) {
            const destinatario = lista_dest[i];
            pdf.text(destinatario,56,y_dados);
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in lista_conf) {
        if (Object.prototype.hasOwnProperty.call(lista_conf, i)) {
            const conferente = lista_conf[i];
            pdf.text(conferente,136,y_dados);
            y_dados += 5.5;
        }
    }
    y_dados = 39;
    for (const i in lista_hora_ret) {
        if (Object.prototype.hasOwnProperty.call(lista_hora_ret, i)) {
            const hora_retira = lista_hora_ret[i];
            pdf.text(hora_retira,191,y_dados);
            y_dados += 5.5;
            pdf.line(1,y_linha,209,y_linha)
            y_linha+=5.5;
        }
    }
    y_dados = 39;
    y_linha = 40;

    pdf.save('saas.pdf');
}