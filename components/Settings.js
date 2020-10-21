import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Settings = () => {
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Settings</Text>
            </View>
            <View styles={styles.settings}>
                <View>
                    <Text style={styles.settingsItem}>Account Settings</Text>
                </View>
                <View>
                    <Text style={styles.settingsItem}>Notifications</Text>
                </View>
                <View>
                    <Text style={styles.settingsItem}>Log Out</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        height: 60,
        backgroundColor: "#E8E5DA",
        borderColor: "grey",
        borderBottomWidth: 1
    },
    headingText: {
        lineHeight: 60,
        paddingLeft: 30,
        fontWeight: 700,
        fontSize: 20,
    },
    settingsItem: {
        lineHeight: 40,
        textAlign: "center",
        fontSize: 18,
        borderColor: "grey",
        borderBottomWidth: 1
    }
});

export default Settings;