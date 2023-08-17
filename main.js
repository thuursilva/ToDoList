//variavéis
let toDoListArray = [];

const form = document.querySelector(".form");
const input = form.querySelector(".form_input");
const ul = document.querySelector(".toDoList");

//eventos
form.addEventListener("submit", e =>{
    //previne o comportamento padrão de relogar a página
    e.preventDefault();

    //define um único ID ao item
    let itemId = String(Date.now());

    //recebe o valor do input
    let toDoItem = input.value;

    //funções
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);

    //limpa o input
    input.value= " ";

})

ul.addEventListener("dblclick", e =>{
    let id = e.target.getAttribute("data-id");
    //condição caso o usuário clique em outro local
    if(!id) return

    //eventos retornados
    removeItemFromDom(id);
    removeItemFromArray(id);
})

//funções

//adicionando um item ao DOM
function addItemToDOM(itemId, toDoItem){
    //criando um elemento li
    const li = document.createElement("li");
    li.setAttribute("data-id", itemId);

    //adiciona o texto da li 
    li.innerText = toDoItem;

    //inserindo item na lista
    ul.appendChild(li);
}

//adicionando um item na array
function addItemToArray(itemId, toDoItem){
    //adiciona o item na array com ID
    toDoListArray.push({id:itemId, text:toDoItem});
    console.log(toDoListArray);//print da lista no console
}

//remove o item do DOM
function removeItemFromDom(id) {
    // selecione o item da lista pelo ID
    var li = document.querySelector(`[data-id="${id}"]`);

    // remova o item da lista
    ul.removeChild(li);
}

//remove o item da Array
function removeItemFromArray(id){
    //cria uma nova toDoListArray com os li que não possuem o ID em parâmetro
    toDoListArray = toDoListArray.filter((item) => item.id !== id);
    console.log(toDoListArray);
}

//insere uma linha na li ao clicar, atividade realizada
ul.addEventListener("click", e =>{
    let item = e.target;
    item.classList.add("done");
})

