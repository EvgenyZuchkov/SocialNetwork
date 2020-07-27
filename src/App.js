import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wpapper'>
                <Header/>
                <Navbar/>
                <div className='app-wpapper-content'>
                    <Route path='/Dialogs' render ={ () => <Dialogs /> }/>
                    <Route path='/Profile' render={ () => <Profile /> }/>
                    <Route path='/News' render={ () => <News /> }/>
                    <Route path='/Music' render={ () => <Music /> }/>
                    <Route path='/Settings' render={ () => <Settings /> }/>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
