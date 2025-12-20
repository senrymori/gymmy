import { View, Text, StyleSheet } from 'react-native';
import { useLanguage } from '@providers/language/LanguageProvider';

export const ProgressScreen = () => {
  const { translations } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.screens.progress.title}</Text>
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

