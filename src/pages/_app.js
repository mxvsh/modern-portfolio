import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import { about } from 'constants/about';

function ModernPortfolio({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Head>
				<title>{about.full_name}</title>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default ModernPortfolio;
