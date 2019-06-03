import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      currentSlide: 0,
    };
  }
  componentDidMount() {
    this.setState({
      carousel: carouselData,
    });
  }

  leftClick = () => {
    this.state.currentSlide - 1 < 0 ? this.setState({ currentSlide: this.state.carousel.length - 1 }) : this.setState({ currentSlide: this.state.currentSlide - 1 });
  };

  rightClick = () => {
    this.state.currentSlide + 1 > this.state.carousel.length - 1 ? this.setState({ currentSlide: 0 }) : this.setState({ currentSlide: this.state.currentSlide + 1 });
  };

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.currentSlide]} alt='' style={{ display: 'block' }} />;
  };

  render() {
    return (
      <div className='carousel'>
        <div className='left-button' onClick={this.leftClick}>
          {'<'}
        </div>
        {this.selectedImage()}
        <div className='right-button' onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
