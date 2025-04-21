import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  Code2,
  FileCode,
  LayoutGrid,
  Server,
  Brain,
  Zap,
  FileType,
  Code,
} from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code2 size={28} /> },
  { name: 'Vue', icon: <LayoutGrid size={28} /> },
  { name: 'Angular', icon: <FileCode size={28} /> },
  { name: 'Node.js', icon: <Server size={28} /> },
  { name: 'Python', icon: <Brain size={28} /> },
  { name: 'TensorFlow', icon: <Zap size={28} /> },
  { name: 'Next.js', icon: <FileType size={28} /> },
  { name: 'TypeScript', icon: <Code size={28} /> },
];

const RemoteEngine = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, skills: selectedSkills });
    navigate('/thank-you');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-white text-black">
      {/* Dark Grey Sidebar - Collapses on mobile */}
      <div className="lg:w-1/4 w-full p-4 lg:p-8 flex flex-col justify-between bg-gray-200 text-gray-800 lg:rounded-r-2xl lg:m-2 shadow-xl relative overflow-hidden">
        {/* Circular background highlights - Hidden on mobile */}
        <div className="hidden lg:block absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 opacity-20 z-0"></div>
        <div className="hidden lg:block absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-20 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-white">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold">RemoteEngine</h1>
          </div>
          <p className="text-xs lg:text-sm text-gray-600">Hire vetted devs & AI Engineers</p>
        </div>

        <div className="relative z-10 mt-6 lg:mt-10 lg:mt-auto bg-white bg-opacity-70 p-4 lg:p-6 rounded-lg lg:rounded-xl border border-gray-300 shadow-sm">
          <h3 className="text-base lg:text-lg font-semibold mb-1 lg:mb-2">Need help to hire the right talent?</h3>
          <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4">Schedule a call with our experts</p>
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 lg:py-3 px-3 lg:px-4 rounded-md lg:rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm lg:text-base shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Schedule Call
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Let's find your developers</h2>
        <p className="text-sm sm:text-md text-gray-600 mb-4 sm:mb-6">Select the skills you're hiring for</p>

        {/* Skill Selection - Adjusts columns based on screen size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => toggleSkill(skill.name)}
              className={`flex flex-col items-center justify-center py-3 sm:py-4 px-1 sm:px-2 rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 ${
                selectedSkills.includes(skill.name)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-200'
              }`}
            >
              <div className="mb-1 sm:mb-2">{React.cloneElement(skill.icon, { size: window.innerWidth < 640 ? 20 : 28 })}</div>
              <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
            </button>
          ))}
        </div>

        {/* Other Skills Input */}
        <input
          type="text"
          placeholder="Enter other skills"
          className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Form - Stacks on mobile, 2 columns on larger screens */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Company Name*</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Phone*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-black text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RemoteEngine;