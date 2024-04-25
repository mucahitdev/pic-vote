import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'tamagui';

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>ProfileIn</Text>
        <Link href="/(profileStack)/language" asChild>
          <Button>Language</Button>
        </Link>
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
