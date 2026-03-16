/*
Lista de tarefa
    [x] Saber quando o botao foi clicado
    [x] Pegar o texto dentro do input
    [x]olocar esse texto na tela
    [] Deletar a tarefa da tela (quando cliquar no X)
*/

function adicionarTarefa(){
    let valorDoInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'
    
    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value
 = ''

}

function deletarTarefa (li) {
   li.parentElement.remove()
}


