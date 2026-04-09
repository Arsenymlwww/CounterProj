import s from './Button.module.css';

type ButtonProps = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
    return (
        <button 
            className={s.button} 
            onClick={onClick} 
            disabled={disabled}
        >
            {title}
        </button>
    );
};