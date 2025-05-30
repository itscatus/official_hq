import Link from 'next/link';

import { SectionHeader } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <SectionHeader yPadding="y-0">
    <div className="fixed left-0 top-0 z-50 w-full">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/get-to-know-me">Profile</Link>
        </li>
        <li>
          <Link href="/some-of-my-experiences">Experiences</Link>
        </li>
        <li>
          <Link href="/flex-my-skills-to-you">Skills</Link>
        </li>
        <li>
          <Link href="/projects-ive-worked-on">Projects</Link>
        </li>
        <li>
          <Link href="/achievements-ive-gained">Achievements</Link>
        </li>
        <li>
          <Link href="/get-the-latest-update">Follow</Link>
        </li>
      </NavbarTwoColumns>
    </div>
  </SectionHeader>
);

export { Navbar };
