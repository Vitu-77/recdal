import * as React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Overlay, Modal } from './styles';

interface Props {
	children: any;
}

const Recdal: React.FC<Props> = ({ children }) => {
	return (
		<Overlay>
			<Modal>{children}</Modal>
		</Overlay>
	);
};

export default Recdal;
