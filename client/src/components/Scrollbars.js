import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ColoredScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderTrackHorizontal = this.renderTrackHorizontal.bind(this);
        this.renderTrackVertical = this.renderTrackVertical.bind(this);
    }

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: "#ffffff",
            borderRadius: "60px"
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}
            />
        );
    }

    renderTrackHorizontal({ style, ...props }) {
        const trackStyle = {
            backgroundColor: "#0E141B",
            zIndex: "9999",
            height: "8px",
            width: "100vw",
            bottom: "0"
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props}
            />
        )
    }

    renderTrackVertical({ style, ...props }) {
        const trackStyle = {
            backgroundColor: "#0E141B",
            zIndex: "9999",
            height: "100vh",
            width: "8px",
            right: "0"
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props}
            />
        )
    }

    render() {
        return (
            <Scrollbars
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                renderTrackHorizontal={this.renderTrackHorizontal}
                renderTrackVertical={this.renderTrackVertical}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
}