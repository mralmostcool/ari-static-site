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
                return 'bg-sky-400 text-white';
            case ButtonState.ACCENT:
                return 'bg-sky-200 text-white';
            default:
                return 'bg-sky-800 text-white';
        }
    }

    return <div className={`${getButtonClass()} rounded-xl my-3`}>
        <div className="mx-6 my-4 font-medium">{text}</div>
    </div>
}