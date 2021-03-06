import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <article className='vh-100 dt w-100 avenir'>
      <div className='dtc v-mid tc gray ph3 ph4-l'>
        <TextWrapper>
          <h1 className='f2-m f1-l fw5 tc'>Quick GIF</h1>
          <h2 className='f3-m f2-l fw2 tc'>
            A fast and simple MP4 to GIF creation tool
          </h2>
        </TextWrapper>
        <Link to='/create'>
          <Button color={'teal'} size='huge'>
            Create a GIF
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default HomePage;

const TextWrapper = styled.div`
  margin-bottom: 2rem;
`;
