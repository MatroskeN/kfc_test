import * as React from 'react';
import HeadMeta from '~/components/HeadMeta/HeadMeta';
import DefaultLayoutContainer from '~/containers/Layout/DefaultLayout';
import HeroSectionContainer from '~/containers/MainPageExample/HeroSection';
import { HeroSection } from '~/components/Layout/Battles/Dance/HeroSection';

const Home = () => {
  return (
    <DefaultLayoutContainer>
      <HeadMeta />
      <HeroSection />
    </DefaultLayoutContainer>
  );
};

export default Home;
