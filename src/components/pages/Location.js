import PageTemplate from '../PageTemplate';
import './Location.scss';

function Location(props) {
    return (
        <>
            <PageTemplate
                name='location'
                notice='paso 02/03'
                title='Completa tu perfil'
                paragraph='Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
            />
        </>
    );
}

export default Location;