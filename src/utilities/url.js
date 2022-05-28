const url = {
    queryString(obj, prefix) {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    url.queryString(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    },
    queryObject(defaultValue = {}) {
        try {
            var search = window.location.search.substring(1);
            let obj = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value); });
            return { ...defaultValue, ...obj };
        } catch (error) {
            return defaultValue;
        }
    }
};

// window.url = url;

export default url;