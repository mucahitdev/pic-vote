import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Lang</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
