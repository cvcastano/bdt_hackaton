import './index.scss';


function LogIn() {
    return (
        <section className="login">
            <p className="login_notice">Ya tienes cuenta? <a href="#_blank">Inicia sesión</a></p>
            <div className="login_text">
                <h2 className="login_text-title">¡Únete a la comunidad!</h2>
                <p className="login_text-paragraph">Para empezar, dinos qué cuenta te gustaría abrir.</p>
            </div>
        </section>
    );
}

export default LogIn;