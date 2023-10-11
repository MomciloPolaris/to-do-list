import React from 'react';

type ButtonProps = {
    title: string;
    color?: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, color, onClick }) => (
    <button onClick={onClick} style={{ color }}>
        {title}
    </button>
);

export default Button;
