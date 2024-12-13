import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

/* constants */
import Colors from '@/constants/Colors'
/* assets */
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const TabsLayout = () => {
  return (
    <Tabs 
        screenOptions={{ 
            headerShown : false,
            tabBarActiveTintColor: Colors.primary 
        }}>
        <Tabs.Screen 
            name="nature-meditate"
            options={{ 
                tabBarLabel: "Meditate",
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="spa" color={color} size={size}/>
                ) 
            }}/>
        <Tabs.Screen 
            name="affirmations"
            options={{ 
                tabBarLabel: "Affirmations",
                tabBarIcon: ({ color, size}) => (
                    <MaterialIcons name="sentiment-very-satisfied" color={color} size={size} />
                )
            }}/>
        {/* <Tabs.Screen 
            name="nature-stories"
            options={{ tabBarLabel: "Stories" , tabBarIcon: {} }}
            /> */}
    </Tabs>
  )
}

export default TabsLayout