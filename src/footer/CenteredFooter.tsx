import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      <div className="footer-icon-list flex flex-wrap">{props.iconList}</div>
    </div>

    <div className="mt-8 text-sm">
      <div className="footer-copyright">
        © {new Date().getFullYear()} {AppConfig.title} | All Rights Reserved |
        Made with ♡ by{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
      </div>
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
        .footer-icon-list :global(a:not(:last-child)) {
          @apply mr-3;
        }

        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-gray-700;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current w-5 h-5;
        }
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
