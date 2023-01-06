import { orchestrator } from "satcheljs";
import { apiCreateBucket } from "../../api/api-create-Bucket";
import createBuckets from "../actions/action-create-Buckets";
import createBucketMutator from "../mutators/mutator-create-Bucket.mutator";

const createBucket = orchestrator(createBuckets, async (actionMessage) => {
    const data =  await apiCreateBucket(actionMessage.title) ;
  return setTimeout(() => createBucketMutator(data), 100);
});

export default createBucket;