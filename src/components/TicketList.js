import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
      <hr />
      {/* We now need to map over the values of an object, not an array. */}
      {Object.values(props.ticketList).map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          id={ticket.id}
          key={ticket.id}/>
      )}
      {/* Don't forget to add the curly brace above - otherwise there will be a syntax error. */}
    </React.Fragment>
  );
}


TicketList.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

// function TicketList(props){

//   return (
//     <React.Fragment>
//       <hr/>
//       {props.ticketList.map((ticket) =>
//         <Ticket
//           whenTicketClicked = { props.onTicketSelection }
//           names={ticket.names}
//           location={ticket.location}
//           issue={ticket.issue}
//           id={ticket.id}
//           key={ticket.id}/>
//       )}
//     </React.Fragment>
//   );
// }

// TicketList.propTypes = {
//   ticketList: PropTypes.array,
//   onTicketSelection: PropTypes.func
// };
// ^^^ Code before implementing React Redux library ^^^

export default TicketList;