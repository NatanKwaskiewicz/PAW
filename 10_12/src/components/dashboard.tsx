import { Link } from 'react-router'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Hello there, this is the dashboard page</h3>
            <button>
                <Link to='/'>Back to the Home page</Link>
            </button>
        </div>
    );
}

export default Dashboard;