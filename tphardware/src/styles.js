import { StyleSheet, StatusBar } from 'react-native';


export const All = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    fontSize: '12px',
    marginTop: 170,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 30
  },
  button: {
    backgroundColor: '#7b35b8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactosContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    fontSize: '12px',
    marginLeft: '10%'
  },
  miniContactosContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    fontSize: '12px',
    marginLeft: '15%'
  },
  textoLlamado:{
    color: 'purple',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 200,
    marginRight: 50
  },
  QRCentro: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  TemperaturaTexto: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 70
  },
  Barrio: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 160
  },
  Fecha: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 9
  },
  input: {
    marginLeft: '22%',
    marginTop: 30,
    fontSize: 20
  },
  mansajeLlamado: {
    textAlign: 'center',
    marginLeft: '19%',

    marginTop: 20,
    fontSize: 10,
    width: '50%'
  },
  borde: {
    marginRight: 50
  }
});