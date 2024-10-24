// pages/about.tsx
import React from 'react';

export default function About() {
  return (
    <div className="p-10 bg-[#F7F9FC]">
      <h1 className="text-4xl font-bold text-center text-[#6C5B7E]">About Me</h1>
      <p className="mt-4 text-center">
        I'm Nimra Nisa, a passionate developer with a keen interest in building innovative solutions. My journey in tech started when I was [your journey start year], and since then, I have been dedicated to honing my skills and exploring new technologies.
      </p>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mt-10 text-[#6C5B7E]">My Skills</h2>
      <ul className="mt-4">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more skills */}
      </ul>

      {/* Personal Interests Section */}
      <h2 className="text-3xl font-bold mt-10 text-[#6C5B7E]">Personal Interests</h2>
      <p className="mt-4">In my free time, I enjoy [your hobbies or interests]. I believe that [any personal philosophy or motivation].</p>
    </div>
  );
}
