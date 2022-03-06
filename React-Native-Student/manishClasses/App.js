import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/Home";
import About from "./src/screen/About";
import Contact from "./src/screen/Contact";
import UserData from "./src/screen/UserData";
import Course from "./src/screen/Course";
import CourseDetails from "./src/screen/CourseDetails";

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const App =() => {
const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,

    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home screen  */}
        <Stack.Screen name="Home" 
        options=
        {{ headerShown: false, 
        }}>
          {(props) => <Home {...props} channelName={"manish"} />}
        </Stack.Screen>

        {/* Course scree */}

        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* Course scree */}

        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
        {/* Course scree */}

        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
           
            headerTitleAlign: "center",
          }}
        />
        {/* Course scree */}

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
          
            headerTitleAlign: "center",
          }}
        />
         {/* CourseDetails Screen  */}
         <Stack.Screen
         name="CourseDetails"
         component={CourseDetails}
         options={{
           headerTitleStyle: {
             fontSize: 25,
             fontFamily: "Nunito_700Bold",
           },
           headerTitleAlign: "center",
         }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}                       
export default App;