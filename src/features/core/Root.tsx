import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../page-wrapper';
import ModalPopup from 'shared/components/ModalPopup';

export const Root = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};
