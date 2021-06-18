import PageHeader from '../PageHeader';
import './PersonalInfo.scss';
import InputGroup from '../InputGroup';
import { FcGoogle } from 'react-icons/fc';


function PersonalInfo(props) {


 

    return (
        <>
            <PageHeader
                url='/'
                notice='Paso 01/03'
                name='Personal info'
                title='Registra tu cuenta individual'
                paragraph='Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
            />
            <form action="" method="post" className="form">
                <InputGroup
                    id='name'
                    text='Nombre completo*'
                    placeholder='Enter name'
                    type='text'
                    name='name'
                    handleInput={props.handleInput}
                />
                <InputGroup
                    id='email'
                    text='Correo electrónico*'
                    placeholder='Enter email'
                    type='email'
                    name='email'
                    handleInput={props.handleInput}
                />
                <InputGroup
                    id='password'
                    text='Contraseña*'
                    placeholder='Enter password'
                    type='password'
                    name='password'
                    handleInput={props.handleInput}
                />
                <div className="terms_and_conditions">
                    <input className="checkbox" type="checkbox" id='checkbox' />
                    <label htmlFor="checkbox">Acepto los términos y condiciones</label>
                </div>
                <button type="button" className="register_button" onClick={props.emailValidation}>
                    Registrar cuenta
                </button>
                <button type="button" className="google-button">
                    <i className="google-button-icon"><FcGoogle /></i> Regístrate con Google
                </button>
            </form>
        </>


    );
}

export default PersonalInfo;