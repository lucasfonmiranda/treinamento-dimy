import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Alert
    
} from 'react-native';



class NewComponent extends Component {

    render(){
        return(
            <View>
                <Button 
            
                onPress ={ () => {
                    Alert.alert(
                        "Ola"
                    )
                }}
                title="Teste"
                />
                
            </View>

        )


        
    }

}


export default NewComponent;