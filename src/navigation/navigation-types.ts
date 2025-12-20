import { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  Calendar: undefined;
  Workouts: undefined;
  Start: undefined;
  Progress: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<RootTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

