import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GROUPS } from "../data";

const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", group: GROUPS[0] });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone)) {
      setErrorMsg("Vui lòng nhập đúng 10 chữ số cho số điện thoại!");
      return; 
    }

    const newContact = { ...form, id: Date.now(), favorite: false };
    onAdd(newContact);
    navigate("/contacts", { replace: true });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", background: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 2px 15px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>Thêm Liên Hệ Mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>Họ tên:</label>
          <input id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </div>
        <div>
          <label htmlFor="phone" style={{ fontWeight: "bold" }}>Số điện thoại:</label>
          <input 
            id="phone" 
            type="text" 
            value={form.phone} 
            onChange={e => {
                setForm({...form, phone: e.target.value});
                if (errorMsg) setErrorMsg("");
            }} 
            required 
          />
          {errorMsg && <span className="error-text">{errorMsg}</span>} 
        </div>
        <div>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>Email:</label>
          <input id="email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        </div>
        <div>
          <label htmlFor="group" style={{ fontWeight: "bold" }}>Nhóm:</label>
          <select id="group" value={form.group} onChange={e => setForm({...form, group: e.target.value})}>
            {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <button type="submit" style={{ width: "100%", padding: "12px", fontSize: "1.1rem", marginBottom: "10px" }}>Xác nhận Thêm</button>
      </form>
      <button style={{ width: "100%", backgroundColor: "#6c757d", padding: "12px", fontSize: "1.1rem" }} onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};
export default AddContact;