import React from 'react'
import Button from './Button'

const SearchBar = (props) => <div style={{ padding: '15px', backgroundColor: '#fbfbfb', height: '30px',marginBottom:'20px' }}>
    <input style={{ height: '85%', width: '93%', display: 'inline-block', margin: '0px', paddingLeft: '10px' }} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    <Button style={{ height: '100%', width: '5%', margin: '0px', padding: '0px' }} onClick={props.onClick} label="Pesquisar" />
</div>

export default SearchBar;