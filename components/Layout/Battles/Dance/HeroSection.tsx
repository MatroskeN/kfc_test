import * as React from 'react';
import css from './HeroSection.module.scss';
import { Music } from '~/components/Layout/Battles/Music/Music';
import { Dance } from '~/components/Layout/Battles/Dance/Dance';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Dance />
        <Feedback />
    </div>
  );
};
