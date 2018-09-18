module.exports = {
	paseDate (paseStr, format) {
		try {
	        format = format || 'yyyy-MM-dd';
	        //var date = new Date(typeof paseStr === 'string' ? paseStr.replace(/-/g, '/') : paseStr);
	        const date = paseStr ? new Date(paseStr) : new Date();
	        const dict = {
	            "yyyy": date.getFullYear(),
	            "M": date.getMonth() + 1,
	            "d": date.getDate(),
	            "H": date.getHours(),
	            "m": date.getMinutes(),
	            "s": date.getSeconds(),
	            "MM": ("" + (date.getMonth() + 101)).substr(1),
	            "dd": ("" + (date.getDate() + 100)).substr(1),
	            "HH": ("" + (date.getHours() + 100)).substr(1),
	            "mm": ("" + (date.getMinutes() + 100)).substr(1),
	            "ss": ("" + (date.getSeconds() + 100)).substr(1)
	        };
	        return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
	            return dict[arguments[0]];
	        });
	    }
	    catch (e) {
	        _alert(true, '需要正确的时间格式,当前时间格式为' + paseStr, '解析时间失败');
	    }
	}
}