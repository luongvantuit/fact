import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Text,
  Pressable,
  Platform,
} from 'react-native';
import Colors from '../../assets/colors';
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignInScreen({navigation}: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop:
              Dimensions.get('window').height /
              (Platform.OS === 'android' ? 3 : 2),
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 24,
              marginHorizontal: 32,
              marginVertical: 8,
              color: Colors.text,
            }}>
            Hey
          </Text>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 28,
              marginHorizontal: 32,
              marginBottom: 8,
              color: Colors.text,
            }}>
            Sign In, Now.
          </Text>
          <TextInputRegister />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 32,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                color: Colors.text,
              }}>
              Forgot Password?
            </Text>
            <Pressable style={{marginHorizontal: 8}} onPress={() => {}}>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  color: Colors.text,
                }}>
                Reset
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 16,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.matteBlack,
            }}
            onPress={() => {
              navigation.navigate('otp-sign-in');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.neutralLightest,
              }}>
              Next Step
            </Text>
          </Pressable>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '800',
              fontSize: 12,
              color: Colors.text,
            }}>
            Your Haven't Account
          </Text>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 16,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.yellow,
            }}
            onPress={() => {
              navigation.navigate('sign-up');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.text,
              }}>
              Create New Account
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
