import PageHeader from '../PageHeader';
import './Location.scss';

function Location(props) {
    return (
        <>
            <PageHeader
                name='location'
                notice='paso 02/03'
                title='Completa tu perfil'
                paragraph='Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
            />
        </>
    );
}

export default Location;