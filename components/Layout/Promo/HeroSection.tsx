import * as React from 'react';
import css from './HeroSection.module.scss';
import { Promo } from '~/components/Layout/Promo/Promo';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <Promo />
        <Feedback />
    </div>
  );
};
