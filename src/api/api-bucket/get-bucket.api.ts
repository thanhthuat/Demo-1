import {IlocalStore} from "../../store/store/store-task.type";

export const apiGetBucket = () => {
	
	return new Promise<IlocalStore>((resolve, reject) => {
		try {
			const data:IlocalStore = JSON.parse(localStorage.getItem('storeTask') || '{}')  ;
			
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};