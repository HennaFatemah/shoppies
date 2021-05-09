import React from 'react';
import {FacebookShareButton, FacebookIcon} from "react-share";
import {TwitterShareButton, TwitterIcon} from "react-share";
import {WhatsappShareButton, WhatsappIcon} from "react-share";
import {PinterestShareButton, PinterestIcon} from "react-share";
import Clipboard from '../ClipBoard/Clipboard';
import './Share.scss';

const Share = () => {
    return (
        <div className="social-icons">
            <FacebookShareButton
                url={"https://www.kidobunny.com"}
                quote={"Kido Bunny - Preschooler educational gaming hub"}
                hashtag="#kidobunny"
            >
                <FacebookIcon
                    size={28}
                    borderRadius={8}
                />
            </FacebookShareButton>
            <TwitterShareButton
                url={"https://www.kidobunny.com"}
                title={"Kido Bunny - Preschooler educational gaming hub"}
                hashtag="#kidobunny"
            >
                <TwitterIcon
                    size={28}
                    borderRadius={8}
                />
            </TwitterShareButton>
            <WhatsappShareButton
                url={"https://www.kidobunny.com"}
                separator=":: "
            >
                <WhatsappIcon
                    size={28}
                    borderRadius={8}
                />
            </WhatsappShareButton>
            <PinterestShareButton
                url={"https://www.kidobunny.com"}
                title={"Kido Bunny - Preschooler educational gaming hub"}
                separator=":: "
            >
                <PinterestIcon
                    size={28}
                    borderRadius={8}
                />
            </PinterestShareButton>
            <Clipboard/>
        </div>
    );
};

export default Share;