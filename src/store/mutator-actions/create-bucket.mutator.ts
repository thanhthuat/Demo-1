import { Istore } from '../../api/api-bucket/api-create-bucket.type';
import { mutatorAction ,mutator} from "satcheljs";
import getStore  from "../store/store-task.store";
import {IlocalStore} from "../store/store-task.type";
import {createBucket1} from '../actions/create-buckets.action'
import alert from '../../components/alert';

// const createBucket = mutatorAction("GET__LOCALSTORE", function createBucket(data) {

//  // getStore().store = data ;
 
// });



mutator(createBucket1, (data) => {

  getStore().store = data.data ;
  alert('success',"Create Bucket success");
  
});


