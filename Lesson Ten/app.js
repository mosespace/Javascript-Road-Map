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

/* ------------------------Example Two---------------------*/

const addingParagraph = document.createElement('p');

addingParagraph.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius totam voluptatem, cumque esse exercitationem possimus! Aliquid veritatis temporibus fuga sed?';

document.body.appendChild(addingParagraph);

addingParagraph.className = 'Heading';
addingParagraph.id = 'Heading';


// Styling the kune like the way in css
addingParagraph.style.fontSize = '40px'; // changing the font size
addingParagraph.style.backgroundColor = '#ffa500'; // Changing the backround color