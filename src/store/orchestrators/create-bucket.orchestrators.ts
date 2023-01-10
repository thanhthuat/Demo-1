import { orchestrator } from "satcheljs";
import { apiCreateBucket } from "../../api/api-bucket";
import { createBucket1 , createBucketAction} from '../actions';


const createBucket = orchestrator(createBucketAction, async (actionMessage) => {
    console.log("🚀 ~ file: create-bucket.orchestrators.ts:7 ~ createBucket ~ actionMessage", actionMessage)
    const data =  await apiCreateBucket(actionMessage.title) ;
    createBucket1(data);
   
 
});

export default createBucket;