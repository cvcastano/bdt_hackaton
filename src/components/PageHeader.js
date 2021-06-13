import './PageHeader.scss';

function PageHeader(props) {
    return (
        <section className="page_header">
            <p className="page_header_notice">{props.notice}</p>
            <p className="page_header_name">{props.name}</p>
            <div className="page_header_text">
                <h2 className="page_header_text-title">{props.title}</h2>
                <p className="page_header_text-paragraph">{props.paragraph}</p>
            </div>
        </section>
    );
}

export default PageHeader;