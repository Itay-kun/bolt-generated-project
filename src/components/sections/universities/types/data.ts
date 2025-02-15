import { University } from './university';
import { slovakUniversities } from './universities/slovak';
import { lithuanianUniversities } from './universities/lithuanian';
import { croatianUniversities } from './universities/croatian';
import { italianUniversities } from './universities/italian';
import { czechUniversities } from './universities/czech';
import { polishUniversities } from './universities/polish';
import { hungarianUniversities } from './universities/hungarian';
import { ukrainianUniversities } from './universities/ukrainian';
import { russianUniversities } from './universities/russian';
import { romanianUniversities } from './universities/romanian';
import { cypriotUniversities } from './universities/cypriot';
import { latvianUniversities } from './universities/latvian';

// Partner universities that we work with directly (limited to 4)
export const partnerUniversities: University[] = [
  ...slovakUniversities,
  ...lithuanianUniversities,
  ...croatianUniversities
].slice(0, 4);

// All universities (including the ones we don't work with directly)
export const universities: University[] = [
  ...partnerUniversities,
  ...italianUniversities,
  ...czechUniversities,
  ...polishUniversities,
  ...hungarianUniversities,
  ...ukrainianUniversities,
  ...russianUniversities,
  ...romanianUniversities,
  ...cypriotUniversities,
  ...latvianUniversities
].map(uni => ({
  ...uni,
  logo: uni.logo === '[Logo URL]' ? 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7' : uni.logo
}));
