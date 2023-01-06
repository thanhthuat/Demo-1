import { orchestrator } from "satcheljs";
import createBuckets from "../actions/action-create-Buckets";
import createBucketMutator from "../mutators/mutator-create-Bucket.mutator";

const createBucket = orchestrator(createBuckets, async (actionMessage) => {
// console.log("🚀 ~ file: orchestrator-create-Bucket.orchestrators.ts:6 ~ createBucket ~ actionMessage", actionMessage)
 return setTimeout(() => createBucketMutator(actionMessage.title), 500);
});

export default createBucket;