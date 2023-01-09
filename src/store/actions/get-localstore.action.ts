import { IlocalStore } from '../store/store-task.type';
import { action } from "satcheljs";

let getLocalStore = action("ADD_TODO", (text: string) => ({ text: text }));

export const getLocalStoreAction = action("GET__STORE__ACTION", (data: IlocalStore) => ({data:data}));

export default getLocalStore;