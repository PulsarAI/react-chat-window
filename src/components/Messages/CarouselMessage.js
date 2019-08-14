import React, {
  Component
} from 'react'


class CarouselItem extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { title, subtitle, url, buttons } = this.props

    const buttonTags = buttons.map(({ text, payload }, i) => {
      return <button className='sc-carousel--action' onClick={this.props.onCarouselClick} data-payload={payload} key={i}> {text} </button>
    })

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

const CarouselArrow = (props) => {
  if (props.direction === 'left') {
    return (
      <div className='sc-carousel--arrow sc-carousel--arrow-left' onClick={props.onClick}>
        <svg className='sc-carousel--arrow-icon' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path className='sc-carousel--arrow-icon-path' d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
      </div>
    )
  }

  return (
    <div className='sc-carousel--arrow sc-carousel--arrow-right' onClick={props.onClick}>
      <svg className='sc-carousel--arrow-icon' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path className='sc-carousel--arrow-icon-path' d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
    </div>
  )
}

class CarouselMessage extends Component {
  static defaultProps = {
    data: []
  }

  constructor(props) {
    super(props)

    this.state = {
      showLeftArrow: false,
      showRightArrow: true
    }

    this.carouselRef = React.createRef()

    this.scrollLeft = this.scrollLeft.bind(this)
    this.scrollRight = this.scrollRight.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (event) {
    const {
      target
    } = event

    let showLeftArrow
    let showRightArrow

    if (target.scrollLeft === 0) {
      showLeftArrow = false
    } else {
      showLeftArrow = true
    }

    if (target.scrollWidth - target.scrollLeft === target.offsetWidth) {
      showRightArrow = false
    } else {
      showRightArrow = true
    }

    this.setState({
      showLeftArrow,
      showRightArrow
    })
  }

  scrollLeft () {
    this.carouselRef.current.scrollLeft -= 200
  }

  scrollRight () {
    this.carouselRef.current.scrollLeft += 200
  }

  render () {
    const {
      showLeftArrow,
      showRightArrow
    } = this.state
    const CarouselList = this.props.data.map((item, i) => <CarouselItem {...item} onCarouselClick={this.props.onCarouselClick} key={i} />)

    return (
      <div className='sc-carousel-container'>
        <div ref={this.carouselRef} className='sc-carousel' onScroll={this.handleScroll}>
          {CarouselList}
        </div>
  
        {showLeftArrow && <CarouselArrow direction='left' onClick={this.scrollLeft} />}
        {showRightArrow && <CarouselArrow direction='right' onClick={this.scrollRight} />}
      </div>
    )
  }
}

export default CarouselMessage
