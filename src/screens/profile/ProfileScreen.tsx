import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '@providers/language/LanguageProvider';
import { ThemeToggle } from '@components/ThemeToggle.tsx';
import { ButtonText } from '@ui-kits/Button/ButtonText.tsx';
import { ButtonIcon } from '@ui-kits/Button/ButtonIcon.tsx';
import { IconEnum } from '@ui-kits/Typography/typography-consts.ts';

export const ProfileScreen = () => {
  const { translations } = useLanguage();

  return (
    <View style={styles.container}>
      <ThemeToggle />
      <View style={{ flexDirection: 'row' }}>
        <ButtonText text={'Test'} />
        <ButtonText
          text={'Active'}
          state={'loading'}
        />
        <ButtonText
          text={'Disabled'}
          state={'disabled'}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ButtonText
          colorVariant={'contrast'}
          text={'Test'}
        />
        <ButtonText
          colorVariant={'contrast'}
          text={'Active'}
          state={'loading'}
        />
        <ButtonText
          colorVariant={'contrast'}
          text={'Disabled'}
          state={'disabled'}
        />
      </View>
      <View>
        <ButtonIcon icon={IconEnum.BasketballFill} />
      </View>

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
