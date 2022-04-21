import * as React from 'react';
import css from './HeroSection.module.scss';
import { Music } from '~/components/Layout/Battles/Music/Music';
import { Cybersport } from '~/components/Layout/Battles/Cybersport/Cybersport';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Cybersport />
        <Feedback />
    </div>
  );
};
