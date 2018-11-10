import rgba from 'rgba-convert'
import { Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from '../helpers/utilities'

export const deepLink = {
    profile: () => Actions.push('profile'),
    document: () => Actions.push('files')
}
export const hitSlop = { top: 20, bottom: 20, left: 50, right: 50 }
export const isIOS = Platform.OS === 'ios'
export const prefix = Platform.OS === 'android' ? 'baserntypescript://baserntypescript/' : 'baserntypescript://'
export const Fonts = {
    BOLDITALIC: 'Google Sans Bold Italic',
    MEDIUMITALIC: 'Google Sans Medium Italic',
    BOLD: 'Google Sans Bold',
    REGULAR: 'Google Sans Regular',
    ITALIC: 'Google Sans Italic',
    MEDIUM: 'Google Sans Medium'
}
export const request_headers = { 'Content-Type': 'application/json' }
export const Colors = {
    barberry: rgba.hex('rgba(0,127,255,1)'),
    black_40: rgba.hex('rgba(0, 0, 0, 0.4)'),
    white: rgba.hex('rgba(255, 255, 255, 1)'),
    transparent: 'transparent'
}
export const passwordRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')
export const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')