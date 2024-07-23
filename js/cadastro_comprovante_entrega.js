function preenchimento_automatico_rem_cad_comp() {
    let num_cnpj_rem = document.getElementById('cnpj_rem_cad_comp').value;
    let cadastros_salvos = JSON.parse(localStorage.getItem(num_cnpj_rem));
    document.getElementById("nome_rem_cad_comp").value = "";

    if (localStorage.getItem(num_cnpj_rem) !== null) {
        if(typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_rem_cad_comp").value = cadastros_salvos.nome_cliente;      
    }
}

function preenchimento_automatico_dest_cad_comp() {
  let num_cnpj_dest = document.getElementById('cnpj_dest_cad_comp').value;
  let cadastros_salvos = JSON.parse(localStorage.getItem(num_cnpj_dest));

  document.getElementById("nome_dest_cad_comp").value = "";


  if (localStorage.getItem(num_cnpj_dest) !== null) {
      if(typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_dest_cad_comp").value = cadastros_salvos.nome_cliente;
  }
}

function cadastrar_comprovante() {
  const input = document.getElementById('foto_comprovante');
  let num_cnpj_rem = document.getElementById('cnpj_rem_cad_comp').value;
  let num_cnpj_dest = document.getElementById('cnpj_dest_cad_comp').value;
  let nome_remetente = document.getElementById('nome_rem_cad_comp').value;
  let nome_destinatario = document.getElementById('nome_dest_cad_comp').value;
  let numero_delcaracao = document.getElementById('num_dec_cad_comp').value;
  let numero_nf = document.getElementById('num_nf_cad_comp').value;
  let volume = document.getElementById('num_vol_cad_comp').value;
  let peso = document.getElementById('num_peso_cad_comp').value;

  if (numero_delcaracao == '') {
    alert('Necessário pelo menos informar o numero da declaração')
  } else if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imagemBase64 = event.target.result;
      let dados_comp = {
        num_cnpj_dest: num_cnpj_dest,
        num_cnpj_rem: num_cnpj_rem,
        nome_remetente: nome_remetente,
        nome_destinatario: nome_destinatario,
        numero_nf: numero_nf,
        numero_delcaracao: numero_delcaracao,
        volume: volume,
        peso: peso,
        imagemBase64: imagemBase64,
      }
      localStorage.setItem(numero_delcaracao, JSON.stringify(dados_comp));
      console.log(JSON.parse(localStorage.getItem(numero_delcaracao)));
      alert('Imagem salva com sucesso!');
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    alert('Selecione uma imagem para salvar.');
  }
}

function consultar_comprovantes() {
  let num_dec_cons = document.getElementById('busca_comprovante').value;
  let comp_salvo = JSON.parse(localStorage.getItem(num_dec_cons));

  document.getElementById('cnpj_rem_cons_comp').value == '';
  document.getElementById('cnpj_dest_cons_comp').value == '';
  document.getElementById('nome_rem_cons_comp').value == '';
  document.getElementById('nome_dest_cons_comp').value == '';
  document.getElementById('num_dec_cons_comp').value == '';
  document.getElementById('num_nf_cons_comp').value == '';
  document.getElementById('num_vol_cons_comp').value == '';
  document.getElementById('num_peso_cons_comp').value == '';


  if (localStorage.getItem(num_dec_cons) !== null) {
    console.log(JSON.parse(localStorage.getItem(num_dec_cons)));
    if(typeof comp_salvo.num_cnpj_dest !== 'undefined') document.getElementById('cnpj_dest_cons_comp').value = comp_salvo.num_cnpj_dest;
    if(typeof comp_salvo.num_cnpj_rem !== 'undefined') document.getElementById('cnpj_rem_cons_comp').value = comp_salvo.num_cnpj_rem;
    if(typeof comp_salvo.nome_remetente !== 'undefined') document.getElementById('nome_rem_cons_comp').value = comp_salvo.nome_remetente;
    if(typeof comp_salvo.nome_destinatario !== 'undefined') document.getElementById('nome_dest_cons_comp').value = comp_salvo.nome_destinatario;
    if(typeof comp_salvo.numero_nf !== 'undefined') document.getElementById('num_nf_cons_comp').value = comp_salvo.numero_nf;
    if(typeof comp_salvo.numero_delcaracao !== 'undefined') document.getElementById('num_dec_cons_comp').value = comp_salvo.numero_delcaracao;
    if(typeof comp_salvo.volume !== 'undefined') document.getElementById('num_vol_cons_comp').value = comp_salvo.volume;
    if(typeof comp_salvo.peso !== 'undefined') document.getElementById('num_peso_cons_comp').value = comp_salvo.peso;
    if (comp_salvo.imagemBase64) {
      let imagem_comp = document.getElementById('foto_comp_cons')
      imagem_comp.src = comp_salvo.imagemBase64;
    }
  }
}