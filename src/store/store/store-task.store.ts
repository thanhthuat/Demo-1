import { createStore } from "satcheljs"; 
import {Itask,Istore} from './store-task.type';
// import '../orchestrators/create-bucket.orchestrators';
// import '../orchestrators/delete-bucket.orchestrators';
// import '../orchestrators/get-localstore.orchestrators';
// import '../mutator-actions/create-bucket.mutator';
// import '../mutator-actions/delete-bucket.mutator';


export const initialData = {
    store:{   
    }
  
  };

let getStore = createStore <Istore>("todoStore", initialData);
export default getStore;
 