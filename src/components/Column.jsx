import React from "react";
import Card from "./Card"; // Assuming you already have the `Card` component
import "../styles/Column.css"; // Import the CSS for Column
import { ReactComponent as BacklogIcon } from "../assets/images/Backlog.svg";
import { ReactComponent as TodoIcon } from "../assets/images/To-do.svg";
import { ReactComponent as InProgressIcon } from "../assets/images/in-progress.svg";
import { ReactComponent as DoneIcon } from "../assets/images/Done.svg";
import { ReactComponent as CancelledIcon } from "../assets/images/Cancelled.svg";
import { ReactComponent as NopriorityIcon } from "../assets/images/No-priority.svg";
import { ReactComponent as UrgentIcon } from "../assets/images/SVG - Urgent Priority colour.svg";
import { ReactComponent as HighIcon } from "../assets/images/Img - High Priority.svg";
import { ReactComponent as MediumIcon } from "../assets/images/Img - Medium Priority.svg";
import { ReactComponent as LowIcon } from "../assets/images/Img - Low Priority.svg";
import { ReactComponent as DpIcon } from "../assets/images/dp.svg";

const columnIcons = {
  Backlog: BacklogIcon,
  "Todo": TodoIcon,
  "In Progress": InProgressIcon,
  Done: DoneIcon,
  Cancelled: CancelledIcon,
  "No Priority": NopriorityIcon,
  Urgent: UrgentIcon,
  High: HighIcon,
  Medium: MediumIcon,
  Low: LowIcon,
};

const Column = ({ name, tickets }) => {
  const Icon = columnIcons[name] || DpIcon;
  const ticketCount = tickets.length; 

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left">
          <Icon className="column-icon" style={DpIcon ? { width: "24px", height: "24px" } : {}} />
          <span className="column-name">
            {name} <span className="ticket-count">{ticketCount}</span>
          </span>
        </div>
        <div className="column-header-right">
          <span className="add-icon">
            <img src="/images/add.svg" alt="Add" />
          </span>
          <span className="menu-icon">
            <img src="/images/3 dot menu.svg" alt="Menu" />
          </span>
        </div>
      </div>
      <div className="cards-container">
        {ticketCount > 0 ? (
          tickets.map((ticket) => {
            const user = ticket.userId; 
            return (
              <Card
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                type={ticket.tag[0]}
                userImage={`/images/users/${user}.jpeg`} 
                userName={user} 
              />
            );
          })
        ) : (
          <p>No tickets</p>
        )}
      </div>
    </div>
  );
};

export default Column;
