// Helper untuk menangani perubahan berjenjang pada field wilayah Indonesia.
// Mengembalikan state form baru berdasarkan input yang berubah.
export const buildRegionStateUpdate = ({
  name,
  value,
  state,
  provinces = [],
  regencies = [],
  districts = [],
  villages = []
}) => {
  const nextState = { ...state, [name]: value };

  if (name === 'provinsiId') {
    const selectedProvince = provinces.find(p => p.id === value);
    return {
      ...nextState,
      provinsi: selectedProvince?.name || '',
      kabupatenId: '',
      kabupaten: '',
      kecamatanId: '',
      kecamatan: '',
      kelurahanId: '',
      kelurahan: ''
    };
  }

  if (name === 'kabupatenId') {
    const selectedRegency = regencies.find(r => r.id === value);
    return {
      ...nextState,
      kabupaten: selectedRegency?.name || '',
      kecamatanId: '',
      kecamatan: '',
      kelurahanId: '',
      kelurahan: ''
    };
  }

  if (name === 'kecamatanId') {
    const selectedDistrict = districts.find(d => d.id === value);
    return {
      ...nextState,
      kecamatan: selectedDistrict?.name || '',
      kelurahanId: '',
      kelurahan: ''
    };
  }

  if (name === 'kelurahanId') {
    const selectedVillage = villages.find(v => v.id === value);
    return {
      ...nextState,
      kelurahan: selectedVillage?.name || ''
    };
  }

  return nextState;
};
