import { orchestrator } from "satcheljs";
import { apiDeleteBucket } from "../../api/api-create-Bucket";
import deleteBucket from "../actions/action-delete-Bucket";
import deleteBucketMutator from "../mutators/mutator-delete-Bucket.mutator";

const handleDeleteBucket = orchestrator(deleteBucket, async (actionMessage) => {
 const data =   await apiDeleteBucket(actionMessage.title);
 return setTimeout(() => deleteBucketMutator(data), 100);
});

export default handleDeleteBucket;