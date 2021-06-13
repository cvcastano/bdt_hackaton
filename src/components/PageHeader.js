import './PageHeader.scss';
import { Link } from 'react-router-dom';

function PageHeader(props) {
    return (
        <section className="page_header">
            <div className="page_header-navigation">
                <Link className="page_header-navigation-return" to={props.url}>
                    <p> <i className="fas fa-arrow-left"></i> Volver</p>
                </Link>
                <p className="page_header-navigation-notice">{props.notice}</p>
            </div>
            <p className="page_header-name">{props.name}</p>
            <div className="page_header-text">
                <h2 className="page_header-text-title">{props.title}</h2>
                <p className="page_header-text-paragraph">{props.paragraph}</p>
            </div>
        </section>
    );
}

export default PageHeader;