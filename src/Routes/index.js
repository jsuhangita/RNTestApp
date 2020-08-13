import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import homePage from "../Pages/home.page";

const Stack = createStackNavigator();

export function home() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown:false
                }}
                name="Home"
                component={homePage}
            />
        </Stack.Navigator>
    )
}