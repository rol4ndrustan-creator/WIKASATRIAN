import type { ReactElement } from 'react';

interface RoomIconProps {
  name: string;
  className?: string;
}

const paths: Record<string, ReactElement> = {
  meeting: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M3.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
      <path d="M11.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
    </>
  ),
  training: (
    <>
      <path d="M4 6h16v9H4z" />
      <path d="M9 19h6" />
      <path d="M12 15v4" />
    </>
  ),
  seminar: (
    <>
      <path d="M4 19V9l8-4 8 4v10" />
      <path d="M9 19v-6h6v6" />
    </>
  ),
  workshop: (
    <>
      <path d="M7 17 17 7" />
      <path d="M14 4l3 3-2 4-4-4z" />
      <path d="M5 19l3-1 1-3-3 1z" />
    </>
  ),
  auditorium: (
    <>
      <path d="M4 18V8l8-4 8 4v10" />
      <path d="M4 18h16" />
      <path d="M9 18v-5h6v5" />
    </>
  ),
  class: (
    <>
      <path d="M4 5h16v11H4z" />
      <path d="M9 19h6" />
      <path d="M7 9h10M7 12h6" />
    </>
  ),
  remote: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  diskusi: (
    <>
      <path d="M4 5h12v8H9l-4 3v-3H4z" />
      <circle cx="8" cy="9" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="9" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  'kelas budaya': (
    <>
      <path d="M12 4v16" />
      <path d="M5 8c2-2 5-2 7 0s5 2 7 0" />
      <path d="M5 14c2-2 5-2 7 0s5 2 7 0" />
    </>
  ),
  'seni & budaya': (
    <>
      <path d="M12 3c4 1 7 4 7 8a7 7 0 0 1-14 0c0-4 3-7 7-8z" />
      <path d="M12 14v6" />
    </>
  ),
  perkemahan: (
    <>
      <path d="M4 19 12 5l8 14z" />
      <path d="M9.5 19 12 12l2.5 7" />
    </>
  ),
  'team building': (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4 19c0-2.6 2.2-4.3 5-4.3s5 1.7 5 4.3" />
      <path d="M14 19c0-1.9 1.4-3.4 3.5-3.7" />
    </>
  ),
  outbound: (
    <>
      <path d="M4 19c4-1 6-5 6-9" />
      <path d="M14 19c0-5 2-9 6-10" />
      <circle cx="9" cy="6" r="1.6" />
    </>
  ),
  gathering: (
    <>
      <circle cx="7" cy="9" r="2.2" />
      <circle cx="17" cy="9" r="2.2" />
      <circle cx="12" cy="7" r="2.2" />
      <path d="M3.5 19c0-2.4 1.8-4 3.8-4M20.5 19c0-2.4-1.8-4-3.8-4M9 19c0-2.6 1.4-4.5 3-4.5s3 1.9 3 4.5" />
    </>
  ),
  'leadership camp': (
    <>
      <path d="M4 19 12 5l8 14z" />
      <circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  outdoor: (
    <>
      <path d="M3 19c4-1 6-5 6-9" />
      <path d="M21 19c-4-1-6-5-6-9" />
      <circle cx="12" cy="6" r="2" />
    </>
  ),
  fitness: (
    <>
      <path d="M3 12h2M19 12h2M5 9v6M19 9v6" />
      <path d="M7 12h10" />
      <path d="M7 9v6M17 9v6" />
    </>
  ),
  pool: (
    <>
      <path d="M3 17c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
      <path d="M5 12l5-7 5 7" />
    </>
  ),
  relaxation: (
    <>
      <path d="M4 17c2-5 6-8 8-13 2 5 6 8 8 13" />
      <path d="M4 17h16" />
    </>
  ),
  recovery: (
    <>
      <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11z" />
    </>
  ),
};

const defaultPath = (
  <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
);

export default function RoomIcon({ name, className }: RoomIconProps) {
  const key = name.trim().toLowerCase();
  const content = paths[key] ?? defaultPath;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
