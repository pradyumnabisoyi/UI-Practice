import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Post from './Post';
import PostDetails from './PostDetails';
import Route6 from './Route6';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route path='/' elements={<Route6/>}/>
                            <Route index='/' element={<Home/>} />
                            <Route path='home' element={<Home/>} />
                            <Route path='posts' element={<Post/>} />
                            <Route path='about' element={<About/>} />
                            <Route path='profile' element={<Profile/>} />
                            <Route path='posts/:topic' element={<PostDetails/>} />
                        <Route/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;