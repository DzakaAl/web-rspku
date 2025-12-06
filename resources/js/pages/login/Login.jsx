import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCreditCard, FiLock } from 'react-icons/fi';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials for now
    const validNip = '123456789012345678';
    const validPassword = 'password123';

    if (nip === validNip && password === validPassword) {
      setError('');
      navigate('/beranda');
    } else {
      setError('NIK atau kata sandi salah (gunakan NIK 123456789012345678 & password123)');
    }
  };

  const handleNipChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    setNip(digitsOnly);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Decorative Circles */}
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>

        {/* Login Card */}
        <div className="login-card">
          <div className="login-content">
            <form onSubmit={handleLogin} className="login-form">
              <div className="login-header">
                <h1>Selamat Datang</h1>
              </div>
              <Input
                label="NIK"
                type="text"
                placeholder="Masukkan NIK"
                value={nip}
                onChange={handleNipChange}
                required
                minLength={18}
              />

              <Input
                label="Kata Sandi"
                type="password"
                placeholder="Masukkan Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />

              {error && <p className="login-error">{error}</p>}

              <div className="forgot-password">
                <a href="/forgot-password">Lupa Password?</a>
              </div>

              <Button type="submit" variant="success" size="large" fullWidth>
                Login
              </Button>

              <div className="register-link">
                <a href="/register">Belum Punya Akun?</a>
              </div>
            </form>

            <div className="login-footer">
              <p>Petugas Rumah Sakit</p>
              <p>PKU Muhammadiyah Gombong</p>
            </div>
          </div>
        </div>

        {/* Right Side Image with Logo */}
        <div className="right-panel">
          <div className="logo-container">
            <img src="favicon.ico" alt="Logo Muhammadiyah" className="logo" />
          </div>
          <div className="building-image"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
