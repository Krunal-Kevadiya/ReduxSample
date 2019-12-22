import React from 'react';
import { YellowBox } from 'react-native';
import { light as lightTheme, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppRoute, AppNavigator } from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { default as appTheme } from './assets/custom-theme.json';
import Store from './statemanagment/Store';
import { Provider } from 'react-redux';
const theme = { ...lightTheme, ...appTheme };

export default (): React.ReactFragment => {

  // This value is used to determine the initial screen
  const isAuthorized: boolean = true;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        mapping={mapping}
        theme={theme}>
        <Provider store={Store}>
          <SafeAreaProvider>
            <NavigationNativeContainer>
              <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME_REDUX : AppRoute.AUTH}/>
            </NavigationNativeContainer>
          </SafeAreaProvider>
        </Provider>
      </ApplicationProvider>
    </React.Fragment>
  );
};

// For some reason, starting from 0.61, react-native-gesture-handler throws this warning
// https://github.com/facebook/react-native/issues/26226
YellowBox.ignoreWarnings([
  'RCTRootView cancelTouches'
]);