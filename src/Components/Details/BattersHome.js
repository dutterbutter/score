import React from 'react';

//Component creates the HOME teams batting roster in a TABLE format
//Receives PROPS from <Details component 
//KEY INDEX is still giving me a WARNING need to generate a random number to make them unique

const batters_home = (props) => {
 
    const batters_names = props.batting.map((batter, index) => {
        return <tr key={index}><td key={index}> {batter.name} {batter.pos}</td>
                    <td key={index}>  {batter.ab}  </td>
                    <td key={index}>   {batter.r}  </td>
                    <td key={index}>   {batter.h}  </td>
                    <td key={index}> {batter.rbi}  </td>
                    <td key={index}>  {batter.bb}  </td>
                    <td key={index}>  {batter.so}  </td>
                    <td key={index}> {batter.lob}  </td>
                    <td key={index}> {batter.avg}  </td>
                    <td key={index}> {batter.ops}  </td>
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