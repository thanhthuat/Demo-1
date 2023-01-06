import { action } from "satcheljs";

let createBucket = action("ADD_Bucket", (text: string) => ({ title: text }));

export default createBucket;