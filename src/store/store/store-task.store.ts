import { createStore } from "satcheljs"; 
import {Itask,Istore} from './store-task.type';
// import "../mutators/addTodo";

// type MyType = {
//     todos: {id:number,text:string}[],
// }
// interface task {
//     [name: number]:{id:number ,content:string}
// }
// interface storeType {
//     tasks: task ,
//     columns:{[name:string]:{id:string ,title:string,taskIds:number[]}},
//     columnOrder:string[]

// }
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
 