import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-white">
      {props.title}
    </h1>
    <div className="text-l mb-16 mt-4">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
