const jobname = '-RW-'
const $ = Env(jobname)

const TS = Math.round((new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000) / 1000);

let signbody = 'p=rXU6PBNNsHKc=ForGprwD-04dLgfLhY6RGeX-xYK9ZeSCC71w5svlfJomboBHefRzQ5Pg8NMNd5XdIerqkixI50mDIHNrzlwXJFsidSPMTMBoJCb_RcJeKb5iCgmKXmERExkbBL_L_kWjBIP0PaBXvjnRyviG33GBUoB2Z5i6nGLY0F8JccXkqvjelbXwjaoTe3z_DYzCV6Z62FAYPvTJ2iH05bLgQGrDFEv1haDpOTP1oMGRxrJdhN1HmGDDCDWBtLavarNx1s_mKIoTCQdEMrMQlJ9N_YBg3ruxehClZqFpaA7b7OynGbHzZFTQRLZE7D9FqfYVS8xcah4GZzvE7D5SGO-RWDb7rEwVZmT4SCfWt4WfLr0XPY24opz0bGLFOq6YhxAO96Ryeke7zF1t1Oh6h9SA0ngLuqMpOnOFwyVWtBkIYMxqNsdF_T0gwe8Cch967I5kxr6ApM2RV8eOtn0JEQf5NPLPxBbed4aUry3MfRWHtt3mm-xBNXof3_usqQeoMjox0H4SL3txx7BoEJQHasZDgKatmwpkgUspZR--G26CGdT9sx-sA4E4sH0QMPBl7O8OtAuVyw8IPJCUnU8Mrr05-PsW5v0Ei4Uicco1oDO11qptFdECPHI_qgDpEPP90y3xo3ezhHsVal_lVuifL5eP9m2ai47XV44sxPyBGx85NLDU85M4-e3ft4vDIr8idZ5fqRb5k3tVKfXde1-IDjcVpcWWKERawI0Bp3T29AJeG_qfGMNN-UattTGuRTnlSHsbJDva3DQ_V71klih3lIiwQGZo-Rl3AODtr95vE1HC8KmIZQ7NCgafZwzTr26zgT-I5tzsXAzNe1uqTh8EJraCZzI8iGyNaqJIxW1e0HbLhLnAwN-qrn1Vbk1dnmaReyV55lokgKP9hUlUzc54seaga6jeCI81Fv916e-n1ARvfIcYU4F70F0g5hSEgLTQsgLnjW1nLBRznVC1j_Hol2IMn7A-nXxYC5OoPwc96cWo9Id3XL7QFPn-ydoOv353m1zqGXwtGP0QMKIVBTH1Zdp-pM9hLm6igvhK68251vBIKJUBPjTYSHg-87ur9xGnMun5uF5FZVscMBIoyXQ_QdW4pDIH21Np9Y_JGAIaX6nPaDNw2uOd4L7Y0S0B_6m2W8fC9g2SNUrPF-ehSEuXUvwUjRccdEu8aA22NFVvpn91f75eCy1nTYZNbtZPXg==E';
let signbody1 = 'p=ycTMBiVxDAfc=-Z4t1n9xCHViTEixuAOYRqfylSrDl_tcUQepJ95w98Z5zE2fG97uGoVdkz8FuWpk4kUIsluOXqCO2of-hoinO2C-x-xemO6g43h4k1MM9g2ly5G7Ln5olyn1B9YmXv2ZZWlzlte0mkzEeWXQGOQ3zcIpm2mfRVOPWSo4Mh4bKht7l0Ow3yTv3UVbmon9M1fnz8uwtYzDlZ_YFZfiKgCXYOvIw02ITru1Af3g7GvZGRLR5oW8HwO33Xecefb7SAAnNCVxYgrD38UctoQ4p-WKpgFwxjsi6Gb8mkqNMNeMlsHIgSxB8BK7gnvyasfOJD1LsU0r8ipq-RTRz3qSdCkOu77dY83JIa4MudkVHY6gSq2HX5p_N1d17I3d2KvFlE4rAkAvKNhVPNvcwU-fNj-L7oVPau7qqLwhELys_WkTP5BvQi2Q3ZCW8TMeDbAozzJPJA1_g-v2k7gc9HLZ31N-Wrp_pl9bls1vjwkwT1MZdCzXXeA7tCVSYAWcSpPoD57loaAA5xcsnNiXUSQG5ACO7777dWoYFYh-lrM6Wvsrf3dqHtlAYf2pXFiZcTYGEGp1cILpyg5pDLfb34kuUyyOGWpjAz3daBZzkbBIwk2rUdDhHhZ8igaJZnxUDcpjHsmOZm6qZvreVcI1PACLhvbHF0QPLIXO7qHDEI-yEu5NJD9BQVdWuJcbLBnK_jEHjDHUiAPJFCEmQXDc63RjqGMVOB-0pChV-90JJB7YX_Y4ymruOo5zn6GPrXfNetGFa9zEZa-k4eUXg6i5CnXYcF00rV6ql8Cz-rR2hl-UD-0eJMRfp2UYUXUUOKLogYCUlmAbG1gHUqAI-SsyAgGnS0iWZ9i2_M3On19LsipayqaJXrjhv1HuJAdUXxUxpd-TBUtL-Rns9-8lQfBYNQs-uicglIz9QCSXvtP7ZTLj1CUTe-QXfF5-dy61WRsKqFSfltXOgEEnePfUlwj6TGSJDO51zRur6jDslRNIOS9dqVEbFIr2BDHoiPGIMRVg1Sv00_TaqxbpPB6lMc6NzQq1Hye9xqy8R_7bibFFva4wjLuUpvyHWBOQa6H9k8iJ1GUkgu1zdv91sFRED7tOPH9UsHTAP3Zlnq-lw7HEa3vOf3vLlA21-yQSEVWOkw1qmuseaWNSD0VqkI0oBnF_okjrQbcJjlJVVSzlnV7XoSI-cDjpgNFxH8vtvn_R6ruRLLeiq_gku';


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })



async function all() {

    await GetSign();
    await $.wait(1000); 
 
}

function kdHost(api, body) {
    return {
        url: 'https://kandian.wkandian.com/v5/CommonReward/toGetReward.json',
        headers: {
            'device-platform': 'android',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '1247',
            'Host': 'kandian.wkandian.com'
        },
        body: signbody,
    }
}



function getsign() {
    return new Promise((resolve, reject) => {
        $.post(kdHost(), async(error, resp, data) => {
            signres = JSON.parse(data);
            if (signres.status == 2) {
                sub = `签到失败，Cookie已失效‼️`;
                $.msg($.name, sub, "");
                return;
            } else if (signres.status == 1) {
                $.desc = `【签到结果】成功 🎉 青豆: +${signres.score}，明日青豆: +${signres.nextScore}\n`;
                await comApp()
            }
            resolve()
        })
    })
}






function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
