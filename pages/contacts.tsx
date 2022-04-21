import * as React from 'react';
import HeadMeta from '~/components/HeadMeta/HeadMeta';
import DefaultLayoutContainer from '~/containers/Layout/DefaultLayout';
import { HeroSection } from '~/components/Layout/ContactUs/HeroSection';

const Home = () => {
  return (
    <DefaultLayoutContainer>
      <HeadMeta />
      <HeroSection />
    </DefaultLayoutContainer>
  );
};

export default Home;
