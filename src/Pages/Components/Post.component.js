import React, { PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Image} from "react-native-elements";



export default class PostComponent extends PureComponent{
    constructor(props) {
        super(props);
        this._onPressLike = this._onPressLike.bind(this);
        this._onPressDislike = this._onPressDislike.bind(this);
    }

    _onPressLike(){
        const { onPressLike,index } = this.props;
        onPressLike(index)
    }

    _onPressDislike(){
        const { onPressDislike,index } = this.props;
        onPressDislike(index)
    }

    render() {
        const { image,like } = this.props;
        return (
                <View style={styles.card}>
                    <Image source={{uri:image}} style={styles.image}/>
                    <View style={styles.infoContainer}>
                        <View style={{flex:1.5}}>
                            <View style={styles.likesContainer}>
                                <Text >{like} like</Text>
                            </View>
                        </View>
                        <View style={{flex:1,paddingRight:5}}>
                            <Button onPress={this._onPressLike} title={'Like'} buttonStyle={{borderRadius:8}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Button onPress={this._onPressDislike} title={'Dislike'} buttonStyle={{backgroundColor:'red',borderRadius:8}}/>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        width: '100%',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius:8,
        marginBottom: 10,
    },
    image:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
      height:200,
      width:'100%',
    },
    infoContainer:{
        flexDirection:'row',
        padding: 20,
    },

    likesContainer:{
        padding:10,
        shadowColor: "#000",
        borderWidth:1,
        borderRadius:8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor:'grey',
        width:'70%'
    }
})