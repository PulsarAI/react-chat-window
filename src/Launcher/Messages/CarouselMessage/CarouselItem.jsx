import React, { Component } from 'react'

class CarouselItem extends Component {
    constructor (props) {
        super(props)

        this.state = {}
    }

    render () {
        const {
            title, subtitle, url, buttons
        } = this.props

        const buttonTags = buttons.map(({ text, payload }, i) => <button className='sc-carousel--action' onClick={this.props.onCarouselClick} data-payload={payload} key={i}> {text} </button>)

        return (
            <div className='sc-carousel--item'>
                <div className='sc-carousel--thumbnail' style={{ backgroundImage: `url(${url})` }}>
                </div>
                <div className='sc-carousel--info'>
                    <div className='sc-carousel--title'>{title}</div>
                    <div className='sc-carousel--subtitle'>$ {subtitle.toLocaleString()}</div>
                </div>

                <div className='sc-carousel--actions'>
                    {buttonTags}
                </div>
            </div>
        )
    }
}

export default CarouselItem
