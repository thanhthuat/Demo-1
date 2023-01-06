export interface Itask{
  id:string ,
  prefix:string,
  content: string,
  title:string

}
export interface IlocalStore{
  [name:string]:{
    title:string,
    items :Itask[]

  } 
}
export  interface Istore{
    store:{
      [name:string]:{
        title:string,
        items :Itask[]
    
      } 
    }
  
}