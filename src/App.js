import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import TableCard from '../src/components/TableCard/TableCard';
import Background from '../src/components/UI/Background/Background';
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
                <Layout>
                    <Background />
                    <TableCard />
                </Layout>
            </div>
        );
    }
}

export default App;
