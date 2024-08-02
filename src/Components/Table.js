
import React, { useContext } from 'react';
import { DataContext } from '../MedalsData'; 

const Table = () => {
    const data = useContext(DataContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Year</th>
                    <th>Medals</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.Id}>
                        <td>{item.Id}</td>
                        <td>{item.Year}</td>
                        <td>{item.Medals}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
