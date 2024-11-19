import React, { useEffect, useState } from "react";
import Column from "./Column";
import "../styles/Board.css";

const Board = ({ dropdownSelection }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched tickets:", data.tickets);
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  
  const columns = dropdownSelection.grouping === "priority"
    ? [
        { name: "No Priority", priority: 0 },
        { name: "Urgent", priority: 1 },
        { name: "High", priority: 2 },
        { name: "Medium", priority: 3 },
        { name: "Low", priority: 4 },
      ]
    : dropdownSelection.grouping === "user"
    ? users.map(user => ({ name: user.name, userId: user.id }))
    : [
        { name: "Backlog", status: "Backlog" },
        { name: "Todo", status: "Todo" },
        { name: "In Progress", status: "In progress" },
        { name: "Done", status: "Done" },
        { name: "Cancelled", status: "Cancelled" },
      ];

  
  const getFilteredTickets = (column) => {
    let filteredTickets;
  
    if (dropdownSelection.grouping === "priority") {
      filteredTickets = tickets.filter((ticket) => ticket.priority === column.priority);
    } else if (dropdownSelection.grouping === "user") {
      filteredTickets = tickets.filter((ticket) => ticket.userId === column.userId);
    } else {
      filteredTickets = tickets.filter((ticket) => ticket.status === column.status);
    }
  
  
    if (dropdownSelection.ordering === "priority") {
      return filteredTickets.sort((a, b) => a.priority - b.priority);
    }
    if (dropdownSelection.ordering === "title") {
      return filteredTickets.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    return filteredTickets;
  };
  
  



  columns.forEach((column) => {
    console.log(`Column: ${column.name}`, getFilteredTickets(column));
  });

  return (
    <div className="board">
      {columns.map((column) => (
        <Column
          key={column.name}
          name={column.name}
          tickets={getFilteredTickets(column)}
        />
      ))}
    </div>
  );
};

export default Board;
