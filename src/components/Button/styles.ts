import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  margin-top: 8px;
  border-radius: 10px;
  background: #ff9000;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
