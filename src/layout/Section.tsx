import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-full px-4 ${
      props.yPadding ? props.yPadding : 'py-44'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="font-serif text-4xl font-bold text-white">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

const SectionHeader = (props: ISectionProps) => (
  <div className={`${props.yPadding ?? 'py-32'}`}>{props.children}</div>
);

export { Section, SectionHeader };
