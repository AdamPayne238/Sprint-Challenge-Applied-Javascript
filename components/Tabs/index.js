// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




    function Tab(Url){

        //define element
        let newTab = document.createElement('div');


        //Set Structure of Elements
        head.appendChild(headDate);


        //set class
        newTopic.classList.add('tab');

        //set content
        newTab.textContent = Url;


        return newTab

      }

// let entryPoint = document.querySelector('.tabs')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response.Url);
    const aNewTab = Tab
    response.data.topics.forEach( Url => {
        entryPointTab.appendChild(newTab)
    })
    })
    .catch((err) => {
        console.log(err)
      })

      let entryPointTab = document.querySelector('.tabs')

    //   axios.get('https://api.github.com/users/AdamPayne238')
    // .then((response) => {
    //     console.log(response.data);
    //     const aNewCard = gitCard(response.data)
    //     entryPoint.appendChild(aNewCard)
    //     })
    // .catch((err) => {
    //     console.log(err);
    //   })

    // let entryPoint = document.querySelector('.cards')


        //BEFORE CHANGE
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then((response) => {
//     console.log(response.Url);
//     response.data.topics.forEach( Url => {
//         entryPointTab.appendChild(newTab)
//     })
//     })
//     .catch((err) => {
//         console.log(err)
//       })

//       let entryPointTab = document.querySelector('.tabs')