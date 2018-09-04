import React from 'react';

function logProps(Component) {
  return class logProps extends React.Component {
    componentWillReciveProps(nextProps){
      console.log('prevProps', this.props);
      console.log('nextProps', nextProps);
    }
    render(){
      return <Component {...this.props}/>
    }
  }
}
export default logProps;