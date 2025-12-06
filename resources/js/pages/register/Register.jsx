import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useIndonesiaRegion } from '../../hooks/useIndonesiaRegion';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const {
    provinces,
    regencies,
    districts,
    villages,
    loading,
    fetchRegencies,
    fetchDistricts,
    fetchVillages
  } = useIndonesiaRegion();

  const [formData, setFormData] = useState({
    nip: '',
    nik: '',
    name: '',
    email: '',
    phone: '',
    province: '',
    regency: '',
    district: '',
    village: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Handle cascade dropdown untuk wilayah
    if (name === 'province') {
      fetchRegencies(value);
      setFormData(prev => ({
        ...prev,
        province: value,
        regency: '',
        district: '',
        village: ''
      }));
    } else if (name === 'regency') {
      fetchDistricts(value);
      setFormData(prev => ({
        ...prev,
        regency: value,
        district: '',
        village: ''
      }));
    } else if (name === 'district') {
      fetchVillages(value);
      setFormData(prev => ({
        ...prev,
        district: value,
        village: ''
      }));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: replace with real register flow then redirect
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Side Image with Logo */}
        <div className="left-panel">
          <div className="logo-container">
            <img src="favicon.ico" alt="Logo Muhammadiyah" className="logo" />
          </div>
          <div className="building-image"></div>
        </div>

        {/* Decorative Circles */}
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
        <div className="circle circle-3"></div>

        {/* Register Card */}
        <div className="register-card">
          <div className="register-content">
            <div className="register-header">
              <h1>Daftar Akun</h1>
            </div>
            
            <Form onSubmit={handleRegister} className="register-form">
              <Form.Row columns={2}>
                <Input
                  label="NIK"
                  type="text"
                  name="nik"
                  placeholder="Masukkan NIK"
                  value={formData.nik}
                  onChange={handleChange}
                  required
                  minLength={18}
                />

                <Input
                  label="NIP"
                  type="text"
                  name="nip"
                  placeholder="Masukkan NIP"
                  value={formData.nip}
                  onChange={handleChange}
                  required
                />
              </Form.Row>

              <Input
                label="Nama Lengkap"
                type="text"
                name="name"
                placeholder="Masukkan Nama Lengkap"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={8}
              />

              <Form.Row columns={2}>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Masukkan Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Nomor Telepon"
                  type="tel"
                  name="phone"
                  placeholder="Masukkan Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10,13}"
                  required
                />
              </Form.Row>
              
              <Form.Row columns={2}>
                <Input
                  type="select"
                  label="Provinsi"
                  name="province"
                  placeholder="Pilih Provinsi"
                  options={provinces}
                  value={formData.province}
                  onChange={handleChange}
                  required
                  disabled={loading || provinces.length === 0}
                />

                <Input
                  type="select"
                  label="Kota/Kabupaten"
                  name="regency"
                  placeholder="Pilih Kota/Kabupaten"
                  options={regencies}
                  value={formData.regency}
                  onChange={handleChange}
                  required
                  disabled={!formData.province || regencies.length === 0}
                />
              </Form.Row>

              <Form.Row columns={2}>
                <Input
                  type="select"
                  label="Kecamatan"
                  name="district"
                  placeholder="Pilih Kecamatan"
                  options={districts}
                  value={formData.district}
                  onChange={handleChange}
                  required
                  disabled={!formData.regency || districts.length === 0}
                />

                <Input
                  type="select"
                  label="Desa/Kelurahan"
                  name="village"
                  placeholder="Pilih Desa/Kelurahan"
                  options={villages}
                  value={formData.village}
                  onChange={handleChange}
                  required
                  disabled={!formData.district || villages.length === 0}
                />
              </Form.Row>

              <Input
                label="Alamat Detail"
                type="textarea"
                name="address"
                placeholder="Masukkan Alamat Detail (jalan, nomor rumah, RT/RW)"
                value={formData.address}
                onChange={handleChange}
                variant='filled'
                required
              />

              <Input
                label="Kata Sandi"
                type="password"
                name="password"
                placeholder="Masukkan Kata Sandi"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
              />

              <Input
                label="Konfirmasi Kata Sandi"
                type="password"
                name="confirmPassword"
                placeholder="Masukkan Kata Sandi yang Sama"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
              />
            </Form>

            <Button type="submit" variant="success" size="large" fullWidth>
                Daftar
            </Button>

            <div className="login-link">
              <a href="/login">Sudah Punya Akun?</a>
            </div>

            <div className="register-footer">
              <p>Petugas Rumah Sakit</p>
              <p>PKU Muhammadiyah Gombong</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
