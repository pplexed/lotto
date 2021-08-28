import React from 'react';
import Promise from 'bluebird'

class Yournums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourNums: '',
      matches: [],
      numOfMatches: '',
      winner: false,
      loser: false

    }
    //binds here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numsMatch = this.numsMatch.bind(this);
  }
  //functions here


  numsMatch() {
    this.setState({
      winner: false,
      loser: false
    });
    const yourNumbers = this.state.yourNums.match(/.{1,2}/g);
    const winNumbers = this.props.compare.split(' ');
    // const matches =
    const matches = yourNumbers.filter( (number) => {
      return winNumbers.indexOf(number) !== -1;
    });
    // Promise.map(yourNumbers, review => {
    //   return review
    // })
    //   .filter((results) => {
    //     return winNumbers.indexOf(results) !== -1;
    //   })
    //   .then((results) => {
    //     this.setState({
    //       matches: results,
    //       numOfMatches: results.length
    //     });
    //   });
    if (matches.length) {
      this.setState({
        winner: true,
        loser: false
      });
    } else {
      this.setState({
        winner: false,
        loser: true
      });
    }

    this.setState({
      matches: matches,
      numOfMatches: matches.length
    });
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      yourNums: event.target.value
    });
  }

  handleSubmit(event) {
    this.numsMatch();

    event.preventDefault();
  }

  render() {
    const days = this.state.matches || [];
    const Listdays = days.map( (item) =>

    <span class="ball">{item}</span>
  )
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <label>
          Your Numbers:
          <input type="text" maxLength="10" minLength="10" placeholder="No Spaces" value={this.state.yourNums} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Match Your Numbers" />
      </form>
      <div className={this.state.winner ? '' : 'hidden'}>You matched {this.state.numOfMatches} numbers!!</div>
      <div className={this.state.loser ? '' : 'hidden'}>Sorry you did not match any numbers</div>
      <div class="matches"> {Listdays} </div>
      </div>
    );
  }
}

export default Yournums;

//What I want this to do:
// be able to type in your numbers
// on a click button
// have it compare your numbers to the number of the last last5Drawings
// if there was a match then say you had a match
// if no match say no match