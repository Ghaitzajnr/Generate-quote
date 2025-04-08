import { Text } from 'react-native';

const TextAtom = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default TextAtom;
