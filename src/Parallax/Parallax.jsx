import React, { Component } from "react";
import './parallax.scss';

class Parallax extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const backgroundImageUrl = this.props.url;
        console.log(backgroundImageUrl)

        const style = {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: 'fixed'
        }

        return (
            <section style={style} className='parallax'>
            </section>

        );
    }
}

export default Parallax;
