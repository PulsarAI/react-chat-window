import React, { Component } from 'react';
import Linkify from 'react-linkify';


class WidgetMessage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()

        console.log('email', this.state.email)

        this.setState({
            email: ''
        })
    }



    render () {
        const { text } = this.props.data

        return (<div className="sc-message--text sc-message--widget">
            <div className="sc-message--widget-title">{text}</div>
            <div className="sc-message--widget-email">
                <form onSubmit={this.handleSubmit}>
                    <div className="sc-message--widget-input-container">
                        <input value={this.state.email} onChange={this.handleChange} name="email" type="email" placeholder="name@example.com" rows="1" className="sc-message--widget-input" />
                    </div>
                    <div className="sc-message--widget-button-container">
                        <button className="sc-message--widget-button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default WidgetMessage
