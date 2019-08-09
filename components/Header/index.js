// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:

//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(headerData) {

    //Define Elements
    let head = document.createElement('div');
    let headDate = document.createElement('span');
    let headH1 = document.createElement('h1');
    let headTemp = document.createElement('span');

    //Set Structure of Elements
    head.appendChild(headDate);
    head.appendChild(headH1);
    head.appendChild(headTemp);

    //Set Class
    //Header
    head.classList.add('header');
    //Date
    headDate.classList.add('date');
    //Temp
    headTemp.classList.add('temp');

    //Set Content
    headDate.textContent = 'SMARCH 28, 2019';
    headH1.textContent = 'Lambda Times';
    headTemp.textContent = '98°';

    return head;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

