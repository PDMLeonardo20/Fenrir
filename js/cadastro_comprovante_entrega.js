var numero_delcaracao = document.getElementById('num_dec_cad_comp').value;
var num_vol = document.getElementById('num_vol_cad_comp').value;
var num_peso = document.getElementById('num_peso_cad_comp').value;

var num_cnpj_rem = document.getElementById('cnpj_rem_cad_comp').value;
var nome_remetente = document.getElementById('nome_rem_cad_comp').value;
var num_cnpj_dest = document.getElementById('cnpj_dest_cad_comp').value;
var nome_destinatario = document.getElementById('nome_dest_cad_comp').value;

function preenchimento_automatico_rem_cad_comp() {
    let cadastros_salvos = JSON.parse(localStorage.getItem(num_cnpj_rem));
    document.getElementById("nome_rem_cad_comp").value = "";

    if (localStorage.getItem(num_cnpj_rem) !== null) {
        if(typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_rem_cad_comp").value = cadastros_salvos.nome_cliente;      
    }
}

function preenchimento_automatico_dest_cad_comp() {
    let cadastros_salvos = JSON.parse(localStorage.getItem(num_cnpj_dest));

    document.getElementById("nome_dest_cad_comp").value = "";


    if (localStorage.getItem(num_cnpj_dest) !== null) {
        if(typeof cadastros_salvos.nome_cliente !== 'undefined')document.getElementById("nome_dest_cad_comp").value = cadastros_salvos.nome_cliente;
    }
}

function salvarImagem() {
    const input = document.getElementById('foto_comprovante');
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const imagemBase64 = event.target.result;
        localStorage.setItem(numero_delcaracao, imagemBase64);
        alert('Imagem salva com sucesso!');
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      alert('Selecione uma imagem para salvar.');
    }
  }