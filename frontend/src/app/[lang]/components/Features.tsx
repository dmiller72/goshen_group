import Link from 'next/link';
import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';

interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: Media;
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

function Feature({
  title,
  description,
  media,
  showLink,
  newTab,
  url,
  text,
}: Feature) {
  const imgUrl = getStrapiMedia(media.data.attributes.url);
  return (
    <div className='grid text-center'>
      <h3 className='my-3 text-3xl font-semibold'>{title}</h3>
      <a href={url} target='_blank'>
        <div className='cursor-pointer grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] gap-1 items-center text-center relative max-w-s overflow-hidden rounded-2xl shadow-lg group'>
          <Image
            src={imgUrl || ''}
            alt={media.data.attributes.alternativeText || 'none provided'}
            className='transition-transform group-hover:scale-110 duration-200 '
            width={400}
            height={400}
          />
          <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
            <p className='p-4 text-white'>{description}</p>
          </div>
        </div>{' '}
      </a>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? '_blank' : '_self'}
            className='inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600'
          >
            {text}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className='bg-white text-black m:py-12'>
      <div className='container mx-auto space-y-2 text-center '>
        <h2 className='text-5xl font-bold'>{data.heading}</h2>

        <p className='dark:text-gray-400'>{data.description}</p>
      </div>
      <div className='container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
