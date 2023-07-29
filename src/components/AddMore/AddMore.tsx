import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

type AddMoreProps = {
	title: string,
	handleAddMore: () => void,
}

const AddMoreBox = styled.div`
	margin-top: 1rem;
`

const AddMore = ({ title, handleAddMore }: AddMoreProps) => {
	return (
		<AddMoreBox>
			<Button fullWidth variant="contained" color="secondary" onClick={handleAddMore}>{title}</Button>
		</AddMoreBox>
	);
}

export default AddMore;
