import { Link } from 'react-router-dom';
import * as Styles from './Card.styles';

export const Card = ({ imageUrl, title }: {
  imageUrl: string, title: string
}) => {
  return <Styles.Container>
    <Styles.ImageLinkContainer to='/'>
      <img src={imageUrl} alt={title} />
    </Styles.ImageLinkContainer>
    <Link to='/'>Popular {title}</Link>
  </Styles.Container>
};