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