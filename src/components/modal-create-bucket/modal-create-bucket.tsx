import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import addTask from '../../store/mutator-actions/create-task.mutator';


import  {storeBoard} from '../../store';
import {IpropsModalCreateBucket} from './modal-create-bucket.type';

import {dispatch} from 'satcheljs';

function ModalCreateBucket({show, onHide}: IpropsModalCreateBucket) {
	const [taskValue, SettaskValue] = useState<{title: string}>({
		title: '',
	});
	const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;
		SettaskValue({...taskValue, [name]: value});
	};
	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		let obj = {
			title: taskValue.title,
		};
		storeBoard.actions.createBucketAction(taskValue.title);
		setTimeout(() => onHide(), 200);
	};
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Modal Creating Bucket</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Row>
								<Col sm={3}>
									<Form.Label>Title Bucket</Form.Label>
								</Col>
								<Col sm={9}>
									<Form.Control
										name="title"
										placeholder="Title"
										value={taskValue.title}
										onChange={handleOnchange}
									/>{' '}
								</Col>
							</Row>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}

export default ModalCreateBucket;
