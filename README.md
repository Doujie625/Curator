# Project Overview

## Project Links

- [github repo link](https://git.generalassemb.ly/devin/project-2-react/blob/master/readme.md)
- [add your deployment link]()

## Project Description

Curator
An art based search engine designed to find specific works, artists, and collections of art by emlpementing the use of multiple API's

## API

### Art Itnstitute of Chicago Api

#### API locations

- [Art Institute of Chicago Documentation] (https://api.artic.edu/docs/#quick-start)

- [Art Institute of Chicago API] (https://api.artic.edu/api/v1/artworks)

Every Artwork has an identifier number corresponding to that specific item. using that number we can append that number to the "iiif_url" create a source for our image.

- [Art Institute of Chicago iiif] (https://www.artic.edu/iiif/2)


### MoMA Api

- [MoMA API Docs] (https://api.moma.org/Help)

### Louve Api
 
- [Louve API Docs] ()


#### Example

A search for Mucha 
	
```
https://api.artic.edu/api/v1/artworks/search?q=Mucha
```

Second Object by Mucha titles "Zodiaque (\"La Plume\")"

```
https://api.artic.edu/api/v1/artworks/111986?fields=id,title,image_id
```

identifier number = 111986

```
iiif address + /full/843,/0/default.jpg

https://www.artic.edu/iiif/2/119dba14-acf2-cdcd-e9e6-b9cd38bc3aad/full/843,/0/default.jpg
```

Curator aims to emplement multiple API's to create a vast network to search and locate art. Each API will have its own documentation, structure, and syntax and will use various methods for reaching the desired data according to each API.

## Wireframes


- [Wireframe.cc](https://wireframe.cc/pro/edit/547761)
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api
- Render data on page 
- Allow user to interact with the page	
	- Functiioning imput form that will return items by search
- Search functionality that will allow user to search and return related content
	- Search will iterate through contents of API and return information from relevant fields


#### PostMVP EXAMPLE

- Deploy additional API to increase ammount of searchable content and remove limitations of current API
- Beautiful design and styling of Application

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.


Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will house the various components and include React Router| 
| Nav | This will contain path to Home and to user gallery | 
| Footer | This will render the footer | 
| Home (/) | This will render the *page* and contain the frame(display/image), the search(display/form) and the plaque(display/data) | 
| ArtTile (Display/image) | A component that holds the img and shows the picture/pictures searched for | 
| Form (Display/search) | This will be the form that pops up that takes in parameters for search | 
| Plaque (Display/data) | A component that holds the data being returned from API | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 |  |  |
| Basic Navbar & Footer | H | 2 |  |  |
| Set up basic React routing | H | 2 |  |  |
| Adding Form | H | 3|  |  |
| Working with API | H | 3|  |  |
| Make art API call, parse important data | H | 3 |  |  |
| Display Images and selectable desired Data, change on submit | H | 3 |  |  |
| Create logic to display "related content" | H | 3 |  |  |
| Create Search form | H | 3 |  |  |
| Adding additional API's  | M | 3 |  |  |
| Working with addition API's | M | 3|  |  |
| Make second art API call, parse important data | M | 3 |  |  |
| Additional styling for Navbar, Footer, other pages | L | 3 |  |  |
| Additional styling for Images and Data | L | 3 |  |  |
| Total | H | 38hrs |  |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
