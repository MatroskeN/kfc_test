import * as React from 'react';
import HeadMeta from '~/components/HeadMeta/HeadMeta';
import DefaultLayoutContainer from '~/containers/Layout/DefaultLayout';
import HeroSectionContainer from '~/containers/MainPageExample/HeroSection';
import { HeroSection } from '~/components/Layout/Battles/HeroSection';

const Battles = () => {
  return (
    <DefaultLayoutContainer>
      <HeadMeta />
      <HeroSection />
    </DefaultLayoutContainer>
  );
};

export default Battles;
