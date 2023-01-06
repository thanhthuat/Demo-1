import { orchestrator } from "satcheljs";
import deleteBucket from "../actions/action-delete-Bucket";
import deleteBucketMutator from "../mutators/mutator-delete-Bucket.mutator";

const handleDeleteBucket = orchestrator(deleteBucket, async (actionMessage) => {
// console.log("🚀 ~ file: orchestrator-create-Bucket.orchestrators.ts:6 ~ createBucket ~ actionMessage", actionMessage)
 return setTimeout(() => deleteBucketMutator(actionMessage.title), 500);
});

export default handleDeleteBucket;