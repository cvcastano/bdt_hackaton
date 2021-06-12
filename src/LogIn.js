import './LogIn.scss';
import AccountTab from './AccountTab';

function LogIn() {
    return (
        <section className="login">
            <p className="login_notice">Ya tienes cuenta? <a href="#_blank">Inicia sesión</a></p>
            <div className="login_text">
                <h2 className="login_text-title">¡Únete a la comunidad!</h2>
                <p className="login_text-paragraph">Para empezar, dinos qué cuenta te gustaría abrir.</p>
            </div>
            <AccountTab
                icon="fa-user-circle"
                title="Developers"
                text="Cuenta personas para entrar en el mundo dev" />
            <AccountTab
                icon="fa-building"
                title="Business"
                text="Tienes o perteneces a una compañía" />
        </section>
    );
}

export default LogIn;

