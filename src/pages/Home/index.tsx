import React, { useState } from 'react';
// import Card from '@/components/Card';
import { AnimatePresence, motion } from 'framer-motion';
import TitleImage from '@/assets/images/black-clover-title.png';
import ImageAnime from '@/assets/images/black-clover.png';
import SectionListAnime from '@/organims/SectionListAnime';
import Categories from '@/organims/Categories';
import Banner from '@/components/Banner';
import { useHome } from './useHome';
import Loading from '@/components/Loading';
import { HomeStyled } from './Home.styles';
import Button from '@/components/Button';
// import ListCard from '@/organims/ListCard';

function Home() {
  const [show, setShow] = useState<boolean>(true);
  const { loadingGenres, error, list } = useHome();

  // if (loadingGenres) return <Loading visible />;
  if (error) return <>error</>;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <AnimatePresence initial={false}>
      {loadingGenres ? (
        <Loading visible={show} />
      ) : (
        <motion.div>
          <Button onClick={() => setShow(!show)}>Click</Button>
          <Loading visible={show} />

          <Banner titleImage={TitleImage} image={ImageAnime} />

          {list && <Categories subtitle="Categories" categories={list} />}
          <SectionListAnime />
          <SectionListAnime />
          <SectionListAnime />
          <SectionListAnime />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Home;
