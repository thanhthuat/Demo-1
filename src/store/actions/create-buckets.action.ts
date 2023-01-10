import { action } from "satcheljs";
import {IlocalStore} from "../store/store-task.type";
export  const createBucketAction = action("ADD_BUCKET", (text: string) => ({ title: text }));
export const createBucket1 = action("ADD_BUCKET11", (data: IlocalStore) => ({data:data}));








