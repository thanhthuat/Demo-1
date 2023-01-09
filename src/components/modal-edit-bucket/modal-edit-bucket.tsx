import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import addTask from '../../store/mutator-actions/create-task.mutator';

import createBucket from '../../store/orchestrators/create-bucket.orchestrators';
import {IpropsModalEditBucket} from './modal-edit-bucket.type';
function ModalEditBucket({show, onHide}: IpropsModalEditBucket) {
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

		createBucket(taskValue);
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
									<Form.Label>Title Task</Form.Label>
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

export default ModalEditBucket;
