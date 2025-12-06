import { Link, useLocation } from 'react-router-dom';
import { 
  MdHome, 
  MdPerson, 
  MdDescription, 
  MdSchool, 
  MdAssignment, 
  MdEmojiEvents, 
  MdGavel
} from 'react-icons/md';
import headerImg from '../../assets/headerImg.png';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/beranda', icon: MdHome, label: 'Beranda' },
    { path: '/profil', icon: MdPerson, label: 'Profil Saya' },
    { path: '/dokumen', icon: MdDescription, label: 'Dokumen Legalitas' },
    { path: '/riwayat-pendidikan', icon: MdSchool, label: 'Riwayat Pendidikan' },
    { path: '/penugasan', icon: MdAssignment, label: 'Penugasan' },
    { path: '/kredensial', icon: MdEmojiEvents, label: 'Kredensial' },
    { path: '/riwayat-etik', icon: MdGavel, label: 'Riwayat Etik & Disiplin' }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img
          src={headerImg}
          alt="Logo PKU Muhammadiyah Gombong"
          className="sidebar-logo-image"
        />
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <Icon className="nav-icon" size={22} />
              <span className="nav-text">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
