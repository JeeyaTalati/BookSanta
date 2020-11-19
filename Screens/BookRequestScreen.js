import React,{Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/MyHeader';
export default class BookRequestScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reason:"",

        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(bookName,reason)=>{
      var userId=this.state.userId
      var randomRequestId=this.createUniqueId()
      db.collection("requested_books").add({
          userId:userId,
          bookName:bookName,
          reason:reason,
          requestId:randomRequestId,
      })
      this.setState({
          bookName:"",
          reason:"",
      })
      return(
          Alert.alert("Book Requested Succesfully")
      )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request Book">
                 <KeyboardAvoidingView style={StyleSheet.KeyboardAvoidingView}>
                 <TextInput style={styles.formTextInput} placeholder="Enter The Book Name"  onChangeText={(text)=>{this.setState({bookName:text})}} value={this.state.bookName}>
               
               </TextInput>
               <TextInput style={[styles.formTextInput,{height:300}]} placeholder="Enter The Reason"  onChangeText={(text)=>{this.setState({reason : text})}} value={this.state.reason} multiline numberOfLines={8}>
               
               </TextInput>
               <TouchableOpacity style={styles.button} onPress={()=>{this.addRequest(this.state.bookName,this.state.reason)}}>
                   <Text>
                    REQUEST
                   </Text>
               </TouchableOpacity>
                 </KeyboardAvoidingView>
                </MyHeader>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
})