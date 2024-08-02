
import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../MedalsData'; 

const Chart = () => {
    const data = useContext(DataContext); 
    return (
        <ResponsiveContainer width="70%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Medals" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;

