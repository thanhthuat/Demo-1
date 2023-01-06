import { mutatorAction } from "satcheljs";
import getStore ,{storeType1} from "../store/store-task.store";
import {getStoreTask} from '../Selectors/selector-get-Store.selector'
import { SetLocalStore } from "../../helpers/localStorageAction";
interface obj {
  title:string,
  content:string,
  type: string
}
const addTask = mutatorAction("ADD_TODO", function addTask(obj: obj) {
  const randomId = Math.floor(Math.random() * 1000);
 
  getStore().store[`${obj.type}`].items.push({
    id:`${obj.type}-${randomId}`,
    prefix:obj.type,
    content:obj.content,
    title:obj.title
  }) 
  const data = getStoreTask() ;
  console.log("🚀 ~ file: addTodoAction.ts:20 ~ addTask ~ data", typeof data,data)
  localStorage.setItem('storeTask',JSON.stringify(data)) 
  //SetLocalStore(JSON.stringify(data))
});

export default addTask;