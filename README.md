# New York Times Article API - Independent Project for Epicodus. 


![](PieShop).gif)


* #### _Returns popular articles using the NYT API. Also has functionality to display search results of a given query._

* #### _The app utlizes loops to display API responses all at once._

* #### _The app uses date-format package to format the response published date from NYT API._

* #### _Uses complicated api response navigation such as `${response.results[i].media[0]['media-metadata'][2].url}` To display the article thumbnail image._


#### _5/5/20_

#### By _**Luke Schlessinger**_

## Setup/Installation Requirements
* _Clone repo, run npm install, type "npm start" (you may have to refresh the page once for it to load). Card images are clickable which will display the card details!_

## Specifications:
  * Spec 1: The app loads with 4 cards featuring 4 different pies. These are created dynamically using an array of objects stored in state.

  * Spec 2: Each card has a button which decrements the count by 1 for that specific pie's state. Logic is built in which prevents further decrements below 0.
    
  * Spec 3: PieCard and PieForm are completely reusable components with proptypes. 
     
  * Spec 4: The app utilizes css grid to handle dynamically added cards which space and size accordingly. 

  * Spec 5: Clicking on any card image will display a details div. Each pie has it's own state for this hidden content.

  * Spec 6: The app handles new pie card creation after user clicks on the nav button. The PieForm component is rendered and once the user clicks submit, a new pie is added to the beginning parent's state array. On next render, this new card will display at the first position.

     
## Future Features
* 

## Support and contact details

_Please open an issue if you find any bugs, thanks!_

## Technologies Used

_React, ReactStrap, jQuery, webpack, Google Fonts, CSS._

### License

* The MIT License (MIT) 

Copyright (c) 2020 **_Luke Schlessinger_**
