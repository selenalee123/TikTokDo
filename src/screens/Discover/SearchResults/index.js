import places from '../../../../data/feed';
import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { Avatar, ListItem, SearchBar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `https://randomuser.me/api/?&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res.results;
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    renderHeader = () => {

        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };

    render() {
        console.log(this.state.data)
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View>
                            <ListItem
                                Component={TouchableScale}
                                friction={90} //
                                tension={100} // These props are passed to the parent component (here TouchableScale)
                                activeScale={0.95} //
                                linearGradientProps={{
                                    colors: ['#FF9800', '#F44336'],
                                    start: { x: 1, y: 0 },
                                    end: { x: 0.2, y: 0 },
                                }}
                                ViewComponent={LinearGradient} // Only if no expo
                            >


                                <Avatar rounded source={{ uri: item.picture.thumbnail }} />
                                <ListItem.Content>
                                    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                        {item.name.first} {item.name.last}
                                    </ListItem.Title>
                                    <ListItem.Subtitle style={{ color: 'white' }}>
                                        {item.email}
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron color="white" />

                            </ListItem>
                        </View>
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />

            </View>
        );
    }
}

export default SearchResults;


// <View style={{ flex: 1 }}>
// <FlatList
// data={this.state.data}
// renderItem={({ item }) => (
// <View>
//  <Avatar rounded source={{uri: item.picture.thumbnail}} />
// <Text>{item.name.first} {item.name.last}</Text>
// <Text>{item.email}</Text>
// </View>
// )}
// keyExtractor={item => item.email}
// ItemSeparatorComponent={this.renderSeparator}
// ListHeaderComponent={this.renderHeader}
// />

{/* <Avatar rounded source={{ uri: item.picture.thumbnail }} />
<Text>{item.name.first} {item.name.last}</Text>
<ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
    Chris Jackson
</ListItem.Title> */}