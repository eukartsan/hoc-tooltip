import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="body">
                <header className="content">
                    <h1>Header</h1>
                </header>
                <Sidebar />
                <Footer />
            </div>
        )
    }
}

export default App;
