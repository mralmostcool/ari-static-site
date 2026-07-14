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
                return 'bg-primary text-white hover:bg-primary-dark';
            case ButtonState.SECONDAY:
                return 'bg-accent text-white hover:bg-primary';
            case ButtonState.NEUTRAL:
                return 'bg-btn-neutral-sky text-primary-dark border border-sky-100 hover:bg-btn-neutral-slate';
            case ButtonState.ACCENT:
                return 'bg-highlight text-white hover:bg-highlight/90';
            default:
                return 'bg-primary text-white hover:bg-primary-dark';
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