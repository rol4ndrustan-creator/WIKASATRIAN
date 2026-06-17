export interface Room {
  id: string;
  title: string;
  displayTitle: string[];
  subtitle: string;
  image: string;
  alternateImage?: string;
  capacity: string;
  functions: string[];
  bestFor: string;
  shortDescription: string;
  designPhilosophy: string;
  experienceTitle: string;
  experienceNarrative: string;
  keyHighlights: string[];
  suggestedActivities: string[];
}

const IMG = '/images/wikasatrian';

export const rooms: Room[] = [
  {
    id: 'giri-wijaya',
    title: 'Ruang Giri Wijaya',
    displayTitle: ['RUANG', 'GIRI WIJAYA'],
    subtitle: 'Pusat Aktivitas Besar & Auditorium',
    image: `${IMG}/giri-wijaya-1.jpg`,
    alternateImage: `${IMG}/giri-wijaya-2.jpg`,
    capacity: '±500 orang',
    functions: ['Meeting', 'Training', 'Seminar', 'Workshop', 'Auditorium'],
    bestFor:
      'Seminar besar, leadership forum, townhall, workshop besar, dan auditorium session.',
    shortDescription:
      'Giri Wijaya adalah ruang utama untuk aktivitas berskala besar seperti seminar, pelatihan, workshop, dan kegiatan auditorium.',
    designPhilosophy:
      'Dirancang dengan skala ruang yang lapang dan material natural agar kegiatan formal tetap terasa hangat, dekat, dan tidak kaku.',
    experienceTitle: 'Pengalaman Ruang Giri Wijaya',
    experienceNarrative:
      'Rasakan pengalaman ruang auditorium utama yang dirancang untuk menghadirkan kegiatan berskala besar secara elegan, tertata, dan tetap dekat dengan suasana alam Wikasatrian.',
    keyHighlights: [
      'Auditorium besar untuk seminar dan keynote',
      'Cocok untuk kegiatan formal dan institusional',
      'Mendukung presentasi, diskusi panel, dan townhall',
      'Nuansa ruang luas, hangat, dan natural',
    ],
    suggestedActivities: [
      'Leadership forum berskala besar',
      'Townhall dan keynote session',
      'Seminar dan konferensi institusional',
    ],
  },
  {
    id: 'giri-sasana',
    title: 'Ruang Giri Sasana',
    displayTitle: ['RUANG', 'GIRI SASANA'],
    subtitle: 'Pusat Pelatihan & Seminar',
    image: `${IMG}/giri-sasana-1.jpg`,
    alternateImage: `${IMG}/giri-sasana-2.jpg`,
    capacity: '±200 orang',
    functions: ['Meeting', 'Training', 'Seminar', 'Workshop'],
    bestFor:
      'Training, seminar, leadership class, workshop, dan focused group discussion.',
    shortDescription:
      'Giri Sasana dirancang untuk pelatihan, seminar, diskusi, dan kegiatan pembelajaran yang lebih fokus.',
    designPhilosophy:
      'Tata ruang yang lebih intim mendorong interaksi yang fokus, membangun kedekatan antar peserta selama proses pelatihan.',
    experienceTitle: 'Pengalaman Ruang Giri Sasana',
    experienceNarrative:
      'Rasakan suasana pelatihan yang lebih fokus, dekat, dan reflektif dengan dukungan ruang yang fleksibel untuk berbagai format pembelajaran.',
    keyHighlights: [
      'Cocok untuk pelatihan intensif dan seminar',
      'Mendukung diskusi kelompok dan sesi presentasi',
      'Suasana ruang membantu peserta tetap fokus',
      'Nuansa budaya memberikan pengalaman belajar yang berkesan',
    ],
    suggestedActivities: [
      'Pelatihan intensif multi-hari',
      'Focused group discussion',
      'Leadership class dan workshop',
    ],
  },
  {
    id: 'giri-unggul',
    title: 'Ruang Giri Unggul',
    displayTitle: ['RUANG', 'GIRI UNGGUL'],
    subtitle: 'Ruang Kelas Pertemuan Multifungsi',
    image: `${IMG}/giri-unggul.jpg`,
    capacity: '±200 orang',
    functions: ['Meeting', 'Class', 'Seminar', 'Workshop', 'Remote'],
    bestFor:
      'Classroom training, workshop, product briefing, collaboration session, dan remote-enabled meeting.',
    shortDescription:
      'Giri Unggul adalah ruang kelas multifungsi yang cocok untuk meeting, kelas pelatihan, workshop, dan kegiatan kolaboratif.',
    designPhilosophy:
      'Layout fleksibel memungkinkan ruang beradaptasi dengan cepat dari format kelas ke format kolaborasi tim.',
    experienceTitle: 'Pengalaman Ruang Giri Unggul',
    experienceNarrative:
      'Rasakan pengalaman ruang kelas modern yang mendukung interaksi, produktivitas, dan pembelajaran terstruktur dalam suasana Wikasatrian yang tenang.',
    keyHighlights: [
      'Layout kelas fleksibel',
      'Cocok untuk pembelajaran dan kolaborasi',
      'Mendukung workshop yang produktif',
      'Suasana nyaman untuk sesi kelas dan diskusi',
    ],
    suggestedActivities: [
      'Classroom training terstruktur',
      'Workshop kolaboratif',
      'Remote-enabled hybrid meeting',
    ],
  },
  {
    id: 'giri-budaya',
    title: 'Ruang Giri Budaya',
    displayTitle: ['RUANG', 'GIRI BUDAYA'],
    subtitle: 'Kelas Diskusi & Kegiatan Seni dan Kebudayaan',
    image: `${IMG}/giri-budaya.jpg`,
    capacity: '±50–80 orang',
    functions: ['Diskusi', 'Kelas Budaya', 'Seni & Budaya', 'Workshop'],
    bestFor:
      'Cultural session, reflective discussion, value-based leadership, creative workshop, dan team reflection.',
    shortDescription:
      'Giri Budaya menghadirkan suasana budaya yang kuat untuk diskusi, refleksi, pembelajaran nilai, dan kegiatan seni.',
    designPhilosophy:
      'Elemen budaya Nusantara dihadirkan secara autentik untuk menciptakan suasana reflektif yang mendalam dan bermakna.',
    experienceTitle: 'Pengalaman Ruang Giri Budaya',
    experienceNarrative:
      'Rasakan pengalaman belajar yang lebih dalam melalui suasana budaya, seni, dan refleksi yang membantu peserta memahami nilai dan makna kepemimpinan.',
    keyHighlights: [
      'Suasana budaya Indonesia yang kuat',
      'Cocok untuk diskusi reflektif dan pembelajaran nilai',
      'Mendukung kegiatan seni, budaya, dan storytelling',
      'Memberikan pengalaman belajar yang emosional dan bermakna',
    ],
    suggestedActivities: [
      'Cultural session dan storytelling',
      'Diskusi reflektif berbasis nilai',
      'Creative workshop kepemimpinan',
    ],
  },
  {
    id: 'outdoor',
    title: 'Area Outdoor',
    displayTitle: ['AREA', 'OUTDOOR'],
    subtitle: 'Perkemahan & Wana Arena',
    image: `${IMG}/area-outdoor.jpg`,
    capacity: '±50–80 orang',
    functions: ['Perkemahan', 'Team Building', 'Outbound', 'Gathering', 'Leadership Camp'],
    bestFor:
      'Leadership camp, team building, outbound, gathering, campfire session, dan nature-based learning.',
    shortDescription:
      'Area Outdoor memberikan pengalaman pembelajaran di alam terbuka melalui aktivitas team building, leadership camp, dan gathering.',
    designPhilosophy:
      'Kedekatan dengan alam dirancang untuk membuka ruang refleksi dan tantangan fisik yang membangun kebersamaan tim.',
    experienceTitle: 'Pengalaman Area Outdoor',
    experienceNarrative:
      'Rasakan pembelajaran di alam terbuka yang menggabungkan tantangan, kebersamaan, refleksi, dan pengalaman langsung untuk membangun kepemimpinan.',
    keyHighlights: [
      'Pembelajaran berbasis alam terbuka',
      'Cocok untuk team building dan leadership challenge',
      'Mendukung aktivitas campfire, bonding, dan refleksi',
      'Membangun kebersamaan melalui pengalaman langsung',
    ],
    suggestedActivities: [
      'Leadership camp multi-hari',
      'Team building dan outbound',
      'Campfire dan sesi refleksi malam',
    ],
  },
  {
    id: 'kebugaran-relaksasi',
    title: 'Ruang Kebugaran & Relaksasi',
    displayTitle: ['KEBUGARAN', '& RELAKSASI'],
    subtitle: 'Sehat, Bugar, Produktif',
    image: `${IMG}/ruang-kebugaran.jpg`,
    capacity: 'Fleksibel',
    functions: ['Fitness', 'Pool', 'Relaxation', 'Recovery'],
    bestFor:
      'Wellness session, post-training recovery, informal bonding, relaxation, dan participant refreshment.',
    shortDescription:
      'Ruang Kebugaran & Relaksasi mendukung keseimbangan fisik dan mental peserta selama mengikuti program.',
    designPhilosophy:
      'Fasilitas ini melengkapi perjalanan belajar dengan ruang untuk memulihkan energi fisik dan mental peserta.',
    experienceTitle: 'Pengalaman Kebugaran & Relaksasi',
    experienceNarrative:
      'Rasakan fasilitas pendukung yang membantu peserta menjaga energi, relaksasi, dan keseimbangan selama mengikuti rangkaian program.',
    keyHighlights: [
      'Area pendukung untuk menjaga kebugaran peserta',
      'Kolam renang dan fasilitas relaksasi untuk recovery',
      'Membantu peserta tetap segar selama program berlangsung',
      'Cocok sebagai fasilitas tambahan untuk program multi-day',
    ],
    suggestedActivities: [
      'Wellness session pagi',
      'Post-training recovery',
      'Informal bonding di area kolam',
    ],
  },
];
