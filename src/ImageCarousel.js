import React, { Component } from 'react'

export default class ImageCarousel extends Component {
	state = {
		imageUrls: [],
		currentImage: "",
		imageIndex: 0,
		usedIndexes: []
	}

	intervalReference = null

	componentDidMount(){
		this.setState({
			imageUrls: this.props.imageUrls,
			currentImage: this.props.imageUrls[0],
			usedIndexes: [0]
		})
		this.intervalReference = setInterval(this.randomImage, 3000)
	}

	componentWillUnmount(){
		clearInterval(this.intervalReference)
	}

	randomImage = () => {
		let randomIndex = null
		while (randomIndex === this.state.imageIndex || randomIndex === null || this.state.usedIndexes.includes(randomIndex)) {
			randomIndex = Math.floor(Math.random() * this.state.imageUrls.length)
		}
		if (this.state.imageUrls.length - 1 === this.state.usedIndexes.length) {
			this.setState({
				currentImage: this.state.imageUrls[randomIndex],
				imageIndex: randomIndex,
				usedIndexes: [randomIndex]
			}) } else {
			this.setState({
				currentImage: this.state.imageUrls[randomIndex],
				imageIndex: randomIndex,
				usedIndexes: [...this.state.usedIndexes, randomIndex]
			})
		}
	}



	render() {
			return (
			<div>
					<img alt={"img"} src={this.state.currentImage} style={{maxWidth:"50%"}}></img>
			</div>
			)
	}
}
