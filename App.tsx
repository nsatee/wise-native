import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/theme';
import Button from './src/ui/Button';
import Text from './src/ui/Text';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Screen contentInsetAdjustmentBehavior="automatic">
          <Text.h1 color="error">Hello</Text.h1>
          <Text.h2 color="primary">Hello</Text.h2>
          <Text.h3 color="success">Hello</Text.h3>
          <Text.h4 color="error">Hello</Text.h4>
          <Text.display>Hello</Text.display>
          <Text.body>Hello</Text.body>
          <Text.label>Hello</Text.label>
          <Text.small>Hello</Text.small>
          <Button
            onPress={(): void => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Text.h4 color="background">{theme}</Text.h4>
          </Button>
          <Button variant="error" bordered>
            <Text.h4 color="error">Button</Text.h4>
          </Button>
        </Screen>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const Screen = styled.ScrollView`
  background-color: #eeeeee;
  height: 100%;
  padding: 8px;
`;

export default App;
