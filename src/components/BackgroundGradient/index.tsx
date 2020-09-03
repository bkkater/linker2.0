import React from 'react';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundGradient: React.FC = ({ children }) => {
    let height = Dimensions.get("window").height;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'C9D6FF',
        }}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#C9D6FF', 'transparent', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: height
          }}
        />

        {children}
      </View>
    );
}

export default BackgroundGradient;