import React from 'react';

const last5 = (props) => {
  const days = props.days;
  const split = props.days[0].winning_numbers.split(' ');
  const Listdays = days.map( (item) =>

    <li>{new Date(item.draw_date).toDateString()} {item.winning_numbers}</li>
  )
  return (
    <div>
      <div>Last 5 Drawings</div>
       <ul>{ Listdays }</ul>
   </div>
  )

}


export default last5;