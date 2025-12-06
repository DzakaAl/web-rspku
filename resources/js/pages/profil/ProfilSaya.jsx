import { useState } from 'react';
import MainLayout from '../../layout/main/MainLayout';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Form from '../../components/form/Form';
import { useIndonesiaRegion } from '../../hooks/useIndonesiaRegion';
import { buildRegionStateUpdate } from '../../utils/regionForm';
import { MdPerson, MdCameraAlt } from 'react-icons/md';
import './ProfilSaya.css';

const ProfileSaya = () => {
  const [avatarError, setAvatarError] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/300?img=64');
  const [isEditing, setIsEditing] = useState(false);

  const { provinces, regencies, districts, villages, fetchRegencies, fetchDistricts, fetchVillages } =
    useIndonesiaRegion();

  const [formData, setFormData] = useState({
    namaLengkap: 'Admin RS PKU',
    nik: '052277538147',
    nip: '',
    tempatLahir: 'Jakarta',
    tanggalLahir: '1995-05-15',
    jenisKelamin: 'Laki-laki',
    agama: 'Islam',
    nomorTelepon: '08123456789',
    email: 'admin@rspku.com',
    alamatDetail: 'Jl. Raya PKU No. 123, Jakarta Selatan',
    kelurahanId: '',
    kecamatanId: '',
    kabupatenId: '',
    provinsiId: '',
    statusKepegawaian: 'Tetap',
    jabatan: 'Perawat Pelaksana',
    unitKerja: 'IGD',
    tanggalMulaiBekerja: '2010-01-15'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      buildRegionStateUpdate({
        name,
        value,
        state: prev,
        provinces,
        regencies,
        districts,
        villages
      })
    );

    if (name === 'provinsiId') fetchRegencies(value);
    if (name === 'kabupatenId') fetchDistricts(value);
    if (name === 'kecamatanId') fetchVillages(value);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result);
        setAvatarError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('Simpan profil:', formData);
    setIsEditing(false);
  };

  const handleReset = () => {
    console.log('Reset perubahan');
    setIsEditing(false);
  };

  return (
    <MainLayout
      title="Profil Saya"
      subtitle="Data pribadi dan kepegawaian yang diperlukan untuk melengkapi informasi tenaga kesehatan."
    >
      <header className="page-header">
        <h1 className="page-title">Profil Saya</h1>
        <p className="page-subtitle">Kelola informasi profil dan data diri Anda.</p>
      </header>

      {!isEditing && (
        <div className="profile-detail-card">
          <div className="detail-header">
            <div className="detail-title">
              <h2>Informasi Detail</h2>
            </div>
            <Button variant="primary" size="medium" onClick={() => setIsEditing(true)}>
              Edit Profil
            </Button>
          </div>
          <div className="detail-body">
            <div className="detail-avatar-column">
              <div className="detail-avatar">
                {!avatarError ? (
                  <img src={avatarUrl} alt="Foto Profil" onError={() => setAvatarError(true)} />
                ) : (
                  <MdPerson className="photo-placeholder" />
                )}
              </div>
            </div>
            <div className="detail-view-grid">
              <div>
                <h3>Data Diri</h3>
                <div className="detail-view-list">
                  <div className="detail-view-item"><span className="label">Nama Lengkap</span><span className="value">{formData.namaLengkap}</span></div>
                  <div className="detail-view-item"><span className="label">NIK</span><span className="value">{formData.nik}</span></div>
                  <div className="detail-view-item"><span className="label">NIP</span><span className="value">{formData.nip || '-'}</span></div>
                  <div className="detail-view-item"><span className="label">Email</span><span className="value">{formData.email}</span></div>
                  <div className="detail-view-item"><span className="label">Telepon</span><span className="value">{formData.nomorTelepon}</span></div>
                  <div className="detail-view-item"><span className="label">Tempat/Tanggal Lahir</span><span className="value">{formData.tempatLahir}, {formData.tanggalLahir}</span></div>
                  <div className="detail-view-item"><span className="label">Jenis Kelamin</span><span className="value">{formData.jenisKelamin}</span></div>
                  <div className="detail-view-item"><span className="label">Agama</span><span className="value">{formData.agama}</span></div>
                  <div className="detail-view-item"><span className="label">Alamat</span><span className="value">{formData.alamatDetail}</span></div>
                </div>
              </div>
              <div>
                <h3>Data Kerja</h3>
                <div className="detail-view-list">
                  <div className="detail-view-item"><span className="label">Status Kepegawaian</span><span className="value">{formData.statusKepegawaian}</span></div>
                  <div className="detail-view-item"><span className="label">Jabatan</span><span className="value">{formData.jabatan}</span></div>
                  <div className="detail-view-item"><span className="label">Unit Kerja</span><span className="value">{formData.unitKerja}</span></div>
                  <div className="detail-view-item"><span className="label">Tanggal Mulai</span><span className="value">{formData.tanggalMulaiBekerja}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="profile-detail-card">
          <div className="detail-header">
            <div className="detail-title">
              <h2>Ubah Profil</h2>
            </div>
            <Button variant="outline" size="medium" type="button" onClick={handleReset}>
              Batal
            </Button>
          </div>

          <Form onSubmit={handleSubmit} className="detail-form">
            <div className="detail-body">
              <div className="detail-avatar-column">
                <div className="detail-avatar">
                  {!avatarError ? (
                    <img src={avatarUrl} alt="Foto Profil" onError={() => setAvatarError(true)} />
                  ) : (
                    <MdPerson className="photo-placeholder" />
                  )}
                  <div className="avatar-overlay">
                    <input
                      type="file"
                      id="photoUpload"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      style={{ display: 'none' }}
                    />
                    <Button
                      variant="inverse"
                      size="small"
                      icon={<MdCameraAlt />}
                      onClick={() => document.getElementById('photoUpload').click()}
                    >
                      Ganti Foto
                    </Button>
                  </div>
                </div>
                <div className="photo-meta">
                  <p className="photo-meta-title">Panduan Foto</p>
                  <ul className="photo-meta-list">
                    <li>Format JPG/PNG, maks 2MB</li>
                    <li>Gunakan rasio 1:1</li>
                    <li>Wajah jelas, tanpa filter berlebihan</li>
                  </ul>
                </div>
              </div>

            <div className="detail-form-grid">
              <h3>Data Diri</h3>
              <Form.Row columns={2}>
                <Input
                  label="Nama Lengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                    onChange={handleChange}
                    required
                    placeholder="Wajib"
                  />
                  <Input
                    label="NIK"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    maxLength={16}
                    placeholder="16 digit"
                  />
                </Form.Row>

                <Form.Row columns={2}>
                  <Input
                    label="NIP"
                    name="nip"
                    value={formData.nip}
                    onChange={handleChange}
                    placeholder="Jika tersedia"
                  />
                  <Input
                    label="Nomor Telepon"
                    name="nomorTelepon"
                    type="tel"
                    value={formData.nomorTelepon}
                    onChange={handleChange}
                    placeholder="Tidak dibatasi"
                  />
                </Form.Row>

                <Form.Row columns={2}>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Valid email"
                  />
                  <Input
                    label="Tempat Lahir"
                    name="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    placeholder="Kota/Kabupaten"
                  />
                </Form.Row>

                <Form.Row columns={2}>
                  <Input
                    label="Tanggal Lahir"
                    name="tanggalLahir"
                    type="date"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                  />
                  <Input
                    label="Jenis Kelamin"
                    name="jenisKelamin"
                    type="select"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih' },
                      { value: 'Laki-laki', label: 'Laki-laki' },
                      { value: 'Perempuan', label: 'Perempuan' }
                    ]}
                  />
                </Form.Row>

                <Form.Row columns={1}>
                  <Input
                    label="Agama"
                    name="agama"
                    type="select"
                    value={formData.agama}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Agama' },
                      { value: 'Islam', label: 'Islam' },
                      { value: 'Kristen', label: 'Kristen' },
                      { value: 'Katolik', label: 'Katolik' },
                      { value: 'Hindu', label: 'Hindu' },
                      { value: 'Buddha', label: 'Buddha' },
                      { value: 'Konghucu', label: 'Konghucu' }
                    ]}
                  />
                </Form.Row>
                <h3>Data Kerja</h3>
                <Form.Row columns={2}>
                  <Input
                    label="Status Kepegawaian"
                    name="statusKepegawaian"
                    type="select"
                    value={formData.statusKepegawaian}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Status' },
                      { value: 'Tetap', label: 'Tetap' },
                      { value: 'Kontrak', label: 'Kontrak' },
                      { value: 'Honorer', label: 'Honorer' }
                    ]}
                  />
                  <Input
                    label="Jabatan"
                    name="jabatan"
                    value={formData.jabatan}
                    onChange={handleChange}
                    placeholder="Perawat Pelaksana, Bidan"
                  />
                </Form.Row>

                <Form.Row columns={2}>
                  <Input
                    label="Unit Kerja Saat Ini"
                    name="unitKerja"
                    value={formData.unitKerja}
                    onChange={handleChange}
                    placeholder="IGD, ICU, OK"
                  />
                  <Input
                    label="Tanggal Mulai Bekerja"
                    name="tanggalMulaiBekerja"
                    type="date"
                    value={formData.tanggalMulaiBekerja}
                    onChange={handleChange}
                  />
                </Form.Row>

                <Form.Row columns={1}>
                  <Input
                    label="Alamat Detail"
                    name="alamatDetail"
                    type="textarea"
                    value={formData.alamatDetail}
                    onChange={handleChange}
                    placeholder="Masukkan Alamat Detail (jalan, nomor rumah, RT/RW)"
                    rows={3}
                  />
                </Form.Row>

                <Form.Row columns={2}>
                  <Input
                    label="Kecamatan"
                    name="kecamatanId"
                    type="select"
                    value={formData.kecamatanId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Kecamatan' },
                      ...districts.map((d) => ({ value: d.id, label: d.name }))
                    ]}
                  />
                  <Input
                    label="Kelurahan/Desa"
                    name="kelurahanId"
                    type="select"
                    value={formData.kelurahanId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Kelurahan/Desa' },
                      ...villages.map((v) => ({ value: v.id, label: v.name }))
                    ]}
                  />
                </Form.Row>

                <Form.Row columns={2}>
                <Input
                  label="Provinsi"
                  name="provinsiId"
                  type="select"
                  value={formData.provinsiId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Provinsi' },
                      ...provinces.map((p) => ({ value: p.id, label: p.name }))
                    ]}
                  />
                  <Input
                    label="Kabupaten/Kota"
                    name="kabupatenId"
                    type="select"
                    value={formData.kabupatenId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Pilih Kabupaten/Kota' },
                      ...regencies.map((r) => ({ value: r.id, label: r.name }))
                    ]}
                  />
                </Form.Row>
              </div>
            </div>

            <div className="detail-actions bottom-actions">
              <Button variant="outline" size="medium" type="button" onClick={handleReset}>
                Batalkan
              </Button>
              <Button variant="success" size="medium" type="submit">
                Simpan Perubahan
              </Button>
            </div>
          </Form>
        </div>
      )}
    </MainLayout>
  );
};

export default ProfileSaya;
