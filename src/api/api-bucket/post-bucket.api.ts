import {IlocalStore} from "../../store/store/store-task.type";

export const apiCreateBucket = (name:string) => {
	
	return new Promise<IlocalStore>((resolve, reject) => {
		try {
			const data:IlocalStore = JSON.parse(localStorage.getItem('storeTask') || '{}')  ;
			data[`${name}`] = {title:name ,items: []} ;
			localStorage.setItem('storeTask',JSON.stringify(data)) 
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};