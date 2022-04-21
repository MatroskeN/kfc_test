import * as React from 'react';
import css from './HeroSection.module.scss';
import { MainPartners } from '~/components/Layout/MainPartners/MainPartners';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <MainPartners />
        <Feedback />
    </div>
  );
};
