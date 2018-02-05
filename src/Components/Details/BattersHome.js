import React from 'react';

const batters_home = (props) => {
 
    const batters_names = props.batting.map((batter, index) => {
        return <tr><td key={index}> {batter.name} {batter.pos}</td>
                    <td> {batter.ab} </td>
                    <td> {batter.r} </td>
                    <td> {batter.h} </td>
                    <td> {batter.rbi} </td>
                    <td> {batter.bb} </td>
                    <td> {batter.so} </td>
                    <td> {batter.lob} </td>
                    <td> {batter.avg} </td>
                    <td> {batter.ops} </td>
        </tr>
    })



    return (
        <div className= "col s12 m6 l6">
           <table className= "striped">
                <thead className="shaded">
                    <tr>
                        <th className="teamName"> {props.home_name} </th>
                        <th> AB </th>
                        <th> R </th>
                        <th> H </th>
                        <th> RBI </th>
                        <th> BB </th>
                        <th> SO </th>
                        <th> LOB </th>
                        <th> AVG </th>
                        <th> OPS </th>
                    </tr>
                </thead>
                <tbody>
                   
                        {batters_names}
                    
                </tbody>
            </table>
        </div>
    )
}

export default batters_home;