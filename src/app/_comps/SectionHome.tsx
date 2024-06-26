'use client';

import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import sakibTransparent from '@/assets/sakib.png';
import Image from 'next/image';
import Link from 'next/link';
import { FACEBOOK_LINK, GITHUB_LINK, GMAIL, YOUTUBE_LINK } from '@/lib/consts';
import BgText from '@/components/BgText';
import { cn } from '@/lib/utils';
import { animate, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function SectionHome() {
  return (
    <div className="overflow-x-hidden">
      <div
        id="home"
        className={cn('container px-0 grid mx-auto uppercase pt-4', 'lg:grid-cols-[1fr_auto]')}
      >
        <SakibDisplay />

        <SakibInfo />
      </div>
    </div>
  );
}

function SakibDisplay() {
  const MotionImage = motion(Image);

  return (
    <div
      className={cn(
        'relative aspect-[140/219] max-h-[calc(100vh-4rem-1rem)] w-full overflow-y-clip',
        'sm:max-h-[calc(100vh-4rem-1rem-2rem)]'
      )}
    >
      <BgText className="top-30 -left-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Sakib
        </motion.div>
      </BgText>
      <BgText className="bottom-20 left-30">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Ahmed
        </motion.div>
      </BgText>

      <MotionImage
        priority
        src={sakibTransparent}
        alt="sakib"
        fill
        transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        className="object-contain object-bottom xl:object-contain"
      />
    </div>
  );
}

function SakibInfo() {
  return (
    <div
      className={cn(
        'flex flex-col bg-violet-200 items-center py-16 gap-16 px-2',
        'lg:bg-transparent lg:py-0 lg:items-end lg:justify-center lg:px-0 lg:pr-6'
      )}
    >
      <Intro />

      <Stats />

      <ContactButtons />
    </div>
  );
}

function Intro() {
  return (
    <motion.div
      className={cn('space-y-4 text-violet-950')}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-violet-600 title-big lg:text-right">Sakib Ahmed</div>
      <div className="title-mid lg:text-right">Flutter Developer</div>
    </motion.div>
  );
}

function Stats() {
  const expNode = useRef<HTMLDivElement>(null);
  const projNode = useRef<HTMLDivElement>(null);

  const expInYears = 6;
  const projCompleted = 10;

  useEffect(() => {
    return animate(2, expInYears, {
      onUpdate: (v) => (expNode.current!.textContent = `${Math.floor(v)}+`),
      duration: 0.4,
      delay: 0.7,
    }).stop;
  }, []);

  useEffect(() => {
    return animate(2, projCompleted, {
      onUpdate: (v) => (projNode.current!.textContent = `${Math.floor(v)}+`),
      duration: 1,
      delay: 0.7,
    }).stop;
  }, []);

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-10 font-black text-violet-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <div ref={expNode} className="text-4xl">
          1+
        </div>
        <div className="w-28 leading-tight">Years of Experience</div>
      </div>
      <div className="flex items-center gap-2">
        <div ref={projNode} className="text-4xl">
          10+
        </div>
        <div className="w-28 leading-tight">Projects Completed</div>
      </div>
    </motion.div>
  );
}

function ContactButtons() {
  return (
    <motion.div
      className="flex gap-8 items-center lg:pr-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <Link href={GITHUB_LINK} target="_blank">
        <Image src={githubIcon} alt="github icon" width={40} height={40} />
      </Link>
      <Link href={FACEBOOK_LINK} target="_blank">
        <Image src={facebookIcon} alt="github icon" width={40} height={40} />
      </Link>
      <Link href={YOUTUBE_LINK} target="_blank">
        <Image src={youtubeIcon} alt="github icon" width={48} height={33} />
      </Link>
      <Link href={'mailto://' + GMAIL} target="_blank">
        <Image src={mailIcon} alt="github icon" width={40} height={30} />
      </Link>
    </motion.div>
  );
}
