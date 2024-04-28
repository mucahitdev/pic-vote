import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useUserStore } from '@/store/userSlice';
import { resources } from '@/translation';

const Separator = () => <View style={{ height: 1, backgroundColor: '#535C91' }} />;

const ListItem: FC<{
  title: string;
  sf?: any;
  sl?: any;
  toggleLanguage: any;
  isActive: boolean;
}> = ({ title, sf, sl, toggleLanguage, isActive }) => {
  return (
    <TouchableOpacity style={[styles.listItem, sf, sl]} onPress={() => toggleLanguage(title)}>
      <Text style={styles.title}>{title}</Text>
      {isActive && <Feather name="check-circle" size={24} color="#F6B17A" />}
    </TouchableOpacity>
  );
};

export default function LangList() {
  const { i18n } = useTranslation();
  const setLanguage = useUserStore((state) => state.setLanguage);

  const lang = Object.keys(resources);
  const active = i18n.language;

  const toggleLanguage = (locale: string) => {
    if (active === locale) return;
    i18n.changeLanguage(locale);
    setLanguage(locale);
    router.replace('/(profileStack)/language');
  };

  return (
    <View style={styles.container}>
      {lang.map((item, index) => {
        const sf = index === 0 && styles.firsItem;
        const sl = index === lang.length - 1 && styles.lastItem;
        return (
          <View key={item}>
            <ListItem
              isActive={active === item}
              toggleLanguage={toggleLanguage}
              title={item}
              sf={sf}
              sl={sl}
            />
            {index < lang.length - 1 && <Separator />}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#535C91',
    borderRadius: 16,
  },
  listItem: {
    height: 50,
    backgroundColor: '#9290C3',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    color: '#EEEEEE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  firsItem: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  lastItem: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});
