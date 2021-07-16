import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
    
    const getPlace = () => {
        fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=eab7aa4856d79a51&lat=35.69885720178798&lng=139.69662535736515&format=json&count=1&datum=world',{
            method:'GET',
        })
        .then((Response) => Response.json())
        .then((data) => {
            console.log(typeof(data))
        })
        .then((error) => {
            console.log(error)
        })
    } 
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 35.69885720178798,
                longitude: 139.69662535736515,
                latitudeDelta: 0.02, //小さくなるほどズーム
                longitudeDelta: 0.02,
            }}
        >
            
            <MapView.Marker
                coordinate={{
                    latitude: 35.697884656973336,  
                    longitude: 139.6978256842522,
                }}
                title={"麺屋酒場桔梗"}
                description={"麺屋酒場桔梗。"}
                onPress={()=>alert("ラーメン屋です")}
                
            />
            <MapView.Marker
                coordinate={{
                    latitude: 35.69767251410191,   
                    longitude: 139.69712197838638,
                }}
                title={"イタリアンダイニング＆バー エルデ"}
                description={"イタリアンダイニング＆バー エルデ"}
                onPress={()=>alert("イタリア料理店")}
                
            />
            <MapView.Marker
                coordinate={{
                    latitude: 35.698480207961445,    
                    longitude: 139.69747951619593,
                }}
                title={"ロット イサン"}
                description={"ロット イサン"}
                onPress={()=>alert("タイ料理店です")}
                
            />
        </MapView>
    );
}
/*()=>alert("click")*/ 