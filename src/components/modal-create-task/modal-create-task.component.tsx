import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import addTask from '../../store/mutators/mutator-create-Task.mutator';
import {storeType1} from '../../store/store/store-task.store';
import {Tprops} from './modal-create-task.type';
function ModalCreate({show, onHide, type}: Tprops) {
	const [taskValue, SettaskValue] = useState<{title: string; content: string}>({
		title: '',
		content: '',
	});
	const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;
		SettaskValue({...taskValue, [name]: value});
	};
	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		let obj = {
			title: taskValue.title,
			content: taskValue.content,
			type: type,
		};
		addTask(obj);
		setTimeout(() => onHide(), 200);
	};
	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Modal Creating</Modal.Title>
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

						<Form.Group className="mb-3">
							<Row>
								<Col sm={3}>
									<Form.Label>Content Task</Form.Label>
								</Col>
								<Col sm={9}>
									<Form.Control
										name="content"
										placeholder="Content"
										value={taskValue.content}
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

export default ModalCreate;
