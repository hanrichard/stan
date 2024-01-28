import React from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardList, CardListItem, HeadingSection, Container } from '../components';
import { DataProps, EntriesProps, useCategory } from '../hooks/useCategory';

const CATEGORY_TYPES: { [key: string]: string; } = {
  movie: 'Movies',
  series: 'Series'
};

export const filterResult = (array: DataProps | undefined | null, type?: string) => {
  return array?.entries?.filter((item) => {
    return item?.programType === type && item.releaseYear >= 2010
  }).slice(0, 21).sort((a, b) => a.title.localeCompare(b.title));
};

export const Category = () => {
  const { data, isFetching, error } = useCategory();
  const { cat } = useParams();
  const heading = cat && CATEGORY_TYPES[cat];
  const updatedData = filterResult(data, cat);

  const dispalyContent = () => {
    if (isFetching) return <p>Loading...</p>;
    if (error) return <p>Oops, something went wrong...</p>
    if (!heading) return <p>No Category</p>;

    return <CardList>
      {updatedData?.map((item: EntriesProps) => {
        return <CardListItem key={item.title}>
          <Card title={item.title} imageUrl={item.images['Poster Art'].url} />
        </CardListItem>
      })}
    </CardList>
  };

  return <>
    {heading && <HeadingSection heading={"Popular " + heading} />}
    <Container>
      {dispalyContent()}
    </Container>
  </>
};
