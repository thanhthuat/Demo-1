import { mutatorAction } from "satcheljs";
import getStore from "../store/store-task.store";
import {getStoreTask} from '../Selectors/selector-get-Store.selector'
import {IlocalStore} from "../store/store-task.type";

interface obj {
  oldtitile:string,
  newtitle:string,
 
}
const editBucket = mutatorAction("EDIT__BUCKET", function editBucket(obj: obj) {
   if(obj.newtitle !== obj.oldtitile){
    getStore().store[`${obj.newtitle}`] =getStore().store[`${obj.oldtitile}`] ;
    delete getStore().store[`${obj.oldtitile}`]
    const data = getStoreTask() ;
    localStorage.setItem('storeTask',JSON.stringify(data)) ;
   }
   
  });


export default editBucket;