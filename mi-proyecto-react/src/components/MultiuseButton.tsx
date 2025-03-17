import React, { ReactNode } from "react";

interface MultiuseButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const MultiuseButton: React.FC<MultiuseButtonProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
};

export default MultiuseButton;
