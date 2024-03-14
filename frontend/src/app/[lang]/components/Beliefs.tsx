import React from 'react';

interface Beliefs {
  data: {
    belief: Belief[];
  };
}
interface Belief {
  text: string;
  description: string;
}

const Belief = ({ text, description }: Belief) => {
  return (
    <div className='flex px-12 py-10'>
      <h2 className='font-bold text-6xl flex-1 text-right pr-10'>{text}</h2>
      <p className='flex-1'>{description}</p>
    </div>
  );
};

export default function Beliefs({ data }: Beliefs) {
  return (
    <section className='bg-slate-200 '>
      {data.belief.map((belief: Belief, index: number) => (
        <Belief key={index} {...belief} />
      ))}
    </section>
  );
}
