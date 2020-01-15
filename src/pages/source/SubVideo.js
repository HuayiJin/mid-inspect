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
    

    render() {
        const { children } = this.props

        return (
            { children }
        )
    }
}

function SimpleImage(props) {
    console.log(props.imagename)
    const source = "http://202.120.60.31:5000/" + props.imagename + ".jpg"

    return (
        <Grid style={{
            margin:"0em 0em 0.5em 0em"
        }}>
            <GridRow>
                <GridColumn width={8}>
                    <Image src={source} />
                </GridColumn>
                <GridColumn width={8}>
                    <h4>
                        {props.describe}
                    </h4>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}


const SubVideoContainer = ({ }) => (
    <Container 
        style={{
            background: '#eeeeee',
            padding: '1em',
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
                }}
            >
                <Menu.Item>
                    <SimpleImage imagename='0007' 
                    describe='白天；雨天；行驶车辆右转弯；危险对象：小型车；危险对象行为：直行前进；非路口；路面湿滑；有道路标志线；城镇'/>
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage imagename='0011'
                    describe='白天；雨天；行驶车辆直行前进；危险对象：小型车；危险对象行为：超车；非路口；路面湿滑；有道路标志线；乡村'/>
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage imagename='0014'
                    describe='白天；雨天；行驶车辆直行前进；危险对象：小型车；危险对象行为：掉头；掉头路口；路面干燥；有道路标志线；乡村'/>
                </Menu.Item>
                <Menu.Item>
                    <SimpleImage imagename='0045'
                    describe='白天；雨天；行驶车辆直行前进；危险对象：小型车；危险对象行为：急停；十字路口；路面湿滑；有道路标志线；乡村'/>
                </Menu.Item>
            </Container>
        </Container>
    </Container>
)

export default SubVideoContainer;