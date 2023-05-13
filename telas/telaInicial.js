//telaInicial = tela de inicio

import React,{Component} from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";

export default class TelaInicial extends Component{

    render(){

       return(
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <Text> Rastreador de Meteoros </Text>
            <TouchableOpacity onPress = {()=> {
                this.props.navigation.navigate('Meteoros')
            }}> 
                <Text> Meteoros</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> {
                this.props.navigation.navigate('Satelite')}}>  
                <Text> Satelite</Text>
            </TouchableOpacity>

        </View>
       ) 
        
    }

}
