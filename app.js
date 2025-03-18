//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos  =[];
let lista   = document.getElementById('listaAmigos');

function adicionarAmigo(){
   let nomeAdicionado = document.querySelector('input').value;
   
   if (nomeAdicionado == ""){
    alert("Por favor, insira um nome válido.");
   } else{
    amigos.push(nomeAdicionado);
    limparCampo();
    }
    atualizarLista();
}


function limparCampo(){
    nomeAdicionado = document.querySelector('input');
    nomeAdicionado.value = "";
}

function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}
