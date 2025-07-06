import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Navbar = () => {
    // Active Sections
    const [activeSection, setActiveSection] = useState("");
    // opening the component
    const [isOpen, setIsOpen] = useState(false);
    // Smooth scroll function
    const [isScrolled, setIsScrolled] = useState(false);
    // Check scroll and change navbar backgroud
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
    }

    const menuItems = [
        { id: "about", lable: "About" },
        { id: "skills", lable: "Skills" },
        { id: "experience", lable: "Experience" },
        { id: "work", lable: "Work" },
        { id: "education", lable: "Education" }

    ];
    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className='text-white py-5 flex justify-between items-center'>
                {/* Logo*/}
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>Parth</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>Bhatnagar</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>
                {/* Desktop menu */}
                <ul className='hidden md:flex space-x-8 text-gray-300'>
                    {menuItems.map((item) => (
                        <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                            }`}>
                            {/* Create buttons for every component */}
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.lable}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Social Media Icons Add */}
                <div className='hidden md:flex space-x-4'>
                    <a href='https://github.com/Parth9696' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/parth-bhatnagar-7a0986248/' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec'>
                        <FaLinkedin size={24} />
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                                onClick={() => setIsOpen(false)} />
                        ) : (
                            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                                onClick={() => setIsOpen(true)}></FiMenu>
                        )
                    }

                </div>
            </div>
            {/* Mobile menu items */}
            {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.lable}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
        </nav>
    )
}

export default Navbar
