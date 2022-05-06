import React from 'react';
import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import { about } from 'constants/about';
import { colors } from 'constants/colors';

const AVATAR_SIZE = { base: 130, lg: 180 };

const Header = () => {
	return (
		<>
			<Image
				h={{ base: 200, lg: 300 }}
				objectFit={'cover'}
				alt='banner'
				src={about.banner_image}
				w='full'
			/>
			<Center>
				<Box
					p={2}
					mt={-20}
					w={AVATAR_SIZE}
					h={AVATAR_SIZE}
					bg='white'
					rounded='full'
				>
					<Image src={about.avatar_url} alt='avatar' rounded='full' />
				</Box>
			</Center>

			<Box textAlign={'center'} mt={4}>
				<Heading
					bgClip='text'
					bgGradient={`linear(to-l, ${colors.primary}, ${colors.secondary})`}
				>
					{about.full_name}
				</Heading>
				<Text fontFamily={'monospace'} fontSize={'xl'} color={colors.primary}>
					@{about.username}
				</Text>
			</Box>

			<Box mt={4}>
				<Box
					maxW='lg'
					m='auto'
					p={4}
					rounded='xl'
					bg='gray.200'
					color='gray.600'
				>
					{about.bio}
				</Box>
			</Box>
		</>
	);
};

export default Header;
