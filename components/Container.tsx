import { SafeAreaView, View } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-gray-75 flex flex-1">
      <View className="flex flex-1 p-4">{children}</View>
    </SafeAreaView>
  );
};
