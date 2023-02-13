// Manuplation Of DOM

// Everything comes to be a camel case when modifying elements attributes! ie;
/*
In Css we rwrite font-size = ' '
but in javascript we turn it to fontSize = ' '

The same applies to others like Background-color in css
but in javascript = backgroundColor = ' 's
*/
/* ------------------------Example One---------------------*/
const headings = document.createElement('h1');

headings.innerHTML = 'Advanced Dom';

document.body.appendChild(headings);