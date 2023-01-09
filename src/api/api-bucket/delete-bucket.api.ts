import {IlocalStore} from "../../store/store/store-task.type";
export const apiDeleteBucket = (name:string) => {
	
	return new Promise<IlocalStore>((resolve, reject) => {
		try {
			const data:IlocalStore = JSON.parse(localStorage.getItem('storeTask') || '{}')  ;
			delete data[`${name}`];
			localStorage.setItem('storeTask',JSON.stringify(data)) ;
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};