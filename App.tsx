import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Circle } from 'react-native-maps';

interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const initialRegion : Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 1.922,
    longitudeDelta: 1.1421,
}

export default function App() {
    const [region, setRegion] = useState<Region>(initialRegion);
    return (
        <View style={styles.container}>
            <MapView
            style={{ flex: .5 }}
            provider={PROVIDER_GOOGLE}
            region={region}
            showsUserLocation={true}
            followsUserLocation={true}
            onRegionChange={setRegion}
            >
            </MapView>
                <Circle center={{
                    latitude: region.latitude,
                    longitude: region.longitude
                }} radius={500} fillColor = { 'rgba(230,238,255,0.5)' }/>
            <Text>Hello there</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

