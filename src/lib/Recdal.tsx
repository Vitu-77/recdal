import OutsideClickHandler from 'react-outside-click-handler';
import React from 'react';

import { Props, ModalHandlers } from './types';

import { Overlay, Modal } from './styles';

const Recdal: React.RefForwardingComponent<ModalHandlers, Props> = (
	{ initialData = {}, defaultVisible = false, closeOnOverlayClick = true, ...rest },
	ref
) => {
	return (
		<Overlay>
			<Modal>{children}</Modal>
		</Overlay>
	);
};

export default Recdal;
