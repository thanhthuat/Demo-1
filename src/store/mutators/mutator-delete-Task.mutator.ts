import { mutatorAction } from "satcheljs";
import { getStoreTask } from "../Selectors/selector-get-Store.selector";
import getStore, { storeType1 } from "../store/store-task.store";

const deleteTodo = mutatorAction("DELETE_TODO", function deleteTodo (
  index: number,type :  keyof storeType1
) {
    
   getStore().store[`${type}`].items.splice(index, 1);
   const data = getStoreTask() ;
   localStorage.setItem('storeTask',JSON.stringify(data)) 
 
});

export default deleteTodo;