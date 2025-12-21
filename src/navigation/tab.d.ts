// Tab.d.ts
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '@navigation/navigation-types.ts';

export const BottomTab: ReturnType<typeof createBottomTabNavigator<RootTabParamList>>;
