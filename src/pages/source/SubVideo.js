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
    Label,
    GridRow,
    GridColumn
} from 'semantic-ui-react'


class DesktopContainer extends Component {
    state = {}

    render() {
        const { children } = this.props

        return (
            { children }
        )
    }
}


const SimpleImage = ({ imagename }) => (
    <Grid style={{
        margin:"0em 0em 0.5em 0em"
    }}>
        <GridRow>
            <GridColumn width={8}>
                <Image src="http://202.120.60.31:5000/0001.jpg" />
            </GridColumn>
            <GridColumn width={8}>
                <Label as='a' color='blue' tag>
                    New
        </Label>

                <Label as='a' color='red' tag>
                    Upcoming
        </Label>

                <Label as='a' color='teal' tag>
                    Featured
        </Label>
            </GridColumn>
        </GridRow>
    </Grid>
)

const SubVideoContainer = ({ }) => (
    <Container //主视频
        style={{
            //background: 'yellow',
            padding: '1em 6em 0em 0em',
            height: '100%'
        }}

    >

        <Container
            style={{
                padding: "0em 0em 5em 0em",
                background: '#eeeeee'
            }}

        >
            <Container
                style={{
                    padding: "2em 1.8em 1em 1.8em",
                    color: 'blue'
                }}
            >
                <Header inverted size='large' style={{
                    color: '#111111'
                }}>
                    相似视频
                </Header>
            </Container>
            <Container
                style={{
                    padding: "0em 2em 0em 1em",
                    color: 'blue'
                }}
            >
                <Menu.Item>
                    <SimpleImage />
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage />
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage />
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage />
                </Menu.Item>
            </Container>
        </Container>
    </Container>
)

export default SubVideoContainer;