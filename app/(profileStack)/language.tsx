import { StyleSheet, View, Text } from 'react-native';

import LangList from '@/com/langList';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Lang</Text>
        <LangList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
