import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ContactTable from "../components/ContactTable";

const ContactList = ({ contacts, onDelete, onToggleFavorite }) => {
  const [query, setQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("");

  const handleQueryShift = (value) => {
    setQuery(value);
  };

  const filteredContacts = contacts.filter(c => {
    const matchQuery = c.name.toLowerCase().includes(query.toLowerCase()) || c.phone.includes(query);
    const matchGroup = groupFilter === "" || c.group === groupFilter;
    return matchQuery && matchGroup;
  });

  return (
    <div>
      <h2>Danh sách liên hệ</h2>
      <FilterBar 
        query={query} 
        groupFilter={groupFilter}
        onQueryChange={handleQueryShift} 
        onGroupChange={setGroupFilter} 
      />
      <ContactTable 
        filteredContacts={filteredContacts} 
        onDelete={onDelete} 
        onToggleFavorite={onToggleFavorite} 
      />
    </div>
  );
};
export default ContactList;