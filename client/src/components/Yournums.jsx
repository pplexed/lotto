import React from 'react';
import Promise from 'bluebird'

class Yournums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourNums: '',
      matches: [],
      numOfMatches: ''

    }
    //binds here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numsMatch = this.numsMatch.bind(this);
  }
  //functions here


  numsMatch() {
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

    console.log('the matches var: ', matches, 'length: ', matches.length)
    this.setState({
      matches: matches,
      numOfMatches: matches.length
    }, () => {
      console.log('this is state MILO: ', this.state.matches)
    });

    console.log('the matches var: ', this.state.matches)
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
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <label>
          Your Numbers:
          <input type="text" maxLength="10" minLength="10" placeholder="0000000000" value={this.state.yourNums} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Match Your Numbers" />
      </form>
      <div>You matched {this.state.numOfMatches} numbers!!</div>
      <div>{this.state.matches.toString(' ')}</div>
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