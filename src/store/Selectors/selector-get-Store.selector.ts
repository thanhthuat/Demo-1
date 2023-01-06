import {getStore} from '../store';
import { toJS } from 'mobx'
export function getStoreTask() {
    const {store} = getStore();
    return toJS(store)
}