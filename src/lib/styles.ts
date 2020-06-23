import styled from 'styled-components';

import { OverlayProps, ModalProps } from './types';

export const Overlay = styled.div<OverlayProps>`
	position: absolute;
	left: 0vw;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	opacity: 0;
	transition: ${({ transitionDuration }) => transitionDuration}ms;
	top: ${({ top }) => top}px;
	background: ${({ background }) => background || 'rgba(50, 50, 50, 0.3)'};

	${({ show }) =>
		show &&
		css`
			opacity: 1;
		`};
`;

export const Modal = styled.div<ModalProps>``;
