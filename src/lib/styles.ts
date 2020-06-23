import styled, { css } from 'styled-components';

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

export const Modal = styled.div<ModalProps>`
	transition-timing-function: ${({ transition }) => transition?.timingFunction || 'linear'};
	margin: 0;
	padding: 0;
	width: max-content;
	height: max-content;
	z-index: 3;
	transition-duration: ${({ transition }) => transition?.duration || 300}ms;
	transition-delay: ${({ transition }) => (transition?.duration || 300) - 100}ms;
	background: transparent;

	${({ show, transition }) => {
		if (show) {
			return css`
				transform: scale(1) translate(0, 0);
			`;
		}
		switch (transition?.type) {
			case 'fade':
				return css`
					transform: scale(0);
				`;
			case 'slide':
				switch (transition?.direction) {
					case 'bottom-top':
						return css`
							transform: translate(0, calc(100vh + 200%));
						`;
					case 'top-bottom':
						return css`
							transform: translate(0, calc(-100vh - 200%));
						`;
					case 'right-left':
						return css`
							transform: translate(calc(100vw + 200%), 0);
						`;
					case 'left-right':
						return css`
							transform: translate(calc(-100vw - 200%), 0);
						`;
					default:
						return null;
				}
			default:
				return null;
		}
	}};
`;
