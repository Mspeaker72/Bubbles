import React from 'react';

function Header({heading="place heading",arr=["Home","About","Contact","Maps"]}) {
  return (
    <header>
      <h1>{heading}</h1>
      <nav>
        <ul>
          {arr.map((value)=><li key={value}><a href='#'>{value}</a></li>)}
        </ul>
      </nav>
    </header>
  );
}

export default Header;