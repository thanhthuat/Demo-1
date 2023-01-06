import { mutatorAction ,mutator } from "satcheljs";
import { getStoreTask } from "../Selectors/selector-get-Store.selector";
import getStore ,{storeType1} from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";
import {deleteBucketAction} from '../actions/action-delete-Bucket';

interface obj {
  title:string,
  content:string,
  type: keyof storeType1
}

mutator(deleteBucketAction, (data) => {
    getStore().store = data.data ;
    
  });
  
// const deleteBucket = mutatorAction("DELETE_BUCKET", function createBucket(obj:IlocalStore) {
//      getStore().store =obj ;
// });
// export default deleteBucket;