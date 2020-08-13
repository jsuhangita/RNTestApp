import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import PostComponent from "./Components/Post.component";
import {Button} from "react-native-elements";
import {map} from "lodash";


export default class homePage extends Component{
    constructor(props) {
        super(props);
        this.state={
            listPost:[
                {
                    id:0,
                    image:'https://picsum.photos/400/500',
                    like:0,
                },
                {
                    id:1,
                    image:'https://picsum.photos/400/500',
                    like:0,
                },
                {
                    id:2,
                    image:'https://picsum.photos/400/500',
                    like:0,
                },
            ]
        }
        this._renderItem = this._renderItem.bind(this);
        this._onPressLike = this._onPressLike.bind(this);
        this._onPressDislike = this._onPressDislike.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._onPressLikeAll  = this._onPressLikeAll.bind(this);
        this._onPressDislikeAll  = this._onPressDislikeAll.bind(this);
        this._onPressResetAll = this._onPressResetAll.bind(this);
    }

    _onPressLikeAll(){
        const { listPost } = this.state;
        const newArr = map(listPost, item=>({
            ...item,
            like:item.like+1
        }))
        this.setState({
            listPost:newArr
        })
    }

    _onPressDislikeAll(){
        const { listPost } = this.state;
        const newArr = map(listPost, item=>({
            ...item,
            like:item.like-1
        }))
        this.setState({
            listPost:newArr
        })
    }

    _onPressResetAll(){
        const { listPost } = this.state;
        const newArr = map(listPost, item=>({
            ...item,
            like:0,
        }))
        this.setState({
            listPost:newArr
        })
    }

    _onPressLike(index){
        const { listPost } = this.state;
        const tempArr = listPost;
        tempArr[index].like+=1
        this.setState({
            listPost:[...tempArr]
        })
    }
    _onPressDislike(index){
        const { listPost } = this.state;
        const tempArr = listPost;
        tempArr[index].like-=1
        this.setState({
            listPost:[...tempArr]
        })
    }

    _renderItem({item,index}){
        return(
               <PostComponent
                   {...item}
                   index={index}
                   onPressLike={this._onPressLike}
                   onPressDislike={this._onPressDislike}
               />
        )
    }

    _keyExtractor(item, index) {
        return String(index);
    }

    _renderHeader(){
        return(
            <View style={styles.headerContainer}>
                <Button
                    title={'Like all'}
                    buttonStyle={styles.buttonAll}
                    onPress={this._onPressLikeAll}
                />
                <Button
                    title={'Reset all'}
                    titleStyle={{color:'black'}}
                    buttonStyle={[styles.buttonAll,{
                        backgroundColor:'white',
                        borderColor:'grey',
                        borderWidth:1,
                    }]}
                    onPress={this._onPressResetAll}
                />
                <Button
                    title={'Dislike all'}
                    buttonStyle={[styles.buttonAll,{backgroundColor:'red'}]}
                    onPress={this._onPressDislikeAll}
                />
            </View>
        )
    }

    render() {
        const { listPost } = this.state;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <FlatList
                        ListHeaderComponent={this._renderHeader}
                        data={listPost}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
    },
    buttonAll:{
      borderRadius:8,
        // paddingHorizontal:15,
        width:100,
    }
})