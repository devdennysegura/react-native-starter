import Sugar from 'sugar'
Sugar.extend()

export default {
    time_convert: (num: number) => {
        const hours = String(Math.floor(num / 60))
        const minutes = String((num % 60))
        return `${'0'.repeat(2 - hours.length)}${hours}:${'0'.repeat(2 - minutes.length)}${minutes}`
    },
    createDate: (value: string | number | Date) => Sugar.Date.create(value),
    dateRangeUnits: (start: string | number | Date, end: string | number | Date, units: string) => {
        const now = Sugar.Date.range(Sugar.Date.create(start), Sugar.Date.create(end))
        const date = {
            'seconds': (now.clone()).seconds(),
            'minutes': (now.clone()).minutes(),
            'hours': (now.clone()).hours(),
            'days': (now.clone()).days(),
            'months': (now.clone()).months(),
            'years': (now.clone()).years()
        }
        return date[units]
    },
    dateUnits: (value: string | number | Date, units: string, quantity: number) => {
        const now = Sugar.Date.create(value)
        const date = {
            'seconds': (now.clone()).addSeconds(quantity),
            'minutes': (now.clone()).addMinutes(quantity),
            'hours': (now.clone()).addHours(quantity),
            'days': (now.clone()).addDays(quantity),
            'months': (now.clone()).addMonths(quantity),
            'years': (now.clone()).addYears(quantity)
        }
        return date[units]
    },
    formatNumber: (value: number) => Sugar.Number.format(value, 0).replace(/,/g, '.'),
    formatUrl: (value: string) => Sugar.String.unescapeURL(value),
    removeDuplicate: (value: any, iterator: any) => Sugar.Array.unique(value, iterator),
    formatDate: (value: string | Date | number, format: string) => Sugar.Date.format(Sugar.Date.create(value), format),
    get: (value, key: string) => Sugar.Object.get(value, key),
    capitalize: (value: string, all?: boolean) => Sugar.String.capitalize(value, true, all),
    upper: (value: string) => value.toUpperCase(),
    lower: (value: string) => value.toLowerCase(),
    objectEach: (value: Object, fcn) => Sugar.Object.forEach(value, fcn),
    compare: (val: any, _val: any) => val === _val,
    has: (value: Object, key: string) => Sugar.Object.has(value, key),
    exclude: (value: Object, key: string) => Sugar.Object.reject(value, key),
    oClone: (value: Object) => Sugar.Object.clone(value),
    isNumber: (value: any) => Sugar.Object.isNumber(value),
    isObject: (value: any) => Sugar.Object.isObject(value)
}