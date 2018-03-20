import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'

class Index extends React.Component {
    render() {
        return (
            <App />
        );
    }
}

const index = <Index />

ReactDOM.render(index, document.getElementById('root'));