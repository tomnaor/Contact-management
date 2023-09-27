import * as S from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutContainer>
      <h3>Contact management app</h3>
      {children}
    </S.LayoutContainer>
  );
};
