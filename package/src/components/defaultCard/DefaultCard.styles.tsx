import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled((props: any) => <Link {...props} />)`
	text-decoration: none;
	color: #000000;
`

export const ImageLinkContainer = styled((props: any) => <Link {...props} />)`
	margin-bottom: 10px;
	display: flex;
	text-decoration: none;
	background: #1E1E1E;
	height: 250px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-size: 280px;
	background-repeat: no-repeat;
	background-position: center;
	color: #ffffff;
	text-transform: uppercase;

	img { 
		width: 100%;
		height: auto;
	}
	
	b {
		font-size: 32px;
	}
`;
