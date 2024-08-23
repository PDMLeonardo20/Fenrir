let db_comprovantes = new Localbase('db_comprovantes')

function cad_comp() {
    let numero_declaracao = document.getElementById('numero_declaracao').value;
    let numero_nota_fiscal = document.getElementById('numero_nota_fiscal').value;
    let volume_declaracao = document.getElementById('volume_declaracao').value;
    let peso_declaracao = document.getElementById('peso_declaracao').value;
    let foto_comprovante = document.getElementById('foto_comprovante');
    if (numero_declaracao == "") {
        document.getElementById('resultado_cad_comp').innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>Necessário informar um número de declaração.</p>"
    } else if(numero_nota_fiscal == ""){
        document.getElementById('resultado_cad_comp').innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>Necessário informar um numero de nota fiscal.</p>"
    }else if (foto_comprovante.files.length == 0){
        document.getElementById('resultado_cad_comp').innerHTML = "<p class='text-bg-danger p-3 mt-3 rounded-3'>Necessário anexar uma foto de um comprovante.</p>"
    } else if (foto_comprovante.files && foto_comprovante.files[0]){
        const reader = new FileReader();

        reader.readAsDataURL(foto_comprovante.files[0])
        reader.onload = function (e) {
            const foto_comp_b64 = e.target.result;
            db_comprovantes.collection('comprovantes').add({
                id: numero_nota_fiscal,
                numero_declaracao: numero_declaracao,
                volume_declaracao: volume_declaracao,
                peso_declaracao: peso_declaracao,
                foto_comprovante: foto_comp_b64,
            })
            db_comprovantes.collection('comprovantes').get().then(comps => {
                console.log(comps)
            })
        }
        document.getElementById('resultado_cad_comp').innerHTML = "<p class='text-bg-success p-3 mt-3 rounded-3'>Cadastro realizado com sucesso.</p>"
    }
}

function busca_comp() {
    let num_dec_busca = document.getElementById('buscar_comp').value;
    document.getElementById('i_comp_cons').src = '';
    db_comprovantes.collection('comprovantes').doc({ id: num_dec_busca }).get().then(comp => {
        document.getElementById('i_comp_cons').src = comp.foto_comprovante;
})
}