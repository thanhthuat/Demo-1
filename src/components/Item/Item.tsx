import React ,{useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import deleteTodo from '../../store/mutators/deleteTodoAction';
import { ModalEditTask } from '../modal-edit-task';
type Props = {};

function Item({item, index, type}: any) {
	const [modalEditTask, setModalEditTask] = useState<boolean>(false);
	const handleShowModalEdit =()=>{
		setModalEditTask(true);
	}
	const handleCloseModalEdit =()=>{
		setModalEditTask(false);
	}
	return (
		<>
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
				return (
					<div
						className="item mt-3"
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<div className="item-container">
							<div className="item__left">
								<span className={`avt-${index}`} onClick={() => deleteTodo(index, type)}></span>

								<span></span>
							</div>
							<div className="item__right">
								<div className="item__title d-flex justify-content-between">
									<h5> {item.title}</h5>
									<div>
										<ul className='d-flex item__icon'>
											
											<li>
												<i className="fa-solid fa-trash"  onClick={() => deleteTodo(index, type)}></i>
											</li>
											<li >
											<i className="fa-solid fa-pen-to-square" onClick={handleShowModalEdit}></i>
											</li>
										</ul>
									</div>
								</div>
								<div className="item__desc">
									<h6> {item.content}</h6>
								</div>
								<div className="item__content">
									<p> This is my storys about my house my company ,my abition ,this is content</p>
								</div>
							</div>
							<div style={{position: 'absolute', WebkitFilter: 'blur(10px) saturate(2)'}} />
						</div>
					</div>
				);
			}}
		</Draggable>
		{modalEditTask && <ModalEditTask show={modalEditTask} onHide={handleCloseModalEdit} type={type} item={item} index={index}/>}
		
		</>
		
	);
}

export default Item;
