import { action } from "satcheljs";
import {IlocalStore} from "../store/store-task.type";
export const editBucket = action("ADD_BUCKET", (text: string) => ({ title: text }));
export const editBucketAction = action("ADD_BUCKET11", (data: IlocalStore) => ({data:data}));





