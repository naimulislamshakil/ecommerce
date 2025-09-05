import { useEffect } from 'react';

export const setTitle = (data) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		document.title = `${data} | USC Academy`;
	}, []);
};
