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

    if (typeof cadastros_salvos.cnpj_cliente !== 'undefined' && typeof cadastros_salvos.tipo_pessoa !== 'undefined' && typeof cadastros_salvos.nome_cliente !== 'undefined' && typeof cadastros_salvos.nome_logradouro !== 'undefined' && typeof cadastros_salvos.numero_logradouro !== 'undefined' && typeof cadastros_salvos.bairro_cad_cliente !== 'undefined' && typeof cadastros_salvos.cidade_cad_cliente !== 'undefined' && typeof cadastros_salvos.uf_cad_cliente !== "undefined") {
        document.getElementById("nome_remetente").value = cadastros_salvos.nome_cliente;
        document.getElementById("nome_log_rem").value = cadastros_salvos.nome_logradouro;
        document.getElementById("num_log_rem").value = cadastros_salvos.numero_logradouro;
        document.getElementById("bairro_rem").value = cadastros_salvos.bairro_cad_cliente;
        document.getElementById("cidade_rem").value = cadastros_salvos.cidade_cad_cliente;
        document.getElementById("uf_rem").value = cadastros_salvos.uf_cad_cliente;
        
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

    if (typeof cadastros_salvos.cnpj_cliente !== 'undefined' && typeof cadastros_salvos.tipo_pessoa !== 'undefined' && typeof cadastros_salvos.nome_cliente !== 'undefined' && typeof cadastros_salvos.nome_logradouro !== 'undefined' && typeof cadastros_salvos.numero_logradouro !== 'undefined' && typeof cadastros_salvos.bairro_cad_cliente !== 'undefined' && typeof cadastros_salvos.cidade_cad_cliente !== 'undefined' && typeof cadastros_salvos.uf_cad_cliente !== "undefined") {
        document.getElementById("nome_destinatario").value = cadastros_salvos.nome_cliente;
        document.getElementById("nome_log_dest").value = cadastros_salvos.nome_logradouro;
        document.getElementById("num_log_dest").value = cadastros_salvos.numero_logradouro;
        document.getElementById("bairro_dest").value = cadastros_salvos.bairro_cad_cliente;
        document.getElementById("cidade_dest").value = cadastros_salvos.cidade_cad_cliente;
        document.getElementById("uf_dest").value = cadastros_salvos.uf_cad_cliente;
        
    }
}
/**

function limpa_campos(){
    if (confirm("Deseja limpar todos os campos?")) {
        document.getElementById("num_declara").value = "";
        document.getElementById("cnpj_rem").value = "";
        document.getElementById("nome_remetente").value = "";
        document.getElementById("nome_log").value = "";
        document.getElementById("num_log").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("unidade_federativa").value = "";
        
        document.getElementById("cnpj_dest").value = "";
        document.getElementById("nome_destinatario").value = "";
        document.getElementById("nome_log_dest").value = "";
        document.getElementById("num_log_dest").value = "";
        document.getElementById("bairro_dest").value = "";
        document.getElementById("cidade_dest").value = "";
        document.getElementById("unidade_federativa_dest").value = "";
        document.getElementById("e_devolucao").checked = false;
    }
}

function calc_iss() {
    let valor_servico = document.getElementById("valor_srv_declara").value;
    let porcentagem_iss_poa = 0.05;
    
    let iss_declara = valor_servico * porcentagem_iss_poa;
    
    
    document.getElementById("valor_iss_declara").value = iss_declara.toFixed(2);
    console.log(iss_declara);
}
*/

let nome_digitadores = [
    //ATENDIMENTO
    "LEONARDO VARGAS COELHO",
    "WELERSON RIBEIRO VARGAS",
    "JERUSA AGUIRRE CARVALHO",
    "VINICIUS BERTELLI MELGAREJO",
    "LUCAS ALVES CASTILHOS",
    "ANDRESSA GRAZIELE CORREA RODRIGUES",
    //BASE DE OPERACOES
    "JOSE AUGUSTO SAID BALTAR",
    "FABIANO FAGUNDES COELHO",
    "PATRICIA BECKER DOS SANTOS NORA",
    "GELSON BRIZOLLA DE BRIZOLA",
    "GISELE FERRIRA DORNELES",
    "JOSE AUGUSTO SAID BALTAR",
    // SOLUCOES
    "PABLO CANABARRO DA SILVA",
    "CLODOALDO LACERDA DO COUTO",
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
    {nome: "VINICIUS BERTELLI MELGAREJO", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "LUCAS ALVES CASTILHOS", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},
    {nome: "ANDRESSA GRAZIELE CORREA RODRIGUES", setor: "ATENDIMENTO", cargo: "ATENDENTE I"},

    // Base de operacoes
    {nome: "JOSE AUGUSTO SAID BALTAR", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "FABIANO FAGUNDES COELHO", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "PATRICIA BECKER DOS SANTOS NORA", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "GELSON BRIZOLLA DE BRIZOLA", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "GISELE FERRIRA DORNELES", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    {nome: "JOSE AUGUSTO SAID BALTAR", setor: "BASE DE OPERACOES", cargo: "AUXILIAR OPERACIONAL II"},
    // Solucoes
    {nome: "PABLO CANABARRO DA SILVA", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES JR"},
    {nome: "CLODOALDO LACERDA DO COUTO", setor: "SOLUCOES", cargo: "ANALISTA SOLUCOES JR"},
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



function cadastrar_dados_com_chave() {
    let chave_nf = document.getElementById("chave_nf").value;
    let num_declara = document.getElementById("num_declara").value;
    let num_nf = document.getElementById("num_nf").value;
    let volume_declara = document.getElementById("volume_declara").value;
    let pegar_hora = document.getElementById("hora_cadastro_baixa").value;
    let hora_cadastro_baixa = pegar_hora.slice(11,16);
    let dia_cadastro_baixa = pegar_hora.slice(8,10);
    let mes_cadastro_baixa = pegar_hora.slice(5,7);
    let ano_cadastro_baixa = pegar_hora.slice(0,4);
    let digitador = document.getElementById("nome_digitador").value;
    let rota_entrega = document.getElementById("rota_entrega").value;

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
        status_entrega: status_entrega,
        data_cadastro_baixa: data_cadastro_baixa,
        motivo_devolucao: motivo_devolucao,
        data_entrega: data_entrega,
        volume_declara: volume_declara,
        observacao: observacao,

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
        } else if (chave_nf == "") {
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário informar uma chave de acesso.</p>";
            document.getElementById("chave_nf").focus();
        } else if (volume_declara == ""){
            document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>É necessário preencher o campo 'Volume'.</p>";
            document.getElementById("volume_declara").focus();
        }
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
            if (status_entrega !== "Declaração/NFS-e emitida" && digitador == digitadores[i].nome) {
                localStorage.setItem(chave_nf,JSON.stringify(dados));
                localStorage.setItem(num_nf,JSON.stringify(dados));
                console.log(JSON.parse(localStorage.getItem(chave_nf)));
                document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
            }else if(status_entrega == "Declaração/NFS-e emitida" && digitador == digitadores[i].nome){
                localStorage.setItem(chave_nf,JSON.stringify(dados));
                localStorage.setItem(num_nf,JSON.stringify(dados));
                console.log(JSON.parse(localStorage.getItem(chave_nf)));
                gerar_pdf();
                document.getElementById("resultado_cad_declara").innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
            }
        }
    
}
    
}
/**
 
function cadastrar_dados(){
    let num_declara = document.getElementById("num_declara").value;
    let volume_declara = document.getElementById("volume_declara").value;
    let pegar_hora = document.getElementById("hora_cadastro_baixa").value;
    let hora_cadastro_baixa = pegar_hora.slice(11,16);
    let dia_cadastro_baixa = pegar_hora.slice(8,10);
    let mes_cadastro_baixa = pegar_hora.slice(5,7);
    let ano_cadastro_baixa = pegar_hora.slice(0,4);
    
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
    
    if (document.getElementById("e_devolucao").checked){
        e_devolucao = true;
    }
    
    let dados = {
        nome_log: nome_log,
        num_log: num_log,
        bairro: bairro,
        cidade: cidade,
        unidade_federativa: unidade_federativa,
        endereco_entrega: endereco_entrega,
        nome_remetente: nome_remetente,
        cnpj_rem: cnpj_rem,
        num_declara: num_declara,
        e_devolucao: e_devolucao,
        status_entrega: status_entrega,
        data_cadastro_baixa: data_cadastro_baixa,
        motivo_devolucao: motivo_devolucao,
        data_entrega: data_entrega,
        volume_declara: volume_declara,
        observacao: observacao,
        
        nome_log_dest: nome_log_dest,
        num_log_dest: num_log_dest,
        bairro_dest: bairro_dest,
        cidade_dest: cidade_dest,
        unidade_federativa_dest: unidade_federativa_dest,
        endereco_entrega_dest: endereco_entrega_dest,
        nome_destinatario: nome_destinatario,
        cnpj_dest: cnpj_dest,
    };
    
    if (num_declara == "") {
        alert("É necessário preencher o campo 'Nº declaração/Nota fiscal'.");
    } else if (volume_declara == ""){
        alert("É necessário preencher o campo 'Volume'.");
    } else if (cnpj_rem == "") {
        alert("É necessário preencher o campo 'CNPJ Remetente'.");
    } else if (nome_log == "") {
        alert("É necessário preencher o campo 'Nome do Logradouro Remetente'.");
    } else if (num_log == "") {
        alert("É necessário preencher o campo 'Número do Logradouro Remetente'.");
    } else if (bairro == "") {
        alert("É necessário preencher o campo 'Bairro Remetente'.");
    } else if (cidade == "") {
        alert("É necessário preencher o campo 'Cidade Remetente'.");
    } else if (unidade_federativa == "") {
        alert("É necessário preencher o campo 'Unidade Federativa Remetente'.");
    } else if (status_entrega == "") {
        alert("É necessário preencher o campo 'Status Entrega'.");
    } else if (data_cadastro_baixa == "") {
        alert("É necessário preencher o campo 'Data Cadastro Baixa'.");
    } else if (cnpj_dest == "") {
        alert("É necessário preencher o campo 'CNPJ Destinatario'.");
    } else if (nome_log_dest == "") {
        alert("É necessário preencher o campo 'Nome do Logradouro Destinatario'.");
    } else if (num_log_dest == "") {
        alert("É necessário preencher o campo 'Nome do Logradouro Destinatario'.");
    } else if (bairro_dest == "") {
        alert("É necessário preencher o campo 'Bairro Destinatario'.");
    } else if (cidade_dest == "") {
        alert("É necessário preencher o campo 'Cidade Destinatario'.");
    } else if (!pegar_hora){
        alert("É necessário preencher o campo 'Hora cadastro baixa'.");
    }
    else{
        localStorage.setItem(num_declara,JSON.stringify(dados));
        console.log(JSON.parse(localStorage.getItem(num_declara)));
        document.getElementById("resultado_cad_declara").innerHTML += "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>";
    }
    
    
}
*/

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
    let dados_salvos = JSON.parse(localStorage.getItem(num_declara));

    document.getElementById("e_devolucao_cad").checked = false;
    document.getElementById("ocorrencia_cad").value = "";
    document.getElementById("data_hora_cad_baixa").value = "";
    document.getElementById("data_hora_entrega_cad").value = "";
    document.getElementById("num_declara_cad").value = "";
    document.getElementById("volume_declara_cad").value = "";
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
                if (dados_salvos.e_devolucao == true) {
                    document.getElementById("e_devolucao_cad").checked = true;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_cad").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.num_nf !== "undefined") document.getElementById("num_nf_cad").value = dados_salvos.num_nf;
                    if(typeof dados_salvos.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos.rota_entrega;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos.motivo_devolucao;
                    if(typeof dados_salvos.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos.digitador;
                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos.unidade_federativa_dest;
                }else{
                    document.getElementById("e_devolucao_cad").checked = false;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos.digitador;
                    if(typeof dados_salvos.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos.rota_entrega;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_cad").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos.unidade_federativa_dest;
                }
            }else{
                if(dados_salvos.e_devolucao == true){
                    document.getElementById("e_devolucao_cad").checked = true;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos.rota_entrega;
                    if(typeof dados_salvos.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos.digitador;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_cad").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos.unidade_federativa_dest;
                }else{
                    document.getElementById("e_devolucao_cad").checked = false;
                    if(typeof dados_salvos.status_entrega !== "undefined") document.getElementById("ocorrencia_cad").value = dados_salvos.status_entrega;
                    if(typeof dados_salvos.data_cadastro_baixa !== "undefined") document.getElementById("data_hora_cad_baixa").value = dados_salvos.data_cadastro_baixa;
                    if(typeof dados_salvos.data_entrega !== "undefined") document.getElementById("data_hora_entrega_cad").value = dados_salvos.data_entrega;
                    if(typeof dados_salvos.digitador !== "undefined") document.getElementById("nome_digitador_cad").value = dados_salvos.digitador;
                    if(typeof dados_salvos.rota_entrega !== "undefined") document.getElementById("rota_entrega_cad").value = dados_salvos.rota_entrega;
                    if(typeof dados_salvos.num_declara !== "undefined") document.getElementById("num_declara_cad").value = dados_salvos.num_declara;
                    if(typeof dados_salvos.volume_declara !== "undefined") document.getElementById("volume_declara_cad").value = dados_salvos.volume_declara;
                    if(typeof dados_salvos.observacao !== "undefined") document.getElementById("observacao_cad").value = dados_salvos.observacao;
                    if(typeof dados_salvos.motivo_devolucao !== "undefined") document.getElementById("motivo_devolucao_cad").value = dados_salvos.motivo_devolucao;

                    if(typeof dados_salvos.cnpj_rem !== "undefined") document.getElementById("cnpj_rem_cad").value = dados_salvos.cnpj_rem;
                    if(typeof dados_salvos.nome_remetente !== "undefined") document.getElementById("nome_remetente_cad").value = dados_salvos.nome_remetente;
                    if(typeof dados_salvos.nome_log !== "undefined") document.getElementById("nome_log_rem_cad").value = dados_salvos.nome_log;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_rem_cad").value = dados_salvos.num_log;
                    if(typeof dados_salvos.bairro !== "undefined") document.getElementById("bairro_rem_cad").value = dados_salvos.bairro;
                    if(typeof dados_salvos.cidade !== "undefined") document.getElementById("cidade_rem_cad").value = dados_salvos.cidade;
                    if(typeof dados_salvos.unidade_federativa !== "undefined") document.getElementById("uf_rem_cad").value = dados_salvos.unidade_federativa;

                    if(typeof dados_salvos.cnpj_dest !== "undefined") document.getElementById("cnpj_dest_cad").value = dados_salvos.cnpj_dest;
                    if(typeof dados_salvos.nome_destinatario !== "undefined") document.getElementById("nome_destinatario_cad").value = dados_salvos.nome_destinatario;
                    if(typeof dados_salvos.nome_log_dest !== "undefined") document.getElementById("nome_log_dest_cad").value = dados_salvos.nome_log_dest;
                    if(typeof dados_salvos.num_log !== "undefined") document.getElementById("num_log_dest_cad").value = dados_salvos.num_log_dest;
                    if(typeof dados_salvos.bairro_dest !== "undefined") document.getElementById("bairro_dest_cad").value = dados_salvos.bairro_dest;
                    if(typeof dados_salvos.cidade_dest !== "undefined") document.getElementById("cidade_dest_cad").value = dados_salvos.cidade_dest;
                    if(typeof dados_salvos.unidade_federativa_dest !== "undefined") document.getElementById("uf_dest_cad").value = dados_salvos.unidade_federativa_dest;
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

    if (typeof cadastros_salvos.cnpj_cliente !== 'undefined' && typeof cadastros_salvos.tipo_pessoa !== 'undefined' && typeof cadastros_salvos.nome_cliente !== 'undefined' && typeof cadastros_salvos.nome_logradouro !== 'undefined' && typeof cadastros_salvos.numero_logradouro !== 'undefined' && typeof cadastros_salvos.bairro_cad_cliente !== 'undefined' && typeof cadastros_salvos.cidade_cad_cliente !== 'undefined' && typeof cadastros_salvos.uf_cad_cliente !== "undefined") {

        document.getElementById("nome_cliente_cad").value = cadastros_salvos.nome_cliente;
        document.getElementById("nome_logradouro_cad").value = cadastros_salvos.nome_logradouro;
        document.getElementById("numero_logradouro_cad").value = cadastros_salvos.numero_logradouro;
        document.getElementById("bairro_cad").value = cadastros_salvos.bairro_cad_cliente;
        document.getElementById("cidade_cad").value = cadastros_salvos.cidade_cad_cliente;
        document.getElementById("uf_cad").value = cadastros_salvos.uf_cad_cliente;
        document.getElementById("tipo_pessoa").value = cadastros_salvos.tipo_pessoa;

        console.log(cadastros_salvos.cnpj_cliente);
    }
}

/**
 * -------------------------------
 * CONSULTA LOCALIDADES REDESPACHO
 * -------------------------------
 */

for (let i = 0; i < cidade_agencia_redesp.length; i++) {
    let bingus = document.createElement("option");
    bingus.value = cidade_agencia_redesp[i].cidade;
    document.getElementById("cidade_redesp").appendChild(bingus);
}

function consulta_loc_redespacho(){

    var cidade_agencia_redesp = [];

cidade_agencia_redesp = [
    {cidade: "ABATIA", agencia: "SANTO ANTONIO DA PLATINA", estado: "PR"},
    {cidade: "ABDON BATISTA", agencia: "CAMPOS NOVOS", estado: "SC"},
    {cidade: "ADRIANOPOLIS", agencia: "COLOMBO", estado: "PR"},
    {cidade: "AGUDOS DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "ALFREDO WAGNER", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "ALTAMIRA DO PARANA", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "ALTO BELA VISTA", agencia: "CONCORDIA", estado: "SC"},
    {cidade: "ALTO PIQUIRI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ALVORADA DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "AMAPORA", agencia: "MARINGA", estado: "PR"},
    {cidade: "AMARAL FERRADOR", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "ANAHY", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "ANDRE DA ROCHA", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "ANGULO", agencia: "MARINGA", estado: "PR"},
    {cidade: "ANITA GARIBALDI", agencia: "LAGES", estado: "SC"},
    {cidade: "ANITAPOLIS", agencia: "SAO JOSE", estado: "SC"},
    {cidade: "ANTONINA", agencia: "CURITIBA", estado: "RS"},
    {cidade: "ARAMBARE", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "ARAPOTI", agencia: "CASTRO", estado: "PR"},
    {cidade: "ARROIO DO PADRE", agencia: "PELOTAS", estado: "RS"},
    {cidade: "ARROIO GRANDE", agencia: "PELOTAS", estado: "RS"},
    {cidade: "ARVOREDO", agencia: "CHAPECO", estado: "SC"},
    {cidade: "ASSAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ATALAIA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "AUREA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BALNEARIO ARROIO DO SILVA", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "BALNEARIO GAIVOTA", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "BALSA NOVA", agencia: "ARAUCARIA", estado: "PR"},
    {cidade: "BANDEIRANTES", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARAO DO TRIUNFO", agencia: "SAO LEOPOLDO", estado: "RS"},
    {cidade: "BARBOSA FERRAZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARRA BONITA", agencia: "SAO MIGUEL DO OESTE", estado: "SC"},
    {cidade: "BARRA DO GUARITA", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "BARRA DO JACARE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARRA DO RIO AZUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BELA VISTA DO PARAISO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BENJAMIN CONSTANT DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BITURUNA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VENTURA DE SAO ROQUE", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DA APARECIDA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO CADEADO", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO INCRA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO SUL", agencia: "ESTRELA", estado: "RS"},
    {cidade: "BOCAINA DO SUL", agencia: "LAGES", estado: "SC"},
    {cidade: "BOCAIUVA DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "BOM RETIRO", agencia: "LAGES", estado: "SC"},
    {cidade: "BOM SUCESSO DO SUL", agencia: "PATO BRANCO", estado: "PR"},
    {cidade: "BOQUEIRAO DO LEAO", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "BORRAZOPOLIS", agencia: "MARINGA", estado: "PR"},
    {cidade: "BOZANO", agencia: "IJUI", estado: "RS"},
    {cidade: "BRAGANEY", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "BRASILANDIA DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAFEARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAMBARA DO SUL", agencia: "GRAMADO", estado: "RS"},
    {cidade: "CAMPINA DA LAGOA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAMPINA DO SIMAO", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "CAMPO BELO DO SUL", agencia: "LAGES", estado: "SC"},
    {cidade: "CAMPO BONITO", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "CAMPO DO TENENTE", agencia: "RIO NEGRO", estado: "PR"},
    {cidade: "CAMPO MAGRO", agencia: "CURITIBA", estado: "PR"},
    {cidade: "CANDIDO DE ABREU", agencia: "APUCARANA", estado: "PR"},
    {cidade: "CANDOI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAPAO ALTO", agencia: "LAGES", estado: "PR"},
    {cidade: "CAPAO DO CIPO", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "CAPITAO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "CARAA", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "CARLOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CENTENARIO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "CENTENARIO DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CERRITO", agencia: "PELOTAS", estado: "RO"},
    {cidade: "CERRO AZUL", agencia: "COLOMBO", estado: "PR"},
    {cidade: "CERRO GRANDE", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "CERRO GRANDE DO SUL", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "CHAPADAO DO LAGEADO", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "CHARRUA", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "CHUI", agencia: "PELOTAS", estado: "RS"},
    {cidade: "CHUVISCA", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "CIDADE GAUCHA", agencia: "CIANORTE", estado: "PR"},
    {cidade: "COLORADO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CONGONHINHAS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CONSELHEIRO MAIRINCK", agencia: "LONDRINA", estado: "PR"},
    {cidade: "COQUEIRO BAIXO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "COQUIEROS DO SUL", agencia: "CARAZINHO", estado: "RS"},
    {cidade: "CORONEL MARTINS", agencia: "SAO LOURENCO DO OESTE", estado: "SC"},
    {cidade: "CORONEL PILAR", agencia: "GARIBALDI", estado: "RS"},
    {cidade: "CORUMBATAI DO SUL", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "CRUZ MACHADO", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "CRUZALTAENSE", agencia: "ERECHIM", estado: "RS"},
    {cidade: "CRUZEIRO DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CUNHATAI", agencia: "PINHALZINHO", estado: "SC"},
    {cidade: "CURIUVA", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "DERRUBADAS", agencia: "TRES PASSOS", estado: "RS"},
    {cidade: "DIAMANTE D'OESTE", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "DIAMANTE DO NORTE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "DIAMANTE DO SUL", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "DILERMANDO DE AGUIAR", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "DOM FELICIANO", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "DOM PEDRO DE ALCANTRA", agencia: "TORRES", estado: "RS"},
    {cidade: "DONA EMMA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "DOUTOR CAMARGO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "DOUTOR PEDRINHO", agencia: "TIMBO", estado: "SC"},
    {cidade: "DOUTOR RICARDO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "DOUTOR ULYSSES", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ENCRUZILHADA DO SUL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "ENGENHEIRO BELTRAO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ENGENHO VELHO", agencia: "SARANDI", estado: "RS"},
    {cidade: "ENTRE RIOS", agencia: "XAXIM", estado: "SC"},
    {cidade: "ENTRE RIOS DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ERVAL GRANDE", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ESMERALDA", agencia: "LAGOA VERMELHA", estado: "RS"},
    {cidade: "ESTRELA VELHA", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "EUGENIO DE CASTRO", agencia: "IJUI", estado: "RS"},
    {cidade: "FAXINALZINHO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "FENIX", agencia: "MARINGA", estado: "PR"},
    {cidade: "FIGUEIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FLORESTA", agencia: "MARINGA", estado: "PR"},
    {cidade: "FLORESTOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FLORIDA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FORMIGUEIRO", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "FOZ DO JORDAO", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "GARRUCHOS", agencia: "SAO LUIZ GONZAGA", estado: "RS"},
    {cidade: "GENERAL CAMARA", agencia: "LAJEADO", estado: "RS"},
    {cidade: "GENERAL CARNEIRO", agencia: "UNIAO DA VITORIA", estado: "RS"},
    {cidade: "GENTIL", agencia: "MARAU", estado: "RS"},
    {cidade: "GODOY MOREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GOIOXIM", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GRAMADO DOS LOUREIROS", agencia: "SARANDI", estado: "RS"},
    {cidade: "GRAMADO XAVIER", agencia: "LAJEADO", estado: "RS"},
    {cidade: "GRANDES RIOS", agencia: "IVAIPORA", estado: "PR"},
    {cidade: "GUABIJU", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "GUAIRACA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUAPIRAMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUAPOREMA", agencia: "CIANORTE", estado: "PR"},
    {cidade: "GUARACI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUARAQUECABA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUARATUBA", agencia: "JOINVILLE", estado: "SC"},
    {cidade: "GUAIRACA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "HERVAL", agencia: "PELOTAS", estado: "RS"},
    {cidade: "HERVEIRAS", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "HONORIO SERPA", agencia: "PATO BRANCO", estado: "PR"},
    {cidade: "IBATI", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "IBARAMA", agencia: "AGUDO", estado: "RS"},
    {cidade: "ICARAIMA", agencia: "UMUARAMA", estado: "PR"},
    {cidade: "IGUARACU", agencia: "MARINGA", estado: "PR"},
    {cidade: "IGUATU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "IMARUI", agencia: "IMBITUBA", estado: "SC"},
    {cidade: "IMBUIA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "INACIO MARTINS", agencia: "IRATI", estado: "PR"},
    {cidade: "INAJA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "INDIANOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "INHACORA", agencia: "TRES DE MAIO", estado: "RS"},
    {cidade: "IPIRANGA", agencia: "PONTA GROSSA", estado: "PR"},
    {cidade: "IRATI", agencia: "PINHALZINHO", estado: "SC"},
    {cidade: "IRETAMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ITAARA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "ITACURUBI", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "ITAMBARACA", agencia: "MARINGA", estado: "PR"},
    {cidade: "ITAMBE", agencia: "MARINGA", estado: "PR"},
    {cidade: "ITATI", agencia: "TORRES", estado: "RS"},
    {cidade: "ITATIBA DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ITAUNA DO SUL", agencia: "MARINGA", estado: "PR"},
    {cidade: "IVAI", agencia: "IRATI", estado: "PR"},
    {cidade: "JABOTI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAGUAPITA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAGUARAO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "JAGUARIAIVA", agencia: "CASTRO", estado: "PR"},
    {cidade: "JAPIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAQUIRANA", agencia: "VACARIA", estado: "RS"},
    {cidade: "JARI", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "JOAQUIM TAVORA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JOIA", agencia: "SANTO ANGELO", estado: "RS"},
    {cidade: "JOSE BOITEUX", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "JUNDIAI DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JUSSARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "KALORE", agencia: "MARINGA", estado: "PR"},
    {cidade: "LAGOA BONITA DO SUL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "LAGOAO", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "LAJEADO DO BUGRE", agencia: "SARANDI", estado: "RS"},
    {cidade: "LARANJAL", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "LAVRAS DO SUL", agencia: "CACAPAVA DO SUL", estado: "RS"},
    {cidade: "LEOBERTO LEAL", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "LEOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LINDOESTE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LINHA NOVA", agencia: "CAMPO BOM", estado: "RS"},
    {cidade: "LOBATO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LUIZIANA", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "LUPIONOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MACAMBARA", agencia: "SAO BORJA", estado: "RS"},
    {cidade: "MACIEIRA", agencia: "TREZE TILIAS", estado: "SC"},
    {cidade: "MAJOR GERCINO", agencia: "BRUSQUE", estado: "SC"},
    {cidade: "MAJOR VIEIRA", agencia: "CANOINHAS", estado: "SC"},
    {cidade: "MAMPITUMBA", agencia: "TORRES", estado: "RS"},
    {cidade: "MANFRINOPOLIS", agencia: "FRANCISCO BELTRAO", estado: "PR"},
    {cidade: "MAQUINE", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "MARATA", agencia: "MONTENEGRO", estado: "RS"},
    {cidade: "MARCELINO RAMOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "MARIA HELENA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MARIANA PIMENTEL", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "MARIANO MORO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "MARILENA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "MARILUZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MARQUINHO", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "MATA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "MATINHOS", agencia: "CURITIBA", estado: "PR"},
    {cidade: "MATO RICO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MIRIM DOCE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MONTAURI", agencia: "GUAPORE", estado: "RS"},
    {cidade: "MONTE ALEGRE DOS CAMPOS", agencia: "VACARIA", estado: "RS"},
    {cidade: "MONTE CASTELO", agencia: "MAFRA", estado: "SC"},
    {cidade: "MORRINHOS DO SUL", agencia: "TORRES", estado: "RS"},
    {cidade: "MORRRO GRANDE", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "MOSTARDAS", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "MUITOS CAPOES", agencia: "VACARIA", estado: "RS"},
    {cidade: "MULTITERNO", agencia: "LAGOA VERMELHA", estado: "PR"},
    {cidade: "NICOLAU VERGUEIRO", agencia: "MARAU", estado: "RS"},
    {cidade: "NOVA AMERICA DA COLINA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA BRESCIA", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "NOVA CANTU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "NOVA FATIMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA OLIMPIA", agencia: "MARINGA", estado: "PR"},
    {cidade: "NOVA RAMADA", agencia: "IJUI", estado: "RS"},
    {cidade: "NOVA SANTA BARBARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA TEBAS", agencia: "IVAIPORA", estado: "PR"},
    {cidade: "NOVO ITACOLOMI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVO MACHADO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "NOVO TIRADENTES", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "NOVO XINGU", agencia: "SARANDI", estado: "RS"},
    {cidade: "OTALICIO COSTA", agencia: "LAGES", estado: "SC"},
    {cidade: "OURIZONA", agencia: "MARINGA", estado: "PR"},
    {cidade: "OURO VERDE DO OESTE", agencia: "TOLEDO", estado: "PR"},
    {cidade: "PAIAL", agencia: "CHAPECO", estado: "SC"},
    {cidade: "PAINEL", agencia: "LAGES", estado: "SC"},
    {cidade: "PALMEIRA", agencia: "LAGES", estado: "SC"},
    {cidade: "PALMITAL", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "PARANACITY", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PAVERAMA", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PEDRO OSORIO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PEJUCARA", agencia: "PANAMBI", estado: "RS"},
    {cidade: "PETROLANDIA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "PINHAL DA SERRA", agencia: "LAGOA VERMELHA", estado: "RS"},
    {cidade: "PINHAL DE SAO BENTO", agencia: "REALEZA", estado: "PR"},
    {cidade: "PINHAL GRANDE", agencia: "AGUDO", estado: "AGUDO"},
    {cidade: "PINHALAO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PINHEIRINHO DO VALE", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "PINHEIRO MACHADO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PIRATINI", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PLANALTINA DO PARANA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "POCO DAS ANTAS", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PONTAL DO PARANA", agencia: "CURITIBA", estado: "PR"},
    {cidade: "PONTE PRETA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "PORECATU", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PORTO AMAZONAS", agencia: "PONTA GROSSA", estado: "PR"},
    {cidade: "PORTO BARREIRO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PORTO MAUA", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "PORTO RICO", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "POUSO NOVO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PRADO FERREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PRESIDENTE CASTELO BRANCO", agencia: "CONCORDIA", estado: "RS"},
    {cidade: "PRESIDENTE NEREU", agencia: "RIO DO SUL", estado: "RS"},
    {cidade: "PRIMEIRO DE MAIO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PROGRESSO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PROTASIO ALVES", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "PUTINGA", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "QUARTO CENTENARIO", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "QUATIGUA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "QUATRO IRMAOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "QUERENCIA DO NORTE", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "QUINTA DO SOL", agencia: "MARINGA", estado: "PR"},
    {cidade: "QUINTADINHA", agencia: "MAFRA", estado: "PR"},
    {cidade: "RAMILANDIA", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "RANCHO ALEGRE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RELVADO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "RESERVA", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "RESERVA DO IGUACU", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIBEIRAO CLARO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIBEIRAO DO PINHAL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIO BOM", agencia: "APUCARANA", estado: "PR"},
    {cidade: "RIO DO CAMPO", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "RIO FORTUNA", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "RIO RUFINO", agencia: "LAGES", estado: "SC"},
    {cidade: "RIOZINHO", agencia: "PAROBE", estado: "RS"},
    {cidade: "RONCADOR", agencia: "MARINGA", estado: "PR"},
    {cidade: "RONDON", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ROSARIO DO IVAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAGRADA FAMILIA", agencia: "SARANDI", estado: "RS"},
    {cidade: "SANTA CECILIA DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "SANTA CRUZ DE MONTE CASTELO", agencia: "MARINGA", estado: "PR"},
    {cidade: "SANTA FE", agencia: "MARINGA", estado: "PR"},
    {cidade: "SANTA MARGARIDA DO SUL", agencia: "SAO GABRIEL", estado: "RS"},
    {cidade: "SANTA MARIA DO HERVAL", agencia: "CAMPO BOM", estado: "RS"},
    {cidade: "SANTA MARIA DO OESTE", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "SANTA MARAIANA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTA ROSA DE LIMA", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "SANTA TEREZINHA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "SANTA VITORIA DO PALMAR", agencia: "PELOTAS", estado: "RS"},
    {cidade: "SANTANA DA BOA VISTA", agencia: "CACAPAVA DO SUL", estado: "RS"},
    {cidade: "SANTANA DO ITARARE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTIAGO DO SUL", agencia: "SAO LOURENCO DO OESTE", estado: "SC"},
    {cidade: "SANTO ANTONIO DO CAIUA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "SANTO ANTONIO DO PALMA", agencia: "MARAU", estado: "RS"},
    {cidade: "SANTO ANTONIO DO PARAISO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTO EXPEDIDO DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "SANTO INACIO", agencia: "PRESIDENTE PRUDENTE", estado: "SC"},
    {cidade: "SAO CARLOS DO IVAI", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "SAO DOMINGOS DO SUL", agencia: "MARAU", estado: "RS"},
    {cidade: "SAO JERONIMO DA SERRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOAQUIM", agencia: "LAGES", estado: "SC"},
    {cidade: "SAO JORGE", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "SAO JORGE DO IVAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DA BOA VISTA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DAS MISSOES", agencia: "SARANDI", estado: "RS"},
    {cidade: "SAO JOSE DAS PALMEIRAS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DO CERRITO", agencia: "LAGES", estado: "SC"},
    {cidade: "SAO JOSE DO NORTE", agencia: "RIO GRANDE", estado: "RS"},
    {cidade: "SAO JOSE DOS AUSENTES", agencia: "VACARIA", estado: "RS"},
    {cidade: "SAO MARTINHO", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "SAO MARTINHO DA SERRRA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "SAO PEDRO DAS MISSOES", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "SAO PEDRO DO IGUACU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "SAO PEDRO DO IVAI", agencia: "MARINGA", estado: "PR"},
    {cidade: "SAO SEBASTIAO DA AMOREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO VALENTIM", agencia: "ERECHIM", estado: "RS"},
    {cidade: "SAO VALEIRO DO SUL", agencia: "TRES PASSOS", estado: "RS"},
    {cidade: "SAPOPEMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAUDADE DO IGUACU", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "SEGREDO", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "SENADOR SALGADO FILHO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "SENGES", agencia: "CASTRO", estado: "PR"},
    {cidade: "SERIO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "SERRANOPOLIS DO IGUACU", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "SERTANEJA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SETE DE SETEMBRO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "SEVERIANO DE ALMEIDA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "SILVEIRA MARTINS", agencia: "AGUDO", estado: "RS"},
    {cidade: "SINIMBU", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "SIQUEIRA CAMPOS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SULINA", agencia: "DOIS VIZINHOS", estado: "PR"},
    {cidade: "TAMARANA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "TAPIRA", agencia: "UMUARAMA", estado: "PR"},
    {cidade: "TAVARES", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "TERRA RICA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "TIJUCAS DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "TIMBE DO SUL", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "TIMBO GRANDE", agencia: "CACADOR", estado: "SC"},
    {cidade: "TOMAZINA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "TOROPI", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "TRAVESSEIRO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "TRES ARROIOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "TRES FORQUILHAS", agencia: "TORRES", estado: "RS"},
    {cidade: "TUNAS", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "TUNAS DO PARANA", agencia: "CURITIBA", estado: "PR"},
    {cidade: "TUPANCI DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "TURUCU", agencia: "PELOTAS", estado: "RS"},
    {cidade: "UBIRETAMA", agencia: "CERRO LARGO", estado: "RS"},
    {cidade: "UNIAO DA SERRA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "UNIFLOR", agencia: "MARINGA", estado: "PR"},
    {cidade: "UNISTALDA", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "URAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "UBURICI", agencia: "LAGES", estado: "SC"},
    {cidade: "URUPEMA", agencia: "LAGES", estado: "SC"},
    {cidade: "VALE DO SOL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "VARGEM", agencia: "CAMPOS NOVOS", estado: "SC"},
    {cidade: "VENTANA", agencia: "LONDIRNA", estado: "PR"},
    {cidade: "VESPASIANO CORREA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "VIDAL RAMOS", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "VILA NOVA DO SUL", agencia: "SAO GABRIEL", estado: "RS"},
    {cidade: "VITOR MEIRELES", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "WENCESLAU BRAZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "WITMARSUM", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "PORTO VERA CRUZ", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "VISTA ALEGRE DO PRATA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "ROLADOR", agencia: "SAO LUIZ GONZAGA", estado: "RS"},
]

    let cliente_redespacahante = document.getElementById("cliente_redespachante").value;
    let cidade_redespacho = document.getElementById("nome_cidade_redesp").value;

    document.getElementById("procedimento_redesp").value = "";
    document.getElementById("nome_agencia_redesp").value = "";
    document.getElementById("uf_redesp").value = "";

    if(cliente_redespacahante == "Termolar"){
        document.getElementById("procedimento_redesp").value = "R$150.00 para todos os redespachos";
    } else if (cliente_redespacahante == "Dufrio") {
        document.getElementById("procedimento_redesp").value = "R$180.00 + R$1.00 por quilo. Ex: mercadoria de 200kg, seria 180.00 + 200 totalizando R$380.00 de redespacho";
    } else if (cliente_redespacahante == "Wurth") {
        document.getElementById("procedimento_redesp").value = "R$130.00 para todos os redespachos. Somente no Rio Grande do Sul.";
    }

    for (let i = 0; i < cidade_agencia_redesp.length; i++) {
        if (cidade_redespacho == cidade_agencia_redesp[i].cidade) {
            document.getElementById("nome_agencia_redesp").value = cidade_agencia_redesp[i].agencia;
            document.getElementById("uf_redesp").value = cidade_agencia_redesp[i].estado;
        }
        
    }
}

function consulta_redesp_por_cidade() {

    var cidade_agencia_redesp = [];

cidade_agencia_redesp = [
    {cidade: "ABATIA", agencia: "SANTO ANTONIO DA PLATINA", estado: "PR"},
    {cidade: "ABDON BATISTA", agencia: "CAMPOS NOVOS", estado: "SC"},
    {cidade: "ADRIANOPOLIS", agencia: "COLOMBO", estado: "PR"},
    {cidade: "AGUDOS DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "ALFREDO WAGNER", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "ALTAMIRA DO PARANA", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "ALTO BELA VISTA", agencia: "CONCORDIA", estado: "SC"},
    {cidade: "ALTO PIQUIRI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ALVORADA DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "AMAPORA", agencia: "MARINGA", estado: "PR"},
    {cidade: "AMARAL FERRADOR", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "ANAHY", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "ANDRE DA ROCHA", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "ANGULO", agencia: "MARINGA", estado: "PR"},
    {cidade: "ANITA GARIBALDI", agencia: "LAGES", estado: "SC"},
    {cidade: "ANITAPOLIS", agencia: "SAO JOSE", estado: "SC"},
    {cidade: "ANTONINA", agencia: "CURITIBA", estado: "RS"},
    {cidade: "ARAMBARE", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "ARAPOTI", agencia: "CASTRO", estado: "PR"},
    {cidade: "ARROIO DO PADRE", agencia: "PELOTAS", estado: "RS"},
    {cidade: "ARROIO GRANDE", agencia: "PELOTAS", estado: "RS"},
    {cidade: "ARVOREDO", agencia: "CHAPECO", estado: "SC"},
    {cidade: "ASSAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ATALAIA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "AUREA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BALNEARIO ARROIO DO SILVA", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "BALNEARIO GAIVOTA", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "BALSA NOVA", agencia: "ARAUCARIA", estado: "PR"},
    {cidade: "BANDEIRANTES", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARAO DO TRIUNFO", agencia: "SAO LEOPOLDO", estado: "RS"},
    {cidade: "BARBOSA FERRAZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARRA BONITA", agencia: "SAO MIGUEL DO OESTE", estado: "SC"},
    {cidade: "BARRA DO GUARITA", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "BARRA DO JACARE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BARRA DO RIO AZUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BELA VISTA DO PARAISO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "BENJAMIN CONSTANT DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "BITURUNA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VENTURA DE SAO ROQUE", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DA APARECIDA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO CADEADO", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO INCRA", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "BOA VISTA DO SUL", agencia: "ESTRELA", estado: "RS"},
    {cidade: "BOCAINA DO SUL", agencia: "LAGES", estado: "SC"},
    {cidade: "BOCAIUVA DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "BOM RETIRO", agencia: "LAGES", estado: "SC"},
    {cidade: "BOM SUCESSO DO SUL", agencia: "PATO BRANCO", estado: "PR"},
    {cidade: "BOQUEIRAO DO LEAO", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "BORRAZOPOLIS", agencia: "MARINGA", estado: "PR"},
    {cidade: "BOZANO", agencia: "IJUI", estado: "RS"},
    {cidade: "BRAGANEY", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "BRASILANDIA DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAFEARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAMBARA DO SUL", agencia: "GRAMADO", estado: "RS"},
    {cidade: "CAMPINA DA LAGOA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAMPINA DO SIMAO", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "CAMPO BELO DO SUL", agencia: "LAGES", estado: "SC"},
    {cidade: "CAMPO BONITO", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "CAMPO DO TENENTE", agencia: "RIO NEGRO", estado: "PR"},
    {cidade: "CAMPO MAGRO", agencia: "CURITIBA", estado: "PR"},
    {cidade: "CANDIDO DE ABREU", agencia: "APUCARANA", estado: "PR"},
    {cidade: "CANDOI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CAPAO ALTO", agencia: "LAGES", estado: "PR"},
    {cidade: "CAPAO DO CIPO", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "CAPITAO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "CARAA", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "CARLOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CENTENARIO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "CENTENARIO DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CERRITO", agencia: "PELOTAS", estado: "RO"},
    {cidade: "CERRO AZUL", agencia: "COLOMBO", estado: "PR"},
    {cidade: "CERRO GRANDE", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "CERRO GRANDE DO SUL", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "CHAPADAO DO LAGEADO", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "CHARRUA", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "CHUI", agencia: "PELOTAS", estado: "RS"},
    {cidade: "CHUVISCA", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "CIDADE GAUCHA", agencia: "CIANORTE", estado: "PR"},
    {cidade: "COLORADO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CONGONHINHAS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CONSELHEIRO MAIRINCK", agencia: "LONDRINA", estado: "PR"},
    {cidade: "COQUEIRO BAIXO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "COQUIEROS DO SUL", agencia: "CARAZINHO", estado: "RS"},
    {cidade: "CORONEL MARTINS", agencia: "SAO LOURENCO DO OESTE", estado: "SC"},
    {cidade: "CORONEL PILAR", agencia: "GARIBALDI", estado: "RS"},
    {cidade: "CORUMBATAI DO SUL", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "CRUZ MACHADO", agencia: "UNIAO DA VITORIA", estado: "PR"},
    {cidade: "CRUZALTAENSE", agencia: "ERECHIM", estado: "RS"},
    {cidade: "CRUZEIRO DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "CUNHATAI", agencia: "PINHALZINHO", estado: "SC"},
    {cidade: "CURIUVA", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "DERRUBADAS", agencia: "TRES PASSOS", estado: "RS"},
    {cidade: "DIAMANTE D'OESTE", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "DIAMANTE DO NORTE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "DIAMANTE DO SUL", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "DILERMANDO DE AGUIAR", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "DOM FELICIANO", agencia: "CAMAQUA", estado: "RS"},
    {cidade: "DOM PEDRO DE ALCANTRA", agencia: "TORRES", estado: "RS"},
    {cidade: "DONA EMMA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "DOUTOR CAMARGO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "DOUTOR PEDRINHO", agencia: "TIMBO", estado: "SC"},
    {cidade: "DOUTOR RICARDO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "DOUTOR ULYSSES", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ENCRUZILHADA DO SUL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "ENGENHEIRO BELTRAO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ENGENHO VELHO", agencia: "SARANDI", estado: "RS"},
    {cidade: "ENTRE RIOS", agencia: "XAXIM", estado: "SC"},
    {cidade: "ENTRE RIOS DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ERVAL GRANDE", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ESMERALDA", agencia: "LAGOA VERMELHA", estado: "RS"},
    {cidade: "ESTRELA VELHA", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "EUGENIO DE CASTRO", agencia: "IJUI", estado: "RS"},
    {cidade: "FAXINALZINHO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "FENIX", agencia: "MARINGA", estado: "PR"},
    {cidade: "FIGUEIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FLORESTA", agencia: "MARINGA", estado: "PR"},
    {cidade: "FLORESTOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FLORIDA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "FORMIGUEIRO", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "FOZ DO JORDAO", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "GARRUCHOS", agencia: "SAO LUIZ GONZAGA", estado: "RS"},
    {cidade: "GENERAL CAMARA", agencia: "LAJEADO", estado: "RS"},
    {cidade: "GENERAL CARNEIRO", agencia: "UNIAO DA VITORIA", estado: "RS"},
    {cidade: "GENTIL", agencia: "MARAU", estado: "RS"},
    {cidade: "GODOY MOREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GOIOXIM", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GRAMADO DOS LOUREIROS", agencia: "SARANDI", estado: "RS"},
    {cidade: "GRAMADO XAVIER", agencia: "LAJEADO", estado: "RS"},
    {cidade: "GRANDES RIOS", agencia: "IVAIPORA", estado: "PR"},
    {cidade: "GUABIJU", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "GUAIRACA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUAPIRAMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUAPOREMA", agencia: "CIANORTE", estado: "PR"},
    {cidade: "GUARACI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUARAQUECABA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "GUARATUBA", agencia: "JOINVILLE", estado: "SC"},
    {cidade: "GUAIRACA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "HERVAL", agencia: "PELOTAS", estado: "RS"},
    {cidade: "HERVEIRAS", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "HONORIO SERPA", agencia: "PATO BRANCO", estado: "PR"},
    {cidade: "IBATI", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "IBARAMA", agencia: "AGUDO", estado: "RS"},
    {cidade: "ICARAIMA", agencia: "UMUARAMA", estado: "PR"},
    {cidade: "IGUARACU", agencia: "MARINGA", estado: "PR"},
    {cidade: "IGUATU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "IMARUI", agencia: "IMBITUBA", estado: "SC"},
    {cidade: "IMBUIA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "INACIO MARTINS", agencia: "IRATI", estado: "PR"},
    {cidade: "INAJA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "INDIANOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "INHACORA", agencia: "TRES DE MAIO", estado: "RS"},
    {cidade: "IPIRANGA", agencia: "PONTA GROSSA", estado: "PR"},
    {cidade: "IRATI", agencia: "PINHALZINHO", estado: "SC"},
    {cidade: "IRETAMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ITAARA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "ITACURUBI", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "ITAMBARACA", agencia: "MARINGA", estado: "PR"},
    {cidade: "ITAMBE", agencia: "MARINGA", estado: "PR"},
    {cidade: "ITATI", agencia: "TORRES", estado: "RS"},
    {cidade: "ITATIBA DO SUL", agencia: "ERECHIM", estado: "RS"},
    {cidade: "ITAUNA DO SUL", agencia: "MARINGA", estado: "PR"},
    {cidade: "IVAI", agencia: "IRATI", estado: "PR"},
    {cidade: "JABOTI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAGUAPITA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAGUARAO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "JAGUARIAIVA", agencia: "CASTRO", estado: "PR"},
    {cidade: "JAPIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JAQUIRANA", agencia: "VACARIA", estado: "RS"},
    {cidade: "JARI", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "JOAQUIM TAVORA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JOIA", agencia: "SANTO ANGELO", estado: "RS"},
    {cidade: "JOSE BOITEUX", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "JUNDIAI DO SUL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "JUSSARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "KALORE", agencia: "MARINGA", estado: "PR"},
    {cidade: "LAGOA BONITA DO SUL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "LAGOAO", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "LAJEADO DO BUGRE", agencia: "SARANDI", estado: "RS"},
    {cidade: "LARANJAL", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "LAVRAS DO SUL", agencia: "CACAPAVA DO SUL", estado: "RS"},
    {cidade: "LEOBERTO LEAL", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "LEOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LINDOESTE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LINHA NOVA", agencia: "CAMPO BOM", estado: "RS"},
    {cidade: "LOBATO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "LUIZIANA", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "LUPIONOPOLIS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MACAMBARA", agencia: "SAO BORJA", estado: "RS"},
    {cidade: "MACIEIRA", agencia: "TREZE TILIAS", estado: "SC"},
    {cidade: "MAJOR GERCINO", agencia: "BRUSQUE", estado: "SC"},
    {cidade: "MAJOR VIEIRA", agencia: "CANOINHAS", estado: "SC"},
    {cidade: "MAMPITUMBA", agencia: "TORRES", estado: "RS"},
    {cidade: "MANFRINOPOLIS", agencia: "FRANCISCO BELTRAO", estado: "PR"},
    {cidade: "MAQUINE", agencia: "SANTO ANTONIO DA PATRULHA", estado: "RS"},
    {cidade: "MARATA", agencia: "MONTENEGRO", estado: "RS"},
    {cidade: "MARCELINO RAMOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "MARIA HELENA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MARIANA PIMENTEL", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "MARIANO MORO", agencia: "ERECHIM", estado: "RS"},
    {cidade: "MARILENA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "MARILUZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MARQUINHO", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "MATA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "MATINHOS", agencia: "CURITIBA", estado: "PR"},
    {cidade: "MATO RICO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MIRIM DOCE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "MONTAURI", agencia: "GUAPORE", estado: "RS"},
    {cidade: "MONTE ALEGRE DOS CAMPOS", agencia: "VACARIA", estado: "RS"},
    {cidade: "MONTE CASTELO", agencia: "MAFRA", estado: "SC"},
    {cidade: "MORRINHOS DO SUL", agencia: "TORRES", estado: "RS"},
    {cidade: "MORRRO GRANDE", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "MOSTARDAS", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "MUITOS CAPOES", agencia: "VACARIA", estado: "RS"},
    {cidade: "MULTITERNO", agencia: "LAGOA VERMELHA", estado: "PR"},
    {cidade: "NICOLAU VERGUEIRO", agencia: "MARAU", estado: "RS"},
    {cidade: "NOVA AMERICA DA COLINA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA BRESCIA", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "NOVA CANTU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "NOVA FATIMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA OLIMPIA", agencia: "MARINGA", estado: "PR"},
    {cidade: "NOVA RAMADA", agencia: "IJUI", estado: "RS"},
    {cidade: "NOVA SANTA BARBARA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVA TEBAS", agencia: "IVAIPORA", estado: "PR"},
    {cidade: "NOVO ITACOLOMI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "NOVO MACHADO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "NOVO TIRADENTES", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "NOVO XINGU", agencia: "SARANDI", estado: "RS"},
    {cidade: "OTALICIO COSTA", agencia: "LAGES", estado: "SC"},
    {cidade: "OURIZONA", agencia: "MARINGA", estado: "PR"},
    {cidade: "OURO VERDE DO OESTE", agencia: "TOLEDO", estado: "PR"},
    {cidade: "PAIAL", agencia: "CHAPECO", estado: "SC"},
    {cidade: "PAINEL", agencia: "LAGES", estado: "SC"},
    {cidade: "PALMEIRA", agencia: "LAGES", estado: "SC"},
    {cidade: "PALMITAL", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "PARANACITY", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PAVERAMA", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PEDRO OSORIO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PEJUCARA", agencia: "PANAMBI", estado: "RS"},
    {cidade: "PETROLANDIA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "PINHAL DA SERRA", agencia: "LAGOA VERMELHA", estado: "RS"},
    {cidade: "PINHAL DE SAO BENTO", agencia: "REALEZA", estado: "PR"},
    {cidade: "PINHAL GRANDE", agencia: "AGUDO", estado: "AGUDO"},
    {cidade: "PINHALAO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PINHEIRINHO DO VALE", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "PINHEIRO MACHADO", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PIRATINI", agencia: "PELOTAS", estado: "RS"},
    {cidade: "PLANALTINA DO PARANA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "POCO DAS ANTAS", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PONTAL DO PARANA", agencia: "CURITIBA", estado: "PR"},
    {cidade: "PONTE PRETA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "PORECATU", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PORTO AMAZONAS", agencia: "PONTA GROSSA", estado: "PR"},
    {cidade: "PORTO BARREIRO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PORTO MAUA", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "PORTO RICO", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "POUSO NOVO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PRADO FERREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PRESIDENTE CASTELO BRANCO", agencia: "CONCORDIA", estado: "RS"},
    {cidade: "PRESIDENTE NEREU", agencia: "RIO DO SUL", estado: "RS"},
    {cidade: "PRIMEIRO DE MAIO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "PROGRESSO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "PROTASIO ALVES", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "PUTINGA", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "QUARTO CENTENARIO", agencia: "CAMPO MOURAO", estado: "PR"},
    {cidade: "QUATIGUA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "QUATRO IRMAOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "QUERENCIA DO NORTE", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "QUINTA DO SOL", agencia: "MARINGA", estado: "PR"},
    {cidade: "QUINTADINHA", agencia: "MAFRA", estado: "PR"},
    {cidade: "RAMILANDIA", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "RANCHO ALEGRE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RELVADO", agencia: "ARROIO DO MEIO", estado: "RS"},
    {cidade: "RESERVA", agencia: "TELEMACO BORBA", estado: "PR"},
    {cidade: "RESERVA DO IGUACU", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIBEIRAO CLARO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIBEIRAO DO PINHAL", agencia: "LONDRINA", estado: "PR"},
    {cidade: "RIO BOM", agencia: "APUCARANA", estado: "PR"},
    {cidade: "RIO DO CAMPO", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "RIO FORTUNA", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "RIO RUFINO", agencia: "LAGES", estado: "SC"},
    {cidade: "RIOZINHO", agencia: "PAROBE", estado: "RS"},
    {cidade: "RONCADOR", agencia: "MARINGA", estado: "PR"},
    {cidade: "RONDON", agencia: "LONDRINA", estado: "PR"},
    {cidade: "ROSARIO DO IVAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAGRADA FAMILIA", agencia: "SARANDI", estado: "RS"},
    {cidade: "SANTA CECILIA DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "SANTA CRUZ DE MONTE CASTELO", agencia: "MARINGA", estado: "PR"},
    {cidade: "SANTA FE", agencia: "MARINGA", estado: "PR"},
    {cidade: "SANTA MARGARIDA DO SUL", agencia: "SAO GABRIEL", estado: "RS"},
    {cidade: "SANTA MARIA DO HERVAL", agencia: "CAMPO BOM", estado: "RS"},
    {cidade: "SANTA MARIA DO OESTE", agencia: "GUARAPUAVA", estado: "PR"},
    {cidade: "SANTA MARAIANA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTA ROSA DE LIMA", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "SANTA TEREZINHA", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "SANTA VITORIA DO PALMAR", agencia: "PELOTAS", estado: "RS"},
    {cidade: "SANTANA DA BOA VISTA", agencia: "CACAPAVA DO SUL", estado: "RS"},
    {cidade: "SANTANA DO ITARARE", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTIAGO DO SUL", agencia: "SAO LOURENCO DO OESTE", estado: "SC"},
    {cidade: "SANTO ANTONIO DO CAIUA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "SANTO ANTONIO DO PALMA", agencia: "MARAU", estado: "RS"},
    {cidade: "SANTO ANTONIO DO PARAISO", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SANTO EXPEDIDO DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "SANTO INACIO", agencia: "PRESIDENTE PRUDENTE", estado: "SC"},
    {cidade: "SAO CARLOS DO IVAI", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "SAO DOMINGOS DO SUL", agencia: "MARAU", estado: "RS"},
    {cidade: "SAO JERONIMO DA SERRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOAQUIM", agencia: "LAGES", estado: "SC"},
    {cidade: "SAO JORGE", agencia: "NOVA PRATA", estado: "RS"},
    {cidade: "SAO JORGE DO IVAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DA BOA VISTA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DAS MISSOES", agencia: "SARANDI", estado: "RS"},
    {cidade: "SAO JOSE DAS PALMEIRAS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO JOSE DO CERRITO", agencia: "LAGES", estado: "SC"},
    {cidade: "SAO JOSE DO NORTE", agencia: "RIO GRANDE", estado: "RS"},
    {cidade: "SAO JOSE DOS AUSENTES", agencia: "VACARIA", estado: "RS"},
    {cidade: "SAO MARTINHO", agencia: "BRACO DO NORTE", estado: "SC"},
    {cidade: "SAO MARTINHO DA SERRRA", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "SAO PEDRO DAS MISSOES", agencia: "FREDERICO WESTPHALEN", estado: "RS"},
    {cidade: "SAO PEDRO DO IGUACU", agencia: "CASCAVEL AGENCIA", estado: "PR"},
    {cidade: "SAO PEDRO DO IVAI", agencia: "MARINGA", estado: "PR"},
    {cidade: "SAO SEBASTIAO DA AMOREIRA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAO VALENTIM", agencia: "ERECHIM", estado: "RS"},
    {cidade: "SAO VALEIRO DO SUL", agencia: "TRES PASSOS", estado: "RS"},
    {cidade: "SAPOPEMA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SAUDADE DO IGUACU", agencia: "LARANJEIRAS DO SUL", estado: "PR"},
    {cidade: "SEGREDO", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "SENADOR SALGADO FILHO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "SENGES", agencia: "CASTRO", estado: "PR"},
    {cidade: "SERIO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "SERRANOPOLIS DO IGUACU", agencia: "MEDIANEIRA", estado: "PR"},
    {cidade: "SERTANEJA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SETE DE SETEMBRO", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "SEVERIANO DE ALMEIDA", agencia: "ERECHIM", estado: "RS"},
    {cidade: "SILVEIRA MARTINS", agencia: "AGUDO", estado: "RS"},
    {cidade: "SINIMBU", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "SIQUEIRA CAMPOS", agencia: "LONDRINA", estado: "PR"},
    {cidade: "SULINA", agencia: "DOIS VIZINHOS", estado: "PR"},
    {cidade: "TAMARANA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "TAPIRA", agencia: "UMUARAMA", estado: "PR"},
    {cidade: "TAVARES", agencia: "PORTO ALEGRE", estado: "RS"},
    {cidade: "TERRA RICA", agencia: "PARANAVAI", estado: "PR"},
    {cidade: "TIJUCAS DO SUL", agencia: "CURITIBA", estado: "PR"},
    {cidade: "TIMBE DO SUL", agencia: "ARARANGUA", estado: "SC"},
    {cidade: "TIMBO GRANDE", agencia: "CACADOR", estado: "SC"},
    {cidade: "TOMAZINA", agencia: "LONDRINA", estado: "PR"},
    {cidade: "TOROPI", agencia: "SANTA MARIA", estado: "RS"},
    {cidade: "TRAVESSEIRO", agencia: "LAJEADO", estado: "RS"},
    {cidade: "TRES ARROIOS", agencia: "ERECHIM", estado: "RS"},
    {cidade: "TRES FORQUILHAS", agencia: "TORRES", estado: "RS"},
    {cidade: "TUNAS", agencia: "SOLEDADE", estado: "RS"},
    {cidade: "TUNAS DO PARANA", agencia: "CURITIBA", estado: "PR"},
    {cidade: "TUPANCI DO SUL", agencia: "TAPEJARA", estado: "RS"},
    {cidade: "TURUCU", agencia: "PELOTAS", estado: "RS"},
    {cidade: "UBIRETAMA", agencia: "CERRO LARGO", estado: "RS"},
    {cidade: "UNIAO DA SERRA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "UNIFLOR", agencia: "MARINGA", estado: "PR"},
    {cidade: "UNISTALDA", agencia: "SANTIAGO", estado: "RS"},
    {cidade: "URAI", agencia: "LONDRINA", estado: "PR"},
    {cidade: "UBURICI", agencia: "LAGES", estado: "SC"},
    {cidade: "URUPEMA", agencia: "LAGES", estado: "SC"},
    {cidade: "VALE DO SOL", agencia: "SANTA CRUZ DO SUL", estado: "RS"},
    {cidade: "VARGEM", agencia: "CAMPOS NOVOS", estado: "SC"},
    {cidade: "VENTANA", agencia: "LONDIRNA", estado: "PR"},
    {cidade: "VESPASIANO CORREA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "VIDAL RAMOS", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "VILA NOVA DO SUL", agencia: "SAO GABRIEL", estado: "RS"},
    {cidade: "VITOR MEIRELES", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "WENCESLAU BRAZ", agencia: "LONDRINA", estado: "PR"},
    {cidade: "WITMARSUM", agencia: "RIO DO SUL", estado: "SC"},
    {cidade: "PORTO VERA CRUZ", agencia: "SANTA ROSA", estado: "RS"},
    {cidade: "VISTA ALEGRE DO PRATA", agencia: "GUAPORE", estado: "RS"},
    {cidade: "ROLADOR", agencia: "SAO LUIZ GONZAGA", estado: "RS"},
] 

    var agencia_redespachante = document.getElementById("nome_agencia_redespachante").value;

    document.getElementById("resultado_cidades_ate_redesp").innerHTML = "";

    for(let i = 0; i < cidade_agencia_redesp.length; i++){
        if (agencia_redespachante == cidade_agencia_redesp[i].agencia) {
            document.getElementById("resultado_cidades_ate_redesp").innerHTML += "<div class='bg-primary-subtle p-3 rounded-3 row'><p class='d-inline p-2 text-bg-primary rounded-3 m-3 col'>Cidade: <span><b>"+cidade_agencia_redesp[i].cidade+"</b></span></p><p class='d-inline p-2 text-bg-primary rounded-3 m-3 col'>Estado: <span><b>"+cidade_agencia_redesp[i].estado+"</b></span></p><p class='d-inline p-2 text-bg-primary rounded-3 m-3 col'>Agência: <span><b>"+cidade_agencia_redesp[i].agencia+"</b></span></p></div><hr><br>";
        }
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
        } else if (digitadores[i].setor == "SOLUCOES" && digitador == digitadores[i].nome) {
            pdf.text("Declaração do Setor de Soluções", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);
        }else if ( digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && e_devolucao) {
            pdf.text("Declaração de Devolução", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);
            
        }else if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome){
            pdf.text("Declaração de Entrega", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);
        }else if ( digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && e_devolucao && digitadores[i].nome == "MARCELO HUBER SILVA") {
            pdf.text("Declaração de Devolução", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);
            
        }else if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && digitadores[i].nome == "MARCELO HUBER SILVA"){
            pdf.text("Declaração de Entrega", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);
        }
        
    }
    pdf.text("Chave de Acesso: "+ chave_nf, 105, 41, "center");
    
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
    pdf.setFont("arial","italic");
    pdf.text("Decalro para os fins devidos, que recebi em perfeito estado as mercadorias pela empresa Expresso São Miguel S/A.",104,126,"center");

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


    pdf.setFontSize(13);
    pdf.text("____/____/_______",17, 150);
    pdf.text("______:______", 60, 150);
    pdf.text("_________________________________________", 148, 150, "center")
    pdf.setFont("arial","bold");
    pdf.text("DATA E HORA DO RECEBIMENTO",13, 156);
    pdf.text("ASSINATURA E CARIMBO DO RECEBEDOR", 100, 156);


    pdf.save(nome_remetente+" para "+nome_destinatario+" ref NF "+num_nf+" - Declaracao Num "+num_declara+".pdf");
}

function reimprmir_pdf() {
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

    let chave_nf = document.getElementById("chave_nf_cad").value;
    let num_declara = document.getElementById("num_declara_cad").value;
    let num_nf = document.getElementById("num_nf_cad").value
    let volume_declara = document.getElementById("volume_declara_cad").value;
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

        if(digitadores[i].setor == "BASE DE OPERACOES" && digitador == digitadores[i].nome && e_devolucao && digitadores[i].nome == "KLAUS BRAUN HELMICH"){
            pdf.text("Declaração da Base de Operações", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);
        }else if (digitadores[i].setor == "BASE DE OPERACOES" && digitador == digitadores[i].nome){
            pdf.text("Declaração da Base de Operações", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);
        } else if (digitadores[i].setor == "SOLUCOES" && digitador == digitadores[i].nome) {
            pdf.text("Declaração do Setor de Soluções", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);
        }else if ( digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome && e_devolucao) {
            pdf.text("Declaração de Devolução", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega, 10, 87);
            pdf.text("Motivo Devolução: "+motivo_devolucao, 10, 108);
            
        }else if(digitadores[i].setor == "ATENDIMENTO" && digitador == digitadores[i].nome){
            pdf.text("Declaração de Entrega", 105, 35, "center");
            pdf.setFontSize(12);
            pdf.text("Local de Entrega:", 10, 81);
            pdf.setFontSize(11);
            pdf.text(endereco_entrega_dest, 10, 87);
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
    pdf.setFont("arial","italic");
    pdf.text("Decalro para os fins devidos, que recebi em perfeito estado as mercadorias pela empresa Expresso São Miguel S/A.",104,126,"center");

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


    pdf.setFontSize(13);
    pdf.text("____/____/_______",17, 150);
    pdf.text("______:______", 60, 150);
    pdf.text("_________________________________________", 148, 150, "center")
    pdf.setFont("arial","bold");
    pdf.text("DATA E HORA DO RECEBIMENTO",13, 156);
    pdf.text("ASSINATURA E CARIMBO DO RECEBEDOR", 100, 156);


    pdf.save(nome_remetente+" para "+nome_destinatario+" ref NF "+num_nf+" - Declaracao Num "+num_declara+".pdf");
}