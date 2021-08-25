import React from 'react';
import axios from 'axios';


class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days5: []
    };
    //bind functions here this.something = this.something.bind(this)
    this.last5Drawings = this.last5Drawings.bind(this);
  }
  //functions here

  last5Drawings() {
    axios.get('/last5')
      .then( (results) => {
        console.log(results.data);
      })
  }

  componentDidMount() {
    this.last5Drawings()
  }

  render() {
    return (
      <div>This will be today's number here</div>
    );
  }
}

export default Today;