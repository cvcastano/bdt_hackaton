import './Register.scss';

function PageTemplate(props) {
    return (
        <section className={`${props.name}`}>
            <p className={`${props.name}_notice`}>{props.notice}</p>
            <div className={`${props.name}_text`}>
                <h2 className={`${props.name}_text-title`}>{props.title}</h2>
                <p className={`${props.name}_text-paragraph`}>{props.paragraph}</p>
            </div>
        </section>
    );
}

export default PageTemplate;