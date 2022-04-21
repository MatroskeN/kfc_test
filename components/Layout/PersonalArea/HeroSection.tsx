import * as React from 'react';
import css from './HeroSection.module.scss';
import { PersonalArea } from '~/components/Layout/PersonalArea/PersonalArea';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <PersonalArea />
      <Feedback />
    </div>
  );
};
