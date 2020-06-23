export type Transition = {
	type?: 'fade' | 'slide';
	duration?: number;
	direction?: 'bottom-top' | 'top-bottom' | 'right-left' | 'left-right';
	timingFunction?: string;
};

export interface Props {
	onOpen?(): void;
	onClose?(): void;
	closeOnOverlayClick?: boolean;
	defaultVisible?: boolean;
	initialData?: any;
	hideOnScroll?: boolean;
	transition?: Transition;
	modal?: {
		style?: StyleSheet;
	};
	overlay?: {
		className?: string;
		background?: string;
		style?: {};
	};
	children?: any;
}

export interface ModalHandlers {
	getData(key?: string): any;
	open(data?: any): void;
	close(): void;
	lock(): void;
	unlock(): void;
}