import React ,{useState}from 'react';
import resetInitial from '../../store/mutators/reset';
import { getStore } from '../../store/store';
import { ModalCreateBucket} from '../modal-create-bucket';

type Props = {};

function Header({}: Props) {
	const [showModalCreate,setShowModalCreate] = useState<boolean>(false) ;

	const handleShowModalCreate =() =>{
		setShowModalCreate(true);
	}
	const handleCloseModalCreate =()=>{
		setShowModalCreate(false);
	}
	return (
		<header className="nav-header ">
			<div className="nav-header__logo">
				<h1 className="title">KANBAIMAIL </h1>
			</div>
			<div className="nav-header__list">
				<ul>
					<li onClick={() => resetInitial()}>
						<i className="fa-solid fa-pen-to-square"></i>{' '}
					</li>
					<li>
						<i className="fa-solid fa-trash" onClick={()=> {localStorage.clear() ; getStore().store ={}}}></i>
					</li>
					<li onClick={handleShowModalCreate}>
						<i className="fa-solid fa-circle-plus"></i>
					</li>
				</ul>
			</div>
			{showModalCreate && <ModalCreateBucket  show={showModalCreate} onHide={handleCloseModalCreate} />}
		</header>
	);
}

export default Header;
