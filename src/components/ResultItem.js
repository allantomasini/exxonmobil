import React from 'react';

const ResultItem = (props) => <tr style={{height:'50px'}}>
    <td style={{paddingLeft:'10px',width:'45%'}}>{`${props.user.firstName} ${props.user.lastName}`} </td>
    <td style={{paddingLeft:'10px',width:'45%'}}>{props.user.email}</td>
    <td style={{paddingLeft:'10px'}}><a href="" >Editar</a></td>
    <td style={{paddingLeft:'10px'}}><a href="" >Apagar</a></td>
</tr>;

export default ResultItem;