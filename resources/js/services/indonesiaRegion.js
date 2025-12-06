const API_BASE_URL = 'https://www.emsifa.com/api-wilayah-indonesia/api';

const capitalizeWords = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const mapOption = (item) => {
  const label = capitalizeWords(item.name);
  return {
    value: item.id,
    label
  };
};

export const getProvinces = async () => {
  const response = await fetch(`${API_BASE_URL}/provinces.json`);
  if (!response.ok) throw new Error('Failed to fetch provinces');
  const data = await response.json();
  return data.map(mapOption);
};

export const getRegencies = async (provinceId) => {
  if (!provinceId) return [];
  const response = await fetch(`${API_BASE_URL}/regencies/${provinceId}.json`);
  if (!response.ok) throw new Error('Failed to fetch regencies');
  const data = await response.json();
  return data.map(mapOption);
};

export const getDistricts = async (regencyId) => {
  if (!regencyId) return [];
  const response = await fetch(`${API_BASE_URL}/districts/${regencyId}.json`);
  if (!response.ok) throw new Error('Failed to fetch districts');
  const data = await response.json();
  return data.map(mapOption);
};

export const getVillages = async (districtId) => {
  if (!districtId) return [];
  const response = await fetch(`${API_BASE_URL}/villages/${districtId}.json`);
  if (!response.ok) throw new Error('Failed to fetch villages');
  const data = await response.json();
  return data.map(mapOption);
};
