import classNames from "classnames";
import { FiPlusCircle, FiArrowRight, FiInfo } from "react-icons/fi";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    icon?: "Plus" | "Info" | "Arrow";
    flex?: boolean;
    px?: string;
}

const Button = ({
    text,
    type,
    onClick,
    disabled = false,
    icon,
    flex = false,
}: ButtonProps) => {
    const buttonClasses = classNames(
        !disabled ? "bg-blue-default" : "bg-white-paper",
        !disabled ? "text-beige-default" : "text-gray",
        !disabled ? "hover:bg-blue-light" : null,
        !disabled ? "hover:text-black" : null,
        "rounded-2xl",
        "transition-all",
        "py-2",
        flex ? "w-fit" : "w-full",
        "text-md",
        `px-2`,
        "group",
        "transition",
        "hover:bg-primary",
        "border-solid",
        "w-fit",
        "font-semibold",
        "h-[50px]"
    );

    return (
        <button
            onClick={onClick}
            type={type}
            className={buttonClasses}
            disabled={disabled}
        >
            <div className="flex flex-row gap-2 justify-center items-center h-full px-6 align-middle">
                {icon == "Plus" && <FiPlusCircle className="text-3xl" />}
                {icon == "Info" && <FiInfo className="text-2xl" />}
                {icon == "Arrow" && <FiArrowRight className="text-2xl" />}
                {text}
            </div>
        </button>
    );
};

export default Button;
