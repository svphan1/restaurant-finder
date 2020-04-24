import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component {
    componentDidMount = () => {
        fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
            headers: {
                Authorization: 'Api-Key q3MNxtfep8Gt',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    render() {
        return (
            <div>
                <Layout />
            </div>
        );
    }
}

export default App;
