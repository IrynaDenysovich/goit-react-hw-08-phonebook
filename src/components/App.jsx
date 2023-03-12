import { ContactsPage } from 'Pages/ContactsPage';
import { HomePage } from 'Pages/HomePage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage redirect="/contacts" />} />
      <Route path="/login" element={<LoginPage redirect="/contacts" />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
