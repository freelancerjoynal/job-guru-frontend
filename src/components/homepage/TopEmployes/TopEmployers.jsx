import Image from 'next/image';
import React from 'react';

const TopEmployers = () => {
  // Sample data - replace with your actual employer data
  const employers = [
    { id: 1, name: 'TechCorp', logo: '/images/emplogos/emplogo1.jpg' },
    { id: 2, name: 'DesignHub', logo: '/images/emplogos/emplogo2.jpg' },
    { id: 3, name: 'FinanceCo', logo: '/images/emplogos/emplogo3.jpg' },
    { id: 4, name: 'HealthPlus', logo: '/images/emplogos/emplogo4.jpg' },
    { id: 5, name: 'EduSystems', logo: '/images/emplogos/emplogo5.jpg' },
    { id: 6, name: 'LogisticsInc', logo: '/images/emplogos/emplogo6.jpg' },
    { id: 7, name: 'ITsolutions', logo: '/images/emplogos/emplogo7.jpg' },
    { id: 8, name: 'MediaMarkt', logo: '/images/emplogos/emplogo8.jpg' },
    { id: 9, name: 'EnergySol', logo: '/images/emplogos/emplogo9.jpg' },
    { id: 10, name: 'RetailInc', logo: '/images/emplogos/emplogo10.jpg' },
  ];

  return (
    <section className="py-25 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl uppercase text-gray-400 mb-2">Here You Can See</h2>
          <h3 className="text-4xl text-blue-600"><span className='text-blue-600 font-bold'>TOP</span> <span className='italic'>Employers</span></h3>
          <div className='h-1 w-35 bg-blue-500 m-auto mt-3'></div>
        </div>
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {employers.map((employer) => (
            <div 
              key={employer.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="h-25 w-25 flex items-center justify-center">
                <Image 
                  src={employer.logo} 
                  alt={employer.name} 
                  width={100}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-700 text-center">{employer.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopEmployers;