import React from 'react';

interface HeaderProps {
    title: string;
    imgSrc: string;
}



const Header: React.FC<HeaderProps> = ({ title, imgSrc }) => {
    return (
      <header>
        <img src={imgSrc} alt={title} />
        <h1>{title}</h1>
      </header>
    );
};

export default Header;