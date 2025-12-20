import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '@navigation/TabNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

