import './Register.scss';
import AccountTab from '../AccountTab';

function Register() {
    return (
        <section className="register">
            <p className="register_notice">Ya tienes cuenta? <a href="#_blank">Inicia sesión</a></p>
            <div className="register_text">
                <h2 className="register_text-title">¡Únete a la comunidad!</h2>
                <p className="register_text-paragraph">Para empezar, dinos qué cuenta te gustaría abrir.</p>
            </div>
            <AccountTab
                icon="fa-user-circle"
                title="developer"
                text="Cuenta personas para entrar en el mundo dev"
            />
            <AccountTab
                icon="fa-building"
                title="business"
                text="Tienes o perteneces a una compañía"
            />
        </section>
    );
}

export default Register;

