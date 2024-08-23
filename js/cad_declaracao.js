let db_digitadores = new Localbase('db_digitadores')
function cadastrar_digitador() {
    let nome_digitador = document.getElementById('nome_completo_dig').value;
    let setor_digitador = document.getElementById('setor_dig').value;
    let funcao_digitador = document.getElementById('funcao_dig').value;

    if (nome_digitador == '' || setor_digitador == '' || funcao_digitador == '') {
        alert('Verifique se os campos estão preenchidos e tente novamente')
    } else {
        db_digitadores.collection('digitadores').add({
            id: nome_digitador,
            nome_digitador: nome_digitador,
            setor_digitador: setor_digitador,
            funcao_digitador: funcao_digitador,
        })
        alert('Cadastro realizado com sucesso.')
        db_digitadores.collection('digitadores').get({id: nome_digitador}).then(dig =>{
            console.log(dig)
        })
    }
}

lista_dados_doc = []
lista_vol_doc = []
lista_peso_doc = []

function insere_doc() {
    var chave_nf = document.getElementById('chave_nf').value
    var num_nf = document.getElementById('num_nf').value
    var vol_nf = parseInt(document.getElementById('volume_declara').value)
    var peso_nf = parseFloat(document.getElementById('peso_declara').value)
    
    if(chave_nf == ''){
        alert('Chave de Acesso não informada')
    } else if (num_nf == '') {
        alert('Número de Nota Fiscal não encontrado')
    } else if (vol_nf == '') {
        alert('Volumes não informados')
    } else if (peso_nf == ''){
        alert('Peso nao informado')
    } else {
        dados_doc = {
            chave_nf: chave_nf,
            num_nf: num_nf,
            vol_nf: vol_nf,
            peso_nf: peso_nf
        }
        
        lista_dados_doc.push(dados_doc)
        lista_vol_doc.push(dados_doc.vol_nf)
        lista_peso_doc.push(dados_doc.peso_nf)
        
        document.getElementById('chave_nf').value = ''
        document.getElementById('num_nf').value = ''
        document.getElementById('volume_declara').value = ''
        document.getElementById('peso_declara').value = ''


        

        document.getElementById('documentos_inseridos').innerHTML += "<th scope='row'>#</th><td>"+dados_doc.chave_nf+"</td><td>"+dados_doc.num_nf+"</td><td>"+dados_doc.vol_nf+"</td><td>"+dados_doc.peso_nf.toString()+"</td>";
    }
}

function preenchimento_automatico_rem() {
    let numero_cnpj_rem = document.getElementById("cnpj_rem").value;
    let cadastros_salvos = JSON.parse(localStorage.getItem(numero_cnpj_rem));
    document.getElementById("nome_remetente").value = "";
    document.getElementById("nome_log_rem").value = "";
    document.getElementById("num_log_rem").value = "";
    document.getElementById("bairro_rem").value = "";
    document.getElementById("cidade_rem").value = "";
    document.getElementById("uf_rem").value = "";

    if (localStorage.getItem(numero_cnpj_rem) !== null) {
        if(typeof cadastros_salvos.cnpj_cliente !== 'undefined')document.getElementById("nome_remetente").value = cadastros_salvos.nome_cliente;
        if(typeof cadastros_salvos.nome_logradouro !== 'undefined')document.getElementById("nome_log_rem").value = cadastros_salvos.nome_logradouro;
        if(typeof cadastros_salvos.numero_logradouro !== 'undefined')document.getElementById("num_log_rem").value = cadastros_salvos.numero_logradouro;
        if(typeof cadastros_salvos.bairro_cad_cliente !== 'undefined')document.getElementById("bairro_rem").value = cadastros_salvos.bairro_cad_cliente;
        if(typeof cadastros_salvos.cidade_cad_cliente !== 'undefined')document.getElementById("cidade_rem").value = cadastros_salvos.cidade_cad_cliente;
        if(typeof cadastros_salvos.uf_cad_cliente !== "undefined")document.getElementById("uf_rem").value = cadastros_salvos.uf_cad_cliente;
        
    }
}

function preenchimento_automatico_dest() {
    let numero_cnpj_dest = document.getElementById("cnpj_dest").value;
    let cadastros_salvos = JSON.parse(localStorage.getItem(numero_cnpj_dest));

    document.getElementById("nome_destinatario").value = "";
    document.getElementById("nome_log_dest").value = "";
    document.getElementById("num_log_dest").value = "";
    document.getElementById("bairro_dest").value = "";
    document.getElementById("cidade_dest").value = "";
    document.getElementById("uf_dest").value = "";

    if (localStorage.getItem(numero_cnpj_dest) !== null) {
        if(typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_destinatario").value = cadastros_salvos.nome_cliente;
        if(typeof cadastros_salvos.nome_logradouro !== 'undefined')document.getElementById("nome_log_dest").value = cadastros_salvos.nome_logradouro;
        if(typeof cadastros_salvos.numero_logradouro !== 'undefined')document.getElementById("num_log_dest").value = cadastros_salvos.numero_logradouro;
        if(typeof cadastros_salvos.bairro_cad_cliente !== 'undefined')document.getElementById("bairro_dest").value = cadastros_salvos.bairro_cad_cliente;
        if(typeof cadastros_salvos.cidade_cad_cliente !== 'undefined')document.getElementById("cidade_dest").value = cadastros_salvos.cidade_cad_cliente;
        if(typeof cadastros_salvos.uf_cad_cliente !== "undefined")document.getElementById("uf_dest").value = cadastros_salvos.uf_cad_cliente;
        
    }
}

let db_declaracoes = new Localbase('db_declaracoes');

function cadastrar_declaracao_bd() {
    let chave_declaracao = lista_dados_doc[0].chave_nf;
    let nota_fiscal = lista_dados_doc[0].num_nf;

    var volumes_totais = lista_vol_doc.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    var peso_total = lista_peso_doc.reduce((accumulator, value) => {
        return accumulator + value
    },0)

    let verifica_digitador = db_digitadores.collection('digitadores').get({id: digitador});

    let volume_declara = volumes_totais;

    let num_declara = document.getElementById("num_declara").value;
    let rota_entrega = document.getElementById("rota_entrega").value;
    let pegar_hora = document.getElementById("hora_cadastro_baixa").value;
    let hora_cadastro_baixa = pegar_hora.slice(11,16);
    let dia_cadastro_baixa = pegar_hora.slice(8,10);
    let mes_cadastro_baixa = pegar_hora.slice(5,7);
    let ano_cadastro_baixa = pegar_hora.slice(0,4);
    let digitador = document.getElementById("nome_digitador").value;

    let data_cadastro_baixa = dia_cadastro_baixa + "/" + mes_cadastro_baixa + "/" + ano_cadastro_baixa + " -- " + hora_cadastro_baixa + ".";

    let cnpj_rem = document.getElementById("cnpj_rem").value;
    let nome_remetente = document.getElementById("nome_remetente").value
    let nome_log = document.getElementById("nome_log_rem").value;
    let num_log = document.getElementById("num_log_rem").value;
    let bairro = document.getElementById("bairro_rem").value;
    let cidade = document.getElementById("cidade_rem").value;
    let unidade_federativa = document.getElementById("uf_rem").value;
    let endereco_entrega = nome_log + " - " + num_log + " - " + bairro + " - " + cidade + " - " + unidade_federativa;

    let cnpj_dest = document.getElementById("cnpj_dest").value;
    let nome_destinatario = document.getElementById("nome_destinatario").value;
    let nome_log_dest = document.getElementById("nome_log_dest").value;
    let num_log_dest = document.getElementById("num_log_dest").value;
    let bairro_dest = document.getElementById("bairro_dest").value;
    let cidade_dest = document.getElementById("cidade_dest").value;
    let unidade_federativa_dest = document.getElementById("uf_dest").value;
    let endereco_entrega_dest = nome_log_dest + " - " + num_log_dest + " - " + bairro_dest + " - " + cidade_dest + " - " + unidade_federativa_dest;

    let motivo_devolucao = document.getElementById("motivo_devolucao").value;
    let observacao = document.getElementById("observacao").value;

    let e_devolucao = false;

    if (document.getElementById("e_devolucao").checked){
        e_devolucao = true;
    }
        if (num_declara == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nº declaração/Nota fiscal'.</p>";
            document.getElementById("num_declara").focus();
        }else if (digitador == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário informar um digitador.</p>";
            document.getElementById("nome_digitador").focus();
        } else if (lista_dados_doc.length == 0) {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário informar uma chave de acesso.</p>";
            document.getElementById("chave_nf").focus();
        }
        /*
        else if (volume_declara == ""){
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Volume'.</p>";
            document.getElementById("volume_declara").focus();
            }
            */
           /*
    else if (cnpj_rem == "") {
        document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'CNPJ Remetente'.</p>";
        } 
        */
       else if (nome_log == "") {
           document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome do Logradouro Remetente'.</p>";
           document.getElementById("nome_log_rem").focus();
        } else if (num_log == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Número do Logradouro Remetente'.</p>";document.getElementById("num_log_rem").focus();
        }
        /*
        else if (bairro == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Bairro Remetente'.</p>";
            }
            */
           else if (cidade == "") {
               document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade Remetente'.</p>";
               document.getElementById("cidade_rem").focus();
            } else if (unidade_federativa == "") {
                document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Unidade Federativa Remetente'.</p>";
                document.getElementById("uf_rem").focus();
            } else if (data_cadastro_baixa == "") {
                document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Data Cadastro Baixa'.</p>";
                document.getElementById("data_hora_cad").focus();
            }
            /*
    else if (cnpj_dest == "") {
        document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'CNPJ Destinatario'.</p>";
        }
        */
       else if (nome_log_dest == "") {
           document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome do Logradouro Destinatario'.</p>";
           document.getElementById("nome_log_dest").focus();
        } else if (num_log_dest == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Numero do Logradouro Destinatario'.</p>";
            document.getElementById("num_log_dest").focus();
        }
        /*
        else if (bairro_dest == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Bairro Destinatario'.</p>";
        }
        */
       else if (cidade_dest == "") {
           document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade Destinatario'.</p>";
           document.getElementById("cidade_dest").focus();
        } else if (!pegar_hora){
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Hora cadastro baixa'.</p>";
            document.getElementById("data_hora_cad").focus();
        } else if (document.getElementById("e_devolucao").checked && motivo_devolucao == ""){
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>Devolução marcada mas não foi informado um motivo de devolução, verifique.</p>";
            document.getElementById("motivo_devolucao").focus();
        }  else {
                db_declaracoes.collection('declaracoes').add({
                    id: num_declara,
                    chave_declaracao: chave_declaracao,
                    peso_total: peso_total,
                    volume_declara: volume_declara,
                    numero_declaracao: num_declara,
                    numero_nf: nota_fiscal,
                    rota_entrega: rota_entrega,
                    data_emissao: data_cadastro_baixa,
                    cnpj_rem: cnpj_rem,
                    nome_remetente: nome_remetente,
                    nome_log: nome_log,
                    num_log: num_log,
                    bairro: bairro,
                    cidade: cidade,
                    unidade_federativa: unidade_federativa,
                    endereco_entrega: endereco_entrega,
                    cnpj_dest: cnpj_dest,
                    nome_destinatario: nome_destinatario,
                    nome_log_dest: nome_log_dest,
                    num_log_dest: num_log_dest,
                    bairro_dest: bairro_dest,
                    cidade_dest: cidade_dest,
                    unidade_federativa_dest: unidade_federativa_dest,
                    endereco_entrega_dest: endereco_entrega_dest,
                    observacao: observacao,
                    e_devolucao: e_devolucao,
                })
                document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                gerar_pdf();
            
            
        }
}

var x_chave = 5
var y_chave = 140

var x_num_nf = 100
var y_num_nf = 140

var x_chave_comp = 2
var y_chave_comp = 245

var x_num_nf_comp = 100
var y_num_nf_comp = 245

function gerar_pdf() {
    let cnpj_rem = document.getElementById("cnpj_rem").value;
    let nome_remetente = document.getElementById("nome_remetente").value;
    let nome_log = document.getElementById("nome_log_rem").value;
    let num_log = document.getElementById("num_log_rem").value;
    let bairro = document.getElementById("bairro_rem").value;
    let cidade = document.getElementById("cidade_rem").value;
    let unidade_federativa = document.getElementById("uf_rem").value;
    let endereco_entrega = nome_log + " - " + num_log + " - " + bairro + " - " + cidade + " - " + unidade_federativa;

    //dados dest
    let cnpj_dest = document.getElementById("cnpj_dest").value;
    let nome_destinatario = document.getElementById("nome_destinatario").value;
    let nome_log_dest = document.getElementById("nome_log_dest").value;
    let num_log_dest = document.getElementById("num_log_dest").value;
    let bairro_dest = document.getElementById("bairro_dest").value;
    let cidade_dest = document.getElementById("cidade_dest").value;
    let unidade_federativa_dest = document.getElementById("uf_dest").value;
    let endereco_entrega_dest = nome_log_dest + " - " + num_log_dest + " - " + bairro_dest + " - " + cidade_dest + " - " + unidade_federativa_dest;

    //dados basicos da nf

    let chave_nf = document.getElementById("chave_nf").value;
    let num_declara = document.getElementById("num_declara").value;
    let num_nf = document.getElementById("num_nf").value



    let volume_declara = document.getElementById("volume_declara").value;
    let pegar_hora = document.getElementById("hora_cadastro_baixa").value;
    let hora_cadastro_baixa = pegar_hora.slice(11,16);
    let dia_cadastro_baixa = pegar_hora.slice(8,10);
    let mes_cadastro_baixa = pegar_hora.slice(5,7);
    let ano_cadastro_baixa = pegar_hora.slice(0,4);

    let motivo_devolucao = document.getElementById("motivo_devolucao").value;
    let observacao = document.getElementById("observacao").value;
    let digitador = document.getElementById("nome_digitador").value;
    let rota_entrega = document.getElementById("rota_entrega").value;

    let e_devolucao = false;

    if (document.getElementById("e_devolucao").checked){
        e_devolucao = true;
    }

    let data_cadastro_baixa = dia_cadastro_baixa + "/" + mes_cadastro_baixa + "/" + ano_cadastro_baixa + " -- " + hora_cadastro_baixa;
    
    const {jsPDF} = window.jspdf;
    
    const pdf = new jsPDF();

    let image = new Image();

    image.src = "img/logo_esm.png";

    pdf.addImage(image, "PNG", 1, 2, 40, 25);
    pdf.setFontSize(11);
    pdf.text("Av. Willy Eugênio Fleck, 715, Rubem Berta, Porto Alegre -- CEP: 91150-180",45,7);
    //pdf.text("Porto Alegre, RS ",45,14);
    pdf.text("Fone: 3349-5555",45,14);
    for (let i = 0; i < digitadores.length; i++) {
        if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome){
            pdf.text("E-mail: atendimento.a@expressosaomiguel.com.br", 45, 21);
        }
        if (digitadores[i].setor == "BASE DE OPERACOES" && digitador == digitadores[i].nome) {
            pdf.text("E-mail: devolucoes.a@expressosaomiguel.com.br", 45, 21);
            pdf.text("E-mail: divergencias.a@expressosaomiguel.com.br", 45, 28);
        }
        if (digitadores[i].setor == "SOLUCOES" && digitador == digitadores[i].nome) {
            pdf.text("E-mail: solucoes.a@expressosaomiguel.com.br", 45, 21);
            pdf.text("E-mail: solucoes1.a@expressosaomiguel.com.br", 45, 28);
        }

        
        pdf.setFont("arial","bold");
        pdf.setFontSize(13);
         if (digitadores[i].setor == "BASE DE OPERACOES" && digitador == digitadores[i].nome && e_devolucao){
            pdf.text("Declaração da Base de Operações", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);

            pdf.setFontSize(12)
            pdf.text("Problemas na entrega, favor ligar e falar com o setor de Base de Operações",105,196,'center')

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega,17,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Motivo Devolução", 122, 202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text(motivo_devolucao,122,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Sim",192,206)
        } else if (digitadores[i].setor == "SOLUCOES" && digitador == digitadores[i].nome) {
            pdf.text("Declaração do Setor de Soluções", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);

            pdf.text("Problemas na entrega, favor ligar e falar com o setor de Soluções",105,196,'center')

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega_dest,17,206)


            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Não",192,206)
        }else if ( digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && e_devolucao) {
            pdf.text("Declaração de Devolução", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);

            pdf.text("Problemas na entrega, favor ligar e falar com o setor de Atendimento",105,196,'center')
            
            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega,17,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Motivo Devolução", 122, 202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text(motivo_devolucao,122,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Sim",192,206)
            
        }else if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome){
            pdf.text("Declaração de Entrega", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);

            pdf.text("Problemas na entrega, favor ligar e falar com o setor de Atendimento",105,196,'center')

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega_dest,17,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Não",192,206)
        }else if ( digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && e_devolucao && digitadores[i].nome == "MARCELO HUBER SILVA") {
            pdf.text("Declaração de Devolução", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);

            pdf.text("Problemas na entrega, favor ligar e falar com o setor de Atendimento",105,196,'center')

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega,17,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Motivo Devolução", 122, 202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text(motivo_devolucao,122,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Sim",192,206)
            
        }else if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && digitadores[i].nome == "MARCELO HUBER SILVA"){
            pdf.text("Declaração de Entrega", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Endereço Entrega",17,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(6)
            pdf.text(endereco_entrega_dest,17,206)

            pdf.setFont("arial","normal");
            pdf.setFontSize(5)
            pdf.text("Devolução", 192,202)
            pdf.setFont("arial","bold");
            pdf.setFontSize(11)
            pdf.text("Não",192,206)
        }
        
    }
    pdf.text("Chave de Acesso: "+ lista_dados_doc[0].chave_nf, 105, 41, "center");
    
    pdf.setFont("arial", "normal");
    pdf.setFontSize(10);

    pdf.text(data_cadastro_baixa, 160, 12);
    pdf.text("N° Declaração: "+num_declara, 160, 16);
    pdf.text("Rota de Entrega: "+rota_entrega,160,20);
    pdf.text("Emissor: "+ digitador + ".", 110, 108);

    pdf.line(1, 30, 209, 30); // borda acima do código de barras

    //borda em volta dos dados do remetente/destino
    pdf.line(1, 44, 209, 44);
    pdf.line(1, 59, 209, 59);
    pdf.line(1, 44, 1, 76);
    pdf.line(1, 74, 209, 74);
    pdf.line(209, 44, 209, 76);

    //borda em baixo do local de entrega
    pdf.line(1, 93, 209, 93);
    
    //borda campo volume
    pdf.setFont("arial","normal");
    pdf.line(1,102,105,102);
    pdf.line(105,102,105,111)

    var volumes_totais = lista_vol_doc.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    var peso_total = lista_peso_doc.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    pdf.line(105,102,105,93);
    pdf.line(50, 93, 50, 102)
    pdf.setFontSize(11);
    pdf.text("Volumes: "+ volumes_totais, 25.5, 99, "center");
    pdf.text('Peso: '+ peso_total+'Kg', 76, 99, 'center')

    //borda campo nota fiscal
    pdf.line(105,102,209,102);
    pdf.text("Nota fiscal: "+lista_dados_doc[0].num_nf, 156.5, 99, "center");

    //borda mot dev e obs
    pdf.line(1,111,209,111);
    pdf.line(1,120,209,120);

    pdf.setFontSize(8)
    pdf.text("Observação",8, 115);
    pdf.setFontSize(10);
    pdf.text(observacao, 25, 117);

    //linha de baixo do aviso de conformidade
    pdf.line(1,130,209,130)
    pdf.setFontSize(11)
    pdf.setFont("arial","bold");
    pdf.text("Documentos Anexados",104,126,"center");

    //borda em volta da folha
    pdf.line(1, 1, 209, 1);
    pdf.line(1, 1, 1, 294);
    pdf.line(1, 294, 209, 294);
    pdf.line(209,1,209,294);

    pdf.setFont("arial", "normal");
    pdf.setFontSize(10);
    pdf.text("Remetente: "+nome_remetente + " - CNPJ/CPF: " + cnpj_rem, 10, 50);
    pdf.setFontSize(8);
    pdf.text("Endereço: "+nome_log +", "+ num_log +", "+ bairro +", "+cidade, 10, 55);
    
    pdf.setFontSize(10);
    pdf.text("Destinatário: "+nome_destinatario + " - CNPJ/CPF: " + cnpj_dest, 10, 65);
    pdf.setFontSize(8);
    pdf.text("Endereço: "+nome_log_dest +", "+ num_log_dest +", "+ bairro_dest +", "+cidade_dest, 10, 70);

    //divisória dos documentos pertencentes a declaração
    //pdf.line(105,130,105,230)

    pdf.setFontSize(10)
    pdf.setFont('Times New Roman','normal')
    pdf.text('Chave', 5, 135)
    pdf.text('Nota Fiscal', 100, 135)

    /*
    for (const i in lista_vol_doc) {
        if (Object.hasOwnProperty.call(lista_vol_doc, i)) {
            const element = lista_vol_doc[i];
            volumes_totais = element.reduce((accumulator, value) => {
                return accumulator + value;
            },0)
            console.log(volumes_totais)
        }
    }
    */
    //linha dos dados da declaração
    pdf.line(1,208,209,208)

    pdf.setFontSize(7)
    pdf.setFont('arial','normal')
    pdf.text("Remetente: "+nome_remetente,5, 212)
    pdf.text("Endereço: "+nome_log+ " "+num_log,5,216)
    pdf.text("Bairro: "+bairro,5,220)
    pdf.text("Cidade: "+cidade,5,224)

    //divisória horizontal dos dados do remetente/destinatário
    pdf.line(105,208,105,230)

    pdf.setFontSize(7)
    pdf.setFont('arial','normal')
    pdf.text("Destinatário: "+nome_destinatario,107, 212)
    pdf.text("Endereço: "+nome_log_dest+" "+num_log_dest,107,216)
    pdf.text("Bairro: "+bairro_dest,107,220)
    pdf.text("Cidade: "+cidade_dest,107,224)

    pdf.setLineDash([1,1])
    pdf.line(1,179,209,179)
    //linha acima da assinatura do recebedor
    pdf.setLineDash([0,0])
    pdf.line(1,180,209,180)
    pdf.setFontSize(9)
    pdf.text("Ressalva", 2, 184)


    pdf.line(1,190,209,190) // linha do campo "problemas na entrega"(localizado na verificação de setores)

    pdf.line(1,200,209,200)


    //celula numero declara
    pdf.line(15,208,15,200)
    pdf.setFontSize(5)
    pdf.text("Declaração",2,202)
    pdf.setFontSize(9)
    pdf.setFont('arial','bold')
    pdf.text(num_declara,5,206)

    //linha celula endereço entrega
    pdf.line(120,208,120,200)

    // linha celula é devolucao
    pdf.line(190, 208, 190, 200)

    

    for (const i in lista_dados_doc) {
        if (Object.hasOwnProperty.call(lista_dados_doc, i)) {
            const element = lista_dados_doc[i];
            pdf.setFontSize(10)
            pdf.setFont('Times New Roman','normal')
            pdf.text(element.chave_nf,x_chave,y_chave)
            pdf.text(element.num_nf,x_num_nf,y_num_nf)



            

        }
        y_chave += 6
        y_num_nf += 6
    }

    x_chave = 5
    y_chave = 140

    x_num_nf = 100
    y_num_nf = 140

    //linha acima dos dados do recebedor
    pdf.line(1,230,209,230)
    //linha observação/nf/data emissão/ rota entrega
    pdf.line(1,238,209,238)

    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text("Observação",2,232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(observacao,2,236)

    //linha divisao obs/rota entrega
    pdf.line(120,238,120,230)
    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text('Rota Entrega', 121, 232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(rota_entrega, 121, 236)

    pdf.line(132,238,132,230)

    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text('Chave', 133, 232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(lista_dados_doc[0].chave_nf, 133, 236)

    pdf.line(190,238,190,230)

    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text('NF', 191, 232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(lista_dados_doc[0].num_nf, 191, 236)

    pdf.line(1,260,209,260)

    pdf.setFontSize(8)
    pdf.text('Chave',2,241)

    pdf.text('Nota Fiscal', 100, 241)

    for (const i in lista_dados_doc) {
        if (Object.hasOwnProperty.call(lista_dados_doc, i)) {
            const element = lista_dados_doc[i];
            pdf.setFontSize(8)
            pdf.setFont('Times New Roman','normal')
            pdf.text(element.chave_nf,x_chave_comp,y_chave_comp)
            pdf.text(element.num_nf,x_num_nf_comp,y_num_nf_comp)

        }
        y_chave_comp += 4
        y_num_nf_comp += 4
    }

    x_chave_comp = 2
    y_chave_comp = 245

    x_num_nf_comp = 100
    y_num_nf_comp = 245

    //linha divisória notas comprovante/declaracao de recebimento
    pdf.setFontSize(8)

    pdf.line(132,238,132,260)
    pdf.text("Declaro para os devidos fins, que recebi em perfeito estado as\nmercadorias descritas ao lado transportadas\n pela Empresa Expresso São Miguel S/A.",170,241,'center')
    pdf.line(132,249,209,249)

    //divisoria volume/peso
    pdf.line(170,249,170,260)
    pdf.setFontSize(7)
    pdf.setFont('arial','normal')
    
    pdf.text('Volume', 133, 252)
    pdf.setFontSize(16)
    pdf.setFont('arial','bold')
    pdf.text(volumes_totais.toString(), 133, 258)
    pdf.setFontSize(7)
    pdf.setFont('arial','normal')
    pdf.text('Peso',171,252)
    pdf.setFontSize(16)
    pdf.setFont('arial','bold')
    pdf.text(peso_total.toString()+'Kg', 171, 258)
    

    pdf.setFontSize(13);
    pdf.text("____/____/_______",17, 275);
    pdf.text("______:______", 60, 275);
    pdf.text("_________________________________________", 148, 275, "center")
    pdf.setFont("arial","bold");
    pdf.text("DATA E HORA DO RECEBIMENTO",13, 281);
    pdf.text("ASSINATURA E CARIMBO DO RECEBEDOR", 100, 281);

    pdf.line(1,286,209,286)

    pdf.line(105,294,105,286)

    pdf.setFont("arial","normal")
    pdf.setFontSize(10)
    pdf.text('Data Emissão: '+data_cadastro_baixa, 2, 291)
    pdf.text('Emissor: '+digitador, 106,291)


    pdf.save(nome_remetente+" para "+nome_destinatario+" ref NF "+lista_dados_doc[0].num_nf+" - Declaracao Num "+num_declara+".pdf");
}
