import { mutatorAction } from "satcheljs";
import { getStoreTask } from "../Selectors/selector-get-Store.selector";
import getStore from "../store/store-task.store";
import {IlocalStore} from '../store/store-task.type'

const updateStore = mutatorAction("UPDATE_STORE", function updateStore(obj: IlocalStore) {
  
    getStore().store = obj ;
    const data = getStoreTask() ;
    localStorage.setItem('storeTask',JSON.stringify(data)) ;
  
});

export default updateStore;