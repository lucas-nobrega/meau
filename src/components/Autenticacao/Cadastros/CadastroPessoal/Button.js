import * as React from 'react';
import { Button, View, Pressable } from 'react-native';

export default function Button({ label, theme, onPress }) {
    // ...rest of the code remains same
    if (theme === "primary") {
        return (
            <View>
                <Pressable
                    style={[styles.button, { backgroundColor: '#fff' }]}
                    onPress={onPress}
                >
            </View>
        );
    }
}
