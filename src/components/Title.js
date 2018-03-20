import React from 'react';

const style = {
    display: 'inline-block',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '30px',
    margimLeft: '10px',
    marginBottom: '10px'
}


const Title = (props) => <div style={style}>{props.title}</div>;

export default Title;