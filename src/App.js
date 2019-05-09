import './App.css';
import React, {Component} from 'react'
import ImageCarousel from './ImageCarousel'

class App extends Component {
  state = {
    show: true
  }

  noShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.noShow} style={{border:"black", width: "300", height: "300"}}>SHOW/HIDE IMAGE Component</button>
        {this.state.show ?
        <ImageCarousel imageUrls={["https://s2.reutersmedia.net/resources/r/?m=02&d=20190418&t=2&i=1378071698&r=LYNXNPEF3H02D",
         "https://i.kinja-img.com/gawker-media/image/upload/s--HqfzgkTd--/c_scale,f_auto,fl_progressive,q_80,w_800/wp2qinp6fu0d8guhex9v.jpg",
         "https://www.hakaimagazine.com/wp-content/uploads/header-fish-formation.jpg",
         "https://cdn.japantimes.2xx.jp/wp-content/uploads/2013/05/nn20130530a6a-870x471.jpg",
         "https://www.5280.com/sites/default/files/IssueUpload/gettyimages_184638474.jpg"
        ]} /> : <img alt={"nope"} src={"https://t4.ftcdn.net/jpg/01/70/28/23/240_F_170282328_31qaGRFFKAuAWgWpJsqFtO8UpstN2Bhw.jpg"}></img>
        }
      </div>
    );
  }
}

export default App;
