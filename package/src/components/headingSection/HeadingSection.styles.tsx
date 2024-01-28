import styled from 'styled-components';

export const Container = styled.div`
	background: rgb(2,151,255);
	background: linear-gradient(180deg, rgb(53,53,53, 1) 0%, rgba(65,65,65,1) 100%);
	padding: 30px 10px;
	box-shadow: 0 10px 5px 0 rgba(0,0,0,0.5);
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
	color: #ffffff;
	text-transform: capitalize;

	h2 {
		margin: 0;
		font-size: 32px;
	}
`;
