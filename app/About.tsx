import SupportButton from '@components/buttons/SupportButton'
import ThemedButton from '@components/buttons/ThemedButton'
import { AppSettings } from '@lib/constants/GlobalValues'
import { Theme } from '@lib/theme/ThemeManager'
import { Logger } from '@lib/utils/Global'
import appConfig from 'app.config'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv'

const About = () => {
    const styles = useStyles()
    const { spacing } = Theme.useTheme()
    const [counter, setCounter] = useState<number>(0)
    const [devMode, setDevMode] = useMMKVBoolean(AppSettings.DevMode)

    const updateCounter = () => {
        if (devMode) return
        if (counter === 6) {
            Logger.log(`You have enabled dev mode.`, true)
            setDevMode(true)
        }
        setCounter(counter + 1)
    }

    const version = 'v' + appConfig.expo.version
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'About',
                    animation: 'fade',
                }}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={updateCounter}>
                <Image source={require('../assets/images/icon.png')} style={styles.icon} />
            </TouchableOpacity>

            <Text style={styles.titleText}>ChatterUI</Text>
            <Text style={styles.subtitleText}>
                Version {version} {devMode && '[DEV MODE]'}
            </Text>
            {devMode && (
                <ThemedButton
                    label="Disabled Dev Mode"
                    variant="critical"
                    buttonStyle={{
                        marginTop: spacing.xl,
                    }}
                    onPress={() => {
                        setCounter(0)
                        setDevMode(false)
                        Logger.log('Dev mode disabled')
                    }}
                />
            )}

            <Text style={styles.body}>
                ChatterUI is a free and open-source application developed by Vali-98
            </Text>
            <Text style={{ marginBottom: spacing.xl3, ...styles.body }}>
                This app is a passion project I develop in my free time. If you're enjoying the app,
                consider supporting its development!
            </Text>
            <Text style={{ ...styles.body, marginBottom: spacing.m }}>
                Donate to ChatterUI here:
            </Text>

            <SupportButton />

            <Text style={styles.body}>Got an issue? Report it here:</Text>
            <Text style={styles.subtitleText}>(Don't forget to add your Logs!)</Text>

            <ThemedButton
                buttonStyle={{ marginTop: spacing.m }}
                variant="secondary"
                label="Github Repository"
                iconName="github"
                iconSize={20}
                onPress={() => {
                    Linking.openURL('https://github.com/Vali-98/ChatterUI')
                }}
            />
        </View>
    )
}

export default About

const useStyles = () => {
    const { color, spacing } = Theme.useTheme()

    return StyleSheet.create({
        container: {
            paddingHorizontal: spacing.xl3,
            paddingBottom: spacing.xl2,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        titleText: { color: color.text._100, fontSize: 32 },
        subtitleText: { color: color.text._400 },
        body: { color: color.text._100, marginTop: spacing.l, textAlign: 'center' },
        icon: {
            width: 120,
            height: 120,
        },
        supportText: { color: color.text._400, paddingRight: spacing.s },

        supportButton: {
            marginTop: spacing.m,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: color.primary._500,
            padding: spacing.m,
            paddingHorizontal: spacing.xl,
            borderWidth: 1,
            borderRadius: spacing.xl,
        },
    })
}
