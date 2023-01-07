import { createStore } from "satcheljs"; 
import {Itask,Istore} from './store-task.type';
import '../orchestrators/orchestrator-create-Bucket.orchestrators';
import '../orchestrators/orchestrator-delete-Bucket.orchestrators';
import '../orchestrators/orchestrator-get-LocalStore.orchestrators';
import '../mutators/mutator-create-Bucket.mutator';
import '../mutators/mutator-delete-Bucket.mutator';


export const initialData = {
    store:{   
    }
  
  };

let getStore = createStore <Istore>("todoStore", initialData);

let getStore2 = createStore <any>("todoStore2", {loading:true,data:[ ,{titel:'đ'}]});
export default getStore;
 