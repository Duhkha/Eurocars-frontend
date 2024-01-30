import React, { useState } from 'react';
import AddCar from '../components/AddCar';
import UpdateCar from '../components/UpdateCar';
import DeleteCar from '../components/DeleteCar';

const AdminPanel = () => {
    const [activeComponent, setActiveComponent] = useState('add');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'add':
                return <AddCar />;
            case 'update':
                return <UpdateCar />;
            case 'delete':
                return <DeleteCar />;
            default:
                return <AddCar />;
        }
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <nav>
                <button onClick={() => setActiveComponent('add')}>Add Car</button>
                <button onClick={() => setActiveComponent('update')}>Update Car</button>
                <button onClick={() => setActiveComponent('delete')}>Delete Car</button>
            </nav>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
};

export default AdminPanel;
