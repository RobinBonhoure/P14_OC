/* eslint-disable react/prop-types */
import '../assets/css/modal.css';

const Modal = ({closeModal}) => {
    return(
        <div className={"modal_container"}>
            <div className="modal">
                <p>Employee created</p>
                <div className="close_container">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )
}

export default Modal