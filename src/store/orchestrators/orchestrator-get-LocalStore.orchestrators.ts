import { orchestrator } from "satcheljs";
import { apiGetBucket } from "../../api/api-create-Bucket";
import getBucketStore from "../actions/action-get-LocalStore";
import getLocalStore from "../mutators/mutators-get-LocalStore.mutator";

const getLoacalStoreOrchestrator = orchestrator(getBucketStore, async (actionMessage) => {
   const data = await apiGetBucket();
 return  getLocalStore(data) 
});

export default getLoacalStoreOrchestrator;