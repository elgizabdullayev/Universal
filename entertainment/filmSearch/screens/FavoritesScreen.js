import React, {Component} from 'react';
import { ScrollView,  View, Text, Image, Button, Modal} from 'react-native';
import {mainStyles} from '../styles/mainStyles';
import { connect } from 'react-redux';
import { removeMovies } from '../redux/actions'

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Favorites',
      show: false,
      activeItem: []
    };
  }
  mainImage = 'https://via.placeholder.com/200x250?text=Film+Search'

  render() {
    return (
      <View style={mainStyles.container}>
       <Text style={mainStyles.titleName}>
        {this.state.title}
       </Text>
       <ScrollView style={mainStyles.results}>
         {this.props.list.map((movies, index)=>{
           return (<View key={index}>
             <Image style={mainStyles.image}
             source={{uri: movies?.show?.image?.medium ?? this.mainImage}}></Image>
            <Text style={mainStyles.result}>
              {movies.show.name}
            </Text>
            <Button title="More info..." onPress={()=>this.setState((prevState) => ({show : prevState.show = true, activeItem: prevState.activeItem = movies.show}))}></Button>
            <Button color='red' title="Remove" onPress={()=>this.props.remove(movies)}></Button>
           </View>)
         })
         }
       </ScrollView>
       
 <Modal visible={this.state.show} >
            <ScrollView style={mainStyles.results}>
              <View >
                <Image style={mainStyles.image}
             source={{uri: this.state.activeItem?.image?.medium ?? this.mainImage}}></Image>
             <Text style={mainStyles.result}>
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

const mapStateToProps = state => {
    return {
        list: state.reducer2.list
    }
}
const mapDispatchToProps = dispatch => {
  return{
      remove: (movie) => dispatch(removeMovies(movie))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);