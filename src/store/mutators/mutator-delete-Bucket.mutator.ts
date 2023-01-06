import { mutatorAction } from "satcheljs";
import { getStoreTask } from "../Selectors/selector-get-Store.selector";
import getStore ,{storeType1} from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";

interface obj {
  title:string,
  content:string,
  type: keyof storeType1
}
const deleteBucket = mutatorAction("DELETE_BUCKET", function createBucket(name:string) {
    delete getStore().store[`${name}`]
    const data = getStoreTask() ;
    localStorage.setItem('storeTask',JSON.stringify(data)) ;
 
});

export default deleteBucket;