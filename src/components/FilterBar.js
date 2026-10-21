import { GROUPS } from "../data";

const FilterBar = ({ query, groupFilter, onQueryChange, onGroupChange }) => {
  return (
    <div>
      <label htmlFor="search">Tìm kiếm: </label>
      <input 
        id="search" 
        type="text" 
        value={query} 
        onChange={(e) => onQueryChange(e.target.value)} 
      />
      
      <label htmlFor="filterGroup" style={{ marginLeft: "10px" }}>Nhóm: </label>
      <select 
        id="filterGroup" 
        value={groupFilter} 
        onChange={(e) => onGroupChange(e.target.value)}
      >
        <option value="">Tất cả</option>
        {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
    </div>
  );
};
export default FilterBar;