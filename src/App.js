import React, { useState } from 'react';
import { DataProvider } from './MedalsData';
import Table from './Components/Table';
import Chart from './Components/Chart';
import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('table');

    return (
        <DataProvider>
            <div className="App">
                <div className="personal-details">
                    <h4>K PRAVEEN KUMAR</h4>
                    <p>Email:Kanaparthipraveen36@gmail.com</p>
                    <p>Contact:7981609991</p>
                </div>
                <div className="tabs">
                    <button onClick={() => setActiveTab('table')} className={activeTab === 'table' ? 'active' : ''}>
                        Table
                    </button>
                    <button onClick={() => setActiveTab('chart')} className={activeTab === 'chart' ? 'active' : ''}>
                        Chart
                    </button>
                </div>
                <div className="content">
                    {activeTab === 'table' && <Table />}
                    {activeTab === 'chart' && <Chart />}
                </div>
            </div>
        </DataProvider>
    );
};

export default App;
