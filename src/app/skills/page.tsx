import Navbar from '@/components/Navbar';
import Image from 'next/image';
import githubIcon from '@/assets/github.svg';

type Skill = {
  name: string;
  expertise: 'Expert' | 'Intermediate';
};

const skills: Skill[] = [
  { name: 'Flutter', expertise: 'Expert' },
  { name: 'OOP', expertise: 'Expert' },
  { name: 'Clean Architecture', expertise: 'Expert' },
];

export default function SkillsPage() {
  return (
    <main className="grid grid-rows-[auto_1fr] min-h-screen flex-col">
      <Navbar activePage="skills" />

      <SkillsContent />
    </main>
  );
}

function SkillsContent() {
  return (
    <div className="relative overflow-hidden pt-10">
      <div className="w-[540px] mx-auto space-y-4">
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ name, expertise }: Skill) {
  return (
    <div className="flex gap-8 items-center px-8 py-10 bg-white/50 border drop-shadow-md rounded-lg">
      <Image src={githubIcon} width={40} height={40} alt="list-item" />

      <div className="space-y-1">
        <div className="text-lg font-medium">{name}</div>
        <div className="flex gap-1 items-center -ml-1">
          <ExpertiseIcon />
          <div style={{ color: '#DD8500' }}>{expertise}</div>
        </div>
      </div>
    </div>
  );
}

function ExpertiseIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M9.675 13.7L10.55 10.85L8.25 9H11.1L12 6.2L12.9 9H15.75L13.425 10.85L14.3 13.7L12 11.925L9.675 13.7ZM6 23V15.275C5.36667 14.575 4.875 13.775 4.525 12.875C4.175 11.975 4 11.0167 4 10C4 7.76667 4.775 5.875 6.325 4.325C7.875 2.775 9.76667 2 12 2C14.2333 2 16.125 2.775 17.675 4.325C19.225 5.875 20 7.76667 20 10C20 11.0167 19.825 11.975 19.475 12.875C19.125 13.775 18.6333 14.575 18 15.275V23L12 21L6 23ZM12 16C13.6667 16 15.0833 15.4167 16.25 14.25C17.4167 13.0833 18 11.6667 18 10C18 8.33333 17.4167 6.91667 16.25 5.75C15.0833 4.58333 13.6667 4 12 4C10.3333 4 8.91667 4.58333 7.75 5.75C6.58333 6.91667 6 8.33333 6 10C6 11.6667 6.58333 13.0833 7.75 14.25C8.91667 15.4167 10.3333 16 12 16ZM8 20.025L12 19L16 20.025V16.925C15.4167 17.2583 14.7875 17.5208 14.1125 17.7125C13.4375 17.9042 12.7333 18 12 18C11.2667 18 10.5625 17.9042 9.8875 17.7125C9.2125 17.5208 8.58333 17.2583 8 16.925V20.025Z"
          fill="#DD8500"
        />
      </g>
    </svg>
  );
}
