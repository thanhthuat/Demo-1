import { orchestrator } from "satcheljs";
import { apiGetBucket } from "../../api/api-bucket";
import getBucketStore from "../actions/get-localstore.action";
import getLocalStore from "../mutator-actions/get-localstore.mutator";

const getLoacalStoreOrchestrator = orchestrator(getBucketStore, async (actionMessage) => {
   const data = await apiGetBucket();
 return  getLocalStore(data) 
});

export default getLoacalStoreOrchestrator;