import type { RunTimeLayoutConfig } from 'umi';
import Footer from '@/components/Footer';

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    layout: 'mix',
    splitMenus: true,
    rightContentRender: () => <></>,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};
