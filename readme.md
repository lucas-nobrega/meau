# Criar projeto
npx create-expo-app miau

## Instalar ngrok para iniciar projeto com "`--tunnel`"
npm install --global @expo/ngrok@^4.1.0

## Instalar react navigation
npm install @react-navigation/stack
npm install @react-navigation/drawer

npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install @react-native-masked-view/masked-view
npx expo install react-native-reanimated
npm install --save @react-navigation/native-stack

## Instalar React Native Elements
npm install @rneui/base @rneui/themed

### Para teste na web
npm install @babel/plugin-proposal-export-namespace-from
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1

## Configurações do firebase
npx expo install firebase
npx expo install @react-native-firebase/app
npm install --save react-firebase-hooks

Seguir documentação do expo: https://docs.expo.dev/guides/using-firebase/

# Iniciar projeto
npx expo start --tunnel

# Iniciar limpando o cache
npx expo start -c


# Documentação react-native-reanimated
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/