import { Link, Stack } from 'expo-router';
import { Main, YStack } from 'tamagui';
import { Container, Subtitle, Title } from 'tamagui.config';

export default function NotFoundScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Main>
        <YStack>
          <Title>This screen doesn't exist.</Title>
          <Link href="/">
            <Subtitle>Go to home screen!</Subtitle>
          </Link>
        </YStack>
      </Main>
    </Container>
  );
}
