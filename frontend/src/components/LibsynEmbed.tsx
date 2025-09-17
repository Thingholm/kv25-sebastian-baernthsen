interface Props {
    src: string;
}

export default function LibsynEmbed({ src }: Props) {
    return (
        <iframe title="Embed Player" src={src} height="192" width="100%" scrolling="no" allowFullScreen={true} style={{border: "medium"}}></iframe>
    )
}