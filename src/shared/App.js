import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Map, Community } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Map}/>
                <Route path="/board/postList" component={Community}/>
                <Route path="/board/postView" component={Community}/>
                <Route path="/board/postWrite" component={Community}/>
                <Route path="/board/postModify" component={Community}/>
            </div>
        );
    }
}

export default App;