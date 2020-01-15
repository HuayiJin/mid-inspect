import PropTypes from 'prop-types'
import React, { Component, Children } from 'react'
import SimpleSidebar from './source/Sidebar'
import SubVideoContainer from './source/SubVideo'
import VideoContainer from './source/MainVideo'
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


class Subject3Container extends Component {
  state = {}

  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Container style={{
          padding:'1.5em 5em 1em 5em',
          minHeight: '70em',
          width:'100%'
        }}
        >
          <Grid style={{
            minHeight: '70em',
          }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <SimpleSidebar />
              </Grid.Column>
              <Grid.Column width={9}>
                <VideoContainer />
              </Grid.Column>
              <Grid.Column width={4}>
                <SubVideoContainer/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

const Subject3Layout = () => (
  <Subject3Container />
)
export default Subject3Layout;

