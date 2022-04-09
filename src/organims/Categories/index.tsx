import React from 'react';
import { GenresI } from '@models/anime';
import SubTitle from '@components/SubTitle';
import Button from '@components/Button';
import { SwiperSlide } from 'swiper/react';
import { CategoriesStyled } from './Categories.styles';
import Carrousel from '@/components/Carrousel';

export interface CategoriesI {
  subtitle: string;
  categories: GenresI[];
}

function Categories({ subtitle, categories }: CategoriesI) {
  return (
    <CategoriesStyled>
      <SubTitle subtitle={subtitle} />
      <Carrousel>
        {categories &&
          categories.map((category: GenresI) => (
            <SwiperSlide key={category.id}>
              <Button key={category.id} type="primary" outline={false} size="big">
                {category.name}
              </Button>
            </SwiperSlide>
          ))}
      </Carrousel>
    </CategoriesStyled>
  );
}

export default Categories;
