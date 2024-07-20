import { Text, View } from 'react-native';

export const NoItem = () => {
  return (
    <View className="flex h-[100%] items-center justify-center">
      <Text className="text-xl">Nenhum item por aqui</Text>
    </View>
  );
};
