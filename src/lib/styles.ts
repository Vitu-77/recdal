import styled from 'styled-components';

interface OverlayProps {
	top: number;
	show: boolean;
	background?: string;
	transitionDuration: number;
}

interface ModalProps {
	show: boolean;
	styles?: {
		boxShadow?: string;
		background?: string;
	};
}

export const Overlay = styled.div<OverlayProps>`

`;

export const Modal = styled.div<ModalProps>`

`;