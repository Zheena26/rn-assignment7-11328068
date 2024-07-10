# rn-assignment7-11328068

# MyFashionStore App

* Overview
This e-commerce app allows users to browse products, view product details, add items to their cart, and remove items from their cart. The app uses React Native for the front-end and AsyncStorage for data persistence.

# Features
* Browse a list of products fetched from an external API.
* View detailed information about a selected product.
* Add products to the cart.
* Remove products from the cart.
* Data persistence using AsyncStorage to maintain the cart state across app sessions.

# Design Choices
* React Native
React Native was chosen for its ability to create a performant and responsive mobile app for both iOS and Android platforms using a single codebase. It provides a rich set of components and a robust ecosystem, making it an ideal choice for mobile app development.

# UI Components
* FlatList: Used for efficiently rendering the list of products and cart items.
* TouchableOpacity: Used for interactive elements like buttons to enhance the user experience.
* Image: Used to display product images.

# State Management

* useState: Used to manage the state of products and cart items within the functional components.
* useEffect: Used to handle side effects such as fetching data from the API and loading cart items from AsyncStorage.

# Navigation

* React Navigation: Utilized for handling navigation between screens, providing a seamless user experience as users move between the home screen, product detail screen, and cart screen.

# Data Storage
AsyncStorage
AsyncStorage is used for persisting cart data locally on the device. This ensures that the cart state is maintained even after the app is closed and reopened.

* Add to Cart: When a user adds a product to the cart, the product is saved in AsyncStorage.
* Remove from Cart: When a user removes a product from the cart, the product is removed from AsyncStorage.
* Fetch Cart Items: On app launch, the cart items are fetched from AsyncStorage to restore the cart state.

# Screenshots




# How to Clone and Get Started

* Prerequisites
Node.js installed on your local machine.
React Native CLI installed globally.
Xcode (for iOS development) or Android Studio (for Android development).

# Installation
Clone the repository:

# bash
Copy code
git clone <https://github.com/Zheena26/rn-assignment7-11328068.git>

Navigate to the project directory:

bash
Copy code
cd MyFashionStore

Install the dependencies:

bash
Copy code
npm install 

bash
Copy code
npx react-native link


# Running the App

* iOS
Start the Metro bundler:

bash
Copy code
npx react-native start
Open another terminal window and run:

bash
Copy code
npx react-native run-ios

* Android
Start the Metro bundler:

bash
Copy code
npx react-native start
Open another terminal window and run:

bash
Copy code
npx react-native run-android

# Web
npm run web
