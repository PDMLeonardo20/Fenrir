

var lista_cubagens = [];
var lista_cubagens_comp = [];
var lista_peso_total = [];

var lista_nota_fiscal = [];
var lista_altura = [];
var lista_largura = [];
var lista_profundidade = [];
var lista_peso_nota_fiscal = [];
var lista_status = [];
var lista_volumes = [];

var data = new Date();
var dia = data.getDay();
var mes = data.getMonth();
var ano = data.getFullYear();
var dia_hoje = `${dia}-${mes}-${ano}`;
let options = { timeZone: 'America/Sao_Paulo', day:'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};
let data_hoje = data.toLocaleString('pt-BR', options);
document.getElementById('data_atual').innerHTML = data_hoje;



    

function calcular_cubagem() {
    var numreo_nota_fiscal = document.getElementById('numero_nota_fiscal').value;
    var altura = document.getElementById('altura').value;
    var largura = document.getElementById('largura').value;
    var profundidade = document.getElementById('profundidade').value;
    var volumes = document.getElementById('volumes').value;
    var peso_nota_fiscal = document.getElementById('peso_nota_fiscal').value;
    var embarcou = document.getElementById('embarcou').value;

    console.log(numreo_nota_fiscal)
    if (numreo_nota_fiscal == "") {
        alert('É necessário informar um número de nota fiscal');
    } else if (altura == "") {
        alert('É necessário informar uma altura');
    } else if (largura == "") {
        alert('É necessário informar uma altura');
    } else if (profundidade == "") {
        alert('É necessário informar uma profundidade');
    } else if (peso_nota_fiscal == "") {
        alert('É necessário informar um peso em quilos');
    } else {
        //troca as virgulas por pontos pra poder fazer o calculo da cubagem
        altura = altura.replace(',','.');
        largura = largura.replace(',','.');
        profundidade = profundidade.replace(',','.');
        peso_nota_fiscal = peso_nota_fiscal.replace(',','.');
        //converte de string pra float
        altura = parseFloat(altura)
        largura = parseFloat(largura)
        profundidade = parseFloat(profundidade)
        peso_nota_fiscal = parseFloat(peso_nota_fiscal)

        console.log(altura , largura , profundidade , peso_nota_fiscal) // manda no console pra ver se bombou

        var resultado_cubagem = altura * largura * profundidade * volumes; //calculo maligno da cubagem

        
        if (embarcou == 'Sim') {
            lista_cubagens.push(resultado_cubagem);
            lista_peso_total.push(peso_nota_fiscal);
        } else if (embarcou == "Complementar") {
            lista_peso_total.push(peso_nota_fiscal);
            lista_cubagens_comp.push(resultado_cubagem);
            lista_cubagens.push(resultado_cubagem)
        }


        lista_altura.push(altura);
        lista_largura.push(largura);
        lista_profundidade.push(profundidade);
        lista_nota_fiscal.push(numreo_nota_fiscal);
        lista_peso_nota_fiscal.push(peso_nota_fiscal);
        lista_status.push(embarcou)
        lista_volumes.push(volumes);
        
        document.getElementById('dados_inseridos').innerHTML += "<th scope='row'>#</th><td>"+numreo_nota_fiscal+"</td><td>"+altura+"</td><td>"+largura+"</td><td>"+profundidade+"</td><td>"+volumes+"</td><td>"+peso_nota_fiscal+"</td><td>"+resultado_cubagem.toFixed(2)+"</td><td>"+embarcou+'</td>'
        
        document.getElementById('dados_adicionados').innerHTML = lista_status.length;
        //limpa os campos e foca no campo 'altura' pra preencher um novo calculo de cubagem
        document.getElementById('altura').value = '';
        document.getElementById('largura').value = '';
        document.getElementById('profundidade').value = '';
        document.getElementById('volumes').value = '';
        document.getElementById('peso_nota_fiscal').value = '';
        document.getElementById('altura').focus()
    }
}

var renca_de_dados = {
    l_cubagens: lista_cubagens,
    l_cubagens_comp: lista_cubagens_comp,
    l_numero_nf: lista_nota_fiscal,
    l_altura: lista_altura,
    l_largura: lista_largura,
    l_profundidade: lista_profundidade,
    l_volumes: lista_volumes,
    l_peso_nf: lista_peso_nota_fiscal,
    l_status: lista_status,
}

function salva_dados(){
    localStorage.setItem('dados',JSON.stringify(renca_de_dados))
    var dados_salvos = JSON.parse(localStorage.getItem('dados'));
    console.log(dados_salvos);
}

function recupera_dados() {
    var dados_salvos = JSON.parse(localStorage.getItem('dados'));
    console.log(dados_salvos)

    if (typeof dados_salvos.l_cubagens !== 'undefined'){
        for (const i in dados_salvos.l_cubagens) {
            var cub_s = dados_salvos.l_cubagens[i];
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_cubagens, i)) {
                if (typeof cub_s === 'number') {
                    lista_cubagens.push(cub_s);
                } else if(typeof cub_s === 'string'){
                    cub_s = parseFloat(cub_s);
                    lista_cubagens.push(cub_s);
                }
            }
        }
    }
    if (typeof dados_salvos.l_cubagens_comp !== 'undefined'){
        for (const i in dados_salvos.l_cubagens_comp) {
            var cub_s = dados_salvos.l_cubagens_comp[i];
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_cubagens_comp, i)) {
                if (typeof cub_s === 'number') {
                    lista_cubagens_comp.push(cub_s);
                } else if(typeof cub_s === 'string'){
                    cub_s = parseFloat(cub_s);
                    lista_cubagens_comp.push(cub_s);
                }
            }
        }
    }
    console.log(lista_cubagens)

    if (typeof dados_salvos.l_volumes !== 'undefined'){
        for (const i in dados_salvos.l_volumes) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_cubagens, i)) {
                const element = dados_salvos.l_volumes[i];
                lista_volumes.push(element);
            }
        }
    }

    if (typeof dados_salvos.l_largura !== 'undefined'){
        for (const i in dados_salvos.l_largura) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_largura, i)) {
                const element = dados_salvos.l_largura[i];
                lista_largura.push(element);
            }
        }
    }

    if (typeof dados_salvos.l_profundidade !== 'undefined'){
        for (const i in dados_salvos.l_profundidade) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_profundidade, i)) {
                const element = dados_salvos.l_profundidade[i];
                lista_profundidade.push(element);
            }
        }
    }

    if (typeof dados_salvos.l_altura !== 'undefined') {
        for (const j in dados_salvos.l_altura) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_altura, j)) {
                const element = dados_salvos.l_altura[j];
                lista_altura.push(element);
            }
        }
    }
    if (typeof dados_salvos.l_numero_nf !== 'undefined') {
        for (const i in dados_salvos.l_numero_nf) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_numero_nf, i)) {
                const element = dados_salvos.l_numero_nf[i];
                lista_nota_fiscal.push(element);
            }
        }
    }
    console.log(lista_nota_fiscal)
    if (typeof dados_salvos.l_peso_nf !== 'undefined') {
        for (const i in dados_salvos.l_peso_nf) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_peso_nf, i)) {
                const element = dados_salvos.l_peso_nf[i];
                lista_peso_nota_fiscal.push(element)
                lista_peso_total.push(element)
            }
        }
    }
    if (typeof dados_salvos.l_status !== 'undefined') {
        for (const i in dados_salvos.l_status) {
            if (Object.prototype.hasOwnProperty.call(dados_salvos.l_status, i)) {
                const element = dados_salvos.l_status[i];
                lista_status.push(element)
            }
        }
    }
    document.getElementById('dados_inseridos').innerHTML = ''
    for (const s in dados_salvos.l_cubagens) {
        if (Object.prototype.hasOwnProperty.call(dados_salvos.l_cubagens, s)) {
            //const sees = dados_salvos.l_cubagens[s];
            document.getElementById('dados_inseridos').innerHTML += "<th scope='row'>#</th><td>"+dados_salvos.l_numero_nf[s]+"</td><td>"+dados_salvos.l_altura[s].toFixed(2)+"</td><td>"+dados_salvos.l_largura[s].toFixed(2)+"</td><td>"+dados_salvos.l_profundidade[s].toFixed(2)+"</td><td>"+dados_salvos.l_volumes[s]+"</td><td>"+dados_salvos.l_peso_nf[s].toFixed(3)+"</td><td>"+dados_salvos.l_cubagens[s].toFixed(2)+"</td><td>"+dados_salvos.l_status[s]+'</td>';
        }
    }

    
}

function calcular_cubagem_total() {
    //percorre a lista e soma todos os valores da lista e retorna a soma total
    var cubagem_total = lista_cubagens.reduce((accumulator, value) => {
        return accumulator + value;
    },0);
    var peso_final = lista_peso_total.reduce((accumulator, value) => {
        return accumulator + value;
    },0);

    // faz o calculo e avalia se é mais negócio ir pela cubagem ou pelo peso na nota fiscal
    var peso_taxado = cubagem_total * 300
    document.getElementById('resultado_cubagem').innerHTML = cubagem_total.toFixed(2) + 'm³';
    if (peso_taxado >= peso_final) {
        document.getElementById('peso_ou_cubagem').innerHTML = 'Cubagem'
    } else if (peso_final >= peso_taxado) {
        document.getElementById('peso_ou_cubagem').innerHTML = 'Peso da nota'
    }
}

function gerar_pdf_cubagens_embarcadas_dia() {

    var nome_conferente = document.getElementById('nome_conf').value;
    var nome_emissor = document.getElementById('nome_emissor').value;

    var peso_final = lista_peso_total.reduce((accumulator, value) => {
        return accumulator + value;
    },0);

    var cubagem_total = lista_cubagens.reduce((accumulator, value) => {
        return accumulator + value;
    },0);
    
    var cubagem_total_comp = lista_cubagens_comp.reduce((accumulator, value) => {
        return accumulator + value;
    },0);

    peso_final = peso_final.toFixed(3);
    cubagem_total = parseFloat(cubagem_total);
    cubagem_total = cubagem_total.toFixed(2);

    cubagem_total_comp = cubagem_total_comp.toFixed(2);

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

    pdf.setFontSize(14);
    pdf.setFont('Arial', 'bold');
    pdf.text('RELATÓRIO DE CUBAGENS EMBARCADAS NO DIA', 60, 10);
    pdf.text('Data: '+data_hoje,115,25,'center')
    pdf.line(1,30,209,30); // borda abaixo da logo

    pdf.setFontSize(10);
    pdf.setFont('Arial', 'bold');
    pdf.text('Nota Fiscal', 3, 35);
    pdf.text('Altura', 28, 35);
    pdf.text('Largura', 48, 35);
    pdf.text('Profundidade', 70, 35);
    pdf.text('Volumes',97,35)
    pdf.text('Peso', 127, 35);
    pdf.text('Cubagem', 157, 35);
    pdf.text('Embarcou', 182, 35)
    pdf.line(1, 38, 209, 38)
    pdf.line(26, 30, 26, 260)
    pdf.line(45, 30, 45, 260)
    pdf.line(68, 30, 68 , 260)
    pdf.line(95, 30, 95, 260)
    pdf.line(125, 30, 125, 260)
    pdf.line(155, 30, 155, 260)
    pdf.line(180,30,180,260)

    
    var y_dados = 42;
    var y_linha_cubagem = 44;

    


    for (let i = 0; i < 39; i++) {
        var cubagem = parseFloat(lista_cubagens[i]);
        cubagem = cubagem.toFixed(2);
        cubagem = cubagem.toString();
        pdf.text(cubagem+'m³', 157, y_dados);
        cubagem = parseFloat(lista_cubagens[i]);
        y_dados += 5.8;
    } 
    y_dados = 42;
    for (let i = 0; i < 39; i++) {
        const num_nf = lista_nota_fiscal[i].toString();
        pdf.text(num_nf, 5, y_dados);
        y_dados += 5.8;
    }
    y_dados = 42;
    for (let i = 0; i < 39; i++) {  
        var altura = lista_altura[i].toFixed(2);
        altura = altura.toString();
        pdf.text(altura, 28, y_dados);
        y_dados += 5.8;
    }
    y_dados = 42;
    for (let i = 0; i < 39; i++) {
        var largura = lista_largura[i].toFixed(2);
        largura = largura.toString();
        pdf.text(largura, 48, y_dados);
        y_dados += 5.8;
    }
    y_dados = 42;
    for (let i = 0; i < 39; i++) {
        var profundidade = lista_profundidade[i].toFixed(2);
        profundidade = profundidade.toString();
        pdf.text(profundidade,70, y_dados);
        y_dados += 5.8;
    }

    y_dados = 42;

    for (let i = 0; i < 39; i++) {
        var vol = lista_volumes[i];
        vol = vol.toString();
        pdf.text(vol,97, y_dados);
        y_dados += 5.8;
    }
    y_dados = 42;
    for (let i = 0; i < 39; i++) {
        var status = lista_peso_nota_fiscal[i].toFixed(3);
        status = status.toString();
        pdf.text(status+'Kg',127, y_dados);
        pdf.line(1, y_linha_cubagem, 209, y_linha_cubagem)
        y_dados += 5.8;
        y_linha_cubagem += 5.8;
    }
    y_dados = 42;
    for (let i = 0; i < 39; i++) {  
        const status = lista_status[i];
        pdf.text(status,182,y_dados);
        y_dados += 5.8;
    }

    if (lista_peso_nota_fiscal.length >=40) {
        pdf.addPage()

        //borda em volta da folha
        pdf.line(1, 1, 209, 1);
        pdf.line(1, 1, 1, 294);
        pdf.line(1, 294, 209, 294);
        pdf.line(209,1,209,294);

        pdf.addImage(img, "PNG", 1,2,40,25)

        pdf.setFontSize(14);
        pdf.setFont('Arial', 'bold');
        pdf.text('RELATÓRIO DE CUBAGENS EMBARCADAS NO DIA', 60, 10);
        pdf.text('Data: '+data_hoje,115,25,'center')
        pdf.line(1,30,209,30); // borda abaixo da logo

        pdf.setFontSize(10);
        pdf.setFont('Arial', 'bold');
        pdf.text('Nota Fiscal', 3, 35);
        pdf.text('Altura', 28, 35);
        pdf.text('Largura', 48, 35);
        pdf.text('Profundidade', 70, 35);
        pdf.text('Volumes',97,35)
        pdf.text('Peso', 127, 35);
        pdf.text('Cubagem', 157, 35);
        pdf.text('Embarcou', 182, 35)
        pdf.line(1, 38, 209, 38)
        pdf.line(26, 30, 26, 260)
        pdf.line(45, 30, 45, 260)
        pdf.line(68, 30, 68 , 260)
        pdf.line(95, 30, 95, 260)
        pdf.line(125, 30, 125, 260)
        pdf.line(155, 30, 155, 260)
        pdf.line(180,30,180,260)

        for (let i = 40; i < lista_cubagens.length; i++) {
            var cubagem = parseFloat(lista_cubagens[i]);
            cubagem = cubagem.toFixed(2);
            cubagem = cubagem.toString();
            pdf.text(cubagem+'m³', 157, y_dados);
            cubagem = parseFloat(lista_cubagens[i]);
            y_dados += 5.8;
        } 
        y_dados = 42;
        for (let i = 40; i < lista_nota_fiscal.length; i++) {
            const num_nf = lista_nota_fiscal[i].toString();
            pdf.text(num_nf, 5, y_dados);
            y_dados += 5.8;
        }
        y_dados = 42;
        for (let i = 40; i < lista_altura.length; i++) {  
            var altura = lista_altura[i].toFixed(2);
            altura = altura.toString();
            pdf.text(altura, 28, y_dados);
            y_dados += 5.8;
        }
        y_dados = 42;
        for (let i = 40; i < lista_largura.length; i++) {
            var largura = lista_largura[i].toFixed(2);
            largura = largura.toString();
            pdf.text(largura, 48, y_dados);
            y_dados += 5.8;
        }
        y_dados = 42;
        for (let i = 40; i < lista_profundidade.length; i++) {
            var profundidade = lista_profundidade[i].toFixed(2);
            profundidade = profundidade.toString();
            pdf.text(profundidade,70, y_dados);
            y_dados += 5.8;
        }
    
        y_dados = 42;
    
        for (let i = 40; i < lista_volumes.length; i++) {
            var vol = lista_volumes[i];
            vol = vol.toString();
            pdf.text(vol,97, y_dados);
            y_dados += 5.8;
        }
        y_dados = 42;
        for (let i = 40; i < lista_peso_nota_fiscal.length; i++) {
            var status = lista_peso_nota_fiscal[i].toFixed(3);
            status = status.toString();
            pdf.text(status+'Kg',127, y_dados);
            pdf.line(1, y_linha_cubagem, 209, y_linha_cubagem)
            y_dados += 5.8;
            y_linha_cubagem += 5.8;
        }
        y_dados = 42;
        for (let i = 40; i < lista_status.length; i++) {  
            const status = lista_status[i];
            pdf.text(status,182,y_dados);
            y_dados += 5.8;
        }
    }
   

    pdf.setFont('Arial', 'normal')
    pdf.setFontSize(10);
    pdf.line(1,260,209,260);
    pdf.text('Conferente Responsável: '+nome_conferente,2,265);
    pdf.line(1, 267, 130, 267);
    pdf.line(130, 267, 130, 260);
    pdf.text('Emissor Responsável: '+nome_emissor, 2, 271);
    pdf.line(1, 273, 130, 273);
    pdf.line(130, 273, 130, 267);
    pdf.line(130, 273, 130, 294);
    pdf.setFontSize(9);
    pdf.text('Peso Embarcado', 2, 277);
    pdf.setFontSize(33);
    pdf.setFont('Arial', 'bold');
    pdf.text(peso_final.toString()+'Kg',5,289);
    pdf.line(75, 273, 75, 294);
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Cubagem Total', 77, 277);
    pdf.setFontSize(33);
    pdf.setFont('Arial', 'bold');
    pdf.text(cubagem_total+'m³',79, 289);
    pdf.setFontSize(9);
    pdf.setFont('Arial', 'normal');
    pdf.text('Cubagem Complementar', 132, 264);
    pdf.setFontSize(46);
    pdf.setFont('Arial', 'bold');
    pdf.text(cubagem_total_comp+"m³",132, 286);


    y_linha_cubagem = 44;
    y_dados = 42;

    pdf.save('Cubagens embarcadas - Dia:'+data_hoje+'.pdf');
}