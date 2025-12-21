import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLanguage } from '@providers/language/LanguageProvider';

export const CalendarScreen = () => {
  const { translations, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setLanguage('kk');
        }}>
        <Text style={styles.title}>{translations.screens.calendar.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
