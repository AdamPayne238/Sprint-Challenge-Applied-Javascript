// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>

//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>

// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response.data);
        const aNewCard = articleCard(response.data)
        entryPoint.appendChild(aNewCard)
        })
    .catch((err) => {
        console.log(err);
      })

      let entryPoint = document.querySelector('.cards-container')



const articlesArray = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];

      articlesArray.forEach(i => {
        axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then((response) => {
          const aNewCard = articleCard(response.data)
          entryPoint.appendChild(aNewCard)
          })
      .catch((err) => {
          console.log(err);
        })
      })

    function articleCard(data){

        //Define Element

        //Card
        let newCard = document.createElement('div');

        //Headline
        let newHeadline = document.createElement('div');

        //Author
        let newAuthor = document.createElement('div');

        //Image Container (append image to this div)
        let newImgContainer = document.createElement('div');

        //Image
        let newImage = document.createElement('img');

        //AuthorName span
        let newAuthorName = document.createElement('span');


        //Set Structure of Elements
        newCard.appendChild(newHeadline);
        newCard.appendChild(newAuthor);

        newAuthor.appendChild(newImgContainer);
        newAuthor.appendChild(newAuthorName);

        newImgContainer.appendChild(newImage);

        // <div class="card">
//   <div class="headline">{Headline of article}</div>

//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>

// </div>


        //Set Class

        //Card
        newCard.classList.add('card');

        //Headline
        newHeadline.classList.add('author');

        //Author
        newAuthor.classList.add('headline');

        //ImgContainer
        newImgContainer.classList.add('img-container');


        //Set Content
        //Headline
        newHeadline.textContent = `Headline: ${data.headline}`;

        //Image
        newImage.textContent = ('src', data.authorPhoto);

        //AuthorName span
        newAuthorName.textContent = `${data.authorName}`;

        return newCard
      
    }