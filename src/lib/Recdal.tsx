import OutsideClickHandler from 'react-outside-click-handler';
import { Modal, Overlay } from './styles';
import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
	useCallback,
	PropsWithChildren,
} from 'react';

import { Props, ModalHandlers } from './types';

const Recdal: React.RefForwardingComponent<ModalHandlers, PropsWithChildren<Props>> = (
	{ initialData = {}, defaultVisible = false, closeOnOverlayClick = true, ...rest },
	ref
) => {
	const [modalData, setModalData] = useState<any>(initialData);
	const [lockModal, setLockModal] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(defaultVisible);
	const [isMounted, setIsMounted] = useState<boolean>(defaultVisible);
	const [modalPosition, setModalPosition] = useState<number>(0);

	const getData = useCallback(
		(key?: string) => {
			if (key) {
				return modalData[key];
			}

			return modalData;
		},
		[modalData]
	);

	const open = async (data: any) => {
		if (rest.onOpen) {
			await rest.onOpen();
		}

		if (data) {
			setModalData(data);
		}

		return setShowModal(true);
	};

	const close = async () => {
		setIsMounted(false);

		if (lockModal) return;

		if (rest.onClose) {
			await rest.onClose();
		}

		setModalData({});

		setTimeout(() => {
			setShowModal(false);
		}, rest?.transition?.duration || 400);
	};

	const lock = useCallback(() => setLockModal(true), []);
	const unlock = useCallback(() => setLockModal(false), []);

	useImperativeHandle(ref, () => ({
		getData,
		open,
		close,
		lock,
		unlock,
	}));

	useEffect(() => {
		const body: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

		setModalPosition(window.screenY);
		setIsMounted(showModal);

		showModal ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
	}, [showModal]);

	if (!showModal) {
		return null;
	}

	return (
		<Overlay
			{...rest.overlay}
			show={isMounted}
			top={modalPosition}
			transitionDuration={(rest?.transition?.duration || 300) + 200}>
			<OutsideClickHandler
				onOutsideClick={() => {
					if (showModal && !lockModal && closeOnOverlayClick) {
						close();
					}
				}}>
				<Modal {...rest.modal} transition={rest?.transition} show={isMounted}>
					{rest.children}
				</Modal>
			</OutsideClickHandler>
		</Overlay>
	);
};

export default forwardRef(Recdal);
