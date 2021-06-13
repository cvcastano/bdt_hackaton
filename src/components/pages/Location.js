import PageHeader from '../PageHeader';
import InputGroup from '../InputGroup';
import './Location.scss';

function Location(props) {
    return (
        <>
            <PageHeader
                url='/register/personal_info'
                name='Localización'
                notice='paso 02/03'
                title='Completa tu perfil'
                paragraph='Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
            />
            <form action="" method="post" className="form">
                <InputGroup
                    id='tel'
                    text='Número de teléfono'
                    placeholder=''
                    type='tel'
                    name='tel'
                />
                <InputGroup
                    id='address'
                    text='Dirección'
                    placeholder='Introduce la dirección completa'
                    type='text'
                    name='address'
                />
                <InputGroup
                    id='country'
                    text='País de residencia'
                    placeholder='Selecciona uno'
                    type='text'
                    name='country'
                />
                <button type="button" className="save_button">
                    Guardar y continuar
                </button>
                <i className="fas fa-user-lock"> Tu información es segura</i>
            </form>
        </>
    );
}

export default Location;