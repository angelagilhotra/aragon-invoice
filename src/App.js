import React from 'react'
import {
  AragonApp,
  Button,
  Text,
  AppBar,
  observe,
  ContextMenu, 
  ContextMenuItem,
  AppView,
  Table, TableHeader, TableRow, TableCell
} from '@aragon/ui'
import styled from 'styled-components'

class LoginButton extends React.Component {
  render() {
    return (
      <Button> hello </Button>
    )
  }
}

class InvoiceSummary extends React.Component {
    render () {
      return (
        <Table
    header={
      <TableRow>
        <TableHeader title="Activity" />
      </TableRow>
    }
  >
    <TableRow>
      <TableCell>
        <Text>January</Text>
      </TableCell>
      <TableCell>
        <Text>February</Text>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Text>10 commits</Text>
      </TableCell>
      <TableCell>
        <Text>32 commits</Text>
      </TableCell>
    </TableRow>
  </Table>
      )
    }
}

export default class App extends React.Component {
  render () {
    return (
      <AragonApp>
        <AppView title="Invoice Manager">
        <InvoiceSummary />
        </AppView>
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