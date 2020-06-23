import OutsideClickHandler from 'react-outside-click-handler';
import React, { useState, useCallback, useImperativeHandle } from 'react';

import { Props, ModalHandlers } from './types';

import { Overlay, Modal } from './styles';

const Recdal: React.RefForwardingComponent<ModalHandlers, Props> = (
	{ initialData = {}, defaultVisible = false, closeOnOverlayClick = true, ...rest },
	ref
) => {
	const [modalData, setModalData] = useState<any>(initialData);
	const [lockModal, setLockModal] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(defaultVisible);
	const [isMounted, setIsMounted] = useState<boolean>(defaultVisible);
	const [modalPosition, setModalPosition] = useState<number>(0);

	const getData = useCallback(
		(key: string) => {
			if (key) {
				return modalData[key];
			}

			return modalData;
		},
		[modalData]
	);

	const open = async (data: any) => {
		if (data) {
			setModalData(data);
		}

		if (rest.onOpen) {
			await rest?.onOpen();
		}

		return setShowModal(true);
	};

	const close = async () => {
		if (rest.onClose) {
			await rest?.onClose();
		}

		return setShowModal(false);
	};

	useImperativeHandle(ref, () => ({
		getData,
		open,
		close,
		lock,
		unlock,
	}));

	const lock = useCallback(() => setLockModal(true), []);
	const unlock = useCallback(() => setLockModal(false), []);

	return (
		<Overlay>
			<Modal>{children}</Modal>
		</Overlay>
	);
};

export default Recdal;
