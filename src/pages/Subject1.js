import React from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';



export default class Index extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
  }

  componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  handleResize = e => {
    console.log('浏览器窗口大小改变事件', e.target.innerHeight)
    this.setState({
      minheight: e.target.innerHeigth
    })
  }


  constructor() {
    super();
    //this.handleResize.bind(this);

    this.state = {
      minheight: window.innerHeight - 100,
      iFrameHeight: '0px'
    }
  }



  render() {
    return (
      <iframe
        style={{ width: '100%', height: this.state.iFrameHeight, overflow: 'visible' }}
        onLoad={() => {
          const obj = ReactDOM.findDOMNode(this);
          this.setState({
            "iFrameHeight": this.state.minheight + 'px'
          });
        }}
        ref="iframe"
        src="https://www.baidu.com/"
        width="100%"
        height={this.state.iFrameHeight}
        scrolling="auto"
        frameBorder="0"
      />
    );
  }
}