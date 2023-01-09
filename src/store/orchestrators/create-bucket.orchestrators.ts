import { orchestrator } from "satcheljs";
import { apiCreateBucket } from "../../api/api-bucket";
import createBuckets, { createBucket1 } from "../actions/create-buckets.action";


const createBucket = orchestrator(createBuckets, async (actionMessage) => {
    const data =  await apiCreateBucket(actionMessage.title) ;
    createBucket1(data);
   
 
});

export default createBucket;