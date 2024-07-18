
/**
 * CADASTRO DE DECLARACOES DE ENTREGA
 */


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

let nome_digitadores = [
    //ATENDIMENTO
    "LEONARDO VARGAS COELHO",
    "WELERSON RIBEIRO VARGAS",
    "JERUSA AGUIRRE CARVALHO",
    "MARCOS VINICIUS PEDRO HALL",
    "LUCAS ALVES CASTILHOS",
    "ANDRESSA GRAZIELE CORREA RODRIGUES",
    "EDUARDO DIAS MACIEL",
    "LUCIANE MACHADO DE SOUZA",
    "JEFERSON PADILHA",
    //BASE DE OPERACOES
    "LARISSA DO ROUSARIO MOREIRA",
    "FABIANO FAGUNDES COELHO",
    "PATRICIA BECKER DOS SANTOS NORA",
    "VINICIUS BERTELLI MELGAREJO",
    "GELSON BRIZOLLA DE BRIZOLA",
    "GISELE FERRIRA DORNELES",
    // SOLUCOES
    "PABLO CANABARRO DA SILVA",
    "THIAGO MENEZES",
    "JESSIKA BARBOSA BORGES",
    "LUCIANO CHAVES JOAQUIM",
    "MATHEUS OLIVEIRA DA ROSA",
    "MAURICIO REIS VIEGAS",
    // ENCARREGADOS OPERACIONAIS
    "KLAUS BRAUN HELMICH",
    "MARCELO HUBER SILVA",
]

let digitadores = [
    // Atendimento
    {nome: "LEONARDO VARGAS COELHO", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "WELERSON RIBEIRO VARGAS", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "JERUSA AGUIRRE CARVALHO", setor: "ATENDIMENTO", cargo: "ATENDENTE II"},
    {nome: "MARCOS VINICIUS PEDRO HALL", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "LUCAS ALVES CASTILHOS", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "ANDRESSA GRAZIELE CORREA RODRIGUES", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "EDUARDO DIAS MACIEL", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "LUCIANE MACHADO DE SOUZA", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "JEFERSON PADILHA", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    // Base de operacoes
    {nome: "FABIANO FAGUNDES COELHO", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "PATRICIA BECKER DOS SANTOS NORA", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "GELSON BRIZOLLA DE BRIZOLA", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "GISELE FERRIRA DORNELES", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "LARISSA DO ROUSARIO MOREIRA", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "VINICIUS BERTELLI MELGAREJO", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    // Solucoes
    {nome: "PABLO CANABARRO DA SILVA", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES JR"},
    {nome: "THIAGO MENEZES", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES JR"},
    {nome: "JESSIKA BARBOSA BORGES", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES PL"},
    {nome: "LUCIANO CHAVES JOAQUIM", setor: "SOLUCOES", cargo: "AUXILIAR ADMINISTRATIVO"},
    {nome: "MATHEUS OLIVEIRA DA ROSA", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES JR"},
    {nome: "MAURICIO REIS VIEGAS", setor: "SOLUCOES", cargo: "ENCARREGADO SOLUCOES"},
    // Encarregados Operacionais
    {nome: "KLAUS BRAUN HELMICH", setor: "BASE DE OPERACOES", cargo: "ENCARREGADO OPERACIONAL II"},
    {nome: "MARCELO HUBER SILVA", setor: "ATENDIMENTO", cargo: "ENCARREGADO OPERACIONAL II"},
]

for (let i = 0; i < digitadores.length; i++) {
    let bangus = document.createElement("option");
    bangus.value = digitadores[i].nome;
    document.getElementById("digitadores").appendChild(bangus);
}

function validarCNPJ(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function cadastrar_ciente_cad_declara(cnpj,nome_c,nome_log,num_log,bairro_c,cidade_c,uf_c,tipo_pessoa) {
    let cnpj_cliente = cnpj
    let nome_cliente = nome_c
    let nome_logradouro = nome_log
    let numero_logradouro = num_log
    let bairro_cad_cliente = bairro_c
    let cidade_cad_cliente = cidade_c
    let uf_cad_cliente = uf_c

    nome_cliente.toUpperCase();

    let dados_cad_cliente = {
        cnpj_cliente: cnpj_cliente,
        tipo_pessoa: tipo_pessoa,
        nome_cliente: nome_cliente,
        nome_logradouro: nome_logradouro,
        numero_logradouro: numero_logradouro,
        bairro_cad_cliente: bairro_cad_cliente,
        cidade_cad_cliente: cidade_cad_cliente,
        uf_cad_cliente: uf_cad_cliente,
    };
    if(localStorage.getItem(cnpj_cliente) == null){
        if(cnpj_cliente.length == 14 ){
            
            if (!validarCNPJ(cnpj_cliente)) {
                alert("CNPJ Inválido!")
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>CNPJ Inválido, verifique!.</p>";
        } else if (nome_cliente == "") {
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome'.</p>";
        } else if (nome_logradouro == "") {
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Endereço'.</p>";
        } else if (numero_logradouro == "") {
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Número'.</p>";
        } else if (cidade_cad_cliente == "") {
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade'.</p>";
        } else if (uf_cad_cliente == "") {
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'UF'.</p>";
        } else {
            localStorage.setItem(cnpj_cliente,JSON.stringify(dados_cad_cliente));
            console.log(JSON.parse(localStorage.getItem(cnpj_cliente)));
            document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-info p-3 mt-3 rounded-3'>Cadastro para o cliente foi criado com sucesso.</p>";
        }
        }else{
            tipo_pessoa = "Física";
            if (cnpj_cliente == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'CNPJ/CPF'.</p>";
            } if (!TestaCPF(cnpj_cliente)) {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>CPF Inválido, verifique!.</p>";
            } else if (nome_cliente == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome'.</p>";
            } else if (nome_logradouro == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Endereço'.</p>";
            } else if (numero_logradouro == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Número'.</p>";
            } else if (cidade_cad_cliente == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade'.</p>";
            } else if (uf_cad_cliente == "") {
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'UF'.</p>";
            } else {
                localStorage.setItem(cnpj_cliente,JSON.stringify(dados_cad_cliente));
                console.log(JSON.parse(localStorage.getItem(cnpj_cliente)));
                document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
            }
        }
    }
}

// paranaue pra adicionar vários documentos em uma declaracao

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




function cadastrar_dados_com_chave() {

    var ch_nf = lista_dados_doc[0].chave_nf
    var nf = lista_dados_doc[0].num_nf

    var volumes_totais = lista_vol_doc.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    var peso_total = lista_peso_doc.reduce((accumulator, value) => {
        return accumulator + value
    },0)

    let chave_nf = document.getElementById("chave_nf").value;
    let num_nf = document.getElementById("num_nf").value;
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

    let pegar_hora_entrega = document.getElementById("data_hora_entrega").value;
    let hora_entrega = pegar_hora_entrega.slice(11,16);
    let dia_entrega = pegar_hora_entrega.slice(8,10);
    let mes_entrega = pegar_hora_entrega.slice(5,7);
    let ano_entrega = pegar_hora_entrega.slice(0,4);

    let data_entrega = dia_entrega + "/" + mes_entrega + "/" + ano_entrega + " -- " + hora_entrega + ".";

    //dados do remetente
    let cnpj_rem = document.getElementById("cnpj_rem").value;
    let nome_remetente = document.getElementById("nome_remetente").value
    let nome_log = document.getElementById("nome_log_rem").value;
    let num_log = document.getElementById("num_log_rem").value;
    let bairro = document.getElementById("bairro_rem").value;
    let cidade = document.getElementById("cidade_rem").value;
    let unidade_federativa = document.getElementById("uf_rem").value;
    let endereco_entrega = nome_log + " - " + num_log + " - " + bairro + " - " + cidade + " - " + unidade_federativa;

    //dados do destinatario

    let cnpj_dest = document.getElementById("cnpj_dest").value;
    let nome_destinatario = document.getElementById("nome_destinatario").value;
    let nome_log_dest = document.getElementById("nome_log_dest").value;
    let num_log_dest = document.getElementById("num_log_dest").value;
    let bairro_dest = document.getElementById("bairro_dest").value;
    let cidade_dest = document.getElementById("cidade_dest").value;
    let unidade_federativa_dest = document.getElementById("uf_dest").value;
    let endereco_entrega_dest = nome_log_dest + " - " + num_log_dest + " - " + bairro_dest + " - " + cidade_dest + " - " + unidade_federativa_dest;


    let status_entrega = document.getElementById("status").value;
    let motivo_devolucao = document.getElementById("motivo_devolucao").value;
    let observacao = document.getElementById("observacao").value;

    let e_devolucao = false;

    let tipo_pessoa;

    if (document.getElementById("e_devolucao").checked){
        e_devolucao = true;
    }

    let dados = {
        num_nf: num_nf,
        nome_log: nome_log,
        num_log: num_log,
        rota_entrega: rota_entrega,
        bairro: bairro,
        cidade: cidade,
        unidade_federativa: unidade_federativa,
        endereco_entrega: endereco_entrega,
        nome_remetente: nome_remetente,
        cnpj_rem: cnpj_rem,
        chave_nf: chave_nf,
        digitador: digitador,
        num_declara: num_declara,
        e_devolucao: e_devolucao,
        data_cadastro_baixa: data_cadastro_baixa,
        motivo_devolucao: motivo_devolucao,
        volume_declara: volume_declara,
        observacao: observacao,
        documentos: lista_dados_doc,
        peso_total: peso_total,

        nome_log_dest: nome_log_dest,
        num_log_dest: num_log_dest,
        bairro_dest: bairro_dest,
        cidade_dest: cidade_dest,
        unidade_federativa_dest: unidade_federativa_dest,
        endereco_entrega_dest: endereco_entrega_dest,
        nome_destinatario: nome_destinatario,
        cnpj_dest: cnpj_dest,
    };

        
        
    for (let i = 0; i < digitadores.length; i++) { 
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
        } else if (status_entrega == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Ocorrência'.</p>";
            document.getElementById("status").focus();
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
        } else if (nome_digitadores.indexOf(digitador) == -1){
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>Digitador não cadastrado.</p>";
            document.getElementById("nome_digitador").focus();
        }
        else{
            if(status_entrega == "Declaração/NFS-e emitida" && digitador == digitadores[i].nome){
                if(cnpj_rem !== ""){
                    if(cnpj_rem.length == 14){
                        if(!validarCNPJ(cnpj_rem)){
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>CNPJ Remetente Inválido.</p>";
                        } else {

                            tipo_pessoa = "Jurídica";
                            cadastrar_ciente_cad_declara(cnpj_rem,nome_remetente,nome_log,num_log,bairro,cidade,unidade_federativa,tipo_pessoa);
                            localStorage.setItem(ch_nf,JSON.stringify(dados));
                            localStorage.setItem(nf,JSON.stringify(dados));
                            localStorage.setItem(num_declara,JSON.stringify(dados));
                            gerar_pdf();
                            console.log(JSON.parse(localStorage.getItem(ch_nf)));
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                        }
                    } else {
                        if(!TestaCPF(cnpj_rem)){
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>CPF Remetente Inválido.</p>";
                        } else {
                            tipo_pessoa = "Física";
                            cadastrar_ciente_cad_declara(cnpj_rem,nome_remetente,nome_log,num_log,bairro,cidade,unidade_federativa,tipo_pessoa);
                            localStorage.setItem(ch_nf,JSON.stringify(dados));
                            localStorage.setItem(nf,JSON.stringify(dados));
                            localStorage.setItem(num_declara,JSON.stringify(dados));
                            gerar_pdf();
                            console.log(JSON.parse(localStorage.getItem(ch_nf)));
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                        }
                    }
                    
                } else if (cnpj_dest !== ""){
                    if(cnpj_dest.length == 14){
                        if(!validarCNPJ(cnpj_dest)){
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>CNPJ Remetente Inválido.</p>";
                        } else {
                            tipo_pessoa = "Jurídica";
                            cadastrar_ciente_cad_declara(cnpj_dest,nome_destinatario,nome_log_dest,num_log_dest,bairro_dest,cidade_dest,unidade_federativa_dest,tipo_pessoa);
                            localStorage.setItem(ch_nf,JSON.stringify(dados));
                            localStorage.setItem(nf,JSON.stringify(dados));
                            localStorage.setItem(num_declara,JSON.stringify(dados));
                            gerar_pdf();
                            console.log(JSON.parse(localStorage.getItem(ch_nf)));
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                        }
                    } else {
                        if(!TestaCPF(cnpj_dest)){
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>CPF Remetente Inválido.</p>";
                        } else {
                            tipo_pessoa = "Física";
                            cadastrar_ciente_cad_declara(cnpj_dest,nome_destinatario,nome_log_dest,num_log_dest,bairro_dest,cidade_dest,unidade_federativa_dest,tipo_pessoa);
                            localStorage.setItem(ch_nf,JSON.stringify(dados));
                            localStorage.setItem(nf,JSON.stringify(dados));
                            localStorage.setItem(num_declara,JSON.stringify(dados));
                            gerar_pdf();
                            console.log(JSON.parse(localStorage.getItem(ch_nf)));
                            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                        }
                    }
                }
                else if(cnpj_rem == "" || cnpj_dest == "") {
                    localStorage.setItem(ch_nf,JSON.stringify(dados));
                    localStorage.setItem(nf,JSON.stringify(dados));
                    localStorage.setItem(num_declara,JSON.stringify(dados));
                    console.log(JSON.parse(localStorage.getItem(ch_nf)));
                    gerar_pdf();
                    document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
                }
            } 
        }
    }
    
}

function copia_dados_dest() {
    let cnpj_rem = document.getElementById("cnpj_rem").value;
    let nome_remetente = document.getElementById("nome_remetente").value
    let nome_log = document.getElementById("nome_log_rem").value;
    let num_log = document.getElementById("num_log_rem").value;
    let bairro = document.getElementById("bairro_rem").value;
    let cidade = document.getElementById("cidade_rem").value;
    let unidade_federativa = document.getElementById("uf_rem").value;

    //dados do destinatario

    document.getElementById("cnpj_dest").value = cnpj_rem;
    document.getElementById("nome_destinatario").value = nome_remetente;
    document.getElementById("nome_log_dest").value = nome_log;
    document.getElementById("num_log_dest").value = num_log;
    document.getElementById("bairro_dest").value = bairro;
    document.getElementById("cidade_dest").value = cidade;
    document.getElementById("uf_dest").value = unidade_federativa;
}



function consultar_dados(){
    let num_declara = document.getElementById("busca_declara").value;
    var dados_salvos_cons_declara = JSON.parse(localStorage.getItem(num_declara));

    document.getElementById('e_devolucao_cad').checked = false
    document.getElementById("ocorrencia_cad").value = "";
    document.getElementById("data_hora_cad_baixa").value = "";
    document.getElementById("data_hora_entrega_cad").value = "";
    document.getElementById("num_declara_cad_declara").value = "";
    document.getElementById("documentos_inseridos_cad_declara").innerHTML = "";
    document.getElementById("observacao_cad").value = "";
    document.getElementById("motivo_devolucao_cad").value = "";

    document.getElementById("cnpj_rem_cad").value = "";
    document.getElementById("nome_remetente_cad").value = "";
    document.getElementById("nome_log_rem_cad").value = "";
    document.getElementById("num_log_rem_cad").value = "";
    document.getElementById("bairro_rem_cad").value = "";
    document.getElementById("cidade_rem_cad").value = "";
    document.getElementById("uf_rem_cad").value = "";

    document.getElementById("cnpj_dest_cad").value = "";
    document.getElementById("nome_destinatario_cad").value = "";
    document.getElementById("nome_log_dest_cad").value = "";
    document.getElementById("num_log_dest_cad").value = "";
    document.getElementById("bairro_dest_cad").value = "";
    document.getElementById("cidade_dest_cad").value = "";
    document.getElementById("uf_dest_cad").value = "";
    
    if (localStorage.getItem(num_declara) !== null) {
        console.log(JSON.parse(localStorage.getItem(num_declara)));
                if (dados_salvos_cons_declara.e_devolucao == true) {
                    document.getElementById("e_devolucao_cad").checked = true;
                    if(typeof dados_salvos_cons_declara.documentos !== 'undefined') document.getElementById('chave_nf_cad').value = dados_salvos_cons_declara.documentos[0].chave_nf;
                    if(typeof dados_salvos_cons_declara.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos_cons_declara.data_cadastro_baixa;
                    if(typeof dados_salvos_cons_declara.num_declara !== "undefined") document.getElementById("num_declara_cad_declara").value = dados_salvos_cons_declara.num_declara;
                    //if(typeof dados_salvos_cons_declara.num_nf !== "undefined") document.getElementById("num_nf_cad").value = dados_salvos_cons_declara.num_nf;
                    if(typeof dados_salvos_cons_declara.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos_cons_declara.rota_entrega;
                    //if(typeof dados_salvos_cons_declara.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos_cons_declara.volume_declara;
                    if(typeof dados_salvos_cons_declara.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos_cons_declara.observacao;
                    if(typeof dados_salvos_cons_declara.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos_cons_declara.motivo_devolucao;
                    if(typeof dados_salvos_cons_declara.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos_cons_declara.digitador;
                    if(typeof dados_salvos_cons_declara.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos_cons_declara.cnpj_rem;
                    if(typeof dados_salvos_cons_declara.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos_cons_declara.nome_remetente;
                    if(typeof dados_salvos_cons_declara.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos_cons_declara.nome_log;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos_cons_declara.num_log;
                    if(typeof dados_salvos_cons_declara.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos_cons_declara.bairro;
                    if(typeof dados_salvos_cons_declara.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos_cons_declara.cidade;
                    if(typeof dados_salvos_cons_declara.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos_cons_declara.unidade_federativa;

                    if(typeof dados_salvos_cons_declara.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos_cons_declara.cnpj_dest;
                    if(typeof dados_salvos_cons_declara.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos_cons_declara.nome_destinatario;
                    if(typeof dados_salvos_cons_declara.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos_cons_declara.nome_log_dest;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos_cons_declara.num_log_dest;
                    if(typeof dados_salvos_cons_declara.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos_cons_declara.bairro_dest;
                    if(typeof dados_salvos_cons_declara.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos_cons_declara.cidade_dest;
                    if(typeof dados_salvos_cons_declara.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos_cons_declara.unidade_federativa_dest;

                    if (typeof dados_salvos_cons_declara.documentos !== 'undefined') {
                        for (const i in dados_salvos_cons_declara.documentos) {
                            if (Object.hasOwnProperty.call(dados_salvos_cons_declara.documentos, i)) {
                                const emelento = dados_salvos_cons_declara.documentos[i];
                                document.getElementById('documentos_inseridos_cad_declara').innerHTML += "<th scope='row'>#</th><td>"+emelento.chave_nf+"</td><td>"+emelento.num_nf+"</td><td>"+emelento.vol_nf+"</td><td>"+emelento.peso_nf+"</td>";
                            }
                        }
                    }
                }else{
                    document.getElementById("e_devolucao_cad").checked = false;
                    if(typeof dados_salvos_cons_declara.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos_cons_declara.status_entrega;
                    if(typeof dados_salvos_cons_declara.documentos !== 'undefined') document.getElementById('chave_nf_cad').value = dados_salvos_cons_declara.documentos[0].chave_nf;
                    if(typeof dados_salvos_cons_declara.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos_cons_declara.data_cadastro_baixa;
                    if(typeof dados_salvos_cons_declara.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos_cons_declara.digitador;
                    if(typeof dados_salvos_cons_declara.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos_cons_declara.rota_entrega;
                    if(typeof dados_salvos_cons_declara.num_declara !== "undefined") document.getElementById("num_declara_cad_declara").value = dados_salvos_cons_declara.num_declara;
                    //if(typeof dados_salvos_cons_declara.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos_cons_declara.volume_declara;
                    if(typeof dados_salvos_cons_declara.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos_cons_declara.observacao;
                    if(typeof dados_salvos_cons_declara.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos_cons_declara.motivo_devolucao;

                    if(typeof dados_salvos_cons_declara.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos_cons_declara.cnpj_rem;
                    if(typeof dados_salvos_cons_declara.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos_cons_declara.nome_remetente;
                    if(typeof dados_salvos_cons_declara.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos_cons_declara.nome_log;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos_cons_declara.num_log;
                    if(typeof dados_salvos_cons_declara.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos_cons_declara.bairro;
                    if(typeof dados_salvos_cons_declara.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos_cons_declara.cidade;
                    if(typeof dados_salvos_cons_declara.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos_cons_declara.unidade_federativa;

                    if(typeof dados_salvos_cons_declara.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos_cons_declara.cnpj_dest;
                    if(typeof dados_salvos_cons_declara.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos_cons_declara.nome_destinatario;
                    if(typeof dados_salvos_cons_declara.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos_cons_declara.nome_log_dest;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos_cons_declara.num_log_dest;
                    if(typeof dados_salvos_cons_declara.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos_cons_declara.bairro_dest;
                    if(typeof dados_salvos_cons_declara.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos_cons_declara.cidade_dest;
                    if(typeof dados_salvos_cons_declara.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos_cons_declara.unidade_federativa_dest;

                    if (typeof dados_salvos_cons_declara.documentos !== 'undefined') {
                        
                        for (let i = 0; i < dados_salvos_cons_declara.documentos.length; i++) {
                            const element = dados_salvos_cons_declara.documentos[i];
                            
                            document.getElementById('documentos_inseridos_cad_declara').innerHTML += "<th scope='row'>#</th><td>"+element.chave_nf+"</td><td>"+element.num_nf+"</td><td>"+element.vol_nf+"</td><td>"+element.peso_nf+"</td>";
                        }
                    }
                }
            }
            
            
            else{
                console.log(JSON.parse(localStorage.getItem(num_declara)));
                console.log('chapuleuski')
                if(dados_salvos_cons_declara.e_devolucao == true){
                    if(typeof dados_salvos_cons_declara.documentos !== 'undefined') document.getElementById('chave_nf_cad').value = dados_salvos_cons_declara.documentos[0].chave_nf;
                    document.getElementById("e_devolucao_cad").checked = true;
                    if(typeof dados_salvos_cons_declara.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos_cons_declara.status_entrega;
                    if(typeof dados_salvos_cons_declara.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos_cons_declara.data_cadastro_baixa;
                    if(typeof dados_salvos_cons_declara.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos_cons_declara.data_entrega;
                    if(typeof dados_salvos_cons_declara.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos_cons_declara.rota_entrega;
                    if(typeof dados_salvos_cons_declara.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos_cons_declara.digitador;
                    if(typeof dados_salvos_cons_declara.num_declara !== "undefined") document.getElementById("num_declara_cad_declara").value = dados_salvos_cons_declara.num_declara;
                    if(typeof dados_salvos_cons_declara.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos_cons_declara.volume_declara;
                    if(typeof dados_salvos_cons_declara.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos_cons_declara.observacao;
                    if(typeof dados_salvos_cons_declara.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos_cons_declara.motivo_devolucao;
                    
                    if(typeof dados_salvos_cons_declara.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos_cons_declara.cnpj_rem;
                    if(typeof dados_salvos_cons_declara.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos_cons_declara.nome_remetente;
                    if(typeof dados_salvos_cons_declara.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos_cons_declara.nome_log;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos_cons_declara.num_log;
                    if(typeof dados_salvos_cons_declara.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos_cons_declara.bairro;
                    if(typeof dados_salvos_cons_declara.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos_cons_declara.cidade;
                    if(typeof dados_salvos_cons_declara.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos_cons_declara.unidade_federativa;
                    
                    if(typeof dados_salvos_cons_declara.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos_cons_declara.cnpj_dest;
                    if(typeof dados_salvos_cons_declara.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos_cons_declara.nome_destinatario;
                    if(typeof dados_salvos_cons_declara.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos_cons_declara.nome_log_dest;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos_cons_declara.num_log_dest;
                    if(typeof dados_salvos_cons_declara.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos_cons_declara.bairro_dest;
                    if(typeof dados_salvos_cons_declara.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos_cons_declara.cidade_dest;
                    if(typeof dados_salvos_cons_declara.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos_cons_declara.unidade_federativa_dest;
                    
                    if (typeof dados_salvos_cons_declara.documentos !== 'undefined') {
                        
                        for (let i = 0; i < dados_salvos_cons_declara.documentos.length; i++) {
                            const element = dados_salvos_cons_declara.documentos[i];
                            
                            document.getElementById('documentos_inseridos_cad_declara').innerHTML += "<th scope='row'>#</th><td>"+element.chave_nf+"</td><td>"+element.num_nf+"</td><td>"+element.vol_nf+"</td><td>"+element.peso_nf+"</td>";
                        }
                    }
                    
                }else{
                    if(typeof dados_salvos_cons_declara.documentos !== 'undefined') document.getElementById('chave_nf_cad').value = dados_salvos_cons_declara.documentos[0].chave_nf;
                    document.getElementById("e_devolucao_cad").checked = false;
                    if(typeof dados_salvos_cons_declara.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos_cons_declara.status_entrega;
                    if(typeof dados_salvos_cons_declara.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos_cons_declara.data_cadastro_baixa;
                    if(typeof dados_salvos_cons_declara.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos_cons_declara.data_entrega;
                    if(typeof dados_salvos_cons_declara.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos_cons_declara.digitador;
                    if(typeof dados_salvos_cons_declara.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos_cons_declara.rota_entrega;
                    if(typeof dados_salvos_cons_declara.num_declara !== "undefined") document.getElementById("num_declara_cad_declara").value = dados_salvos_cons_declara.num_declara;
                    if(typeof dados_salvos_cons_declara.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos_cons_declara.volume_declara;
                    if(typeof dados_salvos_cons_declara.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos_cons_declara.observacao;
                    if(typeof dados_salvos_cons_declara.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos_cons_declara.motivo_devolucao;
                    
                    if(typeof dados_salvos_cons_declara.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos_cons_declara.cnpj_rem;
                    if(typeof dados_salvos_cons_declara.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos_cons_declara.nome_remetente;
                    if(typeof dados_salvos_cons_declara.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos_cons_declara.nome_log;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos_cons_declara.num_log;
                    if(typeof dados_salvos_cons_declara.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos_cons_declara.bairro;
                    if(typeof dados_salvos_cons_declara.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos_cons_declara.cidade;
                    if(typeof dados_salvos_cons_declara.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos_cons_declara.unidade_federativa;
                    
                    if(typeof dados_salvos_cons_declara.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos_cons_declara.cnpj_dest;
                    if(typeof dados_salvos_cons_declara.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos_cons_declara.nome_destinatario;
                    if(typeof dados_salvos_cons_declara.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos_cons_declara.nome_log_dest;
                    if(typeof dados_salvos_cons_declara.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos_cons_declara.num_log_dest;
                    if(typeof dados_salvos_cons_declara.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos_cons_declara.bairro_dest;
                    if(typeof dados_salvos_cons_declara.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos_cons_declara.cidade_dest;
                    if(typeof dados_salvos_cons_declara.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos_cons_declara.unidade_federativa_dest;
                    
                    if (typeof dados_salvos_cons_declara.documentos !== 'undefined') {
                        
                        for (let i = 0; i < dados_salvos_cons_declara.documentos.length; i++) {
                            const element = dados_salvos_cons_declara.documentos[i];
                            
                            document.getElementById('documentos_inseridos_cad_declara').innerHTML += "<th scope='row'>#</th><td>"+element.chave_nf+"</td><td>"+element.num_nf+"</td><td>"+element.vol_nf+"</td><td>"+element.peso_nf+"</td>";
                        }
                    }
                }
            }
            
}

/**
 * ---------------------------
 * CANCELAMENTO DE DECLARACAO
 * ---------------------------
 */

function consultar_dados_canc(){
    let num_declara = document.getElementById("busca_declara_canc").value;
    let dados_salvos = JSON.parse(localStorage.getItem(num_declara));
    
    if (localStorage.getItem(num_declara) !== null) {
        console.log(JSON.parse(localStorage.getItem(num_declara)));
                if (dados_salvos.e_devolucao == true) {
                    document.getElementById("e_devolucao_canc").checked = true;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_canc").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_canc_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_canc").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_canc").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_canc").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_canc").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_canc").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_canc").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_canc").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_canc").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_canc").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_canc").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_canc").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_canc").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_canc").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_canc").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_canc").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_canc").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_canc").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_canc").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_canc").value = dados_salvos.unidade_federativa_dest;
                }else{
                    document.getElementById("e_devolucao_canc").checked = false;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_canc").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_canc_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_canc").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_canc").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_canc").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_canc").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_canc").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_canc").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_canc").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_canc").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_canc").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_canc").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_canc").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_canc").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_canc").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_canc").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_canc").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_canc").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_canc").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_canc").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_canc").value = dados_salvos.unidade_federativa_dest;
                }
            }else{
                if(dados_salvos.e_devolucao == true){
                    document.getElementById("e_devolucao_canc").checked = true;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_canc").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_canc_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_canc").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_canc").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_canc").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_canc").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_canc").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_canc").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_canc").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_canc").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_canc").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_canc").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_canc").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_canc").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_canc").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_canc").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_canc").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_canc").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_canc").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_canc").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_canc").value = dados_salvos.unidade_federativa_dest;
                }else{
                    document.getElementById("e_devolucao_canc").checked = false;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_canc").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_canc_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_canc").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_canc").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_canc").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_canc").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_canc").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_canc").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_canc").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_canc").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_canc").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_canc").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_canc").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_canc").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_canc").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_canc").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_canc").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_canc").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_canc").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_canc").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_canc").value = dados_salvos.unidade_federativa_dest;
                }
            }
}

function cancelar_declaracao() {
    let num_declara_canc = document.getElementById("busca_declara_canc").value;
    let dados_salvos = JSON.parse(localStorage.getItem(num_declara_canc));
    if (typeof dados_salvos.e_devolucao !== "undefined" && typeof dados_salvos.status_entrega !== "undefined" && typeof dados_salvos.nome_log !== "undefined" && typeof dados_salvos.num_log !== "undefined" && typeof dados_salvos.bairro !== "undefined" && typeof dados_salvos.cidade !== "undefined" && typeof dados_salvos.unidade_federativa !== "undefined" && typeof dados_salvos.endereco_entrega !== "undefined" && typeof dados_salvos.nome_remetente !== "undefined" && typeof dados_salvos.cnpj_rem !== "undefined" && typeof dados_salvos.nome_log_dest !== "undefined" && typeof dados_salvos.num_log_dest !== "undefined" && typeof dados_salvos.bairro_dest !== "undefined" && typeof dados_salvos.cidade_dest !== "undefined" && typeof dados_salvos.unidade_federativa_dest !== "undefined" && typeof dados_salvos.endereco_entrega_dest !== "undefined" && typeof dados_salvos.nome_destinatario !== "undefined" && typeof dados_salvos.cnpj_dest !== "undefined" && typeof dados_salvos.data_cadastro_baixa !== "undefined" && typeof dados_salvos.motivo_devolucao !== "undefined" && typeof dados_salvos.data_entrega !== "undefined" && typeof dados_salvos.volume_declara !== "undefined" && typeof dados_salvos.num_declara !== "undefined" && typeof dados_salvos.observacao !== "undefined" && typeof dados_salvos.num_nf !== "undefined") {
        if(num_declara_canc == ""){
            alert("É necessário informar um número de declaração!");
        }else{
            if(confirm("Deseja cancelar a declaração selecionada?")){
                JSON.parse(localStorage.removeItem(num_declara_canc));
            }
        }
    }
    
}


/**
 * -------------------
 * CADASTRO DE CLIENTE
 * -------------------
 */



function cadastrar_ciente() {
    let cnpj_cliente = document.getElementById("cnpj_cliente").value;
    let nome_cliente = document.getElementById("nome_cliente").value;
    let nome_logradouro = document.getElementById("nome_logradouro").value;
    let numero_logradouro = document.getElementById("numero_logradouro").value;
    let bairro_cad_cliente = document.getElementById("bairro_cad_cliente").value;
    let cidade_cad_cliente = document.getElementById("cidade_cad_cliente").value;
    let uf_cad_cliente = document.getElementById("uf_cad_cliente").value;

    nome_cliente.toUpperCase();

    let tipo_pessoa;

    if (document.getElementById("tipo_pessoa_fisica").checked) {
        tipo_pessoa = "Física";
    } else if(document.getElementById("tipo_pessoa_juridica").checked){
        tipo_pessoa = "Jurídica";
    }

    let dados_cad_cliente = {
        cnpj_cliente: cnpj_cliente,
        tipo_pessoa: tipo_pessoa,
        nome_cliente: nome_cliente,
        nome_logradouro: nome_logradouro,
        numero_logradouro: numero_logradouro,
        bairro_cad_cliente: bairro_cad_cliente,
        cidade_cad_cliente: cidade_cad_cliente,
        uf_cad_cliente: uf_cad_cliente,
    };
    if(cnpj_cliente.length == 14){
        if (cnpj_cliente == "") {
            alert("É necessário preencher o campo 'CNPJ/CPF'");
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'CNPJ/CPF'.</p>";
        } if (!validarCNPJ(cnpj_cliente)) {
            alert("CNPJ Inválido!")
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>CNPJ Inválido, verifique!.</p>";
        } else if (nome_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome'.</p>";
        } else if (nome_logradouro == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Endereço'.</p>";
        } else if (numero_logradouro == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Número'.</p>";
        } else if (bairro_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Bairro'.</p>";
        } else if (cidade_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade'.</p>";
        } else if (uf_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'UF'.</p>";
        } else {
            localStorage.setItem(cnpj_cliente,JSON.stringify(dados_cad_cliente));
            console.log(JSON.parse(localStorage.getItem(cnpj_cliente)));
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
        }
    }else{
        if (cnpj_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'CNPJ/CPF'.</p>";
        } if (!TestaCPF(cnpj_cliente)) {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>CPF Inválido, verifique!.</p>";
        } else if (nome_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Nome'.</p>";
        } else if (nome_logradouro == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Endereço'.</p>";
        } else if (numero_logradouro == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Número'.</p>";
        } else if (bairro_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Bairro'.</p>";
        } else if (cidade_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>É necessário preencher o campo 'Cidade'.</p>";
        } else if (uf_cad_cliente == "") {
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'UF'.</p>";
        } else {
            localStorage.setItem(cnpj_cliente,JSON.stringify(dados_cad_cliente));
            console.log(JSON.parse(localStorage.getItem(cnpj_cliente)));
            document.getElementById("resultado_cad").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
        }
    }
}

function buscar_cadastro() {
    let num_cnpj_cliente = document.getElementById("cnpj_cad").value;
    let cadastros_salvos = JSON.parse(localStorage.getItem(num_cnpj_cliente));

    if (localStorage.getItem(num_cnpj_cliente)) {

        if (typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_cliente_cad").value = cadastros_salvos.nome_cliente;
        if(typeof cadastros_salvos.nome_logradouro !== 'undefined')document.getElementById("nome_logradouro_cad").value = cadastros_salvos.nome_logradouro;
        if(typeof cadastros_salvos.numero_logradouro !== 'undefined' )document.getElementById("numero_logradouro_cad").value = cadastros_salvos.numero_logradouro;
        if(typeof cadastros_salvos.bairro_cad_cliente !== 'undefined')document.getElementById("bairro_cad").value = cadastros_salvos.bairro_cad_cliente;
        if(typeof cadastros_salvos.cidade_cad_cliente !== 'undefined')document.getElementById("cidade_cad").value = cadastros_salvos.cidade_cad_cliente;
        if(typeof cadastros_salvos.uf_cad_cliente !== "undefined")document.getElementById("uf_cad").value = cadastros_salvos.uf_cad_cliente;
        if(typeof cadastros_salvos.tipo_pessoa !== "undefined")document.getElementById("tipo_pessoa").value = cadastros_salvos.tipo_pessoa;

        console.log(cadastros_salvos.cnpj_cliente);
    }
}


function alterar_declaracao() {
    let num_delara_alt = document.getElementById("num_declara_cad");
    let dados_salvos = JSON.parse(localStorage.getItem(num_delara_alt));
    
    if (localStorage.getItem(num_delara_alt) !== null) {
        if (typeof dados_salvos.e_devolucao !== "undefined" && typeof dados_salvos.status_entrega !== "undefined" && typeof dados_salvos.nome_log !== "undefined" && typeof dados_salvos.num_log !== "undefined" && typeof dados_salvos.bairro !== "undefined" && typeof dados_salvos.cidade !== "undefined" && typeof dados_salvos.unidade_federativa !== "undefined" && typeof dados_salvos.endereco_entrega !== "undefined" && typeof dados_salvos.nome_remetente !== "undefined" && typeof dados_salvos.cnpj_rem !== "undefined" && typeof dados_salvos.nome_log_dest !== "undefined" && typeof dados_salvos.num_log_dest !== "undefined" && typeof dados_salvos.bairro_dest !== "undefined" && typeof dados_salvos.cidade_dest !== "undefined" && typeof dados_salvos.unidade_federativa_dest !== "undefined" && typeof dados_salvos.endereco_entrega_dest !== "undefined" && typeof dados_salvos.nome_destinatario !== "undefined" && typeof dados_salvos.cnpj_dest !== "undefined" && typeof dados_salvos.motivo_devolucao !== "undefined" && typeof dados_salvos.volume_declara !== "undefined" && typeof dados_salvos.num_declara !== "undefined" && typeof dados_salvos.observacao !== "undefined"){
            window.location.replace('index.html');
            document.getElementById("volume_declara").value = dados_salvos.volume_declara;
            document.getElementById("num_declara").value = dados_salvos.num_declara;
            document.getElementById("cnpj_rem").value = dados_salvos.cnpj_rem;
            document.getElementById("nome_remetente").value = dados_salvos.nome_remetente;
            document.getElementById("nome_log_rem").value = dados_salvos.nome_log;
            document.getElementById("num_log_rem").value = dados_salvos.num_log;
            document.getElementById("bairro_rem").value = dados_salvos.bairro;
            document.getElementById("cidade_rem").value = dados_salvos.cidade;
            document.getElementById("uf_rem").value = dados_salvos.unidade_federativa;
            
            document.getElementById("cnpj_dest").value = dados_salvos.cnpj_dest;
            document.getElementById("nome_destinatario").value = dados_salvos.nome_destinatario;
            document.getElementById("nome_log_dest").value = dados_salvos.nome_log_dest;
            document.getElementById("num_log_dest").value = dados_salvos.num_log_dest;
            document.getElementById("bairro_dest").value = dados_salvos.bairro_dest;
            document.getElementById("cidade_dest").value = dados_salvos.cidade_dest;
            document.getElementById("uf_dest").value = dados_salvos.unidade_federativa_dest;
            document.getElementById("motivo_devolucao").value = dados_salvos.motivo_devolucao;
            document.getElementById("observacao").value = dados_salvos.observacao;
            
            if (dados_salvos.e_devolucao == true) {
                document.getElementById("e_devolucao").checked = true;
            } else {
                document.getElementById("e_devolucao").checked = false;
            }
        }
    } else {
        console.log("pimba na caçimba");
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



function reimprmir_pdf() {
    let ch_ac = document.getElementById("busca_declara").value;
    let dados_salvos = JSON.parse(localStorage.getItem(ch_ac));

    let cnpj_rem = document.getElementById("cnpj_rem_cad").value;
    let nome_remetente = document.getElementById("nome_remetente_cad").value;
    let nome_log = document.getElementById("nome_log_rem_cad").value;
    let num_log = document.getElementById("num_log_rem_cad").value;
    let bairro = document.getElementById("bairro_rem_cad").value;
    let cidade = document.getElementById("cidade_rem_cad").value;
    let unidade_federativa = document.getElementById("uf_rem_cad").value;
    let endereco_entrega = nome_log + " - " + num_log + " - " + bairro + " - " + cidade + " - " + unidade_federativa;

    //dados dest
    let cnpj_dest = document.getElementById("cnpj_dest_cad").value;
    let nome_destinatario = document.getElementById("nome_destinatario_cad").value;
    let nome_log_dest = document.getElementById("nome_log_dest_cad").value;
    let num_log_dest = document.getElementById("num_log_dest_cad").value;
    let bairro_dest = document.getElementById("bairro_dest_cad").value;
    let cidade_dest = document.getElementById("cidade_dest_cad").value;
    let unidade_federativa_dest = document.getElementById("uf_dest_cad").value;
    let endereco_entrega_dest = nome_log_dest + " - " + num_log_dest + " - " + bairro_dest + " - " + cidade_dest + " - " + unidade_federativa_dest;

    //dados basicos da nf

    let num_nf = ''

    let chave_nf = document.getElementById("chave_nf_cad").value;
    let num_declara = document.getElementById("num_declara_cad_declara").value;
    if (typeof dados_salvos.documentos[0].num_nf !== 'undefined') {        
        let num_nf = dados_salvos.documentos[0].num_nf;
    } else {
        let num_nf = dados_salvos.num_nf;
    }
    let volume_declara = dados_salvos.volume_declara;
    let peso_declara = dados_salvos.peso_total;

    //let num_nf = document.getElementById("num_nf_cad").value
    //let volume_declara = document.getElementById("volume_declara_cad").value;
    let pegar_hora = document.getElementById("data_hora_cad_baixa").value;
    let hora_cadastro_baixa = pegar_hora.slice(11,16);
    let dia_cadastro_baixa = pegar_hora.slice(8,10);
    let mes_cadastro_baixa = pegar_hora.slice(5,7);
    let ano_cadastro_baixa = pegar_hora.slice(0,4);

    let motivo_devolucao = document.getElementById("motivo_devolucao_cad").value;
    let observacao = document.getElementById("observacao_cad").value;
    let digitador = document.getElementById("nome_digitador_cad").value;
    let rota_entrega = document.getElementById("rota_entrega_cad").value;

    let e_devolucao = false;

    if (document.getElementById("e_devolucao_cad").checked){
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
    pdf.text("Chave de Acesso: "+ chave_nf, 105, 41, "center");
    
    pdf.setFont("arial", "normal");
    pdf.setFontSize(10);

    pdf.text(pegar_hora, 160, 12);
    pdf.text("N° Declaração: "+num_declara, 160, 16);
    pdf.text("Rota de Entrega: "+rota_entrega,160,20)
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

    pdf.line(105,102,105,93);
    pdf.setFontSize(11);
    pdf.text("Volumes: "+ volume_declara, 52.5, 99, "center");

    //borda campo nota fiscal
    pdf.line(105,102,209,102);
    pdf.text("Nota fiscal: "+num_nf, 156.5, 99, "center");

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
    pdf.text("Documentos Anexados",104,126,"center",);

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

    pdf.setFontSize(10)
    pdf.setFont('Times New Roman','normal')
    pdf.text('Chave', 5, 135)
    pdf.text('Nota Fiscal', 100, 135)

    

    var x_chave_cad = 5
    var y_chave_cad = 140

    var x_num_nf_cad = 100
    var y_num_nf_cad = 140

    

    for (const i in dados_salvos.documentos) {
        if (Object.hasOwnProperty.call(dados_salvos.documentos, i)) {
            const element = dados_salvos.documentos[i];
            pdf.setFontSize(10)
            pdf.setFont('Times New Roman','normal')
            pdf.text(element.chave_nf,x_chave_cad,y_chave_cad)
            pdf.text(element.num_nf,x_num_nf_cad,y_num_nf_cad)

            

        }
        y_chave_cad += 6
        y_num_nf_cad += 6
    }

    pdf.line(1,230,209,230)
    pdf.line(1,260,209,260)

    pdf.setFontSize(8)
    pdf.text('Chave',2,241)

    pdf.text('Nota Fiscal', 100, 241)

    var x_chave_comp_r = 2
    var y_chave_comp_r = 245

    var x_num_nf_comp_r = 100
    var y_num_nf_comp_r = 245

    for (const i in dados_salvos.documentos) {
        if (Object.hasOwnProperty.call(dados_salvos.documentos, i)) {
            const element = dados_salvos.documentos[i];
            pdf.setFontSize(10)
            pdf.setFont('Times New Roman','normal')
            pdf.text(element.chave_nf,x_chave_comp_r,y_chave_comp_r)
            pdf.text(element.num_nf,x_num_nf_comp_r,y_num_nf_comp_r)
        }
        y_chave_comp_r += 4
        y_num_nf_comp_r += 4
    }

    x_chave_comp_r = 2
    y_chave_comp_r = 241

    x_num_nf_comp_r = 100
    y_num_nf_comp_r = 241

    pdf.setFontSize(8)

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

    pdf.line(1,238,209,238)
    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text('Chave', 133, 232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(dados_salvos.documentos[0].chave_nf, 133, 236)

    pdf.line(190,238,190,230)

    pdf.setFontSize(5)
    pdf.setFont('arial','normal')
    pdf.text('NF', 191, 232)
    pdf.setFontSize(7)
    pdf.setFont('arial','bold')
    pdf.text(dados_salvos.documentos[0].num_nf, 191, 236)

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
    pdf.text(volume_declara.toString(), 133, 258)
    pdf.setFontSize(7)
    pdf.setFont('arial','normal')
    pdf.text('Peso',171,252)
    pdf.setFontSize(16)
    pdf.setFont('arial','bold')
    pdf.text(peso_declara.toString() +'Kg', 171, 258)
    

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


    pdf.save(nome_remetente+" para "+nome_destinatario+" ref NF "+dados_salvos.documentos[0].num_nf+" - Declaracao Num "+num_declara+".pdf");
}