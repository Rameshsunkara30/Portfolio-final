import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillBar } from './components/SkillBar';
import {Typewriter} from 'react-simple-typewriter';
import Python from './assets/Python Thumbnail.png'
import SQL from './assets/SQL Thumbnail.png'
import Tableau from './assets/Tableau Thumbnail.png'
import PowerBI from './assets/PowerBI Thumbnail.png'
import Excel from './assets/Excel Thumbnail.png'
import PythonProject from './assets/Python Project.pdf'
import SQLProject from './assets/SQL Project.pdf'
import PowerBIProject from './assets/PowerBI Project.pdf'
import TableauProject from './assets/Tableau project.pdf'
import ExcelProject from './assets/Excel Project.pdf'
import Profile from './assets/Profilenavy.png'
import Resume from './assets/ResumeFinal.pdf'
import AIToolsCertificate from './assets/AI Tools Certificate.pdf'
import PowerBICertificate from './assets/powerbi Certificate.pdf'
import SQLCertificate from './assets/SQL Certificate.pdf'

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1 
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (menu && !menu.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-0">
          <div className="flex justify-between items-centre">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=" text-2xl font-bold text-[#64ffda]"
            >
              Ramesh's Portfolio 
            </motion.h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-[#64ffda] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#64ffda] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
              <a href="#education" className="hover:text-[#64ffda] transition-colors">Education</a>
              <a href="#certifications" className="hover:text-[#64ffda] transition-colors">Certifications</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              id="menu-button"
              className="absolute right-6 top-1/2 transform -translate-y-1/2 md:hidden text-[#64ffda] z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 w-48 bg-[#0a192f] shadow-lg md:hidden border border-[#64ffda]/20 rounded-bl-lg"
              >
                <div className="flex flex-col p-2">
                  <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">Home</a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">About</a>
                  <a href="#skills" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">Skills</a>
                  <a href="#projects" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">Projects</a>
                  <a href="#education" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">Education</a>
                  <a href="#certifications" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-colors rounded-lg">Certifications</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5}}
            >
              <h2 className="text-xl text-[#64ffda] mb-2">This Is</h2>
              <h1 className="text-5xl font-bold mb-4 ">RAMESH SUA</h1>



              
             


<h3 className="text-2xl text-gray-400 mb-6">
  And I'm a{" "}
  <span className="text-2xl text-[#64ffda] font-bold">
    <Typewriter
      words={[
        "Data Analyst",
        "Data Visualization",
        "SQL Expert",
        "Business Analyst"
      ]}
      loop={true}
      cursor
      cursorStyle="__"
      typeSpeed={150}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h3>



              
              <p className="text-gray-400 mb-8 ">
                Seeking an entry-level position as a Data Analyst to utilize my analytical,
                technical, and problem-solving skills to drive business growth through data-
                driven insights. Passionate about continuous learning and staying up-to-date
                with the latest technologies in data analytics. 
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8 text-gray-300">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                >
                  <MapPin size={20} />
                  <a href="https://www.google.com/maps/@17.4970902,78.3946396,17.07z?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">
                    KPHB colony Hyderabad 500072
                  </a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                >
                  <Phone size={20} />
                  <a href="tel:+919505884744">9505884744</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                >
                  <Mail size={20} />
                  <a href="mailto:sunkararamesh300@gmail.com">sunkararamesh300@gmail.com</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                >
                  <Linkedin size={20} />
                  <a href="https://www.linkedin.com/in/ramesh-sunkara-726bba350">LinkedIn Profile</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
                >
                  <Github size={20} />
                  <a href="https://github.com/Rameshsunkara30">GitHub Profile</a>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                className="hidden sm:block bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-full font-semibold hover:bg-[#64ffda]/90 transition-colors sm:block"
                onClick={() => window.open(Resume)}
              >
                Download CV
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              







 <div className="relative w-[300px] h-[300px] mx-auto flex items-center justify-center"> {/* Background Glowing Circle */} <div className="absolute inset-0 bg-[#00f0ff] rounded-full blur-[70px] opacity-100"></div>









    
  


               


                
                {/* Glowing Background Circle */}
                <div className="absolute inset-0 bg-[#00f0ff] rounded-full blur-[70px] opacity-100"></div>
                
                {/* Solid Circle Behind Profile */}
                <div className="absolute inset-0 bg-[#00f0ff] rounded-full"></div>

                {/* Profile Image */}
                <img 
                  src={Profile}
                  alt="Profile"
                  className="absolute top-[-115px] left-1/2 transform -translate-x-1/2 w-[340px] h-[410px] object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center sm:hidden text-center mb-20"
      >
        <motion.button
          onClick={() => window.open(Resume)}
          className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#64ffda]/90 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.2 }}
        >
          View My Resume
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6">
        {/* About Section */}
        <motion.section 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="about"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">About Me</h2>
          <div className="bg-[#112240] p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed indent-8 mb-4">
              Results-driven Entry-Level Data Analyst with a solid foundation in data analysis, visualization, and database management. <span className="font-bold">Proficient in SQL, Python,Excel, and Power BI/Tableau, with experience in transforming raw data into actionable insights.</span> Strong problem-solving skills with the ability to identify trends, optimize processes, and support data-driven decision-making. Passionate about storytelling through data and eager to contribute analytical expertise to a dynamic team.
            </p>
            <p className="text-gray-300 leading-relaxed indent-8">
              Skilled in data cleaning, statistical analysis, and visualization to extract meaningful insights and support business decision-making.<span className="font-bold">Strong problem-solving abilities with a keen eye for identifying trends and optimizing processes. </span> Experienced in creating interactive dashboards and reports to present data-driven insights effectively. Passionate about leveraging data to improve efficiency and drive business success.
            </p>
          </div>
        </motion.section>

        {/* Hire Me Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >





     






          
          <motion.button
            onClick={() => window.open("https://wa.me/919505884744", "_blank")}
            className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#64ffda]/90 transition-colors"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="skills"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#64ffda]">Programming Languages</h3>
              <div className="space-y-6">
                <SkillBar skill="Python" level={80} />
                <SkillBar skill="SQL" level={90} />
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#64ffda]">Data Analysis Tools</h3>
              <div className="space-y-6">
                <SkillBar skill="Tableau" level={90} />
                <SkillBar skill="Power BI" level={80} />
                <SkillBar skill="Excel" level={95} />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="projects"
        >
          <h2 className="text-3xl font-bold mb-16 text-[#64ffda]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 1.13 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <img 
                src={Python}
                alt="Loan Default Risk Analysis"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Loan Default Risk Analysis Using Python</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Conducted an EDA on consumer finance data to identify factors influencing loan defaults.</li>
                <li>• Cleaned and visualized data using Pandas, Matplotlib, and Seaborn, focusing on high risk attributes.</li>
                <li>• Provided recommendations for mitigating loan default risks, ensuring actionable insights for stakeholders.</li>
              </ul>
              <a 
                href={PythonProject} 
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 1.13 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <img 
                src={SQL}
                alt="Movie Analytics"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Movie Analytics for RSVP Movies Using SQL</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Utilized SQL to analyze three years of movie data, providing actionable recommendations.</li>
                <li>• Wrote optimized queries to extract key audience and trend insights.</li>
                <li>• Delivered a comprehensive SQL script and summarized results in a detailed Presentation.</li>
              </ul>
              <a 
                href={SQLProject} 
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 1.13 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <img 
                src={PowerBI}
                alt="Loan Analysis Dashboard"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Loan Analysis Dashboard Using PowerBI</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Developed a Power BI dashboard to analyze home loan datasets.</li>
                <li>• Tracked applied, sanctioned, disbursed, and recovery amounts with custom KPIs.</li>
                <li>• Leveraged DAX for advanced calculations and filtering.</li>
              </ul>
              <a 
                href={PowerBIProject} 
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 1.13 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <img 
                src={Tableau}
                alt="IPL Visualization"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">IPL Visualization Dashboard Using Tableau</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Designed an interactive Tableau dashboard analyzing IPL data from 2008-2017.</li>
                <li>• Integrated match-level and ball-by-ball datasets for insights.</li>
                <li>• Created visualizations for match outcomes and team performance.</li>
              </ul>
              <a 
                href={TableauProject} 
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 1.13 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <img 
                src={Excel}
                alt="Bank Marketing Analysis"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Bank Marketing Data Analysis in Excel</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                
                <li>• Analyzed bank marketing dataset using advanced Excel techniques.</li>
                <li>• Automated reporting workflows using macros.</li>
                <li>• Presented insights on customer behavior and campaign response rates.</li>
              </ul>
              <a 
                href={ExcelProject} 
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="education"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Education</h2>
          <div className="bg-[#112240] p-8 rounded-lg space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#64ffda]">Bachelor Of Computer Science</h3>
              <p className="text-gray-300">Adikavi Nannayya University, Kakinada</p>
              <p className="text-gray-300">2021 - 2024</p>
              <p className="text-gray-300">CGPA: 7.0/10</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#64ffda]">Board Of Intermediate</h3>
              <p className="text-gray-300">Pragati Vidyalaya Junior College</p>
              <p className="text-gray-300">2018 - 2020</p>
              <p className="text-gray-300">GPA: 6.0/10</p>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="certifications"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.08 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Data Analytics Certificate - Gana Tech Solutions</h3>
              <p className="text-gray-300 mb-4">
                Earned a Data Analytics Certification from Gana Tech Solutions, demonstrating proficiency in data handling, visualization, and interpretation. The program included training in Python, SQL, Tableau, and Excel, focusing on statistical analysis, data cleaning, and business insights.
              </p>
              <a 
                href="https://drive.google.com/file/d/18zFHAqbP_BMPbIB3i-92YfPluIpXD9ei/view?usp=drivesdk"
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Certificate
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.08 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">PowerBI Workshop Certificate - Office Master</h3>
              <p className="text-gray-300 mb-4">
                Earned a certification in Power BI from Office Master, demonstrating expertise in data modeling, visualization, and report automation. The workshop covered key concepts like DAX functions, Power Query, and interactive dashboard creation.
              </p>
              <a 
                href={PowerBICertificate}
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Certificate
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.08 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">SQL & Database Assessment Certificate - LearnTube</h3>
              <p className="text-gray-300 mb-4">
                Certified in SQL and Database Management by LearnTube, proving strong abilities in database design, query optimization, and structured data analysis. The assessment covered SQL syntax, data modeling, and real-world problem-solving. 
              </p>
              <a 
                href={SQLCertificate}
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Certificate
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.08 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">AI Tools Workshop Certificate - be10x</h3>
              <p className="text-gray-300 mb-4">
                Earned a certification in AI Tools from Be10x, demonstrating proficiency in using AI for workflow automation, predictive analytics, and decision-making. The workshop covered practical applications of AI in business.
              </p>
              <a 
                href={AIToolsCertificate}
                className="inline-block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-lg hover:bg-[#64ffda]/90 transition-colors"
              >
                View Certificate
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Hire Me Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.button
            onClick={() => window.open("https://wa.me/919505884744", "_blank")}
            className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#64ffda]/90 transition-colors"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Ramesh Sunkara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;