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
![Screenshot (116)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/3ea3ebbd-e350-41fb-8843-7843ac8254d9)
![Screenshot (117)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/c5c2b3ec-728c-48fc-bbe9-3243f9fd642b)
![Screenshot (118)](https://github.com/Zheena26/rn-assignment7-11328068/a![Screenshot (119)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/3be008a2-fad9-427c-85c6-9ce000de0ad5)
ssets/169994345/1fe47fe2-aa0f-4db9-953c-c8309877e75c)
![Screenshot (120)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/730f54aa-4758-40ea-86e9-05173978ee59)
![Screenshot (121)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/03a2dd05-4145-4b51-bf79-629d820227ca)
![Screenshot (122)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/731818ef-4a4a-4412-9c51-40ac3f451d03)
![Screenshot (123)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/4a8b1132-30fd-4dff-8fdd-c0b0b3dce70d)
![Screenshot (124)](https://github.com/Zheena26/rn-assignment7-11328068/assets/169994345/7cd958b9-a23c-420f-9dcd-f5e9c93130a4)




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
