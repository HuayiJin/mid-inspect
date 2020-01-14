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



const options1 = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]

class DropContainer extends Component {
    state = {}

    render() {
        const { children } = this.props

        return (
            <Container
                style={{
                    padding: "1em 2em 1em 2em",
                }}
            >
                {children}
            </Container>

        )
    }
}
const Dropdown1 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '白天', value: 1 },
            { key: 2, text: '晚上', value: 2 },
        ]}
        floating fluid search selection placeholder='时间'
    />
)

const Dropdown2 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '晴天', value: 1 },
            { key: 2, text: '雨天', value: 2 },
        ]}
        floating fluid search selection placeholder='天气'
    />
)

const Dropdown3 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '右转弯', value: 1 },
            { key: 2, text: '左转弯', value: 2 },
            { key: 3, text: '直行前进', value: 3 },
            { key: 4, text: '变道', value: 4 },
            { key: 5, text: '超车', value: 5 },
            { key: 6, text: '倒车', value: 6 },
        ]}
        floating fluid search selection placeholder='行驶车辆行为'
    />
)


const Dropdown4 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '右转弯', value: 1 },
            { key: 2, text: '左转弯', value: 2 },
            { key: 3, text: '急停', value: 3 },
            { key: 4, text: '直行前进', value: 4 },
            { key: 5, text: '变道', value: 5 },
            { key: 6, text: '超车', value: 6 },
            { key: 7, text: '掉头', value: 7 },
            { key: 8, text: '倒车', value: 8 },
        ]}
        floating fluid search selection placeholder='危险对象行为'
    />
)



const Dropdown5 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '摩托车', value: 1 },
            { key: 2, text: '自行车', value: 2 },
            { key: 3, text: '小型车', value: 3 },
            { key: 4, text: '行人', value: 4 },
        ]}
        floating fluid search selection placeholder='危险对象属性'
    />
)


const Dropdown6 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '掉头路口', value: 1 },
            { key: 2, text: '合流路口', value: 2 },
            { key: 3, text: '非路口', value: 3 },
            { key: 4, text: '丁字路口', value: 4 },
            { key: 5, text: '十字路口', value: 5 },
        ]}
        floating fluid search selection placeholder='路口类型'
    />
)


const Dropdown7 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '湿滑', value: 1 },
            { key: 2, text: '干燥', value: 2 },
        ]}
        floating fluid search selection placeholder='路面状态'
    />
)


const Dropdown8 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '无', value: 1 },
            { key: 2, text: '有', value: 2 },
        ]}
        floating fluid search selection placeholder='道路标志线'
    />
)


const Dropdown9 = () => (
    <Dropdown
        clearable options={[
            { key: 1, text: '城镇', value: 1 },
            { key: 2, text: '乡村', value: 2 },
        ]}
        floating fluid search selection placeholder='地图'
    />
)

const SimpleSidebar = ({ }) => (
    <Container
        minHeight='90em'
        style={{
            padding: "1em 1em 1em 5em",
        }}

    >
        <Container
            style={{
                padding: "0em 0em 10em 0em",
                background: '#eeeeee'
            }}

        >
            <Menu.Item >
                <Container
                    style={{
                        padding: "1.6em 1.8em 0.5em 1.8em",
                        color: 'blue'
                    }}
                >
                    <Header inverted size='large' style={{
                        color: '#111111'
                    }}>
                        请选择危险要素
                </Header>
                </Container>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown1 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown2 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown3 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown4 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown5 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown6 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown7 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown8 />
                </DropContainer>
            </Menu.Item>
            <Menu.Item>
                <DropContainer>
                    <Dropdown9 />
                </DropContainer>
            </Menu.Item>
        </Container>
    </Container>
)

export default SimpleSidebar;