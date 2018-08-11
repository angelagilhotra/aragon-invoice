import React from 'react'
import PropTypes from 'prop-types'
import {
  AragonApp,
  AppBar,
  Button,
  Badge,
  SidePanel,
  observe,
  Text
} from '@aragon/ui'

// import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'
import AppLayout from './components/AppLayout'

const AppContainer = styled(AragonApp)`
  display: flex;
  align-items: center;
  justify-content: center;
`

class LoginButton extends React.Component {
  render() {
    return (
      <Button mode="strong">Log in</Button>
    )
  }
}

export default class App extends React.Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
  }
  static defaultProps = {
    tokenDecimals: null,
    tokenSupply: null,
    tokenSymbol: null,
    holders: [],
    userAccount: '',
  }
  state = {
    assignTokensConfig: {},
    sidepanelOpened: false,
    tokenSettingsLoaded: false,
  }
  // componentWillReceiveProps(nextProps) {
    // const { tokenSettingsLoaded } = this.state
    // Is this the first time we've loaded the token settings?
    // if (!tokenSettingsLoaded && hasLoadedTokenSettings(nextProps)) {
    //   this.setState({
    //     tokenDecimalsBase: Math.pow(10, nextProps.tokenDecimals),
    //     tokenSettingsLoaded: true,
      // })
    // }
  // }
  handleAssignTokens = ({ amount, recipient }) => {
    const { app } = this.props
    const { tokenDecimalsBase } = this.state
    app.mint(recipient, amount * tokenDecimalsBase)
    this.handleSidepanelClose()
  }
  handleAppBarLaunchAssignTokens = () => this.handleLaunchAssignTokens()
  handleLaunchAssignTokens = recipient => {
    this.setState({
      assignTokensConfig: { recipient },
      sidepanelOpened: true,
    })
  }
  handleSidepanelClose = () => {
    this.setState({
      assignTokensConfig: {},
      sidepanelOpened: false,
    })
  }
  render () {
    const { tokenSymbol, tokenSupply, holders, userAccount } = this.props
    const {
      tokenDecimalsBase,
      assignTokensConfig,
      sidepanelOpened,
      tokenSettingsLoaded,
    } = this.state
    return (
      <AragonApp>
        {/* <AppBar title="Your Aragon App" endContent={<LoginButton />}>
        </AppBar> */}
        <AppLayout>
          <AppLayout.Header>
            <AppBar
              title= "token"
              // {
                // <Title>
                //   <span>Token</span>
                //   {tokenSymbol && <Badge.App>{tokenSymbol}</Badge.App>}
                // </Title>
              // }
              endContent={
                <Button
                  mode="strong"
                  onClick={this.handleAppBarLaunchAssignTokens}
                >
                  Assign Tokens
                </Button>
              }
            />
          </AppLayout.Header>
          <AppLayout.ScrollWrapper>
            <AppLayout.Content>
              {tokenSettingsLoaded && holders.length > 0 ? (
                console.log('hello prev')
                // <Holders
                //   holders={holders}
                //   onAssignTokens={this.handleLaunchAssignTokens}
                //   tokenDecimalsBase={tokenDecimalsBase}
                //   tokenSupply={tokenSupply}
                //   userAccount={userAccount}
                // />
              ) : (
                console.log ('hello')
                // <EmptyState onActivate={this.handleLaunchAssignTokens} />
              )}
            </AppLayout.Content>
          </AppLayout.ScrollWrapper>
        </AppLayout>
        <SidePanel
          title="Assign Tokens"
          opened={sidepanelOpened}
          onClose={this.handleSidepanelClose}
        >
        hello
          {/* <AssignVotePanelContent
            onAssignTokens={this.handleAssignTokens}
            opened={sidepanelOpened}
            {...assignTokensConfig}
          /> */}
        </SidePanel>
      </AragonApp>
    )
  }
}

const ObservedCount = observe(
  (state$) => state$,
  { count: 0 }
)(
  ({ count }) => <Text.Block style={{ textAlign: 'center' }} size='xxlarge'>{count}</Text.Block>
)