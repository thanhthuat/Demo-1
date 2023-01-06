import { mutatorAction } from "satcheljs";
import getStore ,{storeType1} from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";

interface obj {
  title:string,
  content:string,
 
}
const getLocalStore = mutatorAction("GET__LOCALSTORE", function getLocalStore(obj: string) {
  
  getStore().store = JSON.parse(obj)  ;
  console.log("🚀 ~ file: mutators-get-LocalStore.mutator.ts:13 ~ getLocalStore ~ JSON.parse(obj)", JSON.parse(obj))
  // getStore()[`${obj.type}`].push({
  //   id:`${obj.type}-${randomId}`,
  //   prefix:obj.type,
  //   content:obj.content,
  //   title:obj.title

  // }) 
 
});

export default getLocalStore;