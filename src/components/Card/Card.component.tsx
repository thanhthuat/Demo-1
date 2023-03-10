import React, {useState} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {Item} from '../item';

import {editBucket} from '../../store/mutator-actions'
import {Iobj, Tprops} from './card.type';
import './card.scss';
// import deleteBucket from '../../store/actions/delete-bucket.action';
import  {storeBoard} from '../../store';
const classNamePrefix = 'card';
function Card({showMoal, prefix, elements, type}: Tprops) {
	const [editNameBucket, setEditNameBucket] = useState<boolean>(false);
	const [valueNameBucket, setValueNameBucket] = useState<string>(type);

	const handleToggleEdit = () => {
		setEditNameBucket(!editNameBucket);
	};
	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueNameBucket(event.target.value);
	};
	const handleSave = () => {
		const obj: Iobj = {
			oldtitile: type,
			newtitle: valueNameBucket,
		};
		editBucket(obj);
		setEditNameBucket(false);
	};
	const handleDelete = () => {
		storeBoard.actions.deleteBucket(type);
		//handleDeleteBucket({title: type});
	};
	//handleDeleteBucket
	return (
		<div className={`${classNamePrefix}`}>
			<div className={`${classNamePrefix}__head`}>
				<span className={`${classNamePrefix}__itemhead`} onClick={() => showMoal(type)}>
					<i className="fa-solid fa-circle-plus"></i>
				</span>

				{editNameBucket ? (
					<>
						<input
							className={`${classNamePrefix}__itemhead  ${classNamePrefix}__edit`}
							value={valueNameBucket}
							onChange={handleChangeName}
						></input>
						<button className={`${classNamePrefix}__buttonsave`} onClick={handleSave}>
							Save
						</button>
					</>
				) : (
					<h1 className={`${classNamePrefix}__itemhead`}> {type}</h1>
				)}
				<span className={`${classNamePrefix}__itemhead`} onClick={handleToggleEdit}>
					<i className="fa-solid fa-pen"></i>
				</span>
				<span className={`${classNamePrefix}__itemhead ml-4`} onClick={handleDelete}>
					<i className="fa-solid fa-trash"></i>
				</span>
			</div>
			<div className={`${classNamePrefix}__body`}>
				<Droppable droppableId={`${prefix}`}>
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef} style={{height: '100%'}}>
							{Array.isArray(elements) &&
								elements.map((item, index: number) => (
									<Item key={item.id} item={item} index={index} type={type} />
								))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</div>
	);
}

export default Card;
