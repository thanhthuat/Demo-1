export interface Ielement {
	id: string;
	title: string;
	content: string;
	type: string;
}
export interface Iobj {
	oldtitile:string,
	newtitle:string,
   
  }
export type Props = {
	showMoal: (value: string) => void;
	prefix: number | string;
	elements: Ielement[];
	type: string;
};
