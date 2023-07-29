import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';

type Props = {
    id: string,
    url: string,
    download_url: string,
    author: string,
}

type CardProps = {
    bgUrl: string,
    isGrayscale: boolean,
}

const Card = styled.div<CardProps>`
    width: auto;
    height: 250px;
    position: relative;
    background-color: lightgray;
    background-image: url(${({ bgUrl }: any) => bgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    ${(props) => props.isGrayscale ? 'filter: grayscale(100%)' : ''}
`;

const CardInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: white;
  
    h4 {
      margin: 0;
    }
    
    a {
        color: white;
        font-size: 0.75rem;
    }
`;

const PhotoCard = ({ id, url, author, download_url }: Props) => {
    const { isPhotosLoading, isPhotosGrayscale } = useSelector(({ photos }) => photos);

    if (isPhotosLoading) {
        return (
            <Skeleton variant="rectangular" height={250}></Skeleton>
        );
    }

    return (
        <Card key={id} isGrayscale={isPhotosGrayscale} bgUrl={download_url}>
            <CardInfo>
                <h4>{author}</h4>
                <a href={url} target="_blank">{url}</a>
            </CardInfo>
        </Card>
    );
}

export default PhotoCard;
