export const siteConfig = {
  name: "Cheong Chen Pui",
  title: "Game Developer & CS Student",
  description: "Portfolio of a Game Developer student",
  accentColor: "#1d4ed8",
  social: {
    email: "chenpui11043@gmail.com",
    // linkedin: "https://linkedin.com/in/yourprofile",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/ccp0526",
  },
  aboutMe:
    "I am a final-year Computer Science (Game Development) student seeking a Game Development related Internship. As an aspiring Game Developer, I have hands-on experience in full-stack development and game engineering using Unreal Engine 5 and Unity. Driven by a keen interest in designing and developing complex gameplay mechanics, I am an adaptable developer with a passion for performance optimization and creating seamless player experiences.",
  skills: ["Unreal Engine 5", "Unity", "Laravel", "WordPress", "C++", "C#", "JAVA"],
  projects: [
    {
      name: "Unisonce (Ongoing)",
      description:
        "A 3D first-person puzzle game built in Unreal Engine 5 featuring a seamless 'Parallel World Switching' mechanic. The gameplay integrates a psychological dissociation narrative, allowing players to switch between two character to solve puzzles.",
      link: "#",
      skills: ["Unreal Engine 5", "Blueprints", "OOP"],
    },
    {
      name: "Shadow Chase",
      description:
        "A 2D top-down chasing game built in Unity featuring autonomous enemy AI. It utilizes an optimized A* pathfinding algorithm and FSM state machines to deliver responsive and intelligent pursuit behaviors.",
      link: "#",
      skills: ["Unity", "C#", "A* Pathfinding", "FSM Machine"],
    },
    {
      name: "Sword Soul (Ongoing)",
      description:
        "A 2D top-down survival roguelite in Unreal Engine 5 blending movement-as-attack slingshot combat with bullet-time aiming. It features precise wall-ricochet physics and a dynamic roguelite growth system.",
      link: "#",
      skills: ["Unreal Engine 5", "Game Physics", "State Machine"],
    },
  ],
  experience: [
    {
      company: "Prisma Technology",
      title: "Website Developer Intern",
      dateRange: "Jul 2023 - Oct 2023",
      bullets: [
        "Developed robust E-commerce platforms utilizing the Laravel framework, focusing on secure backend logic and scalable MVC architecture.",
        "Built, deployed, and maintained various customized client websites using WordPress, acquiring practical experience in professional project lifecycles."
      ],
    },
    {
      company: "Freelance",
      title: "Frontend Developer (Team Leader)",
      dateRange: "Jul 2025 - Dec 2025",
      bullets: [
        "Directed a development team to deliver comprehensive frontend solutions, managing project timelines and ensuring strict task delegation.",
        "Implemented AJAX for asynchronous API calls, ensuring highly efficient data synchronization and dynamic content management without page reloads."
      ],
    },
  ],
  education: [
    {
      school: "Multimedia University (MMU) Cyberjaya",
      degree: "Bachelor in Conputer Science (Game Development)",
      dateRange: "Jul 2024 - Jul 2026",
      achievements: [
       "CGPA: 3.81/4.00 | Consecutive Dean's List Holder",
        "Core Modules: Game Physics, Game Algorithms, 3D Game Programming"
      ],
    },
    {
     school: "Multimedia University (MMU)",
      degree: "Diploma In Information Technology",
      dateRange: "Jul 2022 - Jul 2024",
      achievements: [
        "CGPA: 3.93/4.00 | Consecutive Dean's List Holder",
        "Final Year Project (Team Leader): Developed a forum website using the Laravel framework. Led the team in backend logic design and database management, demonstrating strong proficiency in MVC architecture."
      ]
    },
  ],
};
