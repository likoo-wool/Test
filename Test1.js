/*
安卓：晶彩天气(v8.3.7)

此脚本负责：
完成看看赚任务，删除重复和失效的body
*/

const jsname = '晶彩天气看看赚'
const $ = Env(jsname)
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

//const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let rndtime = "" //毫秒
let httpResult //global buffer

let jctqCookie = ($.isNode() ? process.env.jctqCookie : $.getdata('jctqCookie')) || '';
//let jctqLookStartbody = ($.isNode() ? process.env.jctqLookStartbody : $.getdata('jctqLookStartbody')) || '';

let jctqCookieArr = []
let jctqLookStartbodyArr = []

let userCookie = 'access=4G&app-version=8.3.8.1&app_name=jckd_app&app_version=8.3.8.1&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&device_brand=SMARTISAN&device_id=51426980&device_model=SM919&device_platform=android&device_type=android&dpi=560&inner_version=202111161441&language=zh-CN&memory=5&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=6f9c21802e9e7d69&os_api=23&os_version=MXB48T%20release-keys&request_time=1637564766&resolution=1440x2560&rom_version=MXB48T%20release-keys&s_ad=GFsSOfXcbejQ%3DzsLToxWkbStrMy-l4aAFoKU_B0MeXK7mH&s_im=8pnoxxlgBSPY%3DftJU16u0felTt5IexLbZSA%3D%3D&sim=1&sm_device_id=202109291605277cd2e35c7911bcbb3f30a0fecc28a12b01b20b831a219744&storage=52.62&subv=1.2.2&uid=55242014&version_code=838&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdl2qFooaZr6m6apqGcXY&zqkey_id=67a2b7bd2cca47bfdd05405d10af9fe6&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3MiOiI0RyIsImFwcC12ZXJzaW9uIjoiOC4zLjguMSIsImFwcF9uYW1lIjoiamNrZF9hcHAiLCJhcHBfdmVyc2lvbiI6IjguMy44LjEiLCJjYXJyaWVyIjoiJUU0JUI4JUFEJUU1JTlCJUJEJUU3JTk0JUI1JUU0JUJGJUExIiwiY2hhbm5lbCI6ImMxMDA1IiwiZGV2aWNlX2JyYW5kIjoiU01BUlRJU0FOIiwiZGV2aWNlX2lkIjoiNTE0MjY5ODAiLCJkZXZpY2VfbW9kZWwiOiJTTTkxOSIsImRldmljZV9wbGF0Zm9ybSI6ImFuZHJvaWQiLCJkZXZpY2VfdHlwZSI6ImFuZHJvaWQiLCJkcGkiOiI1NjAiLCJpbm5lcl92ZXJzaW9uIjoiMjAyMTExMTYxNDQxIiwibGFuZ3VhZ2UiOiJ6aC1DTiIsIm1lbW9yeSI6IjUiLCJtaSI6IjAiLCJtb2JpbGVfdHlwZSI6IjEiLCJuZXRfdHlwZSI6IjIiLCJuZXR3b3JrX3R5cGUiOiI0RyIsIm9wZW51ZGlkIjoiNmY5YzIxODAyZTllN2Q2OSIsIm9zX2FwaSI6IjIzIiwib3NfdmVyc2lvbiI6Ik1YQjQ4VCtyZWxlYXNlLWtleXMiLCJyZXF1ZXN0X3RpbWUiOiIxNjM3NTY0NzY2IiwicmVzb2x1dGlvbiI6IjE0NDB4MjU2MCIsInJvbV92ZXJzaW9uIjoiTVhCNDhUK3JlbGVhc2Uta2V5cyIsInNfYWQiOiJHRnNTT2ZYY2JlalElM0R6c0xUb3hXa2JTdHJNeS1sNGFBRm9LVV9CME1lWEs3bUgiLCJzX2ltIjoiOHBub3h4bGdCU1BZJTNEZnRKVTE2dTBmZWxUdDVJZXhMYlpTQSUzRCUzRCIsInNpbSI6IjEiLCJzbV9kZXZpY2VfaWQiOiIyMDIxMDkyOTE2MDUyNzdjZDJlMzVjNzkxMWJjYmIzZjMwYTBmZWNjMjhhMTJiMDFiMjBiODMxYTIxOTc0NCIsInN0b3JhZ2UiOiI1Mi42MiIsInN1YnYiOiIxLjIuMiIsInVpZCI6IjU1MjQyMDE0IiwidmVyc2lvbl9jb2RlIjoiODM4IiwienFrZXkiOiJNREF3TURBd01EQXdNSkNNcE4tdzA5V3RnNS1CYjM2ZWg2Q1BxSHVhbEllamw2LUZyV0t3elhXeGhYeXA0TERQeUdsOW9ucWtqM1pxWUphOFk4OThuYWpXc0p1cFpMRGRsMnFGb29hWnI2bTZhcHFHY1hZIiwienFrZXlfaWQiOiI2N2EyYjdiZDJjY2E0N2JmZGQwNTQwNWQxMGFmOWZlNiJ9.cSD8O3FX7XlGWPidJpV-JvF_2ttO5yqFCAgO4k-QM9X-g2HNqTLKH2XXqWJfB8q7Fa-_VghAidoGUhe-7wS31A'
let jctqLookStartbody = 'p=ROPWuPCF4ZFE=P-fbtyVbJ8dhbnnjEebGH-tIo_sUko6Tlkok_mvN0y-ksJHGexLhwo_wsWKijcOLUenOP9CdwbKqqEuDeqU7QmIFvxhZfa_pz5WPRKGXqNXQlP-aNxWb9fFUK9m1BPJIoCJVhw-l_juBle7macYeoUS4luAeU5lO2qOlPfSLGJ_wyi91cAXk9l5VXG-_nz2ljIdhw0eg4IfEH_k3mleptndUqgEDcnLy_zw5ip3xFbPvCDFiBI_OWXACl-8V5NzOGhpfInlRk6cCP-1RB4xtOEuxXYrX_h_1IqSE3i0urQU-gzlI0Ek_PUj8qA1Ew0JWo47Bc8WxfeNpNLlDrT65kr94k-GyD7ZvmZ9iu9-rwRglZ99xrLYSjl1pMLEqvhyOsZMLTJ5u-sHOQ0UiE7e_DIa9frJb5ZWdFfoeC-Y5QIxHD7QfgUpmHH44lDd0_UGIzAbIpeD6_cNj6MLZWcJz7uTOT4EwdNWrIccQHEiwxELmrAxipmACxpXzVGdw7lNG5CaT5f1tn3RmH9tkf5FiU4AolLG058BaqubZ4AXZC0Wmm0QDJQJ_QpCpOtx1W0iJsplaOE7JktLWucXEWZsZTy3lR2WleXlNJELD3_gbh0rjX7ORW-K2HRKnPfziveIyeJ9SugJmVpZUsw_z4Bwlf9DMGD0dPNzvYbv6f61eTDEuyvlxCygVRp0G2v3TXPI5b2sT-i9vxheeZGRklqNuO-_L8REMt8MsbdRCNWmVWIr2tLzDF-hhXRIHSRi91urUnrxW4CbF_GJUQbhpMEai1puCsFpXfmcowBpEs28om5EPhH7qWhiyCHVjNmy_fFA4dgcIRv6rKrGBniYoraBcCNBugAzlYrxpptK39ou6YxuhmZMskPoxZm8RlC0nRJWpwp1Et7OTC7xURSmpJwKLUkebfJU4YorZCarxeoj4w_HMgxZ2KjmOnKhr541KC8S-wilolQEVgF9bRSLuW3_op02uDpUq7jzXGB_SuuqYrcquBcoduzaO_R44X_o_FrU3THSL_Dxd0hL3z1lM2X6PynWEOQqaoA7b9iDzMZ71hsTD3URUe3Y1lMAofdDXAJRSN_BXcqif0e1iI0omxv3c858VnVY4wZVHIOSmNU1wEUHkOX7ZxMn1oR7m8r62lC5fTVclvlLIJ3hoSbxQ8vqcRSTFeskp1q8Nd1_ymJlSl54=bE'

let bannerIdList = []
//let duplicatedCount = 0
let finishCount = 0
let rewardAmount = 0


///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        $.msg(jsname+': 此脚本不做重写，请检查重写设置')
    }
    else
    {
        if(!(await checkEnv())) {
            return
        }
        
        for(let i=0; i<jctqLookStartbodyArr.length; i++) {
            let lookStartBody = jctqLookStartbodyArr[i]
            await adlickstart(lookStartBody,i)
            await $.wait(200)
        }
        
        for(let i=0; i<jctqCookieArr.length; i++) {
            console.log(`========== 查询第${i+1}个账户看看赚宝箱领取状态 ==========`)
            userCookie = jctqCookieArr[i]
            await getBoxRewardConf()
        }
        
        await getStatus()
        await showmsg()
    }
  

})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

//通知
async function showmsg() {
    
    notifyBody = jsname + "运行通知\n\n" + notifyStr
    
    if (notifyFlag != 1) {
        console.log(notifyBody);
    }

    if (notifyFlag == 1) {
        $.msg(notifyBody);
        //if ($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}

async function checkEnv() {
    
    if(!jctqLookStartbody) {
        console.log(`未获取到看看赚body`)
        return false
    }
    
    if(jctqLookStartbody.indexOf('&') > -1) {
        jctqLookStartbodyArr = jctqLookStartbody.split('&')
    } else {
        jctqLookStartbodyArr.push(jctqLookStartbody)
    }
    
    let numBody = jctqLookStartbodyArr.length
    console.log(`找到${numBody}个看看赚body`)
    
    if(jctqCookie) {
        if(jctqCookie.indexOf('@') > -1) {
            let jctqCookies = jctqCookie.split('@')
            for(let i=0; i<jctqCookies.length; i++) {
                jctqCookieArr.push(replaceCookie(jctqCookies[i]))
            }
        } else {
            
            jctqCookieArr.push(replaceCookie(jctqCookie))
        }
    }
    
    return true
}

function replaceCookie(jctqCookieItem) {
    if(jctqCookieItem.indexOf('cookie=') == -1 && jctqCookieItem.indexOf('zqkey=') > -1) {
        jctqCookieItem = jctqCookieItem.replace(/zqkey=/, "cookie=")
    }
    if(jctqCookieItem.indexOf('cookie_id=') == -1 && jctqCookieItem.indexOf('zqkey_id=') > -1) {
        jctqCookieItem = jctqCookieItem.replace(/zqkey_id=/, "cookie_id=")
    }
    if(jctqCookieItem.indexOf('app_version=') == -1) {
        jctqCookieItem = 'app_version=8.3.7&' + jctqCookieItem
    }
    return jctqCookieItem
}

///////////////////////////////////////////////////////////////////

//看看赚任务
async function adlickstart(lookStartBody,idx) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/nameless/adlickstart.json'
    let urlObject = populatePostUrl(url,lookStartBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        let bannerId = result.items.banner_id
        //if(await checkDuplicated(lookStartBody,bannerId)) {
            if(result.items.comtele_state == 1) {
                console.log(`第${idx+1}个看看赚[id:${bannerId}]已完成`)
            } else {
                let readNum = result.items.see_num - result.items.read_num
                if(readNum == 0) readNum++
                console.log(`开始做第${idx+1}个看看赚[id:${bannerId}]任务，还需要阅读${readNum}次，开始阅读...`)
                for(let i=0; i<readNum; i++) {
                    let waitTime = Math.floor(Math.random()*1000)+7000
                    await $.wait(waitTime);
                    await readLookStartArt(lookStartBody,i)
                }
                await $.wait(1000)
                await adlickend(lookStartBody,idx)
            }
        //} else {
        //    console.log(`第${idx+1}次看看赚任务[id:${bannerId}]重复`)
        //}
    } else {
        console.log(`激活第${idx+1}个看看赚失败：${result.message}`)
    }
}

//阅读看看赚文章
async function readLookStartArt(lookStartBody,idx) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/nameless/bannerstatus.json'
    let urlObject = populatePostUrl(url,lookStartBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        console.log(`----阅读第${idx+1}次完成`)
    } else {
        console.log(`----阅读看看赚文章第${idx+1}次失败：${result.message}`)
    }
}

//看看赚任务完成
async function adlickend(lookStartBody,idx) {
    let caller = printCaller()
    let url = 'https://tq.xunsl.com/v5/nameless/adlickend.json'
    let urlObject = populatePostUrl(url,lookStartBody)
    await httpPost(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.success == true) {
        finishCount++
        rewardAmount += parseInt(result.items.score)
        console.log(`完成第${idx+1}次看看赚[id:${result.items.banner_id}]任务，获得${result.items.score}金币`)
    } else {
        console.log(`完成第${idx+1}次看看赚任务失败：${result.message}`)
    }
}

//看看赚宝箱状态
async function getBoxRewardConf() {
    let caller = printCaller()
    let reqCk = 'device_type=android&' + userCookie
    let url = 'http://tq.xunsl.com/WebApi/Nameless/getBoxRewardConf?' + reqCk
    let urlObject = populateGetUrl(url)
    urlObject.headers.Referer = 'http://tq.xunsl.com/h5/20190527watchMoney/?' + reqCk
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        if(result.data && result.data.list && Array.isArray(result.data.list)) {
            for(let i=0; i<result.data.list.length; i++) {
                let boxItem = result.data.list[i]
                if(boxItem.status == 1) {
                    await $.wait(Math.floor(Math.random()*2000)+32000)
                    await getBoxReward(boxItem.id)
                }
            }
        }
    } else {
        console.log(`获取看看赚宝箱状态失败：${result.message}`)
    }
}

//看看赚宝箱领取
async function getBoxReward(id) {
    let caller = printCaller()
    let reqCk = 'device_type=android&' + userCookie
    let url = `http://tq.xunsl.com/WebApi/Nameless/getBoxReward?id=${id}&${reqCk}`
    let urlObject = populateGetUrl(url)
    urlObject.headers.Referer = 'http://tq.xunsl.com/h5/20190527watchMoney/?' + reqCk
    await httpGet(urlObject,caller)
    let result = httpResult;
    if(!result) return
    
    if(result.status == 1) {
        rewardAmount += parseInt(result.data)
        console.log(`打开第${id+1}个看看赚宝箱获得：${result.data}金币`)
    } else {
        console.log(`领取看看赚宝箱失败：${result.message}`)
    }
}

//看看赚去重
/*
async function checkDuplicated(lookStartBody,bannerId) {
    for(let i=0; i<bannerIdList.length; i++) {
        if(bannerId == bannerIdList[i]) {
            duplicatedCount++
            await removeBody(lookStartBody)
            return false
            break;
        }
    }
    bannerIdList.push(bannerId)
    return true
}

//删除看看赚body
async function removeBody(lookStartBody) {
    newBody = $.getdata('jctqLookStartbody').replace(lookStartBody,"");
    newBody = newBody.replace("&&","&");
    $.setdata(newBody,'jctqLookStartbody');
}
*/

//统计运行情况
async function getStatus() {
    notifyStr += `本次运行情况：\n`
    notifyStr += `共完成了${finishCount}个看看赚任务，获得${rewardAmount}金币\n`
}

////////////////////////////////////////////////////////////////////
function populatePostUrl(url,reqBody){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
        },
        body: reqBody
    }
    return urlObject;
}

function populateGetUrl(url){
    let rndtime = Math.floor(new Date().getTime()/1000)
    let urlObject = {
        url: url,
        headers: {
            'request_time' : rndtime,
            'Host' : 'tq.xunsl.com',
            'device-model' : 'VOG-AL10',
            'device-platform' : 'android',
            'Connection' : 'keep-alive',
            'app-type' : 'jcweather',
        }
    }
    return urlObject;
}

async function httpPost(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(caller + ": post请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        httpResult = JSON.parse(data,caller);
                        if(logDebug) console.log(httpResult);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

async function httpGet(url,caller) {
    httpResult = null
    return new Promise((resolve) => {
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(caller + ": get请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data,caller)) {
                        httpResult = JSON.parse(data);
                        if(logDebug) console.log(httpResult);
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function safeGet(data,caller) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(`Function ${caller}: 未知错误`);
            console.log(data)
        }
    } catch (e) {
        console.log(e);
        console.log(`Function ${caller}: 服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function printCaller(){
    return (new Error()).stack.split("\n")[2].trim().split(" ")[1]
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
