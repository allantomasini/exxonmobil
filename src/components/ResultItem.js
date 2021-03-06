import React from 'react';

const ResultItem = (props) => <tr style={{height:'50px'}}>
    <td style={{paddingLeft:'10px',width:'45%'}}>{`${props.user.firstName} ${props.user.lastName}`} </td>
    <td style={{paddingLeft:'10px',width:'45%'}}>{props.user.email}</td>
    <td style={{paddingLeft:'10px'}}><a href="" ><img style={{height:'20px' }}src={require('../assets/edit.png') }/></a></td>
    <td style={{paddingLeft:'10px'}}><a href="" ><img style={{height:'20px' }}src={require('../assets/thrash.png') }/></a></td>
</tr>;

export default ResultItem;