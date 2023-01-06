import { mutatorAction } from "satcheljs";
import getStore ,{storeType1} from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";

interface obj {
  title:string,
  content:string,
  type: keyof storeType1
}
const createBucket = mutatorAction("GET__LOCALSTORE", function createBucket(name:string) {
const data:IlocalStore = JSON.parse(localStorage.getItem('storeTask') || '{}')  ;

data[`${name}`] = {title:name ,items: []} ;
console.log("🚀 ~ file: mutator-create-Bucket.mutator.ts:13 ~ createBucket ~ data", data)
localStorage.setItem('storeTask',JSON.stringify(data)) 
  getStore().store = data ;
  // getStore()[`${obj.type}`].push({
  //   id:`${obj.type}-${randomId}`,
  //   prefix:obj.type,
  //   content:obj.content,
  //   title:obj.title

  // }) 
 
});

export default createBucket;