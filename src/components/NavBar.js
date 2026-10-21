import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" end>Trang chủ</NavLink> | {" "}
      <NavLink to="/contacts" end>Danh sách liên hệ</NavLink> | {" "}
      <NavLink to="/contacts/new" end>Thêm liên hệ</NavLink>
    </nav>
  );
};
export default NavBar;