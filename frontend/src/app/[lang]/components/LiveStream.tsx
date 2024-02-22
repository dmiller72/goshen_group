import React from 'react';
import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';
import Link from 'next/link';
import { url } from 'inspector';

export interface LiveProps {
  data: {
    liveToggle: boolean;
    title: string;
    onair: string;
    media: Media;
    schedule: RichTextProps;
  };
}

interface RichTextProps {
  data: {
    body: string;
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

const LiveStream = ({ data }: LiveProps) => {
  let were_live = false;
  let day = new Date().getDay();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  if (
    (day === 5 && hour === 19 && minute >= 25) ||
    (day === 5 && hour === 20) ||
    (day === 5 && hour === 21 && minute <= 45) ||
    (day === 6 && hour === 10 && minute >= 45) ||
    (day === 6 && hour === 11) ||
    (day === 6 && hour === 12) ||
    (day === 6 && hour === 13) ||
    (day === 6 && hour === 14 && minute <= 30) ||
    data.liveToggle
  ) {
    were_live = true;
  } else {
    were_live = false;
  }

  const imgUrl = getStrapiMedia(data.media.data.attributes.url);
  return (
    <section
      className='py-20 bg-violet-950 dark:text-gray-100 m:py-12 lg:px-40 '
      id='livestream'
    >
      {were_live ? (
        <div className='flex flex-col justify-center items-center'>
          <h2 className=' mb-8 text-5xl font-bold'>{data.onair}</h2>
          <Link href='https://zoom.us/j/96666326977?from=join#success'>
            <Image
              src='http://localhost:1337/uploads/livestream_7ef206f711.jpg'
              alt=''
              width={400}
              height={400}
              className='animate-pulse flex space-x-4 w-auto'
            />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: data.schedule }} />
        </div>
      ) : (
        <section className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold lg:text-5xl text-center mb-10'>
            {data.title}
          </h1>

          <div className='grid lg:grid-cols-2 lg:items-center md:grid-cols-1'>
            <Link href='https://zoom.us/j/96666326977?from=join#success'>
              <Image
                src={imgUrl || ''}
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </Link>
            <div
              className='font-bold md:mt-4 ml-10'
              dangerouslySetInnerHTML={{ __html: data.schedule }}
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default LiveStream;
