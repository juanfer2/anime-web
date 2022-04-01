import React from 'react';
import { GenresI } from '@/models/anime';
import SubTitle from '@/components/SubTitle';
import Button from '@/components/Button';
import { CategoriesStyled } from './Categories.styles';

export interface CategoriesI {
  subtitle: string;
  categories: GenresI[];
}

function Categories({ subtitle, categories }: CategoriesI) {
  console.log(categories);

  return (
    <CategoriesStyled>
      <SubTitle subtitle={subtitle} />
      <div className="categories_container">
        {categories &&
          categories.map((category: GenresI) => (
            <Button key={category.id} type="primary" outline={false} size="big">
              {category.name}
            </Button>
          ))}
      </div>
    </CategoriesStyled>
  );
}

export default Categories;
