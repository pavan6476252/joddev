import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoAngular,
  IoLogoNodejs,
  IoLogoApple,
  IoLogoAndroid,
  IoLogoGithub,
  IoLogoTux,
  IoMdAnalytics,
  IoMdGitBranch,
  IoLogoGameControllerA,
  IoMdConstruct,
  IoMdLock,
  IoMdRocket,
  IoMdColorPalette,


} from 'react-icons/io';
import { BiLogoJavascript, BiLogoHtml5, BiLogoApple, BiAnalyse, BiLogoAws, BiLogoGithub, } from 'react-icons/bi'
// Rest of your code...




interface DeveloperCategories {
  programmingLanguages: {
    title: string;
    icon: React.ReactNode;
  };
  webDevelopment: {
    title: string;
    icon: React.ReactNode;
  };
  mobileAppDevelopment: {
    title: string;
    icon: React.ReactNode;
  };
  databaseManagement: {
    title: string;
    icon: React.ReactNode;
  };
  cloudComputing: {
    title: string;
    icon: React.ReactNode;
  };
  devOps: {
    title: string;
    icon: React.ReactNode;
  };
  machineLearningAndAI: {
    title: string;
    icon: React.ReactNode;
  };
  cybersecurity: {
    title: string;
    icon: React.ReactNode;
  };
  blockchain: {
    title: string;
    icon: React.ReactNode;
  };
  gameDevelopment: {
    title: string;
    icon: React.ReactNode;
  };
  dataScience: {
    title: string;
    icon: React.ReactNode;
  };
  openSourceContributions: {
    title: string;
    icon: React.ReactNode;
  };
  softSkillsAndCareerDevelopment: {
    title: string;
    icon: React.ReactNode;
  };
}

 export const developerCategories: DeveloperCategories = {
  programmingLanguages: {
    title: 'Programming Languages',
    icon: <BiLogoJavascript />,
  },
  webDevelopment: {
    title: 'Web Development',
    icon: <BiLogoHtml5 />,
  },
  mobileAppDevelopment: {
    title: 'Mobile App Development',
    icon: <BiLogoApple />,
  },
  databaseManagement: {
    title: 'Database Management',
    icon: <BiAnalyse />,
  },
  cloudComputing: {
    title: 'Cloud Computing',
    icon: <BiLogoAws />,
  },
  devOps: {
    title: 'DevOps',
    icon: <IoMdConstruct />,
  },
  machineLearningAndAI: {
    title: 'Machine Learning & AI',
    icon: <IoMdRocket />,
  },
  cybersecurity: {
    title: 'Cybersecurity',
    icon: <IoMdLock />,
  },
  blockchain: {
    title: 'Blockchain',
    icon: <IoMdColorPalette />,
  },
  gameDevelopment: {
    title: 'Game Development',
    icon: <IoLogoGameControllerA />,
  },
  dataScience: {
    title: 'Data Science',
    icon: <IoMdAnalytics />,
  },
  openSourceContributions: {
    title: 'Open Source Contributions',
    icon: <BiLogoGithub />,
  },
  softSkillsAndCareerDevelopment: {
    title: 'Soft Skills & Career Development',
    icon: <IoMdGitBranch />,
  },
};
