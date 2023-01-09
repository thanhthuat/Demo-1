import { mutatorAction } from "satcheljs";
import getStore  from "../store/store-task.store";
import {getStoreTask} from '../selectors/get-store.selector'
import { SetLocalStore } from "../../helpers/localStorageAction";
interface obj {
  title:string,
  content:string,
  type: string
}
const addTask = mutatorAction("CREATE__TASK", function addTask(obj: obj) {
  const randomId = Math.floor(Math.random() * 1000);
 
  getStore().store[`${obj.type}`].items.push({
    id:`${obj.type}-${randomId}`,
    prefix:obj.type,
    content:obj.content,
    title:obj.title
  }) 
  const data = getStoreTask() ;
  localStorage.setItem('storeTask',JSON.stringify(data)) 
  //SetLocalStore(JSON.stringify(data))
});

export default addTask;