import { View, Text, StyleSheet } from 'react-native';

export const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Старт</Text>
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

