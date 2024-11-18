import { Button } from "antd";
import { useButtonStyles } from "./submit-button-style";

const ButtonComponent: React.FC<ButtonComponentProps> = ({children,className,htmlType,onClick}) => {
    const classes = useButtonStyles()

    return (
        <Button
            className={`${classes.button} ${className || ''}`} 
            htmlType={htmlType}
            onClick={onClick}
        >
        {children}
        </Button>
    );
};

export default ButtonComponent;