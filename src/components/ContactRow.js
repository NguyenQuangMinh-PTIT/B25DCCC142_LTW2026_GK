import { Link } from "react-router-dom";

const ContactRow = ({ contact, onDelete, onToggleFavorite }) => {
  const { id, name, phone, email, group, favorite } = contact;
  return (
    <tr>
      <td>
        <Link to={`/contacts/${id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
          {name} {favorite && <span style={{ color: 'red', marginLeft: '5px' }}>❤️</span>}
        </Link>
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{group}</td>
      <td>{favorite ? "Có" : "Không"}</td>
      <td>
        <button style={{ backgroundColor: '#ffc107', color: 'black' }} onClick={() => onToggleFavorite(id)}>
          {favorite ? "Bỏ tim" : "Thả tim"}
        </button>
        <button style={{ backgroundColor: '#dc3545' }} onClick={() => onDelete(id)}>Xóa</button>
      </td>
    </tr>
  );
};
export default ContactRow;