import { CalendarScreen } from '@screens/calendar/CalendarScreen.tsx';
import { WorkoutsScreen } from '@screens/workouts/WorkoutsScreen.tsx';
import { StartScreen } from '@screens/start/StartScreen.tsx';
import { ProgressScreen } from '@screens/progress/ProgressScreen.tsx';
import { ProfileScreen } from '@screens/profile/ProfileScreen.tsx';
import { useAppThemeColors } from '@providers/theme/AppThemeColorsProvider.tsx';

import { BottomTab } from './Tab';

export const AppTabNavigator = () => {
  const colors = useAppThemeColors();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue500,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}>
      <BottomTab.Screen
        name={'Calendar'}
        component={CalendarScreen}
      />
      <BottomTab.Screen
        name={'Workouts'}
        component={WorkoutsScreen}
      />
      <BottomTab.Screen
        name={'Start'}
        component={StartScreen}
      />
      <BottomTab.Screen
        name={'Progress'}
        component={ProgressScreen}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
};
