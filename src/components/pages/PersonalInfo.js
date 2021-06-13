import PageHeader from '../PageHeader';
import './PersonalInfo.scss';
import InputGroup from '../InputGroup';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


function PersonalInfo() {
    return (
        <div>
            <Link to='/'>
                <p className="return"> <i className="fas fa-arrow-left"></i> Volver</p>
            </Link>
            <PageHeader
                name='personal-info'
                notice='paso 01/03 Personal Info.'
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
                />
                <InputGroup
                    id='email'
                    text='Correo electrónico*'
                    placeholder='Enter email'
                    type='emailt'
                    name='email'
                />
                <InputGroup
                    id='password'
                    text='Contraseña*'
                    placeholder='Enter password'
                    type='password'
                    name='password'
                />
                <div className="terms_and_conditions">
                    <input className="checkbox" type="checkbox" id='checkbox' />
                    <label htmlFor="checkbox">Acepto los términos y condiciones</label>
                </div>
                <button type="button" className="button">
                    Registrar cuenta
                </button>
                <button type="button" className="google-button">
                    <i className="google-button-icon"><FcGoogle /></i> Regístrate con Google
                </button>

            </form>
        </div>

    );
}

export default PersonalInfo;