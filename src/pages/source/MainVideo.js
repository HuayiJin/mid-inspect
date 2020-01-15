import PropTypes from 'prop-types'
import React, { Component, Children } from 'react'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
    Responsive,
    Dropdown,
    Container,
    Label
} from 'semantic-ui-react'


class LabelContainer extends Component {
    state = {}

    render() {
        const { children } = this.props

        return (
            <div
                style={{
                    maxWidth:'10em',
                    margin: '0.2em',
                    padding: '0.2em',
                }}
            >
                {children}
            </div>

        )
    }
}


const VideoContainer = ({ }) => (
    <Container //主视频
        style={{
            //background: 'yellow',
            margin: '1em',
            height: '100%'
        }}
        fluid
    >
        <Container
            style={{
                padding: '0em 1em 3em 1em',
            }}
            fluid
        >
            <video id="video1" controls width="100%">
                <source src="http://202.120.60.31:5000/0009.mp4" type="video/mp4"></source>
            </video>
        </Container>
        <Container
            style={{
                padding: '1em',
            }}
        >
            <h2>
                视频描述
            </h2>
            <Label as='a' color='blue' size='large' style={{margin:'1em'}} tag>
                白天
            </Label>
            <Label as='a' color='brown'  size='large' style={{margin:'1em'}} tag>
                雨天
            </Label>
            <Label as='a' color='green'  size='large' style={{margin:'1em'}} tag>
                行驶车辆右转弯
            </Label>
            <Label as='a' color='grey'  size='large' style={{margin:'1em'}} tag>
                危险对象右转弯
            </Label>
            <Label as='a' color='olive'  size='large' style={{margin:'1em'}} tag>
                危险对象：小型车
            </Label>
            <Label as='a' color='orange'  size='large' style={{margin:'1em'}} tag>
                丁字路口
            </Label>
            <Label as='a' color='pink'  size='large' style={{margin:'1em'}} tag>
                路面湿滑
            </Label>
            <Label as='a' color='purple'  size='large' style={{margin:'1em'}} tag>
                有道路标志线
            </Label>
            <Label as='a' color='red'  size='large' style={{margin:'1em'}} tag>
                乡村
            </Label>
        
        </Container>
    </Container>
)

export default VideoContainer;