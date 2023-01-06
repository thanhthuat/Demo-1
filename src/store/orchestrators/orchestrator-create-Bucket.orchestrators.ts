import { orchestrator } from "satcheljs";
import { apiCreateBucket } from "../../api/api-create-Bucket";
import createBuckets, { createBucket1 } from "../actions/action-create-Buckets";


const createBucket = orchestrator(createBuckets, async (actionMessage) => {
    const data =  await apiCreateBucket(actionMessage.title) ;
    createBucket1(data);
   
 
});

export default createBucket;