import React from 'react';
import {FacebookShareButton, FacebookIcon} from "react-share";
import { TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon } from "react-share";
import Clipboard from '../ClipBoard/Clipboard';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter-square.svg';
import Whatsapp from '../../assets/images/whatsapp-square.svg';
import Pinterest from '../../assets/images/pinterest-square.svg';
import './Share.scss';

const Share = ( {share} ) => {
    return (
        <div className="social-icons">
            <FacebookShareButton
                url={"https://www.kidobunny.com"}
                quote={`I have nominated ${share} in the Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
            <img className="size" src={Facebook} alt=""/>
            </FacebookShareButton>
            <TwitterShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share} in the Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
            <img className="size" src={Twitter} alt=""/>
            </TwitterShareButton>
            <WhatsappShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share} in the Shoppies nomination`}
                separator=":: "
            >
            <img className="size" src={Whatsapp} alt=""/>
            </WhatsappShareButton>
            <PinterestShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share} in the Shoppies nomination`}
                separator=":: "
            >
            <img className="size" src={Pinterest} alt=""/>
            </PinterestShareButton>
            <Clipboard/>
        </div>
    );
};

export default Share;