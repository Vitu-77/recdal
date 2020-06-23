import { HTMLAttributes } from 'react';

type Transition = {
	/** Determines how modal animation will be displayed */
	type?: 'fade' | 'slide';
	/** Determines the duration of modal animation */
	duration?: number;
	/** Determines the direction of animation when the type is setted to "slide" */
	direction?: 'bottom-top' | 'top-bottom' | 'right-left' | 'left-right';
	/** Determines the timing function of modal appears */
	timingFunction?: string;
};

type Modal = JSX.IntrinsicElements['div'];
type Overlay = JSX.IntrinsicElements['div'];

export interface StyledOverlayProps extends HTMLAttributes<HTMLDivElement> {
	top: number;
	show: boolean;
	background?: string;
	transitionDuration: number;
	[otherKeys: string]: any;
}

export interface StyledModalProps extends HTMLAttributes<HTMLDivElement> {
	show: boolean;
	transition?: Transition;
	styles?: {
		boxShadow?: string;
		background?: string;
	};
	[otherKeys: string]: any;
}

export interface Props {
	onOpen?(): void;
	onClose?(): void;
	closeOnOverlayClick?: boolean;
	defaultVisible?: boolean;
	initialData?: any;
	hideOnScroll?: boolean;
	transition?: Transition;
	modal?: Modal;
	overlay?: Overlay;
	children?: any;
}

export interface ModalHandlers {
	getData(key?: string): any;
	open(data?: any): void;
	close(): void;
	lock(): void;
	unlock(): void;
}
