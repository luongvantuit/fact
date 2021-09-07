import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {leakImage} from '../../assets';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';
import StyledHeader from './StyledHeader';
import StyledImage from './StyledImage';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation() {
  return (
    <AppHomeBottomTabs.Navigator initialRouteName={'dashboard'}>
      {/**
       * header dashboard
       */}
      <AppHomeBottomTabs.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          header: (props: BottomTabHeaderProps) => (
            <HeaderDashboard {...props} />
          ),
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => (
            <TabContainer>
              <MaterialCommunityIcons
                name={'view-dashboard'}
                size={props.focused === true ? 32 : 24}
              />
            </TabContainer>
          ),
        }}
      />
      {/**
       * header tab analytics
       */}
      <AppHomeBottomTabs.Screen
        name="analytics"
        component={AnalyticsScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => (
            <TabContainer>
              <MaterialCommunityIcons
                name={'google-analytics'}
                size={props.focused === true ? 32 : 24}
              />
            </TabContainer>
          ),
        }}
      />
      {/**
       * header tab wallet
       */}
      <AppHomeBottomTabs.Screen
        name="wallet"
        component={WalletScreen}
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: (props: any) => (
            <TabContainer>
              <EntypoIcons
                name={'wallet'}
                size={props.focused === true ? 32 : 24}
              />
            </TabContainer>
          ),
          header: (props: BottomTabHeaderProps) => <HeaderWallet {...props} />,
        }}
      />
    </AppHomeBottomTabs.Navigator>
  );
}

function HeaderDashboard(props: BottomTabHeaderProps): JSX.Element {
  return (
    <View style={StyledHeader.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
          }}>
          Hi, TU
        </Text>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 18,
          }}>
          Welcome back!
        </Text>
      </View>
      <Pressable
        onPress={() => {
          props.navigation.navigate('profile');
        }}>
        <Image source={leakImage} style={StyledImage.rightHeader} />
      </Pressable>
    </View>
  );
}

function TabContainer(props: {children?: JSX.Element}): JSX.Element {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
}

function HeaderWallet(props: BottomTabHeaderProps) {
  return (
    <Pressable
      style={StyledHeader.container}
      onPress={() => {
        props.navigation.navigate('profile');
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={leakImage}
          style={[StyledImage.leftHeader, {marginRight: 8}]}
        />
        <View>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 18,
            }}>
            {user.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
            }}>
            {user.type}
          </Text>
        </View>
      </View>
      <EntypoIcons name="chevron-small-right" size={32} />
    </Pressable>
  );
}
