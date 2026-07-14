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
    onClick?: () => void
}

export default function Buttion({ text, link, type, onClick }: ButtonType) {

    const getButtonClass = () => {
        switch (type) {
            case ButtonState.PRIMARY:
                return 'bg-primary text-white hover:bg-primary-dark';
            case ButtonState.SECONDAY:
                return 'bg-accent text-white hover:bg-primary';
            case ButtonState.NEUTRAL:
                return 'bg-btn-neutral-sky text-primary-dark border border-sky-100 hover:bg-slate-200';
            case ButtonState.ACCENT:
                return 'bg-highlight text-white hover:bg-highlight/90';
            default:
                return 'bg-primary text-white hover:bg-primary-dark';
        }
    }

    if (link) {
        return (
            <Link href={link} className={`${getButtonClass()} rounded-xl inline-block hover:opacity-90 transition-opacity `}>
                <div className="mx-6 my-4 font-medium">{text}</div>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${getButtonClass()} rounded-xl ${onClick ? 'cursor-pointer' : 'cursor-default'} animate-all duration-[300ms] outline-none border-none`}>
            <div className="mx-6 my-4 font-medium">{text}</div>
        </button>
    );
}