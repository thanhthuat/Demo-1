import { mutatorAction } from "satcheljs";
import getStore ,{storeType1,initialData} from "../store/store-task.store";

const resetInitial = mutatorAction("RESET", function resetInitial() {
  //   console.log("reset" ,initialData.create ,initialData.done);
  // getStore().create =initialData.create ;
  // getStore().done =initialData.done ;
  // getStore().inProgress =initialData.inProgress;
  // getStore().todo =initialData.todo;
 
});

export default resetInitial;