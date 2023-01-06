import { createStore } from "satcheljs"; 
import {Itask,Istore} from './store-task.type';
import '../orchestrators/orchestrator-create-Bucket.orchestrators';
import '../orchestrators/orchestrator-delete-Bucket.orchestrators';
import '../orchestrators/orchestrator-get-LocalStore.orchestrators';
import '../mutators/mutator-create-Bucket.mutator';
import '../mutators/mutator-delete-Bucket.mutator';
interface task{
  id:string ,
  prefix:string,
  content: string,
  title:string

}
export  interface storeType1{
  create:task[],
  todo:task[],
  inProgress:task[],
  done:task[]
}

export const initialData = {
    store:{
        
    }
  
  
  };

let getStore = createStore <Istore>("todoStore", initialData);

export default getStore;
 