import { TextInput, View } from 'react-native';

type SearchProps = {
  disabled: boolean;
};

export const Search = ({ disabled = false }: SearchProps) => {
  const editable = !disabled;

  return (
    <View className={`h-14 w-full rounded-md bg-white px-3 ${disabled ? 'opacity-50' : ''}`}>
      <TextInput
        className="flex-1"
        placeholder="Buscar..."
        placeholderTextColor="#999"
        editable={editable}
      />
    </View>
  );
};
