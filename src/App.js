import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wpapper'>
            <Header/>
            <Navbar/>
            <div className='app-wpapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs store={props.store}/>}/>
                <Route path='/Profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
