import * as Styles from "./Container.styles";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styles.Container>
      <Styles.ContainerInner>{children}</Styles.ContainerInner>
    </Styles.Container>
  );
};
