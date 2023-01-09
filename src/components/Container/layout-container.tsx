import React, {useEffect, useState} from 'react';
import {toJS} from 'mobx';
import {DragDropContext} from 'react-beautiful-dnd';
import {Card} from '../card';
import getStore from '../../store/store/store-task.store';
import {getStoreTask} from '../../store/selectors/get-store.selector';
import {observer, useObserver} from 'mobx-react';
import {ModalCreate} from '../modal-create-task';
import updateStore from '../../store/mutator-actions/update-store.mutator';
import getLoacalStoreOrchestrator from '../../store/orchestrators/get-localstore.orchestrators';
import './layout-container.scss';

import {getRootStore} from 'satcheljs';

const removeFromList = (list: any[], index: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(index, 1);
	return [removed, result];
};

const addToList = (list: any[], index: number, element: any[]) => {
	const result = Array.from(list);
	result.splice(index, 0, element);
	return result;
};

const LayoutContainer = observer(() => {
	const [show, setShow] = useState<boolean>(false);
	const [type, setType] = useState<string>('create');

	const onDragEnd = (result: any) => {
		// if (!result.destination) {
		// 	return;
		// }
		// const listCopy = {...(toJS(getStore()) as any)};

		// const sourceList = listCopy[result.source.droppableId];
		// const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index);
		// listCopy[result.source.droppableId] = newSourceList;
		// const destinationList = listCopy[result.destination.droppableId];
		// listCopy[result.destination.droppableId] = addToList(
		// 	destinationList,
		// 	result.destination.index,
		// 	removedElement
		// );
		if (!result.destination) return;
		const {source, destination} = result;
		const columns: any = getStoreTask();
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];
			const destColumn = columns[destination.droppableId];
			const sourceItems = [...sourceColumn.items];
			const destItems = [...destColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destItems.splice(destination.index, 0, removed);
			updateStore({
				...columns,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destColumn,
					items: destItems,
				},
			});
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			const [removed] = copiedItems.splice(source.index, 1);
			copiedItems.splice(destination.index, 0, removed);
			updateStore({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems,
				},
			});
		}

		//updateStore(listCopy);
		//	setElements(listCopy);
	};
	const handleShowModal = (value: string) => {
		setType(value);
		setShow(true);
	};
	const handleCloseModal = () => setShow(false);

	useEffect(() => {
		// let obj: any = {

		// };
		// // const formatData = JSON.parse(obj)
		// localStorage.setItem('storeTask',  JSON.stringify(obj));
		getLoacalStoreOrchestrator({text: ''});
	}, []);

	return (
		<div className="layout-container">
			<DragDropContext onDragEnd={onDragEnd}>
				{Object.keys(getStoreTask()).map((listKey: string) => (
					<Card
						elements={getStoreTask()[`${listKey}`].items as any}
						key={listKey}
						prefix={listKey}
						type={listKey}
						showMoal={handleShowModal}
					/>
				))}
			</DragDropContext>

			{show && <ModalCreate show={show} onHide={handleCloseModal} type={type} />}
		</div>
	);
});

export default LayoutContainer;
