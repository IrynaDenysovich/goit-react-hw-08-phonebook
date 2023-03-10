import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { RegisterPage } from '../Pages/RegisterPage';
import { LoginPage } from '../Pages/LoginPage';
import { ContactsPage } from '../Pages/ContactsPage';

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
