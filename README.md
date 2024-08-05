# Summer Cocktails Web App

## Introduction

Welcome to the Cocktail Carousel Web App! This project was developed to help me decide which cocktails to serve when hosting friends. With a list of available alcohols, the app displays a variety of cocktail recipes in a visually appealing, interactive carousel. This way, I can easily browse through the options and pick the perfect drinks for any gathering.

## Analysis / Requirements

The idea for this project came about when I was planning a get-together and wanted to offer a diverse cocktail menu without spending too much time deciding on recipes. I provided a list of available alcohols, and with the help of ChatGPT, we developed a carousel that showcases various cocktails, each with a description, ingredients, and tasting notes.

### Technologies Used

- **React**: Chosen for its component-based architecture, which allowed us to build reusable UI components.
- **CSS**: Used for styling the components and ensuring a visually consistent design.
- **Netlify**: Selected for its seamless integration with GitHub and ease of deployment.

## Implementation

The development process for the Cocktail Carousel Web App was carried out iteratively, with each stage refining and enhancing the application to better meet the requirements. Here's a detailed look at the major stages of the project:

### Initial Version

**Time Taken**: 1 hour

The first stage of the project focused on getting an initial version of the app up and running. The goal was to display a list of cocktails in a visually appealing manner. To achieve this, I defined a JSON file containing the cocktail data, including names, ingredients, methods, and tasting notes. Using React, I created a component that could read this data and display it in a card format.

CSS was employed to style these cards, ensuring they were not only readable but also aesthetically pleasing. This involved setting appropriate colours, fonts, and layouts. The initial version successfully displayed the cocktails but was static and lacked interactivity.

### Adding Carousel Functionality

**Time Taken**: 1 hour

With the basic structure in place, the next step was to enhance the app by adding carousel functionality. This would allow users to browse through the cocktails one at a time, rather than viewing them all at once. Implementing this feature involved creating a carousel component in React, which managed the state of the currently displayed cocktail and provided navigation buttons to move left or right through the list.

I added keyboard controls to improve usability, enabling users to navigate the carousel using the arrow keys. It was important to ensure the carousel looped seamlessly, so reaching the end of the list would circle back to the beginning, and vice versa. This stage significantly improved the user experience, making the app more interactive and engaging.

### Tweaks and Improvements

**Time Taken**: 30 minutes

The final stage involved refining the app to ensure it was both functional and visually consistent. One of the key improvements was adjusting the card dimensions. I made the cards slightly taller and less wide, which improved readability and ensured the content was displayed tidily.

Another significant enhancement was implementing dynamic background colour changes. The background of the site was set to a semi-transparent version of the current card's primary colour. This created a cohesive look and feel, aligning the site’s background with the displayed cocktail card.

To ensure accessibility, I adjusted the colour contrast to be WCAG-compliant, ensuring the text was readable against the background. Finally, I fine-tuned the positioning of the navigation buttons and other UI elements, ensuring they were consistently placed and the overall layout remained balanced.

In summary, the implementation of the Cocktail Carousel Web App involved an iterative approach, with each stage building on the previous one to enhance functionality and user experience. From the initial static version to the interactive carousel and final refinements, the development process was both efficient and enjoyable.

## Deployment

The project is deployed on Netlify, which offers several advantages:

- **Continuous Deployment**: Integrated with GitHub, allowing for automatic deployment on each commit.
- **Ease of Use**: Netlify simplifies the deployment process with a straightforward setup.
- **Performance**: Optimized for fast load times and scalability.

### Deployment Pipeline

1. **GitHub Repository**: The source code is maintained in a GitHub repository.
2. **Netlify Integration**: Netlify is connected to the GitHub repo, enabling continuous deployment.
3. **Automatic Builds**: Each commit triggers an automatic build and deployment on Netlify, ensuring the latest version is always live.

In conclusion, this project was a fun and productive way to combine my passion for cocktails with my interest in web development. With ChatGPT's assistance, I was able to quickly develop a useful and visually appealing web app that makes hosting friends even more enjoyable. Cheers!
