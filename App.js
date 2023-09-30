import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPreco = () => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);

    if (!isNaN(alcool) && !isNaN(gasolina)) {
      if ((alcool/gasolina) > 0.7)
        setResultado('Gasolina compensa')
      else
        setResultado('Alcool compensa')
    } else {
      setResultado('Certifique-se de inserir números válidos.');
    }
  };

  let img = 'https://play-lh.googleusercontent.com/uppnNukrvQ7ttY2yK0Jp1jretVddquUYEGjwVl8cNCGNL7J9P4OqSh-AqljkVJJjQVFL';

  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.titulo}>ÁLCOOL OU GASOLINA</Text>
      </View>
      <View>
        <Image
        source = {{ uri: img }}
        style = {styles.imagem}
        />
      </View>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={(text) => setPrecoAlcool(text)}
        keyboardType="numeric"
        value={precoAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={(text) => setPrecoGasolina(text)}
        keyboardType="numeric"
        value={precoGasolina}
      />
      </View>
      <View>
        <TouchableOpacity style={styles.verificar} onPress={verificarPreco}>
          <Text>VERIFICAR</Text>
        </TouchableOpacity>
      </View>
      <View>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </View>
    </View>
  );
}
