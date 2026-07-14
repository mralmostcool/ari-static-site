import { Breadcrumbs } from '../Breadcrumbs';
import { Button } from '@/components';
import type { ButtonType } from '@/components';

interface PageHeaderInterface {
  title: string;
  tagline?: string;
  button?: ButtonType[];
}

export default function PageHeader({
  title,
  tagline,
  button,
}: PageHeaderInterface) {
  return (
    <div className='w-full'>
      <section className='flex flex-col justify-center overflow-hidden bg-white py-8 md:py-10 xl:py-12 border-b border-zinc-100'>
        <div className='mx-auto max-w-7xl w-full px-6 lg:px-8'>
          <div className='flex flex-col items-start max-w-4xl'>
            <Breadcrumbs />
            <h1 className='text-zinc-900 my-0 font-bold tracking-tight'>
              {title}
            </h1>
            {tagline && (
              <h4 className='text-sky-700 font-normal my-0 mt-3 md:mt-4 leading-relaxed'>
                {tagline}
              </h4>
            )}
            {button && button.length > 0 && (
              <div className='flex flex-row gap-3 flex-wrap gap-y-2 mt-6 md:mt-8'>
                {button.map((btn, index) => (
                  <Button
                    key={index}
                    text={btn.text}
                    type={btn.type}
                    link={btn.link}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
