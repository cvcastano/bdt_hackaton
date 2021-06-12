import './AccountTab.scss';
import { Link } from 'react-router-dom';

function AccountTab(props) {
    return (
        <Link to={`/login/${props.title}`}>
            <div className="account-tab">
                <i className={`account-tab_icon-user fas ${props.icon}`}></i>
                <div className="account-tab_text">
                    <h4 className="account-tab_text-title">{props.title}</h4>
                    <p className="account-tab_text-paragraph">{props.text}</p>
                </div>
                <i className="account-tab_icon-arrow fas fa-arrow-right"></i>
            </div>
        </Link>
    )
}

export default AccountTab;
