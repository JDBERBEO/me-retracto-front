import React from 'react';
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx';
import { SueFormContainer } from '../components/SueForm/SueFormContainer.tsx';

export const SueForm = () => {
  return (
    <>
      <DefaultNavbar />
      <SueFormContainer />
    </>
  );
};
