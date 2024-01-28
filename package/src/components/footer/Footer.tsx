import * as Styles from './Footer.styles';
import { Link } from 'react-router-dom'
import facebookLogo from '../../assets/social/facebook-white.svg';
import instagramLogo from '../../assets/social/instagram-white.svg';
import twitterLogo from '../../assets/social/twitter-white.svg';
import appStoreLogo from '../../assets/store/app-store.svg';
import playLogo from '../../assets/store/play-store.svg';
import windowsLogo from '../../assets/store/windows-store.svg';

export const Footer = () => {
  return <Styles.Container>
    <Styles.ContainerInner>
      <Styles.FooterLinks>
        <Styles.FooterLink><Link to="/">Home</Link></Styles.FooterLink>
        <Styles.FooterLink><Link to="/">Terms and Conditions</Link></Styles.FooterLink>
        <Styles.FooterLink><Link to="/">Privacy Policy</Link></Styles.FooterLink>
        <Styles.FooterLink><Link to="/">Collection Statement</Link></Styles.FooterLink>
        <Styles.FooterLink><Link to="/">Help</Link></Styles.FooterLink>
        <Styles.FooterLink><Link to="/">Manage Account</Link></Styles.FooterLink>
      </Styles.FooterLinks>

      <Styles.FooterCopyRight>Copyright @2016 DEMO Streaming. All Rights Reserved.</Styles.FooterCopyRight>

      <Styles.FooterBottom>
        <Styles.FooterSocialMedias>
          <Styles.FooterSocialMedia>
            <a href='/' style={{ backgroundImage: `url(${facebookLogo})` }}>facebook</a>
          </Styles.FooterSocialMedia>
          <Styles.FooterSocialMedia>
            <a href='/' style={{ backgroundImage: `url(${twitterLogo})` }}>twitter</a>
          </Styles.FooterSocialMedia>
          <Styles.FooterSocialMedia>
            <a href='/' style={{ backgroundImage: `url(${instagramLogo})` }}>instagram</a>
          </Styles.FooterSocialMedia>
        </Styles.FooterSocialMedias>

        <Styles.FooterApps>
          <Styles.FooterApp>
            <a href='/' style={{ backgroundImage: `url(${appStoreLogo})` }}>AppStore</a>
          </Styles.FooterApp>
          <Styles.FooterApp>
            <a href='/' style={{ backgroundImage: `url(${playLogo})` }}>PlayStore</a>
          </Styles.FooterApp>
          <Styles.FooterApp>
            <a href='/' style={{ backgroundImage: `url(${windowsLogo})` }}>WindowsStore</a>
          </Styles.FooterApp>
        </Styles.FooterApps>
      </Styles.FooterBottom>
    </Styles.ContainerInner>
  </Styles.Container>
};

