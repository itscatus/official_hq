import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-transparent">
    <div className="absolute inset-0 z-0 bg-black/60" />
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("./bg-1.jpg")' }} // Ganti path sesuai file kamu
    >
      <div className="relative z-10">
        <Section yPadding="">
          <HeroOneButton
            title={
              <>
                <span className="text-black-500 font-serif">
                  Felicia Natania Lingga
                </span>
              </>
            }
            description={
              <>
                <span className="font-mono text-teal-200">
                  portfolio, experience, and passion — all in one place, the hq
                </span>
              </>
            }
            button={
              <a
                href="https://drive.google.com/file/d/13PBMdUvlprRoSsDKziqx6g_xrBWJ5z3v/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button xl>Get My Resume</Button>
              </a>
            }
          />
        </Section>
      </div>
    </div>
  </Background>
);

export { Hero };
