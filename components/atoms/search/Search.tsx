import { TextInput, View } from 'react-native';

export const Search = () => {
  return (
    <View className="h-14 w-full rounded-md bg-white px-3">
      <TextInput className="flex-1" placeholder="Buscar..." placeholderTextColor="#999" />
    </View>
  );
};
