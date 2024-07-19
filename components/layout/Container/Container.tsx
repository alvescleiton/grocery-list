import { SafeAreaView, View } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="flex flex-1 bg-gray-75">
      <View className="flex flex-1 p-4">{children}</View>
    </SafeAreaView>
  );
};
