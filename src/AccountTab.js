import './AccountTab.scss';

function AccountTab(props) {
    return (
        <div className="account-tab">
            <i className={`account-tab_icon-user fas ${props.icon}`}></i>
            <div className="account-tab_text">
                <h4 className="account-tab_text-title">{props.title}</h4>
                <p className="account-tab_text-paragraph">{props.text}</p>
            </div>
            <i className="account-tab_icon-arrow fas fa-arrow-right"></i>
        </div>
    )
}

export default AccountTab;
