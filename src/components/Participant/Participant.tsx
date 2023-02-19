import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  data: {
    name: string;
    index: number;
  };
  remove: (i: number) => void;
}

export const Participant = ({ data, remove }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => remove(data.index)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
