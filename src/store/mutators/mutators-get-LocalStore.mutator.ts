import { mutatorAction } from "satcheljs";
import getStore  from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";

interface obj {
  title:string,
  content:string,
 
}
const getLocalStore = mutatorAction("GET__LOCALSTORE", function getLocalStore(obj: IlocalStore) {
  
  getStore().store = obj ;

 
});

export default getLocalStore;