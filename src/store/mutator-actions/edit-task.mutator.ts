import { mutatorAction } from "satcheljs";
import { getStoreTask } from "../selectors/get-store.selector";
import getStore from "../store/store-task.store";

interface IeditTask {
    title:string,
    content:string,
    type:string,
    index:number,
    prefix:string,
    id:string

}

const editTask = mutatorAction("DELETE_TODO", function editTask (item:IeditTask
  
) {
    let format ={
        id:item.id,
            prefix:item.prefix,
			title: item.title,
			content: item.content,
    }
   getStore().store[`${item.type}`].items[item.index] = format ;
   const data = getStoreTask() ;
   localStorage.setItem('storeTask',JSON.stringify(data)) 
 
});

export default editTask;