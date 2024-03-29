import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';

interface LeadershipProps {
  data: {
    heading: string;
    leader: Leader[];
  };
}

interface Media {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface Leader {
  media: Media;
  name: string;
  description: string;
}

const Leader = ({ media, name, description }: Leader) => {
  const imgUrl = getStrapiMedia(media.data.attributes.url);
  return (
    <div className='flex flex-col py-8 items-center space-y-0'>
      <Image
        src={imgUrl || ''}
        alt={media.data.attributes.alternativeText || 'none provided'}
        className='transition-transform hover:scale-110 duration-200 rounded-full'
        width={200}
        height={200}
      />
      <div className='text-slate-200 text-center font-bold text-2xl py-3'>
        {name}
      </div>
      <p className='text-slate-300 text-center'>{description}</p>
    </div>
  );
};

export default function Leadership({ data }: LeadershipProps) {
  return (
    <section className='bg-violet-900 m:py-12 py-4'>
      <div className='container mx-auto space-y-2 text-center '>
        <h2 className='text-5xl font-bold text-white'>{data.heading}</h2>
      </div>
      <div className='container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {data.leader.map((leader: Leader, index: number) => (
          <Leader key={index} {...leader} />
        ))}
      </div>
    </section>
  );
}
