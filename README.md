# A simple react-native app that calls the NY Times Most Popular Articles

A simple mobile app that calls the NY Times Most Popular Articles API and shows a list of the most popular articles. When an item on the list is tapped, the app should show a detailed view of the article (a typical master/detail app).

## Screenshots

<img src="screenshots/articles-list.png" alt="Articles List" width="250px" height="" /> &nbsp; <img src="screenshots/article-detail.png" alt="Articles Display Page" width="250px" height="" /> &nbsp; <img src="screenshots/popup-error.png" alt="Error popup" width="250px" height="" />

<img src="screenshots/tablet-view.png" alt="Error popup" width="775px" height="" />

## Design Pattern

Implement the **`container-component`** pattern to separate concerns and make components more focused. Containers handle the logic and state management, while components are responsible for rendering UI elements. This separation improves code readability and facilitates testing.

1. Containers: Containers are responsible for managing the application state, fetching data from APIs, handling events, and coordinating the logic behind the scenes. They encapsulate the business logic of the application.
2. Components: Components focus solely on rendering the user interface (UI) and receiving props from the Container. They are primarily concerned with the visual representation and user interaction.

## Prerequisites

[Install NodeJs](https://nodejs.org/)

[Install Expo](https://docs.expo.io/)

## Key Features

```
- View the list of Most Popular Articles.
- Pull down to refresh the articles list.
- Show a detailed view of each article.
- Show popup error on api failure with a try again button.
```

## Install

1. Open Terminal
2. Clone this repository
3. Go to the project folder
4. Rename the `.env.example` file to `.env` and update env variables
5. Install dependencies

```
git clone https://github.com/joseph-kh/nytimes-articles.git
cd nytimes-articles
cp .env.example .env
npm install
```

## Run it locally

```
npm start
```

Install the [Expo](https://expo.io) client app on your iOS or Android phone and connect to the same wireless network as your computer. Use the Expo app to scan the QR code from your terminal to open the project.

## Run it live from expo

Use the Expo app to scan the QR code from [Expo](https://expo.dev/@joseph.kh/nytimes-articles?serviceType=classic&distribution=expo-go) to open the project.

## Run Test

```
npm test
```

## Folder Structure

```
📦nytimes-articles
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📜+html.tsx
 ┃ ┃ ┣ 📜article.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜_layout.tsx
 ┃ ┣ 📂assets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂article
 ┃ ┃ ┃ ┣ 📜ArticleListItem.tsx
 ┃ ┃ ┃ ┣ 📜Author.tsx
 ┃ ┃ ┃ ┣ 📜PublishedDate.tsx
 ┃ ┃ ┃ ┗ 📜Title.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜HeaderLeft.tsx
 ┃ ┃ ┃ ┣ 📜HeaderRight.tsx
 ┃ ┃ ┃ ┗ 📜HeaderTitle.tsx
 ┃ ┃ ┣ 📂modals
 ┃ ┃ ┃ ┗ 📜ErrorModal.tsx
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📂containers
 ┃ ┃ ┃ ┃ ┣ 📜Center.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MainContainer.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Row.tsx
 ┃ ┃ ┃ ┣ 📂texts
 ┃ ┃ ┃ ┃ ┣ 📜BoldText.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ItalicText.tsx
 ┃ ┃ ┃ ┃ ┣ 📜RegularText.tsx
 ┃ ┃ ┃ ┃ ┗ 📜SemiBoldText.tsx
 ┃ ┃ ┃ ┣ 📜Divider.tsx
 ┃ ┃ ┃ ┗ 📜Loader.tsx
 ┃ ┣ 📂contexts
 ┃ ┃ ┣ 📜LoaderContext.tsx
 ┃ ┃ ┗ 📜MainProvider.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useModal.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜api.ts
 ┃ ┣ 📂theme
 ┃ ┃ ┗ 📜colors.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜scaler.ts
 ┃ ┣ 📂__tests__
 ┣ 📜typings.d.ts
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜app.json
 ┣ 📜babel.config.js
 ┣ 📜expo-env.d.ts
 ┣ 📜metro.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```
