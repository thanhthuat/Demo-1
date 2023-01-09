import React ,{useState}from 'react';
import { getStore } from '../../store/store';
import { ModalCreateBucket} from '../modal-create-bucket';
import './header.scss';


const classNamePrefix = 'nav-header';
function Header() {
	const [showModalCreate,setShowModalCreate] = useState<boolean>(false) ;

	const handleShowModalCreate =() =>{
		setShowModalCreate(true);
	}
	const handleCloseModalCreate =()=>{
		setShowModalCreate(false);
	}
	return (
		<header className={`${classNamePrefix}`}>
			<div className={`${classNamePrefix}__logo`}>
				<h1 className="title">KANBAIMAIL </h1>
			</div>
			<div className={`${classNamePrefix}__list`}>
				<ul>
					<li >
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
