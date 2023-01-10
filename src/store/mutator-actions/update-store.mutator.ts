import { mutatorAction } from "satcheljs";
import { getStoreTask } from "../selectors/get-store.selector";
import getStore from "../store/store-task.store";
import {IlocalStore} from '../store/store-task.type'

export  const updateStore = mutatorAction("UPDATE_STORE", function updateStore(obj: IlocalStore) {
  console.log("🚀 ~ file: update-store.mutator.ts:7 ~ updateStore ~ obj", obj)
  
    getStore().store = obj ;
    const data = getStoreTask() ;
    localStorage.setItem('storeTask',JSON.stringify(data)) ;
  
});

// export default updateStore;