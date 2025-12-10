import {Link} from "react-router";

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <h3>Hello there, this is the settings page</h3>
            <button>
                <Link to='/'>Back to the Home page</Link>
            </button>
        </div>
    );
}

export default Settings;


