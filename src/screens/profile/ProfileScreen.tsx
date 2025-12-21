import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '@providers/language/LanguageProvider';
import { ThemeToggle } from '@components/ThemeToggle.tsx';

export const ProfileScreen = () => {
  const { translations } = useLanguage();

  return (
    <View style={styles.container}>
      <ThemeToggle />
      <TouchableOpacity>
        <Text style={styles.title}>{translations.screens.profile.title}</Text>
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
