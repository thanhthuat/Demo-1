import { action } from "satcheljs";

let deleteBucket = action("DELETE_BUCKET", (text: string) => ({ title: text }));

export default deleteBucket;