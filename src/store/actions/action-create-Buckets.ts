import { action } from "satcheljs";

let createBucket = action("ADD_BUCKET", (text: string) => ({ title: text }));

export default createBucket;