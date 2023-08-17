import Welcome from './components/Welcome';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{title: "Welcome to The Capital Digital Banking"}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
		  options={{title: "Sign up to digital banking"}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{title: "Login to Your Account"}}
        />
		<Stack.Screen 
          name="Home"
          component={Home}
          options={{title: "Home"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


