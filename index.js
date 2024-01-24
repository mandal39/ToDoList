import ItemList from "./ItemList.js";

let listContainer = document.getElementById('list');
let itemList = new ItemList.ItemList()
console.log(itemList);
itemList.itemList.forEach(item=>{
    listContainer.innerHTML += `<div>${item}</div>`
})
let addToList = ()=>{
    const toDoText = document.querySelector('#to-do-text').value;
    listContainer.innerHTML += `<div>${toDoText}</div>`
    itemList.addItem(toDoText);
}
document.getElementById('to-do-text').addEventListener('keypress', (event)=>{
    if(event.key == 'Enter'){
        addToList();
        document.getElementById('to-do-text').value = ''
    }
});
document.getElementById("add-button").addEventListener("click", addToList);