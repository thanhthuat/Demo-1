import { action } from "satcheljs";
import {IlocalStore} from "../store/store-task.type";
let editBucket = action("ADD_BUCKET", (text: string) => ({ title: text }));
export const editBucketAction = action("ADD_BUCKET11", (data: IlocalStore) => ({data:data}));




export default editBucket;

