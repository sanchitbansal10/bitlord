import React, {Component} from 'react';
import Dashboard from 'react-dazzle';
import 'react-dazzle/lib/style/style.css';
import 'bootstrap/dist/css/bootstrap.css';

import Transport from './subWidgets/Transport'
import Accomodation from './subWidgets/Accomodation'
import Others from './subWidgets/Others'
import InterestingStuff from './subWidgets/InterestingStuff'

export default class MainDashboard extends Component {
    constructor() {
      super()
      this.state = {
        widgets: {
          Transport: {
            type: Transport,
            title: 'Transport info',
          },
          Accomodation:{
            type: Accomodation,
            title:'Your Accomodation Bookings'
          },
          Others:{
            type: Others,
            title:'Your Others Bookings'
          },
          InterestingStuff:{
            type: InterestingStuff,
            title:'Your Others Bookings'
          }
        },
        layout: {
          rows: [{
            columns: [{
              className: 'col-md-6 col-sm-6 col-xs-12',
              widgets: [{key: 'Transport'}]
            }, {
              className: 'col-md-6 col-sm-6 col-xs-12',
              widgets: [{key: 'Accomodation'}]
            }]},{
            columns: [{
                className: 'col-md-6 col-sm-6 col-xs-12',
                widgets: [{key: 'Others'}]
              },{
                className: 'col-md-6 col-sm-6 col-xs-12',
                widgets: [{key: 'InterestingStuff'}]
              }]
            }]
        }
        }
      }
    
  
    render() {
      return <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
    }
  }


  