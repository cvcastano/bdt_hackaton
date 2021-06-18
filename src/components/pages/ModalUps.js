import './ModalUps.scss';

function ModalUps() {
    return (
        <div className="modal">
            <div className="modal-content">
                <h4 className="modal-title">¡Ups, algo ha ido mal!</h4>
                <p className="modal-text">Parece que el correo electrónico no es correcto. Por favor, revísalo y vuelve a intentarlo.</p>
                <button className="modal-button">Cerrar</button>
            </div>
        </div>
    )

}

export default ModalUps;