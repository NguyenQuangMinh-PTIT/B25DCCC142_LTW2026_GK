const BUILD_TAG = "hb-9472";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import ContactDetail from "./pages/ContactDetail";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const localData = localStorage.getItem("gk_contacts");

    if (localData) {
      setContacts(JSON.parse(localData));
      setLoading(false);
    } else {
      const fetchData = async () => {
        try {
          const res = await axios.get("/data/contacts.json", { signal: controller.signal });
          setContacts(res.data);
          setLoading(false);
        } catch (err) {
          if (!axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
          }
        }
      };
      fetchData();
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading && contacts.length > 0) {
      localStorage.setItem("gk_contacts", JSON.stringify(contacts));
    }
  }, [contacts, loading]);

  const addContact = (newContact) => setContacts([...contacts, newContact]);
  const deleteContact = (id) => setContacts(contacts.filter(c => c.id !== id));
  const toggleFavorite = (id) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c));
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home contacts={contacts} />} />
          <Route path="contacts" element={
            <ContactList 
              contacts={contacts} 
              onDelete={deleteContact} 
              onToggleFavorite={toggleFavorite} 
            />
          } />
          <Route path="contacts/new" element={<AddContact onAdd={addContact} />} />
          <Route path="contacts/:id" element={<ContactDetail contacts={contacts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;