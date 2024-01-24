class ItemList{
    constructor(){
        this.itemList = [];
        if(JSON.parse(localStorage.getItem('To-Do-List'))!=null){
            this.itemList = JSON.parse(localStorage.getItem('To-Do-List'));
        };
    }
    setLocalStorage(){
        console.log(this.itemList);
        localStorage.setItem('To-Do-List', JSON.stringify(this.itemList));
    }
    addItem(item){
        this.itemList.push(item);
        this.setLocalStorage();
    }
    deleteItem = (id) => {
        this.itemList = this.itemList.filter(item=>item.id!=id);
        this.setLocalStorage();
    }
    updateIem = (id, updateItem) =>{
        this.itemList = this.itemList.map(item=>{item.id===id ? updateItem : item})
        this.setLocalStorage()
    }
}
export default{ItemList}