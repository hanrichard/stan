import React from 'react';
import { DefaultCard, CardList, CardListItem, HeadingSection, Container } from '../components';
import { useCategory } from '../hooks/useCategory';

export const Home = () => {
  const { isFetching, error } = useCategory();

  const dispalyContent = () => {
    if (isFetching) return <p>Loading...</p>;
    if (error) return <p>Oops, something went wrong...</p>

    return <CardList>
      <CardListItem>
        <DefaultCard url='series' title="Series" />
      </CardListItem>
      <CardListItem>
        <DefaultCard url='movie' title="Movies" />
      </CardListItem>
    </CardList>
  };

  return <>
    <HeadingSection heading="Popular Titles" />
    <Container>
      {dispalyContent()}
    </Container>
  </>
};

export default Home;
