    function criaCartao (categoria, pergunta, resposta){ 
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML =`
    <div class="conteudo-cartao">
        <h3> ${categoria}</h3>
        <div class="pergunta-cartao">
        <p> ${pergunta}</p>
    </div>
        <div class="respostas-cartao">
        <p>${resposta}</p>
    </div>
    </div>
    `
    let respostaEstavisivel = false;

    function viracartao (){
        respostaEstavisivel = respostaEstavisivel;
    cartao.classList.toggle('active',respostaEstavisivel)
    }
    cartao.addEventListener('click',viracartao)


    container.appendChild(cartao)
    }
    
    