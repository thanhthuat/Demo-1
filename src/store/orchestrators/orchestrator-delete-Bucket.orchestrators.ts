
import { orchestrator } from "satcheljs";
import { apiDeleteBucket } from "../../api/api-create-Bucket";
import deleteBucket ,{deleteBucketAction} from "../actions/action-delete-Bucket";


const handleDeleteBucket = orchestrator(deleteBucket, async (actionMessage) => {
 
 const data =   await apiDeleteBucket(actionMessage.title);
 deleteBucketAction(data);
 //return setTimeout(() => deleteBucketMutator(data), 100);
});

export default handleDeleteBucket;