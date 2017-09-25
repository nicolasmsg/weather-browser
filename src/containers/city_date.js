import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDate } from '../actions/index'

export class CityDate extends Component{

  constructor(props){
    super(props);
    this.state = { date: '' };
    this.props.fetchDate(this.props.lat, this.props.lon, Math.round(new Date().getTime()/1000)); 
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
   return this.getDate();
  }

  getDate(){    
    const ntimestamp = Math.round(new Date().getTime()/1000) + this.props.date[0].dstOffset + this.props.date[0].rawOffset;
    this.setState({date: new Date(ntimestamp * 1000).toUTCString()});
  }

  render(){
    return (
        <div>
          <h3>{this.state.date}</h3>
        </div>
    );
  }
}

function maStateToProps(state) {
  return {date: state.date};
 }
 

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDate}, dispatch);
}

export default connect(maStateToProps, mapDispatchToProps)(CityDate);
  