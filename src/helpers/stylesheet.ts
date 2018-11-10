import { Platform, Dimensions } from 'react-native'
import _ from './utilities'
import { isIOS } from '../config/constants'
const { width, height } = Dimensions.get('window')
const BaseSize: any = { height: (isIOS ? 667 : 640), width: (isIOS ? 375 : 360) }
const isPortrait = height > width
const RealWidth = isPortrait ? width : height
const RealHeight = isPortrait ? height : width
const WResize: any = ['borderRadius', 'paddingHorizontal', 'marginHorizontal', 'borderWidth', 'borderBottomWidth',
    'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'maxLength', 'marginLeft', 'marginRight', 'paddingLeft',
    'paddingRight', 'left', 'right', 'maxWidth', 'minWidth', 'width', 'border', 'radius', 'x', 'fontSize']
const HResize: any = ['paddingVertical', 'marginVertical', 'letterSpacing', 'lineHeight', 'marginBottom',
    'marginTop', 'paddingBottom', 'paddingTop', 'bottom', 'top', 'maxHeight', 'minHeight', 'height', 'y']
const CrossProperty: any = ['margin', 'padding']
const WFactor: number = (RealWidth / BaseSize.width)
const HFactor: number = (RealHeight / BaseSize.height)
export const ConversionFactor = { WFactor, HFactor }

export const getComponentStyle = (component: any) => {
    let styles: any = extractPlatformStyle(component)
    let isCircle: boolean = _.has(component, 'height') && _.has(component, 'width')
        && _.has(component, 'borderRadius') && component.heigth === component.width
        && component.heigth === (component.borderRadius / 2)
    const circleWidth: number = isCircle ? (_.get(component, 'height') as number) * HFactor : 0
    _.objectEach(styles, (val, key) => {
        if (_.isObject(val)) {
            styles[key] = getComponentStyle(val)
        } else if (_.isNumber(val)) {
            if (CrossProperty.includes(key)) {
                styles[`${key}Horizontal`] = (WFactor * val)
                styles[`${key}Vertical`] = (HFactor * val)
            } else {
                styles[key] = WResize.includes(key) ? (WFactor * val) :
                    HResize.includes(key) ? (HFactor * val) : val
            }
        } else {
            styles[key] = val
        }
    })
    if (isCircle) {
        styles.width = circleWidth
        styles.height = circleWidth
        styles.borderRadius = (circleWidth / 2)
    }
    return styles
}

const extractPlatformStyle = (component: any) => {
    let platformStyle = { ...component }
    if (_.has(platformStyle, 'ios') || _.has(platformStyle, 'android')) {
        platformStyle = { ...(component[Platform.OS]) }
        platformStyle = _.exclude(platformStyle, 'ios')
        platformStyle = _.exclude(platformStyle, 'android')
    }
    if (_.has(platformStyle, 'style')) {
        platformStyle = { ...(component.style) }
        platformStyle = _.exclude(platformStyle, 'style')
    }
    return platformStyle
}