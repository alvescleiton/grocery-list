import { SafeAreaView, View } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1 bg-white',
  view: 'flex flex-1 p-4',
};
