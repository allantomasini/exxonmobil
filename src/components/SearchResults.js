import React from 'react';
import ResultItem from './ResultItem'

const SearchResults = (props) => <table style={{ width: '100%',borderSpacing:'0'}}>
    <thead>
        <tr style={{ textAlign: 'left', backgroundColor:'navy',color:'white',padding:'20px',height:'30px'  }}>
            <th style={{paddingLeft:'10px',width:'45%'}}>NAME</th>
            <th style={{paddingLeft:'10px',width:'45%'}}>EMAIL</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {props.users.map((user, index) => <ResultItem key={index} user={user} />)}
    </tbody>
</table>

export default SearchResults;