import * as React from 'react';
import css from './HeroSection.module.scss';
import { Music } from '~/components/Layout/Battles/Music/Music';
import { Social } from '~/components/Layout/Battles/Social/Social';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Social />
        <Feedback />
    </div>
  );
};
