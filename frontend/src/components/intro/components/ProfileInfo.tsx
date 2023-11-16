import React, { useRef, useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaCode,
  FaStackOverflow,
  FaFileAlt,
  FaClipboardList,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import CustomInputField from '../../../utils/CustomInputFilels';

interface SocialLink {
  title: string;
  icon: React.ReactElement<IconBaseProps>;
  link: string;
}

interface SocialLinksType {
  linkedIn: SocialLink;
  github: SocialLink;
  leetcode: SocialLink;
  twitter: SocialLink;
  codeforces: SocialLink;
  stackOverflow: SocialLink;
  resumeLink: SocialLink;
  portfolioLink: SocialLink;
  // additionalLink?: SocialLink[];
}

function ProfileInfo() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [socialLinks, setSocialLinks] = useState<SocialLinksType>({
    linkedIn: { title: 'LinkedIn', icon: <FaLinkedin />, link: '' },
    github: { title: 'Github', icon: <FaGithub />, link: '' },
    leetcode: { title: 'LeetCode', icon: <FaCode />, link: '' },
    twitter: { title: 'Twitter/X', icon: <FaTwitter />, link: '' },
    portfolioLink: { title: 'Profolio', icon: <FaExternalLinkAlt />, link: '' },
    codeforces: { title: 'Codeforces', icon: <FaGlobe />, link: '' },
    resumeLink: { title: 'Resume', icon: <FaFileAlt />, link: '' },
    stackOverflow: { title: 'StackOverflow', icon: <FaStackOverflow />, link: '' },
    // additionalLink: [{ title: 'Other', icon: <FaClipboardList /> }],
  });

  const handleIconClick = (key: string) => {
    const url = prompt(`Enter URL for ${socialLinks[key].title}`);
    if (url !== null) {
      setSocialLinks((prevSocialLinks) => ({
        ...prevSocialLinks,
        [key]: {
          ...prevSocialLinks[key],
          link: url,

        },
      }));
      // alert("link added")
    }
  };

  return (
    <div>
      <div className="mx-auto bg-blue-100 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          {/* Profile Picture */}
          <div className="w-full h-56 sm:w-full sm:h-64 lg:w-full lg:h-72 bg-blue-400 rounded-md mb-4 md:mb-0 md:mr-8"></div>

          {/* User Information */}
          <div className="flex flex-col">
            {/* Full Name */}
            <CustomInputField label="Full Name" ref={nameRef} placeholder="Enter your name" className="mb-4" />

            {/* Email */}
            <CustomInputField label="Email" ref={emailRef} placeholder="Enter your email" className="mb-4" />
          </div>
        </div>
      </div>
      <div className="w-full my-5 ">
        <h1 className="text-3xl mb-4  ">Social Links</h1>

        <div className="flex flex-row overflow-x-scroll py-4">
          {Object.keys(socialLinks).map((value, index) => {
            let x = socialLinks as any;
            return (
              <div
                key={index}
                className={`rounded-md p-4 bg-blue-100 mx-3 flex flex-col justify-center items-center hover:scale-105 transform transition-transform cursor-pointer  ${x[value].link !== '' ? "bg-green-400" : ""}`}
                onClick={() => handleIconClick(value)}
              >
                <p className={`text-6xl    ${x[value].link !== '' ? "text-white" : ""}`}>{x[value].icon}</p>
                <span className={`text-2xl    ${x[value].link !== '' ? "text-white" : ""}`}>{x[value].title}</span>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
