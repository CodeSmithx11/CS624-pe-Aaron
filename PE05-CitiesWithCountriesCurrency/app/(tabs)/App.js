import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => setCities((prev) => [...prev, city]);
  const addCountry = (country) => setCountries((prev) => [...prev, country]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cities">
          {(props) => <Cities {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
        <Tab.Screen name="Countries">
          {(props) => <Countries {...props} countries={countries} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
