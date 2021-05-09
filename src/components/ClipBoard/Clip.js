import React, { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./Clip.scss";

const Clipboard = ({link}) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () =>{
        setIsCopied(true);
    }

    useEffect(
        () =>{
            setTimeout(() =>{
                if(isCopied) setIsCopied(false);
            }, 2000);
        }, 
        [isCopied]
    )
    return (
        <CopyToClipboard text={`${link}`} onCopy={handleCopy}>
            <div className="clip">
                <div className="clip__tag">
                    {isCopied && <small className="clip__small">copied</small>}
                </div>
            </div>
        </CopyToClipboard>
    );
};

export default Clipboard;