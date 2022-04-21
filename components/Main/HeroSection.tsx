import * as React from 'react';
import css from './HeroSection.module.scss';
import { MainPage } from '~/components/Main/MainPage/MainPage';
import { Battles } from '~/components/Layout/Battles/Battles';
import { PersonalArea } from '~/components/Layout/PersonalArea/PersonalArea';
import { Music } from '~/components/Layout/Battles/Music/Music';
import { Design } from '~/components/Layout/Battles/Design/Design';
import { Dance } from '~/components/Layout/Battles/Dance/Dance';
import { Cybersport } from '~/components/Layout/Battles/Cybersport/Cybersport';
import { Social } from '~/components/Layout/Battles/Social/Social';
import { MainPartners } from '~/components/Layout/MainPartners/MainPartners';
import { ContactUs } from '~/components/Layout/ContactUs/ContactUs';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <MainPage />
      <Feedback />
    </div>
  );
};
