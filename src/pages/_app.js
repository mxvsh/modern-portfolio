import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function ModernPortfolio({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default ModernPortfolio;
