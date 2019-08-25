import React, { Component } from 'react'
import ContuctUs from './ContuctUs'
import FooterInfo from './FooterInfo'

export default class Footer extends Component {
  render() {
    return (
      <div className="All-in-footer">
        <ContuctUs />
        <FooterInfo />
      </div>
    )
  }
}

