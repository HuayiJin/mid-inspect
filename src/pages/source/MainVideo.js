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
                padding: '0em 1em 0em 1em',
            }}
            fluid
        >
            <video id="video1" controls width="100%">
                <source src="http://202.120.60.31:5000/0040.mp4" type="video/mp4"></source>
            </video>
        </Container>
        <Container
            style={{
                padding: '2em 3em 0em 3em',
            }}
        >
            <h3>
                视频描述
            </h3>
            <Label as='a' color='blue' tag>
                New
            </Label>
        
            <Label as='a' color='red' tag>
                Upcoming
            </Label>
        
            <Label as='a' color='teal' tag>
                Featured
            </Label>
               
        </Container>
    </Container>
)

export default VideoContainer;