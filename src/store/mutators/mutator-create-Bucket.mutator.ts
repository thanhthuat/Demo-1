import { mutatorAction ,} from "satcheljs";
import getStore ,{storeType1} from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";

interface obj {
  title:string,
  content:string,
  type: keyof storeType1
}
const createBucket = mutatorAction("GET__LOCALSTORE", function createBucket(data) {
  console.log("🚀 ~ file: mutator-create-Bucket.mutator.ts:11 ~ createBucket ~ data", data)
  getStore().store = data ;
 
});

export default createBucket;