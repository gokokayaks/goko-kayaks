import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import { EcoTourSection } from './sections/eco-tour';
import { FooterSection } from './sections/footer';
import { InstructionSection } from './sections/instruction';
import { LocationSection } from './sections/location';
import { PricesSection } from './sections/prices';
import { RentalsSection } from './sections/rentals';
import { ReservationSection } from './sections/reservation';
import { SunsetTourSection } from './sections/sunset-tour';
import { TeamBuildingSection } from './sections/team-building';
import { WaterMeditationSection } from './sections/water-meditation';
import { Welcome } from './sections/welcome';
import { AwardSection } from './sections/award';
import { WhatToBringSection } from './sections/what-to-bring';
import { PricesSectionContext } from './context/prices';

export const HomePage = () => {
  const [pricesSectionOpen, setPricesSectionOpen] = useState(false);

  return (
    <PricesSectionContext.Provider value={[pricesSectionOpen, setPricesSectionOpen]}>
      <Layout>
        <Welcome />
        <AwardSection />
        <LocationSection />
        <EcoTourSection />
        <RentalsSection />
        <SunsetTourSection />
        <WaterMeditationSection />
        <TeamBuildingSection />
        <InstructionSection />
        <PricesSection />
        <ReservationSection />
        <WhatToBringSection />
        <FooterSection />
      </Layout>
    </PricesSectionContext.Provider>
  );
};
