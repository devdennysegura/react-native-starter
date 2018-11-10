import Sugar from 'sugar';
Sugar.extend();
export default {
    time_convert: (num) => {
        const hours = String(Math.floor(num / 60));
        const minutes = String((num % 60));
        return `${'0'.repeat(2 - hours.length)}${hours}:${'0'.repeat(2 - minutes.length)}${minutes}`;
    },
    createDate: (value) => Sugar.Date.create(value),
    dateRangeUnits: (start, end, units) => {
        const now = Sugar.Date.range(Sugar.Date.create(start), Sugar.Date.create(end));
        const date = {
            'seconds': (now.clone()).seconds(),
            'minutes': (now.clone()).minutes(),
            'hours': (now.clone()).hours(),
            'days': (now.clone()).days(),
            'months': (now.clone()).months(),
            'years': (now.clone()).years()
        };
        return date[units];
    },
    dateUnits: (value, units, quantity) => {
        const now = Sugar.Date.create(value);
        const date = {
            'seconds': (now.clone()).addSeconds(quantity),
            'minutes': (now.clone()).addMinutes(quantity),
            'hours': (now.clone()).addHours(quantity),
            'days': (now.clone()).addDays(quantity),
            'months': (now.clone()).addMonths(quantity),
            'years': (now.clone()).addYears(quantity)
        };
        return date[units];
    },
    formatNumber: (value) => Sugar.Number.format(value, 0).replace(/,/g, '.'),
    formatUrl: (value) => Sugar.String.unescapeURL(value),
    removeDuplicate: (value, iterator) => Sugar.Array.unique(value, iterator),
    formatDate: (value, format) => Sugar.Date.format(Sugar.Date.create(value), format),
    get: (value, key) => Sugar.Object.get(value, key),
    capitalize: (value, all) => Sugar.String.capitalize(value, true, all),
    upper: (value) => value.toUpperCase(),
    lower: (value) => value.toLowerCase(),
    objectEach: (value, fcn) => Sugar.Object.forEach(value, fcn),
    compare: (val, _val) => val === _val,
    has: (value, key) => Sugar.Object.has(value, key),
    exclude: (value, key) => Sugar.Object.reject(value, key),
    oClone: (value) => Sugar.Object.clone(value),
    isNumber: (value) => Sugar.Object.isNumber(value),
    isObject: (value) => Sugar.Object.isObject(value)
};
