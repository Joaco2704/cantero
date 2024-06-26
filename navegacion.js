import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PantallaLogin from './pantallas/login';
import PantallaRegistro from './pantallas/registro';

const Tab = createBottomTabNavigator();
function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={PantallaLogin} />
            <Tab.Screen name="Registro" component={PantallaRegistro} />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}