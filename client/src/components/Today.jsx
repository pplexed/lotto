import React from 'react';
import axios from 'axios';
import Last5 from './last5.jsx';
import Yournums from './Yournums.jsx';
import photo from '../../dist/images/e408b56625d17b6ac03ab441d2b7c2a7.png';


class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days5: [{draw_date: "",
          winning_numbers: "",
          mega_ball: "",
          multiplier: ""}]
    };
    //bind functions here this.something = this.something.bind(this)
    this.last5Drawings = this.last5Drawings.bind(this);
  }
  //functions here

  last5Drawings() {
    axios.get('/last5')
      .then( (results) => {
        this.setState({
          days5: results.data
        });

      })
  }

  componentDidMount() {
    this.last5Drawings()
  }

  render() {
      let today;
      // const today = new Date(this.state.days5[0].draw_date).toDateString() || '';
      if (this.state.days5[0].draw_date) {
        today = new Date(this.state.days5[0].draw_date).toDateString();
      } else {
        today = '';
      }
    return (
      <div class="toplevel">
          <img class ="today"src={photo} alt="Mega Millions Logo" />
        <div class="today">
          <div>Latest Draw Winning Numbers</div>
          <div>{today}</div>
          <div>{this.state.days5[0].winning_numbers}</div>
        </div>
        <div class="last5"><Last5 days={this.state.days5}/></div>
        <div class="nums"><Yournums compare={this.state.days5[0].winning_numbers}/></div>
      </div>
    );
  }
}

export default Today;