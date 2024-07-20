import ContentLoader, { Rect } from 'react-content-loader/native';

import Colors from '~/constants/Colors';

type ProductItemSkeletonProps = {
  qtd?: number;
};

export const ProductItemSkeleton = ({ qtd = 1 }: ProductItemSkeletonProps) => {
  return (
    <>
      {Array(qtd)
        .fill(1)
        .map((_, index) => (
          <ContentLoader
            key={`prodkel-${index}`}
            height={50}
            backgroundColor={Colors.grayLight}
            foregroundColor="white"
            style={{ marginTop: 20, marginBottom: 0 }}>
            <Rect x={0} y={0} rx={4} ry={4} width="100%" height={50} />
          </ContentLoader>
        ))}
    </>
  );
};
