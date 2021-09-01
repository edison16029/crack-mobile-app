import { Dimensions } from 'react-native'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const defaultColors = {
    primary: '#52575C',
    primaryDark: '#353535',
    accent: '#FFFFFF',
}

export const padding = {
    xs: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 5,
    sm: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 8,
    md: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 16,
    lg: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 32,
    xl: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 40
}

export const margin = {
    xs: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 5,
    sm: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 8,
    md: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 16,
    lg: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 32,
    xl: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 40
}

export const fonts = {
    sm: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 18,
    md: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 24,
    lg: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 36,
    spacingSm: 15,
    spacingLg: 20,
    lineHeightSm: 24,
    primary: 'Roboto'
}

export const borderRadius = {
    radiusSm: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 8,
    radiusMd: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 16,
    radiusLg: (dimensions.fullHeight / dimensions.fullWidth) * 0.46 * 24,
}

export const themes = [
    {
        name: 'Dark',
        primary: '#52575C',
        primaryDark: '#353535',
        accent: '#FFFFFF',
    },
    {
        name: 'Light',
        primary: '#FFFFFF',
        primaryDark: '#C2C2C2',
        accent: '#474747',
    },
    {
        name: 'Jungle',
        primary: '#41C300',
        primaryDark: '#008B00',
        accent: '#FFFFFF',
    },
    {
        name: 'Sky',
        primary: '#2979FF',
        primaryDark: '#0D47A1',
        accent: '#FFFFFF',
    },
    {
        name: 'Desert',
        primary: '#F4FF81',
        primaryDark: '#CDDC39',
        accent: '#474747',
    }
]