"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

// Custom Logo Component
const CustomLogo = ({ className }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="Website Logo"
    width={32}
    height={32}
    className={className}
  />
);
const CustomFacebook = ({ className }: { className?: string }) => (
  <Image
    src="/Facebook.png"
    alt="Facebook Logo"
    width={32}
    height={32}
    className={className}
  />
);
const CustomInsta = ({ className }: { className?: string }) => (
  <Image
    src="/Instagram.webp"
    alt="Instagramm Logo"
    width={32}
    height={32}
    className={className}
  />
);
const CustomLinkedin = ({ className }: { className?: string }) => (
  <Image
    src="/LinkedInwebp.webp"
    alt="Linkedin Logo"
    width={32}
    height={32}
    className={className}
  />
);
const CustomGithub = ({ className }: { className?: string }) => (
  <Image
    src="/GitHub.png"
    alt="Github Logo"
    width={32}
    height={32}
    className={className}
  />
);
const CustomWhatsapp = ({ className }: { className?: string }) => (
  <Image
    src="/whatsapp.png"
    alt="WhatsApp Logo"
    width={32}
    height={32}
    className={className}
  />
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: CustomLinkedin,
      url: "https://www.linkedin.com/in/hamza-haj-mtir-3345a8220/",
      color: "#AAD6FF",
    },
    {
      name: "Facebook",
      icon: CustomFacebook,
      url: "https://www.facebook.com/hamza.haj.mtir",
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: CustomInsta,
      url: "https://www.instagram.com/hamza.haj.mtir/",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "WhatsApp",
      icon: CustomWhatsapp,
      url: "https://wa.me/21624222310",
      color: "hover:text-[#25D366]",
    },
    {
      name: "Website",
      icon: CustomLogo,
      url: "https://www.hamzahajmtir.tn/",
      color: "hover:text-purple-600",
      isCustom: true,
    },
        {
      name: "GitHub",
      icon: CustomGithub,
      url: "https://github.com/HamzaHajMtir1",
      color: "hover:text-[#181717] dark:hover:text-white",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <main
        className={`relative z-10 flex flex-col items-center justify-center px-6 py-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Picture */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
            <Image
              src="/profile.webp"
              alt="Your Name"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center tracking-tight">
          Hamza HAJ MTIR
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl font-light">
          Full Stack Developer | Cloud Computing Student
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-5 items-center justify-center flex-wrap">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.name}
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 ${social.color.replace('hover:text-', 'from-')} to-transparent`}></div>
                {/* Icon container */}
                <div className={`relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-transparent ${social.color}`}>
                  {social.isCustom ? (
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-500 group-hover:scale-110" />
                    ) : (
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 transition-all duration-500 group-hover:scale-110" />
                    )}
                </div>

                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
