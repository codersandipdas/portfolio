import toast from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const socials = [
  {
    id: '1',
    title: 'GitHub',
    link: 'https://github.com/codersandipdas',
    icon: <FaGithub />,
  },
  {
    id: '2',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/imsandip/',
    icon: <FaLinkedin />,
  },
];

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText('codersandipdas@gmail.com');
    toast.success('Email copied to clipboard');
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};

export const socialsButtons = [
  {
    id: '3',
    title: 'Email Me',
    onClick: handleCopyEmail,
    icon: <FaEnvelope />,
  },
];
