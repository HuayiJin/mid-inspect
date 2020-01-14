import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Input,
} from 'semantic-ui-react'

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  

class MyHeader extends Component {
    state = { activeItem: 'Home' }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state


        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: '6em', padding: '0.5em 4em', backgroundColor: '#303030' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='huge'
                            borderless='true'
                        >
                            <Container>
                                <Menu.Item
                                    name='Home'
                                    as={ Link }
                                    to='/'
                                    active={activeItem === 'Home'}
                                    onClick={this.handleItemClick}
                                >主页</Menu.Item>
                                <Menu.Item
                                    name='Subject1'
                                    as={ Link }
                                    to="/subject1"
                                    active={activeItem === 'Subject1'}
                                    onClick={this.handleItemClick}
                                >课题一</Menu.Item>
                                <Menu.Item
                                    name='Subject3'
                                    as={ Link }
                                    to="/subject3"
                                    active={activeItem === 'Subject3'}
                                    onClick={this.handleItemClick}
                                >危险驾驶场景重构</Menu.Item>

                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

MyHeader.propTypes = {
    children: PropTypes.node,
}

export default MyHeader;