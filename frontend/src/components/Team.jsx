import React from 'react';

// TeamMemberCard Component
const TeamMemberCard = ({ name, role, photo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image with fixed height, black and white by default, and color on hover */}
      <img
        src={photo}
        alt={name}
        className="w-full h-64 object-cover grayscale transition-all duration-300 hover:grayscale-0"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-md text-gray-600">{role}</p>
      </div>
    </div>
  );
};

// TeamSection Component
const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Mia Ward',
      role: 'Founder & CEO',
      photo: 'https://i.pinimg.com/736x/45/62/b8/4562b8e611bd891d914e0c628d3dd77d.jpg',
    },
    {
      name: 'Phoenix Baker',
      role: 'Head of Engineering',
      photo: 'https://i.pinimg.com/736x/12/b9/8d/12b98da22584aeffe03dc498af329849.jpg',
    },
    {
      name: 'Lana Steiner',
      role: 'Chief Operating Officer',
      photo: 'https://i.pinimg.com/736x/01/b8/2f/01b82f5ebb6fef7f30705a06ad4cc3f5.jpg',
    },
    {
      name: 'James Taylor',
      role: 'Lead Designer',
      photo: 'https://i.pinimg.com/736x/21/85/32/2185324ba5c9010a3de682fcc5f9d4dc.jpg',
    },
    {
      name: 'Emma Lee',
      role: 'Marketing Manager',
      photo: 'https://i.pinimg.com/736x/12/04/3d/12043ddefabaaac164e1d576d61d51b1.jpg',
    },
    {
      name: 'John Doe',
      role: 'Product Manager',
      photo: 'https://i.pinimg.com/736x/0e/24/7c/0e247c95916762cf77fec46c825ea626.jpg',
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Meet Our Team of Creators, Designers, and World-Class Problem Solvers
        </h2>
        <p className="text-xl text-gray-400">
          To be the company our customers want us to be, it takes an eclectic group of passionate operators. Get to know the people leading the way at Untitled.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            photo={member.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
