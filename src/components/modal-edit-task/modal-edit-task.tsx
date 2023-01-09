import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import addTask from '../../store/mutator-actions/create-task.mutator';
import editTask from '../../store/mutator-actions/edit-task.mutator';
import {IpropsModalEditTask} from './modal-edit-task.type';
function ModalEdit({show, onHide, type, item, index}: IpropsModalEditTask) {
	const [taskValue, SettaskValue] = useState<{title: string; content: string}>({
		title: item.content,
		content: item.title,
	});
	const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;
		SettaskValue({...taskValue, [name]: value});
	};
	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		let obj = {
			id: item.id,
			prefix: item.prefix,
			title: taskValue.title,
			content: taskValue.content,
			type: type,
			index: index,
		};
		editTask(obj);
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

export default ModalEdit;
