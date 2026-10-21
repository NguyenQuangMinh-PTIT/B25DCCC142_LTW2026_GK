import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === Number(id));

  const [isCalling, setIsCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isCalling) {
      intervalId = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCalling]);

  const handleCall = () => {
    setSeconds(0);
    setIsCalling(true);
  };

  if (!contact) return <div>Không tìm thấy liên hệ</div>;

  return (
    <div>
      <h2>Chi tiết liên hệ</h2>
      <p><strong>Họ tên:</strong> {contact.name}</p>
      <p><strong>Số điện thoại:</strong> {contact.phone}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Nhóm:</strong> {contact.group}</p>
      
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #3ddbf3" }}>
        <button onClick={handleCall} disabled={isCalling}>
          {isCalling ? "Đang gọi..." : "Gọi"}
        </button>
        {isCalling && <span style={{ marginLeft: "10px" }}>Thời gian gọi: {seconds} giây</span>}
        {isCalling && <button onClick={() => setIsCalling(false)} style={{ marginLeft: "10px" }}>Tắt máy</button>}
      </div>

      <br />
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};
export default ContactDetail;