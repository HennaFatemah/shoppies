import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className="main">
                {this.props.selectMain}
                Main
            </div>
        );
    }
}

export default Main;