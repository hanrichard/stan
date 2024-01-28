import * as Styles from './HeadingSection.styles';

export const HeadingSection = ({ heading }: { heading: string }) => {
  return <Styles.Container>
    <Styles.ContainerInner><h2>{heading}</h2></Styles.ContainerInner>
  </Styles.Container>
};

