import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../../data/feed';
import styles from './styles';
import PostCarouselItem from '../../../components/PostCarouselItem';

const SearchResultsMap = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;
    const flatlist = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70});
    const map = useRef();

     // click item on flatlist show the item on map
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

   // click item on map show the item on flatlist
   useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };

    map.current.animateToRegion(region);
  }, [selectedPlaceId]);




    return (
        <View style={styles.container}>
            <Text>Kim Kim </Text>
          <MapView
          ref={map}
        style={ styles.map }
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
      <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          showsHorizontalScrollIndicator={true}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          horizontal
          onViewableItemsChanged={onViewChanged.current}></FlatList>
      </View>
        </View>
    )
}

export default SearchResultsMap
