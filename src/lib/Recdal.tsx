import OutsideClickHandler from 'react-outside-click-handler';
import React, { useState } from 'react';

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

	return (
		<Overlay>
			<Modal>{children}</Modal>
		</Overlay>
	);
};

export default Recdal;
