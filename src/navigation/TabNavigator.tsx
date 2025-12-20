import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalendarScreen } from '@screens/calendar/CalendarScreen';
import { WorkoutsScreen } from '@screens/workouts/WorkoutsScreen';
import { StartScreen } from '@screens/start/StartScreen';
import { ProgressScreen } from '@screens/progress/ProgressScreen';
import { ProfileScreen } from '@screens/profile/ProfileScreen';
import { RootTabParamList } from './navigation-types';
import { useLanguage } from '@providers/language/LanguageProvider';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  const { translations } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: translations.tabs.calendar,
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: translations.tabs.workouts,
        }}
      />
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          tabBarLabel: translations.tabs.start,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarLabel: translations.tabs.progress,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: translations.tabs.profile,
        }}
      />
    </Tab.Navigator>
  );
};

