import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1
  justifyContent: 'center'
  alignItems: 'center'
`;

const Feed = () => {
	return (
		<StyledView>
			<Text>Feed Screen</Text>
		</StyledView>
	);
};

export default Feed;
