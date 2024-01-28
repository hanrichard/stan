import * as Styles from './DefaultCard.styles';
import placeholder from '../../assets/placeholder.png';

export const DefaultCard = ({ title, url }: { title: string, url: string }) => {
  return <>
    <Styles.ImageLinkContainer to={url} style={{ backgroundImage: `url(${placeholder})` }}>
      <b>{title}</b>
    </Styles.ImageLinkContainer>
    <Styles.StyledLink to={url}>Popular {title}</Styles.StyledLink>
  </>
};
