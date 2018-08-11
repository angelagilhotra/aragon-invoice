import React from 'react'
import {
  AragonApp,
  Button,
  Text,
  AppBar,
  observe,
  AppView,
  ContextMenu, ContextMenuItem,
  Table, TableHeader, TableRow, TableCell,
  Card,
  SidePanel
} from '@aragon/ui'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import Aragon, { providers } from '@aragon/client'
import styled from 'styled-components'
import AppLayout from './components/AppLayout'

class InvoiceSummary extends React.Component {
  render () {
    return (
      <Table
      header={
        <TableRow>
          <TableHeader title="Invoices" />
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
          <Text><ContextMenu>
            <ContextMenuItem>Some Action</ContextMenuItem>
            <ContextMenuItem>Another Action</ContextMenuItem>
        </ContextMenu></Text>
        </TableCell>
      </TableRow>
      </Table>
    )
  }
}

class InfoBar extends React.Component {
  render () {
    return (
      <Table
      header={
        <TableRow>
          <TableHeader title="Info" />
        </TableRow>
      }
    >
      <TableRow>
        <TableCell>
          <Text>January</Text>
        </TableCell>
        <TableCell>
          <Text>34</Text>
        </TableCell>
      </TableRow>
      </Table>
    )
  }
}

class CreatePayment extends React.Component {
  render () {
    return (
      <Button mode="strong">Create Payment </Button>
    )
  }
}

class TaxInfo extends React.Component {
  render() {
    return (
      <Card>
    <Text>Some Text</Text>
  </Card>
    )
  }
}


export default class App extends React.Component {
  state = {
    sidepanelOpened: false
  }
  render () {
    return (
      <AppView
    appBar={
      <AppBar
        title="Invoice Manager"
        endContent={<CreatePayment />}
      />
    }
  >
    <Grid fluid>
        <Row>
          <Col xs={6} md={10}>
            <InvoiceSummary />
          </Col>
          <Col xs={6} md={2}>
            <InfoBar />
          </Col>
        </Row>
      </Grid>


  </AppView>
    );
  }
}