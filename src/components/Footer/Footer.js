import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <SocialLogo to="/">
          <SocialIcon src="./images/22.png" />
          romantyzm
        </SocialLogo>
        <FooterSubHeading>okres buntu i naporu</FooterSubHeading>
      </FooterSubscription>

      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            2021 - {new Date().getFullYear()}. Radom
          </WebsiteRights>
          <SocialIcons>
            {/* <SocialIconLink
              href="/"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink> */}
            <SocialIconLink
              href="//www.instagram.com/paryskiesalonyromantykow"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//polszczyzna.pl/romantyzm-epoki-literackie"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Google"
            >
              <FaGoogle />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com/watch?v=Ihf8Mh0-OIs"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
