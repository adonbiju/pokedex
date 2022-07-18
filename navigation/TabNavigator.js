import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutTab from '../components/AboutTab';
import BaseStatsTab from '../components/BaseStatsTab';

const Tab = createMaterialTopTabNavigator();

export const TabNavigator = (props) => {
    
    const {pokemon}=props
    //console.log(pokemon.name)
    return (
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: '#fff' }}
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#ccc', },
          tabBarLabelStyle: { textTransform: 'capitalize' },
          tabBarStyle: { elevation: 1 },
        }}
      >
        <Tab.Screen name="About" initialParams={pokemon} component={AboutTab} />
        <Tab.Screen name="Base Stats" initialParams={pokemon.stats} component={BaseStatsTab} />
      </Tab.Navigator>
    )
  }