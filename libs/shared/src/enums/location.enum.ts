/**
 * Enums for Odisha State and its 30 Districts
 * Using numeric values for database compatibility
 */

export enum Province {
  ODISHA = 1,
}

export enum District {
  ANGUL = 1,
  BALANGIR = 2,
  BALASORE = 3,
  BARGARH = 4,
  BHADRAK = 5,
  BOUDH = 6,
  CUTTACK = 7,
  DEOGARH = 8,
  DHENKANAL = 9,
  GAJAPATI = 10,
  GANJAM = 11,
  JAGATSINGHPUR = 12,
  JAJPUR = 13,
  JHARSUGUDA = 14,
  KALAHANDI = 15,
  KANDHAMAL = 16,
  KENDRAPARA = 17,
  KEONJHAR = 18,
  KHORDHA = 19,
  KORAPUT = 20,
  MALKANGIRI = 21,
  MAYURBHANJ = 22,
  NABARANGPUR = 23,
  NAYAGARH = 24,
  NUAPADA = 25,
  PURI = 26,
  RAYAGADA = 27,
  SAMBALPUR = 28,
  SUBARNAPUR = 29,
  SUNDARGARH = 30,
}

export const PROVINCE_NAMES: Record<Province, string> = {
  [Province.ODISHA]: 'Odisha',
};

export const DISTRICT_NAMES: Record<District, string> = {
  [District.ANGUL]: 'Angul',
  [District.BALANGIR]: 'Balangir',
  [District.BALASORE]: 'Balasore',
  [District.BARGARH]: 'Bargarh',
  [District.BHADRAK]: 'Bhadrak',
  [District.BOUDH]: 'Boudh',
  [District.CUTTACK]: 'Cuttack',
  [District.DEOGARH]: 'Deogarh',
  [District.DHENKANAL]: 'Dhenkanal',
  [District.GAJAPATI]: 'Gajapati',
  [District.GANJAM]: 'Ganjam',
  [District.JAGATSINGHPUR]: 'Jagatsinghpur',
  [District.JAJPUR]: 'Jajpur',
  [District.JHARSUGUDA]: 'Jharsuguda',
  [District.KALAHANDI]: 'Kalahandi',
  [District.KANDHAMAL]: 'Kandhamal',
  [District.KENDRAPARA]: 'Kendrapara',
  [District.KEONJHAR]: 'Keonjhar',
  [District.KHORDHA]: 'Khordha',
  [District.KORAPUT]: 'Koraput',
  [District.MALKANGIRI]: 'Malkangiri',
  [District.MAYURBHANJ]: 'Mayurbhanj',
  [District.NABARANGPUR]: 'Nabarangpur',
  [District.NAYAGARH]: 'Nayagarh',
  [District.NUAPADA]: 'Nuapada',
  [District.PURI]: 'Puri',
  [District.RAYAGADA]: 'Rayagada',
  [District.SAMBALPUR]: 'Sambalpur',
  [District.SUBARNAPUR]: 'Subarnapur',
  [District.SUNDARGARH]: 'Sundargarh',
};

export const PROVINCE_DISTRICTS: Record<Province, District[]> = {
  [Province.ODISHA]: [
    District.ANGUL,
    District.BALANGIR,
    District.BALASORE,
    District.BARGARH,
    District.BHADRAK,
    District.BOUDH,
    District.CUTTACK,
    District.DEOGARH,
    District.DHENKANAL,
    District.GAJAPATI,
    District.GANJAM,
    District.JAGATSINGHPUR,
    District.JAJPUR,
    District.JHARSUGUDA,
    District.KALAHANDI,
    District.KANDHAMAL,
    District.KENDRAPARA,
    District.KEONJHAR,
    District.KHORDHA,
    District.KORAPUT,
    District.MALKANGIRI,
    District.MAYURBHANJ,
    District.NABARANGPUR,
    District.NAYAGARH,
    District.NUAPADA,
    District.PURI,
    District.RAYAGADA,
    District.SAMBALPUR,
    District.SUBARNAPUR,
    District.SUNDARGARH,
  ],
};

export function getProvinceName(province: Province): string {
  return PROVINCE_NAMES[province] || 'Unknown';
}

export function getDistrictName(district: District): string {
  return DISTRICT_NAMES[district] || 'Unknown';
}

export function getDistrictsForProvince(province: Province): District[] {
  return PROVINCE_DISTRICTS[province] || [];
}

export function getProvinceForDistrict(district: District): Province | null {
  for (const [province, districts] of Object.entries(PROVINCE_DISTRICTS)) {
    if (districts.includes(district)) {
      return Number(province) as Province;
    }
  }
  return null;
}