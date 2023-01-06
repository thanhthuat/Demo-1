import { orchestrator } from "satcheljs";
import addTodo from "../actions/action-get-LocalStore";
import getLocalStore from "../mutators/mutators-get-LocalStore.mutator";

const getLoacalStoreOrchestrator = orchestrator(addTodo, async (actionMessage) => {
const store = localStorage.getItem('storeTask') || '{}';
 return  getLocalStore(store) 
});

export default getLoacalStoreOrchestrator;