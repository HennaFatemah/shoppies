import React from 'react';
import {FacebookShareButton, FacebookIcon} from "react-share";
import { TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon } from "react-share";
import Clipboard from '../ClipBoard/Clipboard';
import Facebook from '../../assets/images/facebook.svg'
import './Share.scss';

const Share = ( {share} ) => {
    return (
        <div className="social-icons">
            <FacebookShareButton
                url={"https://www.kidobunny.com"}
                quote={`I have nominated ${share.Title} in the Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
            <img className="size" src={Facebook} alt=""/>
            </FacebookShareButton>
            <TwitterShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share.Title} in the Shoppies nomination`}
                hashtag="#TheShoppiesMovieAwardsForEntrepreneurs"
            >
            <TwitterIcon
                size={18}
                borderRadius={4}
            />
            </TwitterShareButton>
            <WhatsappShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share.Title} in the Shoppies nomination`}
                separator=":: "
            >
            <WhatsappIcon
                size={18}
                borderRadius={4}
            />
            </WhatsappShareButton>
            <PinterestShareButton
                url={"https://www.kidobunny.com"}
                title={`I have nominated ${share.Title} in the Shoppies nomination`}
                separator=":: "
            >
            <PinterestIcon
                size={18}
                borderRadius={4}
            />
            </PinterestShareButton>
            <Clipboard/>
        </div>
    );
};

export default Share;