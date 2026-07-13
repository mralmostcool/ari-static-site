import Link from "next/link";

export enum ButtonState {
    PRIMARY,
    SECONDAY,
    NEUTRAL,
    ACCENT
}

export interface ButtonType {
    text: string
    link?: string
    type?: ButtonState
}

export default function Buttion({ text, link, type }: ButtonType) {

    const getButtonClass = () => {
        switch (type) {
            case ButtonState.PRIMARY:
                return 'bg-sky-800 text-white';
            case ButtonState.SECONDAY:
                return 'bg-sky-600 text-white';
            case ButtonState.NEUTRAL:
                return 'bg-zinc-200 text-zinc-800';
            case ButtonState.ACCENT:
                return 'bg-sky-200 text-white';
            default:
                return 'bg-sky-800 text-white';
        }
    }

    if (link) {
        return (
            <Link href={link} className={`${getButtonClass()} rounded-xl inline-block hover:opacity-90 transition-opacity`}>
                <div className="mx-6 my-4 font-medium">{text}</div>
            </Link>
        );
    }

    return (
        <div className={`${getButtonClass()} rounded-xl cursor-default`}>
            <div className="mx-6 my-4 font-medium">{text}</div>
        </div>
    );
}