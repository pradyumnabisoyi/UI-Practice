import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Dd from './Home';
import Profile from './Profile';
import About from './About';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className='container'>
                    <Route exact path="/" component={Dd} />
                    <Route path='/profile' component={Profile} />
                    <Route path="/about" component={About} />
                </div>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;