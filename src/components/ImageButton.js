import React from 'react'

const ImageButton = (props) => <button style={{ marginLeft: '20px', height: '35px', width: '10%', float: 'right', display: 'inline-block', ...props.style }} onClick={props.onClick}><img style={{height:'20px' }}src={require('../assets/search-icon.png') }/></button>;

export default ImageButton;