const jobname = '-RW-'
const $ = Env(jobname)



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

    await do_sysp();
    await $.wait(1000); 
  
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

//首页视频奖励
function sysp() {
  return {
    url: `https://ant.xunsl.com/v17/Rvideo/videoCallback.json`,
    headers: {

	},
    body: `access=4G&action=right_corner_video&app-version=8.3.2&app_name=jckd_app&app_version=8.3.2&carrier=CHN-CT&channel=c1005&device_brand=SMARTISAN&device_id=52000271&device_model=SM919&device_platform=android&device_type=android&dpi=560&inner_version=202109031457&language=zh-CN&memory=5&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=6f9c21802e9e7d69&os_api=23&os_version=MXB48T%20release-keys&request_time=1634452196&resolution=1440x2560&rom_version=MXB48T%20release-keys&s_ad=C7jvhIkVyrvg%3D-yk38pmM3JKhxvg4BmiQt9uAQgo9HJJXY&s_im=vCWzFwAroTSg%3Dm5oHIteOrCfqCdfjBg8NkQ%3D%3DU5&sim=1&sm_device_id=202109291605277cd2e35c7911bcbb3f30a0fecc28a12b01b20b831a219744&storage=52.62&subv=1.2.2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiI0RyIsImFjdGlvbiI6InJpZ2h0X2Nvcm5lcl92aWRlbyIsImFwcC12ZXJzaW9uIjoiOC4zLjIiLCJhcHBfbmFtZSI6Impja2RfYXBwIiwiYXBwX3ZlcnNpb24iOiI4LjMuMiIsImNhcnJpZXIiOiJDSE4tQ1QiLCJjaGFubmVsIjoiYzEwMDUiLCJkZXZpY2VfYnJhbmQiOiJTTUFSVElTQU4iLCJkZXZpY2VfaWQiOiI1MjAwMDI3MSIsImRldmljZV9tb2RlbCI6IlNNOTE5IiwiZGV2aWNlX3BsYXRmb3JtIjoiYW5kcm9pZCIsImRldmljZV90eXBlIjoiYW5kcm9pZCIsImRwaSI6IjU2MCIsImlubmVyX3ZlcnNpb24iOiIyMDIxMDkwMzE0NTciLCJsYW5ndWFnZSI6InpoLUNOIiwibWVtb3J5IjoiNSIsIm1pIjoiMCIsIm1vYmlsZV90eXBlIjoiMSIsIm5ldF90eXBlIjoiMiIsIm5ldHdvcmtfdHlwZSI6IjRHIiwib3BlbnVkaWQiOiI2ZjljMjE4MDJlOWU3ZDY5Iiwib3NfYXBpIjoiMjMiLCJvc192ZXJzaW9uIjoiTVhCNDhUK3JlbGVhc2Uta2V5cyIsInJlcXVlc3RfdGltZSI6IjE2MzQ0NTIxOTYiLCJyZXNvbHV0aW9uIjoiMTQ0MHgyNTYwIiwicm9tX3ZlcnNpb24iOiJNWEI0OFQrcmVsZWFzZS1rZXlzIiwic19hZCI6IkM3anZoSWtWeXJ2ZyUzRC15azM4cG1NM0pLaHh2ZzRCbWlRdDl1QVFnbzlISkpYWSIsInNfaW0iOiJ2Q1d6RndBcm9UU2clM0RtNW9ISXRlT3JDZnFDZGZqQmc4TmtRJTNEJTNEVTUiLCJzaW0iOiIxIiwic21fZGV2aWNlX2lkIjoiMjAyMTA5MjkxNjA1Mjc3Y2QyZTM1Yzc5MTFiY2JiM2YzMGEwZmVjYzI4YTEyYjAxYjIwYjgzMWEyMTk3NDQiLCJzdG9yYWdlIjoiNTIuNjIiLCJzdWJ2IjoiMS4yLjIiLCJ1aWQiOiI1NTI0MjAxNCIsInZlcnNpb25fY29kZSI6IjgzMiIsInpxa2V5IjoiTURBd01EQXdNREF3TUpDTXBOLXcwOVd0ZzUtQmIzNmVoNkNQcUh1YWxJZWpsNi1GcldLd3pYV3hoWHlwNExEUHlHbDlvbnFrajNacVlKYThZODk4bmFqV3NKdXBaTERkaFdtRmpIN2Vycm02YXBxR2NYWSIsInpxa2V5X2lkIjoiZWFiOWU0MmI4NjU0NTYwOGFmNzAzMGJlYjkxZWEwNjkifQ.puiVKRhVCi5AS1lV87E-bzbdfm6ZUFiWMng2rgCi4ErtSW4v3_zybyjLCoSryIhJZJns62pz-Wvb-OBmkEFdkw&uid=55242014&version_code=832&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdhWmFjH7errm6apqGcXY&zqkey_id=eab9e42b86545608af7030beb91ea069`
  }
}

function do_sysp() {
  return new Promise(resolve => {
    $.post(sysp(), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`时段红包结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`\n首页时段激励奖励获取成功，获得 ${result.items.dialog.score} 金币！`)
			} else {
				console.log(`\n首页时段激励奖励获取失败:${JSON.stringify(result)}`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
/*
//时段奖励
function TimePacket() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/v17/Rvideo/videoCallback.json";
        const headers = {
            
        };
        const body = "access=4G&action=right_corner_video&app-version=8.3.2&app_name=jckd_app&app_version=8.3.2&carrier=CHN-CT&channel=c1005&device_brand=SMARTISAN&device_id=52000271&device_model=SM919&device_platform=android&device_type=android&dpi=560&inner_version=202109031457&language=zh-CN&memory=5&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=6f9c21802e9e7d69&os_api=23&os_version=MXB48T%20release-keys&request_time=1634452196&resolution=1440x2560&rom_version=MXB48T%20release-keys&s_ad=C7jvhIkVyrvg%3D-yk38pmM3JKhxvg4BmiQt9uAQgo9HJJXY&s_im=vCWzFwAroTSg%3Dm5oHIteOrCfqCdfjBg8NkQ%3D%3DU5&sim=1&sm_device_id=202109291605277cd2e35c7911bcbb3f30a0fecc28a12b01b20b831a219744&storage=52.62&subv=1.2.2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiI0RyIsImFjdGlvbiI6InJpZ2h0X2Nvcm5lcl92aWRlbyIsImFwcC12ZXJzaW9uIjoiOC4zLjIiLCJhcHBfbmFtZSI6Impja2RfYXBwIiwiYXBwX3ZlcnNpb24iOiI4LjMuMiIsImNhcnJpZXIiOiJDSE4tQ1QiLCJjaGFubmVsIjoiYzEwMDUiLCJkZXZpY2VfYnJhbmQiOiJTTUFSVElTQU4iLCJkZXZpY2VfaWQiOiI1MjAwMDI3MSIsImRldmljZV9tb2RlbCI6IlNNOTE5IiwiZGV2aWNlX3BsYXRmb3JtIjoiYW5kcm9pZCIsImRldmljZV90eXBlIjoiYW5kcm9pZCIsImRwaSI6IjU2MCIsImlubmVyX3ZlcnNpb24iOiIyMDIxMDkwMzE0NTciLCJsYW5ndWFnZSI6InpoLUNOIiwibWVtb3J5IjoiNSIsIm1pIjoiMCIsIm1vYmlsZV90eXBlIjoiMSIsIm5ldF90eXBlIjoiMiIsIm5ldHdvcmtfdHlwZSI6IjRHIiwib3BlbnVkaWQiOiI2ZjljMjE4MDJlOWU3ZDY5Iiwib3NfYXBpIjoiMjMiLCJvc192ZXJzaW9uIjoiTVhCNDhUK3JlbGVhc2Uta2V5cyIsInJlcXVlc3RfdGltZSI6IjE2MzQ0NTIxOTYiLCJyZXNvbHV0aW9uIjoiMTQ0MHgyNTYwIiwicm9tX3ZlcnNpb24iOiJNWEI0OFQrcmVsZWFzZS1rZXlzIiwic19hZCI6IkM3anZoSWtWeXJ2ZyUzRC15azM4cG1NM0pLaHh2ZzRCbWlRdDl1QVFnbzlISkpYWSIsInNfaW0iOiJ2Q1d6RndBcm9UU2clM0RtNW9ISXRlT3JDZnFDZGZqQmc4TmtRJTNEJTNEVTUiLCJzaW0iOiIxIiwic21fZGV2aWNlX2lkIjoiMjAyMTA5MjkxNjA1Mjc3Y2QyZTM1Yzc5MTFiY2JiM2YzMGEwZmVjYzI4YTEyYjAxYjIwYjgzMWEyMTk3NDQiLCJzdG9yYWdlIjoiNTIuNjIiLCJzdWJ2IjoiMS4yLjIiLCJ1aWQiOiI1NTI0MjAxNCIsInZlcnNpb25fY29kZSI6IjgzMiIsInpxa2V5IjoiTURBd01EQXdNREF3TUpDTXBOLXcwOVd0ZzUtQmIzNmVoNkNQcUh1YWxJZWpsNi1GcldLd3pYV3hoWHlwNExEUHlHbDlvbnFrajNacVlKYThZODk4bmFqV3NKdXBaTERkaFdtRmpIN2Vycm02YXBxR2NYWSIsInpxa2V5X2lkIjoiZWFiOWU0MmI4NjU0NTYwOGFmNzAzMGJlYjkxZWEwNjkifQ.puiVKRhVCi5AS1lV87E-bzbdfm6ZUFiWMng2rgCi4ErtSW4v3_zybyjLCoSryIhJZJns62pz-Wvb-OBmkEFdkw&uid=55242014&version_code=832&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdhWmFjH7errm6apqGcXY&zqkey_id=eab9e42b86545608af7030beb91ea069";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result=JSON.parse(data);           
                if(result.data&&result.data.score)
                {
                    $.log(`【计时红包奖励】+${result.data.score}金币`);
                }
                else
                {
                    $.log(`【计时红包奖励】${result.msg}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
*/

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