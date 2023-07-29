import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchNewPhotos, fetchRandomPhoto } from './redux/actions/PhotosActions';
import PhotoCard from './components/PhotoCard/PhotoCard';
import ControlPanel from './components/ControlPanel/ControlPanel';
import AddMore from './components/AddMore/AddMore';
import { photosLimit } from './constants';
import { PhotoSetType } from './redux/reducers/photosReducer';
import { generateRandomInt } from './utils/common';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 3rem 0;
`;

const Container = styled.div`
    width: 750px;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
`;

const Photos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
`

interface PhotosType extends PhotoSetType {
    id: string;
}

function App() {
    const dispatch = useDispatch();
    const { photoSet } = useSelector(({ photos }) => photos);

    const handleRequestData = () => {
        dispatch(fetchNewPhotos({
            limit: photosLimit,
            page: generateRandomInt(),
        }))
    }

    useEffect(() => {
        handleRequestData();

        // dispatch(fetchRandomPhoto(photosLimit));
    }, []);

    const renderCards = () => {
        return photoSet.map(({ id, url, download_url, author }: PhotosType, index: number) => (
            <PhotoCard
                key={index}
                id={id}
                url={url}
                download_url={download_url}
                author={author}
            />
        ))
    }

    const handleAddMore = () => {
        dispatch(fetchNewPhotos({
            limit: photosLimit,
            page: generateRandomInt(),
            actionType: 'update',
        }))
    }

    return (
        <div className="App">
            <Wrapper>
                <Container>
                    <>
                        <ControlPanel handleFetchNewPhotos={handleRequestData} />
                        <Photos>
                            {renderCards()}
                        </Photos>
                        <AddMore title="More Photos" handleAddMore={handleAddMore} />
                    </>
                </Container>
            </Wrapper>
        </div>
    );
}

export default App;
