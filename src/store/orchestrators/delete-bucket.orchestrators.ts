
import { orchestrator } from "satcheljs";
import { apiDeleteBucket } from "../../api/api-bucket";
import deleteBucket ,{deleteBucketAction} from "../actions/delete-bucket.action";


const handleDeleteBucket = orchestrator(deleteBucket, async (actionMessage) => {
 
 const data =   await apiDeleteBucket(actionMessage.title);
 deleteBucketAction(data);
 //return setTimeout(() => deleteBucketMutator(data), 100);
});

export default handleDeleteBucket;