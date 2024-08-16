import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      textoFrase: '',
      biscoitoFrase: 'Abrir biscoito',
      img: require('./src/biscoito.png')
    }
    this.abrirBiscoito = this.abrirBiscoito.bind(this)

    this.frases = [
      '"Só se vê bem com o coração, o essencial é invisível aos olhos"',
      '"Tu te tornas eternamente responsável por aquilo que cativas."',
      '"lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós."',
      '"Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo"',
      '"O Senhor é o meu pastor, nada me faltará."',
      '"Tudo posso naquele que me fortalece."',
      '"A soberba precede a ruína, e a altivez do espírito precede a queda."',
      '"Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim."'
    ]
  }

  abrirBiscoito() {
    let randomNumber = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[randomNumber],
      biscoitoFrase: 'Abrir mais um biscoito',
      img: require('./src/biscoitoAberto.png')
    })


  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={this.abrirBiscoito}>

          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{this.state.biscoitoFrase}</Text>
          </View>

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAAA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 24,
    color: '#dd7b22',
    margin: 32,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 240,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    backgroundColor: 'white'
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

});
