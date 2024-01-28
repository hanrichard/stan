import styled from 'styled-components';

export const Container = styled.nav`
	background-color: #1E1E1E;
	padding: 20px 10px;
`;

export const ContainerInner = styled.div`
	max-width: 1280px;
	width: 100%;
	margin: 0 auto;
`;

export const FooterLinks = styled.ul`
	margin: 20px 0;
	list-style: none;
	padding: 0;
	color: #ABA896;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 40px;

	@media only screen and (min-width: 768px) {	
		flex-wrap: no-wrap;
		margin-bottom: 0;
	}
`;

export const FooterLink = styled.li`
	color: #ABA896;
	width: 100%;
	margin-bottom: 10px;
	text-align: center;

	@media only screen and (min-width: 768px) {
		text-align: left;
		width: 50%;
	}

	@media only screen and (min-width: 1024px) {
		margin-bottom: 10px;
		border-right: solid #ABA896 1px;
		width: auto;
		margin-right: 20px;
		padding-right: 20px;
	}

	&:last-child {
		border: none
	}

	a {
		color: #ABA896;
		text-decoration: none;
	}
`;

export const FooterCopyRight = styled.div`
	color: #9493A0;
	margin: 20px 0;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
	
	@media only screen and (min-width: 768px) {
		justify-content: start;
		margin-bottom: 0;
	}
`;

export const FooterSocialMedias = styled.ul`
	list-style: none;
	padding-left: 0;
	color: #ABA896;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;

	@media only screen and (min-width: 768px) {
		justify-content: start;
		margin-bottom: 0;
	}
`;

export const FooterSocialMedia = styled.li`
	color: #ABA896;
	margin-right: 20px;
	width: 40px;
	height: 40px;

	a {
		color: #ABA896;
		text-decoration: none;
		overflow: hidden;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
		display: block;
		text-indent: -9999px; 
	}
`;

export const FooterApps = styled.ul`
	list-style: none;
	padding-left: 0;
	color: #ABA896;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (min-width: 768px) {
		justify-content: start;
		flex-direction: row;
	}
`;

export const FooterApp = styled.li`
	color: #ABA896;
	width: 200px;
	height: 50px;
	margin-bottom: 20px;

	@media only screen and (min-width: 768px) {
		margin-bottom: 0;
	}

	&:last-child {
		width: 130px;

		@media only screen and (min-width: 768px) {
			margin-left: 15px;
		}
	}

	a {
		color: #ABA896;
		text-decoration: none;
		overflow: hidden;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 100%;
		display: block;
		text-indent: -9999px; 
	}
`;

export const FooterBottom = styled.div`
	margin: 20px 0;

	@media only screen and (min-width: 768px) {
		align-items: center;
		justify-content: space-between;
		display: flex;
	}
`;
