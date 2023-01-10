import { IlocalStore } from '../store/store-task.type';
import { action } from "satcheljs";

export const getBucketStore = action("ADD_TODO", (text: string) => ({ text: text }));

export const getLocalStoreAction = action("GET__STORE__ACTION", (data: IlocalStore) => ({data:data}));
