const Home = ({ contacts }) => {
  const totalFavorite = contacts.reduce((sum, current) => current.favorite ? sum + 1 : sum, 0);

  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Tổng số liên hệ: {contacts.length}</p>
      <p>Số liên hệ yêu thích: {totalFavorite}</p>
    </div>
  );
};
export default Home;