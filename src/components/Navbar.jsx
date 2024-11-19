
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ onDropdownChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const grouping = searchParams.get("grouping") || "status";
  const ordering = searchParams.get("ordering") || "priority";

  useEffect(() => {
    onDropdownChange("grouping", grouping);
    onDropdownChange("ordering", ordering);
  }, [grouping, ordering, onDropdownChange]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelectChange = (type, value) => {
    searchParams.set(type, value);
    setSearchParams(searchParams); 
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="dropdown-container" onClick={toggleDropdown}>
        <img src="/images/Display.svg" alt="Filter Logo" className="filter-logo" />
        <span>Display</span>
        <img src="/images/down.svg" />
        {isDropdownOpen && (
          <div className="dropdown-menu-container" onClick={(e) => e.stopPropagation()}>
            <div className="dropdown-section">
              <span>Grouping</span>
              <select
                className="dropdown-menu"
                value={grouping}
                onChange={(e) => handleSelectChange("grouping", e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-section">
              <span>Ordering</span>
              <select
                className="dropdown-menu"
                value={ordering}
                onChange={(e) => handleSelectChange("ordering", e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
