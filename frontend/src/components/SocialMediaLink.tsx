import Link from "next/link";
import { JSX } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { PiXLogo } from "react-icons/pi";


type Props = {
    media: string;
    url: string;
    className?: string;
    iconClassName?: string;
}

export default function SocialMediaLink({ media, url, className, iconClassName }: Props) {
    const mediaIcons: Record<string, JSX.Element> = {
        facebook: <IoLogoFacebook className={iconClassName}/>,
        instagram: <IoLogoInstagram className={iconClassName}/>,
        linkedin: <IoLogoLinkedin className={iconClassName}/>,
        tiktok: <IoLogoTiktok className={iconClassName}/>,
        x: <PiXLogo className={iconClassName}/>,
        youtube: <IoLogoYoutube className={iconClassName}/>,
    };

    return (
        <Link
            href={url}
            className={`${className} hover:text-orange-500 duration-150`}
        >
            {mediaIcons[media]}
        </Link>
    )
}