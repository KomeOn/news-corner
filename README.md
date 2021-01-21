# News Corner (React App) By Sanket Sonowal

    This React application is created using "create-react-app" to build a basic React application.

## "create-react-app"

    Create React App is a tool built by developers at Facebook to help you build React applications.

## "New-Corner" page

### 1. Homepage

![Homepage](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Homepage1.png)

### Header

    News-Corner is the name of website.
    Webhose API is the link to the documentation of the webhose API.
    Github is the link to the source code which is stored in Github repostiory.

### Body

    Search bar, Date selector and Search button will be explained below in their respective blocks.
    Covid 2019, Games, Car, Cricket, Football are containers that store the news related to these topics.

![Homepage](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Homepage2.png)

### Footer

    Made with React signifies that it is made from React library.
    Last line defines the creator (who creates the website), the time period (around when it is made) and 
    all rights (all the IPR).

### 2. Recent Results

![Recent](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Recent1.png)

### Container topics

    As stated above each topic is a container that contains all the news related to that specific topic or 
    contains some keyword that matches the topic.
    
    When clicked on the topc title it will displays all the news including their title and summary.

![Recent](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Recent2.png)

### News title

    By default news box will show news title and summary.

    When clicked on the news title it will open original article in a new tab and will show news text in
    place of the summary.

### News text

![Recent](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Recent3.png)

    In the news text body, 
        1. First line shows the author of the article (if no author name is found; by default it will 
        shows "Anonymous"), published time of the article with respect to current time, and 
        the domain name aka the website name from which the article has been taken.

        2. Second line shows all the tags which are present in the article.

        3. Afterwards, the second line it shows all the news text.

### 3. Search Results

### 3.1 Search Results without using datetime filter

![Search Result without using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Search1.png)

    In the Search bar, required query will get inserted and the Search button will get clicked. 

![Search Result without using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/SearchResult1.png)

    Based on the search query, the result will be shown in the left side of the result section in card form.
    In the news card, 
        1. The first is the image which is present in the article.
        2. The second line contains the name of the author and published time.
        3. The third line contains a "Read More" button when clicked will further expand (Explaination in the 
        next block).
        4. The fourth line contains a "Read in the reading section" button when clicked will display information
         on the right side (Explaination in the next block).

![Search Result without using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/SearchResult2.png)

    Clicking the "Read More" button expands and display the hidden block containing summary and a link to 
    the original article.

![Search Result without using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/SearchResult3.png)

    Clicking the "Read in the reading section" button will display information on the right side of the result 
    section containing all the information like,
        title, image, author, tags, text and social media stats. 

### 3.2 Search Results with using datetime filter

![Search Results with using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/Search2.png)

    In the Search bar, required query will get inserted, the date around which the article is needed needs to 
    be and the Search button will get clicked. (Example Date: 14/01/2021)

![Search Results with using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/SearchResult4.png)

    Based on the search query, the result will be shown in the left side of the result section in card form.
    In the news card, 
        1. The first is the image which is present in the article.
        2. The second line contains the name of the author and published time.
        3. The third line contains a "Read More" button when clicked will further expand (Explaination 
        in the next block).
        4. The fourth line contains a "Read in the reading section" button when clicked will display information
         on the right side (Explaination in the next block). 
         (Example All the articles displayed are published after "14/01/2021")

![Search Results with using datetime filter](https://github.com/KomeOn/news-corner/blob/e1785ebc51d6de45b839cb75b685463b20197d6a/pictures/SearchResult5.png)

    Clicking the "Read in the reading section" button will display information on the right side of the result 
    section containing all the information like,
        title, image, author, tags, text and social media stats.
