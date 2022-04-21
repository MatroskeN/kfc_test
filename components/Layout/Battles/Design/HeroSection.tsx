import * as React from 'react';
import css from './HeroSection.module.scss';
import { Music } from '~/components/Layout/Battles/Music/Music';
import { Design } from '~/components/Layout/Battles/Design/Design';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Design />
        <Feedback />
    </div>
  );
};
