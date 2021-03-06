import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import Clipboard from '../ClipBoard/Clipboard';
import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter-square.svg';
import Whatsapp from '../../assets/images/whatsapp-square.svg';
import './Share.scss';

const Share = ( {share} ) => {
    return (
        <div className="social-icons">
            <FacebookShareButton
                url={"hennafatemah.github.io/shoppies"}
                quote={`I have nominated ${share} in The Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
                <img className="size" src={Facebook} alt=""/>
            </FacebookShareButton>
            <TwitterShareButton
                url={"hennafatemah.github.io/shoppies"}
                title={`I have nominated ${share} in The Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
                <img className="size" src={Twitter} alt=""/>
            </TwitterShareButton>
            <WhatsappShareButton
                url={"hennafatemah.github.io/shoppies"}
                title={`I have nominated ${share} in The Shoppies nomination`}
                separator=":: "
            >
                <img className="size" src={Whatsapp} alt=""/>
            </WhatsappShareButton>
            <Clipboard/>
        </div>
    );
};

export default Share;