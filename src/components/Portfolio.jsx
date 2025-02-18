import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from './AnimatedBackground';
import { 
  FaGithub, 
  FaInstagram, 
  FaEnvelope, 
  FaFacebook,
  FaCode, 
  FaMicrochip,
  FaCube,
  FaHome,
  FaTools,
  FaNetworkWired
} from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs";

export default function Portfolio() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Ivan Vondráček";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex));
      if (currentIndex++ >= fullText.length) clearInterval(typingInterval);
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  const ProjectCard = ({ title, description, icon: Icon, image }) => (
    <motion.div
      className="group bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 
                hover:border-blue-400/30 backdrop-blur-sm transition-all duration-500
                flex flex-col h-full overflow-hidden relative hover:scale-105"
    >
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-all duration-500">
        {image && (
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
          />
        )}
      </div>

      <div className="p-4 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          {Icon && 
            <Icon className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
          }
          <h3 className="text-xl font-bold text-white group-hover:text-white/70 transition-all duration-500">
            {title}
          </h3>
        </div>
      </div>
      
      <div className="p-4 flex-grow relative z-10">
        <p className="text-gray-400 group-hover:text-gray-400/70 transition-all duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );

  const projects = [
    { 
      title: "Web Development", 
      description: "Moderní webové aplikace postavené na React a Next.js",
      icon: FaCode,
      image: "/images/web-dev.png"
    },
    { 
      title: "IoT Projekty", 
      description: "Chytrá domácnost a automatizace s ESP32",
      icon: FaNetworkWired,
      image: "/images/iot.jpg"
    },
    { 
      title: "Arduino", 
      description: "Elektronické projekty a prototypování",
      icon: FaMicrochip,
      image: "/images/arduino.jpg"
    },
    { 
      title: "3D Tisk", 
      description: "3D tisk prototypů a součástek", 
      icon: BsPrinterFill,
      image: "/images/3dprint.webp"
    },
    { 
      title: "Laser Engraving", 
      description: "Zakázkové gravírování a řezání materiálů",
      icon: FaTools,
      image:"/images/engraved.jpg"
    },
    { 
      title: "3D Modelování", 
      description: "Návrh a tvorba 3D modelů pro tisk i vizualizace",
      icon: FaCube,
      image:"/images/onshape.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      
      <section className="h-[40vh] flex items-center justify-center px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent relative z-20">
            {typedText}
            <span className="ml-2 animate-pulse">|</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto relative z-20">
            Zaměřuji se na webové aplikace, IoT, ESP32, Arduino, laserové gravírování, 3D tisk a modelování.<br/>
            Vytvářím inovativní řešení pro reálné problémy.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent relative z-20">
          Technologie, které mě definují a baví
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="text-center relative z-20 py-12">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          Kontaktujte mě
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto relative z-20">
          Máte zajímavý projekt nebo nápad? Rád se s vámi spojím a pomůžu vám ho realizovat.
        </p>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/IvanVondracek" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 
                          rounded-full opacity-0 group-hover:opacity-100 blur transition-all 
                          duration-500 group-hover:duration-200" />
            <div className="relative p-4 bg-white/5 rounded-full transform transition-all duration-300
                          hover:scale-110 group-hover:bg-white/10">
              <FaGithub className="text-3xl transition-all duration-300 
                                group-hover:text-white group-hover:scale-110" />
            </div>
          </a>

          <a href="https://www.instagram.com/vondracek.ivan?igsh=MWIyenRjZWZmbm5z" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 
                          rounded-full opacity-0 group-hover:opacity-100 blur transition-all 
                          duration-500 group-hover:duration-200" />
            <div className="relative p-4 bg-white/5 rounded-full transform transition-all duration-300
                          hover:scale-110 group-hover:bg-white/10">
              <FaInstagram className="text-3xl transition-all duration-300 
                                 group-hover:text-pink-400 group-hover:scale-110" />
            </div>
          </a>

          <a href="mailto:vondracek.ivan@gmail.com" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 
                          rounded-full opacity-0 group-hover:opacity-100 blur transition-all 
                          duration-500 group-hover:duration-200" />
            <div className="relative p-4 bg-white/5 rounded-full transform transition-all duration-300
                          hover:scale-110 group-hover:bg-white/10">
              <FaEnvelope className="text-3xl transition-all duration-300 
                                  group-hover:text-green-400 group-hover:scale-110" />
            </div>
          </a>

          <a href="https://www.facebook.com/ivan.vondracek" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 
                          rounded-full opacity-0 group-hover:opacity-100 blur transition-all 
                          duration-500 group-hover:duration-200" />
            <div className="relative p-4 bg-white/5 rounded-full transform transition-all duration-300
                          hover:scale-110 group-hover:bg-white/10">
              <FaFacebook className="text-3xl transition-all duration-300 
                                  group-hover:text-blue-400 group-hover:scale-110" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
