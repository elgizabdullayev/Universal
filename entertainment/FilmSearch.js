import React, {Component} from 'react';
import { ScrollView, TextInput, View, Text, Image, TouchableOpacity, Button, Modal} from 'react-native';
import {stylesFilm} from '../styles/stylesFilmSearch'

export  class FilmSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Film Search',
      temp: 'Batman',
      searchText: 'Batman',
      data: [],
      show: false,
      activeItem: []

    };
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.temp}`)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    } catch (e){
     console.log("Error")

    }
    }
  tryToSearch = async ()=>{
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchText}`)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    } catch (e){
     console.log("Error")

    }
   }
  mainImage = 'https://via.placeholder.com/200x250?text=Film+Search'
  
  render() {
    return (
      <View style={stylesFilm.container}>
       <Text style={stylesFilm.titleName}>
        {this.state.title}
       </Text>
       <TextInput style={stylesFilm.search}
        onChangeText={text => this.setState((prevState) => ({searchText : prevState.searchText = text}))}
        placeholder='movie name is...'>
       </TextInput>
       <TouchableOpacity onPress={this.tryToSearch} style={stylesFilm.touchableStyle}><Text style={stylesFilm.touchableText}>Search</Text></TouchableOpacity>
       <ScrollView style={stylesFilm.results}>
         {this.state.data.map((movies, index)=>{
           return (<View key={index}>
             <Image style={stylesFilm.image}
             source={{uri: movies?.show?.image?.medium ?? this.mainImage}}></Image>
            <Text style={stylesFilm.result}>
              {movies.show.name}
            </Text>
            <Button title="More info..." onPress={()=>this.setState((prevState) => ({show : prevState.show = true, activeItem: prevState.activeItem = movies.show}))}></Button>
                    
           </View>)
         })
         }
       </ScrollView>
       
<Modal visible={this.state.show} >
            <ScrollView style={stylesFilm.results}>
              <View >
                <Image style={stylesFilm.image}
             source={{uri: this.state.activeItem?.image?.medium ?? this.mainImage}}></Image>
             <Text style={stylesFilm.result}>
              Name: {this.state.activeItem?.name ?? 'unavialable info'}{"\n"}
              Type: {this.state.activeItem?.type ?? 'unavialable info'}{"\n"}
              Language: {this.state.activeItem?.language ?? 'unavialable info'}{"\n"}
              Premiered: {this.state.activeItem?.premiered ?? 'unavialable info'}{"\n"}
              Summary: {this.state.activeItem?.summary?.replace(/(<([^>]+)>)/gi, "") ?? 'unavialable info'}
            </Text>
                <Button title="Back" onPress={()=>this.setState((prevState) => ({show : prevState.show = false}))}></Button>
              </View>
              </ScrollView>
            </Modal>
      </View>
      
    );
  }
}

