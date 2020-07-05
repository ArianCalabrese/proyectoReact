import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import store from "../redux/store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import {
  agregar_evento_accion,
  retornar_evento_accion,
} from "../redux/actions/participanteAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  ejemplofuncion = () => {
    let asdasd = this.props.eventos.eventos;
    this.state.lista = asdasd;
    console.log("HOLA");
    console.log(asdasd);
    console.log(this.state.lista);
    console.log("HOLA");
  };
  render() {

    this.state.lista = [];

    this.ejemplofuncion();

    console.log("ESTADO LISTA");
    console.log(this.state.lista);
    console.log(this.props.eventos);
    console.log("ESTADO PROP REDUX");

    const nuevoArray = this.state.lista.map((item, key) => {
      console.log("REPITE?");
      console.log(item);
      console.log(key);
      let confirmados = item.participantes.filter(participante => participante.estado === true);
      return (
        <TouchableOpacity
          key={key}
          onPress={() => this.props.navigation.navigate("Evento", { key })}
        >
          <View key={key} style={styles.viewHolder}>
            <Text style={{color: "white"}} >{item.nombreEvento} ({confirmados.length}/{item.participantes.length} partic.)</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#34495E" }}>
        <Text
          style={{
            marginTop: 40,
            fontWeight: "bold",
            fontSize: 40,
            textAlign: "center",
            color: "white",
          }}
        >
          Eventos
        </Text>
        <ScrollView>
          <View style={styles.contenedorParticipantes}>{nuevoArray}</View>
        </ScrollView>
        <View>
          <Button
            title="Agregar Evento"
            color="#1B1B3A"
            onPress={() => this.props.navigation.navigate("AddEvento")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7D7D7",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    height: 80,
    width: "80%",
    marginLeft: 35,
  },
  viewHolder: {
    height: 55,
    backgroundColor: "#ff4081",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  headerText: {
    color: "white",
    fontSize: 25,
  },
  contenedorParticipantes: {
    flexDirection: "column",
    margin: 10,
    padding: 2,
  },
});

const mapDispatchToProps = {
  agregar_evento_accion,
  retornar_evento_accion,
};

const mapStateToProps = (state) => {
  return {
    eventos: state.event_reducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
