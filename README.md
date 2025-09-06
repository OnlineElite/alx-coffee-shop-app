# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

--------------------------------------- Styling with Nativewind ---------------------------------------

# Install Nativewind with Expo

## 1. Install Nativewind
You will need to install nativewind and its peer dependencies tailwindcss, react-native-reanimated and react-native-safe-area-context.

npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11

## 2. Setup Tailwind CSS
- Run " npx tailwindcss init " to create a tailwind.config.js file (tailwind.config.js)

- Add the paths to all of your component files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}',
    './app/(home)/**/*.{js,jsx,ts,tsx}'
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};

- Create a global.css file inside styles directory and add the Tailwind directives. (global.css)

@tailwind base;
@tailwind components;
@tailwind utilities;

## 3. Add the Babel preset
- Create babel.config.js file (babel.config.js)

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel",
    ],
  };
};

## 4. Create or modify your metro.config.js
Create a metro.config.js file in the root of your project if you don't already have one, then add the following configuration: (metro.config.js)

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './styles/global.css' })

## 5. Import your CSS file

- Import global.css file in your main app file (usually App.js or _layout.tsx):
- Make sure to import global.css at the top of your file (usually App.js or _layout.tsx)

import "@/styles/global.css"

## 6. Modify your app.json
Switch the bundler to use the Metro bundler
Make sure you have this structure in your app.json

{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}

## 7. Test Tilwindcss in the project

- In the app/index file, add TailwindCSS classes and make sure the styles work correctly
- Start your expo app using the following command: npx expo start
- Verify on your Expo Go app.
