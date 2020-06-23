import { HTMLAttributes } from 'react';

type Transition = {
	type?: 'fade' | 'slide';
	duration?: number;
	direction?: 'bottom-top' | 'top-bottom' | 'right-left' | 'left-right';
	timingFunction?: string;
};

type Modal = JSX.IntrinsicElements['div'];
type Overlay = JSX.IntrinsicElements['div'];

export interface StyledOverlayProps extends HTMLAttributes<HTMLDivElement> {
	top: number;
	show: boolean;
	transitionDuration: number;
	[otherKeys: string]: any;
}

export interface StyledModalProps extends HTMLAttributes<HTMLDivElement> {
	show: boolean;
	transition?: Transition;
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
