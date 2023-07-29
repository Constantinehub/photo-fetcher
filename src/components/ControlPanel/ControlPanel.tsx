import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Switch, FormControlLabel } from '@mui/material';
import { togglePhotosGrayscale } from '../../redux/actions/PhotosActions';
import styled from 'styled-components';

type ControlPanelProps = {
	handleFetchNewPhotos: () => void,
}

const ControlPanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`;

const ControlPanel = ({ handleFetchNewPhotos }: ControlPanelProps) => {
	const dispatch = useDispatch();
	const { isPhotosGrayscale } = useSelector(({ photos }) => photos)

	const handleGrayscaleChange = () => {
		dispatch(togglePhotosGrayscale(!isPhotosGrayscale))
	}

	return (
		<ControlPanelContainer>
			<FormControlLabel
				control={
					<Switch checked={isPhotosGrayscale} />
				}
				onChange={handleGrayscaleChange}
				label={'Make photos grayscale'}
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={handleFetchNewPhotos}
			>
				Fetch New Photos
			</Button>
		</ControlPanelContainer>
	);
}

export default ControlPanel;
