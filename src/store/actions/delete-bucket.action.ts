import { IlocalStore } from '../store/store-task.type';
import { action } from "satcheljs";

export const deleteBucket = action("DELETE_BUCKET", (text: string) => ({ title: text }));
export const deleteBucketAction = action("DELETE_BUCKET_ACTION", (data: IlocalStore) => ({data:data}));
