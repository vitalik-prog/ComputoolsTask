import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {useTheme} from "@react-navigation/native";
import { NavigationScreen } from '../../../common/enums'
import { Feed, Profile } from '../../../screens';
import { FontAwesome } from '@expo/vector-icons';
import {View} from "react-native";

const Tab = createMaterialTopTabNavigator()

const TabNavigation: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreen.FEED}
      screenOptions={({ route }) => ({
        tabBarItemStyle: { flexDirection: 'row' },
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 58,
          paddingHorizontal: 18,
        },
        tabBarIcon: ({ focused }) => {
          const Icons = {
            Feed: 'home',
            Profile: 'user',
          } as const;

          return (
            <View style={{ opacity: focused ? 1 : 0.3 }}>
              <FontAwesome
                name={Icons[route.name as keyof typeof Icons]}
                size={25}
                color={colors.text}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name={NavigationScreen.FEED}
        component={Feed}
        options={{
          title: 'FEED',
        }}
      />
      <Tab.Screen
        name={NavigationScreen.PROFILE}
        component={Profile}
        options={{
          title: 'PROFILE',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
