export interface Room {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alternateImage?: string;
  capacity: string;
  functions: string[];
  shortDescription: string;
  keyHighlights: string[];
  bestFor: string;
  experienceTitle: string;
  experienceDetails: string;
}

const IMG = '/images/wikasatrian';

export const rooms: Room[] = [
  {
    id: 'giri-wijaya',
    title: 'Ruang Giri Wijaya',
    subtitle: 'Pusat Aktivitas Besar & Auditorium',
    image: `${IMG}/giri-wijaya-1.jpg`,
    alternateImage: `${IMG}/giri-wijaya-2.jpg`,
    capacity: '±500 orang',
    functions: ['Meeting', 'Training', 'Seminar', 'Workshop', 'Auditorium'],
    shortDescription:
      'Giri Wijaya adalah ruang utama untuk aktivitas berskala besar seperti seminar, pelatihan, workshop, dan kegiatan auditorium.',
    keyHighlights: [
      'Auditorium besar untuk seminar dan keynote',
      'Cocok untuk kegiatan formal dan institusional',
      'Mendukung presentasi, diskusi panel, dan townhall',
      'Nuansa ruang luas, hangat, dan natural',
    ],
    bestFor:
      'Seminar besar, leadership forum, townhall, workshop besar, dan auditorium session.',
    experienceTitle: 'Pengalaman Ruang Giri Wijaya',
    experienceDetails:
      'Rasakan pengalaman ruang auditorium utama yang dirancang untuk menghadirkan kegiatan berskala besar secara elegan, tertata, dan tetap dekat dengan suasana alam Wikasatrian.',
  },
  {
    id: 'giri-sasana',
    title: 'Ruang Giri Sasana',
    subtitle: 'Pusat Pelatihan & Seminar',
    image: `${IMG}/giri-sasana-1.jpg`,
    alternateImage: `${IMG}/giri-sasana-2.jpg`,
    capacity: '±200 orang',
    functions: ['Meeting', 'Training', 'Seminar', 'Workshop'],
    shortDescription:
      'Giri Sasana dirancang untuk pelatihan, seminar, diskusi, dan kegiatan pembelajaran yang lebih fokus.',
    keyHighlights: [
      'Cocok untuk pelatihan intensif dan seminar',
      'Mendukung diskusi kelompok dan sesi presentasi',
      'Suasana ruang membantu peserta tetap fokus',
      'Nuansa budaya memberikan pengalaman belajar yang berkesan',
    ],
    bestFor:
      'Training, seminar, leadership class, workshop, dan focused group discussion.',
    experienceTitle: 'Pengalaman Ruang Giri Sasana',
    experienceDetails:
      'Rasakan suasana pelatihan yang lebih fokus, dekat, dan reflektif dengan dukungan ruang yang fleksibel untuk berbagai format pembelajaran.',
  },
  {
    id: 'giri-unggul',
    title: 'Ruang Giri Unggul',
    subtitle: 'Ruang Kelas Pertemuan Multifungsi',
    image: `${IMG}/giri-unggul.jpg`,
    capacity: '±200 orang',
    functions: ['Meeting', 'Class', 'Seminar', 'Workshop', 'Remote'],
    shortDescription:
      'Giri Unggul adalah ruang kelas multifungsi yang cocok untuk meeting, kelas pelatihan, workshop, dan kegiatan kolaboratif.',
    keyHighlights: [
      'Layout kelas fleksibel',
      'Cocok untuk pembelajaran dan kolaborasi',
      'Mendukung workshop yang produktif',
      'Suasana nyaman untuk sesi kelas dan diskusi',
    ],
    bestFor:
      'Classroom training, workshop, product briefing, collaboration session, dan remote-enabled meeting.',
    experienceTitle: 'Pengalaman Ruang Giri Unggul',
    experienceDetails:
      'Rasakan pengalaman ruang kelas modern yang mendukung interaksi, produktivitas, dan pembelajaran terstruktur dalam suasana Wikasatrian yang tenang.',
  },
  {
    id: 'giri-budaya',
    title: 'Ruang Giri Budaya',
    subtitle: 'Kelas Diskusi & Kegiatan Seni dan Kebudayaan',
    image: `${IMG}/giri-budaya.jpg`,
    capacity: '±50–80 orang',
    functions: ['Diskusi', 'Kelas Budaya', 'Seni & Budaya', 'Workshop'],
    shortDescription:
      'Giri Budaya menghadirkan suasana budaya yang kuat untuk diskusi, refleksi, pembelajaran nilai, dan kegiatan seni.',
    keyHighlights: [
      'Suasana budaya Indonesia yang kuat',
      'Cocok untuk diskusi reflektif dan pembelajaran nilai',
      'Mendukung kegiatan seni, budaya, dan storytelling',
      'Memberikan pengalaman belajar yang emosional dan bermakna',
    ],
    bestFor:
      'Cultural session, reflective discussion, value-based leadership, creative workshop, dan team reflection.',
    experienceTitle: 'Pengalaman Ruang Giri Budaya',
    experienceDetails:
      'Rasakan pengalaman belajar yang lebih dalam melalui suasana budaya, seni, dan refleksi yang membantu peserta memahami nilai dan makna kepemimpinan.',
  },
  {
    id: 'outdoor',
    title: 'Area Outdoor',
    subtitle: 'Perkemahan & Wana Arena',
    image: `${IMG}/area-outdoor.jpg`,
    capacity: '±50–80 orang',
    functions: ['Perkemahan', 'Team Building', 'Outbound', 'Gathering', 'Leadership Camp'],
    shortDescription:
      'Area Outdoor memberikan pengalaman pembelajaran di alam terbuka melalui aktivitas team building, leadership camp, dan gathering.',
    keyHighlights: [
      'Pembelajaran berbasis alam terbuka',
      'Cocok untuk team building dan leadership challenge',
      'Mendukung aktivitas campfire, bonding, dan refleksi',
      'Membangun kebersamaan melalui pengalaman langsung',
    ],
    bestFor:
      'Leadership camp, team building, outbound, gathering, campfire session, dan nature-based learning.',
    experienceTitle: 'Pengalaman Area Outdoor',
    experienceDetails:
      'Rasakan pembelajaran di alam terbuka yang menggabungkan tantangan, kebersamaan, refleksi, dan pengalaman langsung untuk membangun kepemimpinan.',
  },
  {
    id: 'kebugaran-relaksasi',
    title: 'Ruang Kebugaran & Relaksasi',
    subtitle: 'Sehat, Bugar, Produktif',
    image: `${IMG}/ruang-kebugaran.jpg`,
    capacity: 'Fleksibel',
    functions: ['Fitness', 'Pool', 'Relaxation', 'Recovery'],
    shortDescription:
      'Ruang Kebugaran & Relaksasi mendukung keseimbangan fisik dan mental peserta selama mengikuti program.',
    keyHighlights: [
      'Area pendukung untuk menjaga kebugaran peserta',
      'Kolam renang dan fasilitas relaksasi untuk recovery',
      'Membantu peserta tetap segar selama program berlangsung',
      'Cocok sebagai fasilitas tambahan untuk program multi-day',
    ],
    bestFor:
      'Wellness session, post-training recovery, informal bonding, relaxation, dan participant refreshment.',
    experienceTitle: 'Pengalaman Kebugaran & Relaksasi',
    experienceDetails:
      'Rasakan fasilitas pendukung yang membantu peserta menjaga energi, relaksasi, dan keseimbangan selama mengikuti rangkaian program.',
  },
];
