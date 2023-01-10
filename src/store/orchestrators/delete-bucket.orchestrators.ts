
import { orchestrator } from "satcheljs";
import { apiDeleteBucket } from "../../api/api-bucket";
import  {deleteBucketAction,deleteBucket} from "../actions/delete-bucket.action";


const handleDeleteBucket = orchestrator(deleteBucket, async (actionMessage) => {
 console.log("🚀 ~ file: delete-bucket.orchestrators.ts:8 ~ handleDeleteBucket ~ actionMessage", actionMessage)
 
 const data =   await apiDeleteBucket(actionMessage.title);
 deleteBucketAction(data);
 //return setTimeout(() => deleteBucketMutator(data), 100);
});

export default handleDeleteBucket;