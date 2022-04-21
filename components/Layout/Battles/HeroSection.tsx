import * as React from 'react';
import css from './HeroSection.module.scss';
import { Battles } from '~/components/Layout/Battles/Battles';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Battles />
        <Feedback />
    </div>
  );
};
