import { useState } from 'react';
import MainLayout from '../../layout/main/MainLayout';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import {
  MdSchool,
  MdAssignment,
  MdLightbulb,
  MdGavel,
  MdTrendingUp
} from 'react-icons/md';
import './Beranda.css';

const Beranda = () => {
  const [avatarError, setAvatarError] = useState(false);
  const avatarUrl = 'https://i.pravatar.cc/160?img=64';

  return (
    <MainLayout 
      title="Beranda" 
      subtitle="Ringkasan informasi profil, progress pengisian, dan data terbaru Anda."
    >
      <header className="page-header">
        <h1 className="page-title">Beranda</h1>
        <p className="page-subtitle">
          Ringkasan informasi profil, progress pengisian, dan data terbaru Anda.
        </p>
      </header>
      {/* Header Profil */}
      <div className="Section">
        <div className="profile-card">
          <div className="profile-content">
            <div className="profile-left">
              <div className="profile-avatar">
                {!avatarError ? (
                  <img
                    src={avatarUrl}
                    alt="Ns. Siti Nurhaliza, S.Kep"
                    onError={() => setAvatarError(true)}
                  />
                ) : null}
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Ns. Siti Nurhaliza, S.Kep</h2>
                <p className="profile-nip">NIP: 198501152010012001 | NIK: 3304015501850001</p>
                <div className="profile-badges">
                  <Card glass padding="small">
                    <p>Perawat Pelaksana</p>
                  </Card>
                  <Card glass padding="small">
                    <p>Status: Pegawai Tetap</p>
                  </Card>
                </div>
              </div>
            </div>
            <Button variant="inverse" size="medium">
              Lihat Profil Lengkap
            </Button>
          </div>
          
          <div className="profile-stats">
            <Card glass padding="compact">
              <p>Domisili</p>
              <h1>Kebumen, Jawa Tengah</h1>
            </Card>
            <Card glass padding="compact">
              <p>Umur</p>
              <h1>39 Tahun</h1>
            </Card>
            <Card glass padding="compact">
              <p>Lama Bekerja</p>
              <h1>14 Tahun 2 Bulan</h1>
            </Card>
            <Card glass padding="compact">
              <p>Unit Kerja</p>
              <h1>Instalasi Gawat Darurat</h1>
            </Card>
          </div>
        </div>

        {/* Progress Pengisian */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-title">
              <MdTrendingUp className="section-icon" />
              <h3>Progress Pengisian Data</h3>
            </div>
          </div>
          
          <div className="progress-grid">
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Data Pribadi</span>
                  <span className="progress-percentage">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
              </div>
            </Card>
            
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Dokumen Legalitas</span>
                  <span className="progress-percentage">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
              </div>
            </Card>
            
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Riwayat Pendidikan</span>
                  <span className="progress-percentage">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
              </div>
            </Card>
            
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Penugasan Klinik</span>
                  <span className="progress-percentage">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
              </div>
            </Card>
            
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Kredensial</span>
                  <span className="progress-percentage">75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill warning" style={{width: '75%'}}></div>
                </div>
              </div>
            </Card>
            
            <Card variant='secondary' padding="normal">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-label">Etik & Disiplin</span>
                  <span className="progress-percentage">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Ringkasan Data Terbaru */}
        
        {/* Card 1: Riwayat Pendidikan Terbaru */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-title">
              <MdSchool className="section-icon" />
              <h3>Riwayat Pendidikan Terbaru</h3>
            </div>
            <Button variant="outline" size="small">
              Lihat Detail →
            </Button>
          </div>
          
          <div className="education-section">
            <Card variant='secondary' padding="normal">
              <h4 className="education-subtitle">Pendidikan</h4>
              <div className="education-grid">
                <div className="education-main">S1 Keperawatan</div>
                <div className="education-meta">2022</div>
              </div>
              <div className="education-grid">
                <div className="education-main">D3 Keperawatan</div>
                <div className="education-meta">2018</div>
              </div>
            </Card>

            <Card variant='secondary' padding="normal">
              <h4 className="education-subtitle">Pelatihan Terbaru</h4>
              <div className="certification-grid">
                <Card variant='inverse' className='detail-card'>
                  <div className="certification-name">BTCLS (Basic Trauma Cardiac Life Support)</div>
                  <div className="certification-grid">
                    <div className="certification-main">RS PKU Muhammadiyah</div>
                    <div className="certification-meta">2024</div>
                  </div>
                </Card>
                <Card variant='inverse' className='detail-card'>
                  <div className="certification-name">PPGD (Pelatihan Pertolongan Gawat Darurat)</div>
                  <div className="certification-grid">
                    <div className="certification-main">RS PKU Muhammadiyah</div>
                    <div className="certification-meta">2023</div>
                  </div>
                </Card>
              </div>
            </Card>

            <Card variant='secondary' padding="normal">
              <h4 className="education-subtitle">Workshop Terbaru</h4>
              <div className="workshop-grid">
                <Card variant='inverse' className='detail-card'>
                  <div className="workshop-main">Patient Safety</div>
                  <div className="workshop-meta">2024</div>
                </Card>
                <Card variant='inverse' className='detail-card'>
                  <div className="workshop-main">Infection Control</div>
                  <div className="workshop-meta">2023</div>
                </Card>
                <Card variant='inverse' className='detail-card'>
                  <div className="workshop-main">Komunikasi Terapeutik</div>
                  <div className="workshop-meta">2023</div>
                </Card>
              </div>
            </Card>
          </div>
        </div>

        {/* Card 2: Penugasan Klinik */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-title">
              <MdAssignment className="section-icon" />
              <h3>Penugasan Klinik</h3>
            </div>
            <Button variant="outline" size="small">
              Lihat Detail →
            </Button>
          </div>
          
          <div className="education-section">
            <Card variant='secondary' padding="compact">
              <div className="assignment-header">
                <span className="assignment-subtitle">IGD (Instalasi Gawat Darurat)</span>
                <Button variant="success" size="small">Aktif</Button>
              </div>
              <div className="assignment-grid">
                <div className="assignment-period">Periode</div>
                <div className="assignment-supervisor">Pembimbing</div>
              </div>
              <div className="assignment-grid">
                <div className="assignment-period value">Jan - Mar 2024</div>
                <div className="assignment-supervisor value">Ns. Andi Prasetyo, S.Kep</div>
              </div>
            </Card>

            <Card variant='secondary' padding="compact">
              <div className="assignment-header">
                <span className="assignment-subtitle">ICU (Intensive Care Unit)</span>
                <Button variant="secondary" size="small">Sebelumnya</Button>
              </div>
              <div className="assignment-grid">
                <div className="assignment-period">Periode</div>
                <div className="assignment-supervisor">Pembimbing</div>
              </div>
              <div className="assignment-grid">
                <div className="assignment-period value">Okt - Des 2023</div>
                <div className="assignment-supervisor value">Ns. Budi Santoso, S.Kep</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Card 3: Kredensial / Rekredensial */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-title">
              <MdLightbulb className="section-icon" />
              <h3>Kredensial / Rekredensial</h3>
            </div>
            <Button variant="outline" size="small">
              Lihat Detail →
            </Button>
          </div>
          
              <div className="credential-section">
                <Card variant='secondary' className='detail-card'>
                  <div className="credential-item-content">
                    <div className="credential-item-main">
                      <span className="credential-subtitle">Observasi Klinis IGD</span>
                      <div className="credential-grid">
                        <span className="credential-date">12 Jan 2024</span>
                        <span className="credential-skp"> </span>
                      </div>
                    </div>
                    <Button variant="success" size="small">Diverifikasi</Button>
                  </div>
                </Card>
                <Card variant='secondary' className='detail-card'>
                  <div className="credential-item-content">
                    <div className="credential-item-main">
                      <span className="credential-subtitle">Seminar Patient Safety</span>
                      <div className="credential-grid">
                        <span className="credential-date">03 Feb 2024</span>
                        <span className="credential-skp">3 SKP</span>
                      </div>
                    </div>
                    <Button variant="success" size="small">Tervalidasi</Button>
                  </div>
                </Card>
              </div>
          
        </div>

        {/* Card 4: Etik & Disiplin */}
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-title">
              <MdGavel className="section-icon" />
              <h3>Riwayat Etik & Disiplin</h3>
            </div>
            <Button variant="outline" size="small">
              Lihat Detail →
            </Button>
          </div>
          
          <div className="credential-section">
              <Card variant='secondary' padding='normal'>
                <div className="ethics-item-content">
                  <div className="ethics-item-main">
                    <span className="ethics-subtitle">Mengabaikan Prosedur Keselamatan Pasien</span>
                    <span className="ethics-date">12 Apr 2023</span>
                  </div>
                </div>
              </Card>
              <Card variant='secondary' padding='normal'>
                <div className="ethics-item-content">
                  <div className="ethics-item-main">
                    <span className="ethics-subtitle">Terlambat shift pagi</span>
                    <span className="ethics-date">05 Feb 2023</span>
                  </div>
                  <Button variant="success" size="small">Sudah Dibina</Button>
                </div>
              </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Beranda;
