import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const handleLogout = () => {
        // Implement your logout functionality here
        console.log('Logout clicked');
    };

    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li>
                        <Link to="/bills">Bills</Link>
                    </li>
                    <li>
                        <Link to="/transactions">Transactions</Link>
                    </li>
                    <li>
                        <Link to="/recharge">Recharge</Link>
                    </li>
                    <li>
                        <Link to="/raise-issue">Raise Issue</Link>
                    </li>
                    <li>
                        <Link to="/ticket">Ticket</Link>
                    </li>
                </ul>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div>
           
                {/* <Route path="/bills" component={Bills} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/recharge" component={Recharge} />
                <Route path="/raise-issue" component={RaiseIssue} />
                <Route path="/ticket" component={Ticket} /> */}
            </div>
        </div>
    );
};

export default Services;
