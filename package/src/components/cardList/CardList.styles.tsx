import styled from 'styled-components';

export const Container = styled.ul`
	margin-top: 50px;
	list-style: none;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 10px;

	@media only screen and (min-width: 768px) {	
		grid-template-columns: repeat(4, 1fr);
	}

	@media only screen and (min-width: 1024px) {	
		grid-template-columns: repeat(7, 1fr);
	}
`;
