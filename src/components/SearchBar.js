import React from 'react'
import ImageButton from './ImageButton'

const SearchBar = (props) => <div style={{ padding: '15px', backgroundColor: '#fbfbfb', height: '30px',marginBottom:'20px' }}>
    <input style={{ height: '85%', width: '95%', display: 'inline-block', margin: '0px', paddingLeft: '10px' }} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    <ImageButton style={{ height: '100%', width: '3%', margin: '0px', padding: '5px',backgroundColor:'blue' }} onClick={props.onClick} label={require('../assets/search-icon.png')} />
</div>

export default SearchBar;