/* eslint-disable react/no-children-prop */
import { ReactNode, useState } from 'react';
import { BaseContainer } from './base-container';
import { ContentWrapper } from './content-wrapper';
import { Header } from './header';
import { MainContent } from './main-content';
import { Sidebar } from './sidebar';
import { Footer } from './footer';
import ModalPopup from 'shared/components/ModalPopup';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <div>Модалка</div> */}
      <BaseContainer>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <MainContent>{children}</MainContent>
        </ContentWrapper>
        <Footer />
      </BaseContainer>
    </>
  );
};
