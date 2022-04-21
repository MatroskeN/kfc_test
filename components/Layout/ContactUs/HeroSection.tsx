import * as React from 'react';
import css from './HeroSection.module.scss';
import { ContactUs } from '~/components/Layout/ContactUs/ContactUs';
import {Feedback} from "~/components/Layout/DefaultLayout/Feedback/Feedback";

export const HeroSection = () => {
  return (
    <div className={css.root}>
      <ContactUs />
        <Feedback />
    </div>
  );
};
