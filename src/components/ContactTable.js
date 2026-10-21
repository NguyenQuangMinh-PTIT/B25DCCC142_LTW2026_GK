import ContactRow from "./ContactRow";

const ContactTable = ({ filteredContacts, onDelete, onToggleFavorite }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Nhóm</th>
          <th>Yêu thích</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map(c => (
          <ContactRow key={c.id} contact={c} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
        ))}
      </tbody>
    </table>
  );
};
export default ContactTable;