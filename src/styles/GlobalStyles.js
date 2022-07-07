import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');

:root{
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
}

body {
    margin: 0;
    padding:0;
    background: #131415;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a {
    text-decoration: none;
}

a:visited {
    color:white
}

li {
    list-style: none;
}

`;
