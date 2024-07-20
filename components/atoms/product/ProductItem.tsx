import React from 'react';
import { Text, View } from 'react-native';

type ProductItemProps = {
  title: string;
  children?: React.ReactNode;
};

export const ProdutItem = ({ title, children }: ProductItemProps) => {
  return (
    <View className="flex-row border-b border-gray-200 px-2 py-4">
      <Text className="flex-1 text-lg text-gray-700">{title}</Text>

      {children}
    </View>
  );
};
