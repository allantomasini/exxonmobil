import React from 'react'

const Button = (props) => <button style={{ marginLeft: '20px', height: '35px', width: '10%', float: 'right', display: 'inline-block', ...props.style }} onClick={props.onClick}>{props.label}</button>;

export default Button;