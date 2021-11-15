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

    await GetSign();
    await $.wait(1000); 
    await HomePacket();
    await $.wait(1000);
    await Homevideo();
    await $.wait(1000);
    await TimePacket();
    await $.wait(1000);
    await TimePacket1();
    await $.wait(1000);
    await TimingPacket();
    await $.wait(1000);

 
}

//签到
function GetSign() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
        const headers = {
            'request_time': '1634692228',
            'access': '4G',
            'device-platform': 'android',
            'app-version': '8.1.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'ant.xunsl.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.2'
        };
        const body = "p=S1HH-fn083Io=oMisThwCJ-M4N7AfqRNmBLNlIZYdczPsacy5M1LBv2_ePTexZoppgkZNDH9txXi_vZJqBXxttelEt4pspONzD6tID-1Q9unup0aWqX-SLYHusdXWvulwNq6vFsMnEmAyr8dcJRAfJ44eZknML4PENZe-iV5gznuXPJoa7OqQJ4Ruqx5VyoI7Ju3l5nA-XOIdZPFzFmyp74tXsKVbbNxkdGILFgOK3j54dXNl0rIjbwlTeAH2j0MfuVedeb8oQeR5DhyYZE6B7f-Bhc8Sh2jzUWIRP7yypE7SaUt6LuB3fRyVhTW2R2gVZbV-fJSxNAzZ74q-0ELrTTxP1NWCVGD76tFXvWSj1-xNMz5-Vy4mQioiEdJ-Xy0jrXMAQYVr5zbfEiTZZwX_LIZGld7i3b6PmSDOc5MLK_Cb5rJFaOhe_04sh7fkcSl-8fmSjKMNKSIVnUfOQ15LZiOoEETW6ig5JNOxOY7rzBxPOHZIej7L99bT5im2vpjGGWWHpY8k0ifKuOYZbLm5HjGDz5ZJTLy6T16w2pSkNy_P9z2NqABsjd63M-dwy7Cj-YAr7lIRTZ-dUuOoH0f_eVVEeZ8XRwOQ203qDRqrGK95-Km9WQgOVsMqtDVdvDVsuav1L7K7FGUE9PeyVSrWXCIOoA4oKl-PMqQ2b6wi4wHYulJfmsG5PhT6Hwh-njnVV3kpRrXbi7neiO2_v8mRr8YJauWHLx7z5eQJp8lYeIkwWpUjOL40JQ_mN-0VOqJ_anRq8KgauuZy_TF2dbKtVgGexHwsrBh3VcCTsRvxg60V9jfRTYLLzYt_7m2aj_j34AUFBuBZOLQaMdH0BOrDx2XxdnBJemzdJIGFQ9rYPLsmfw4N9gNrNfagcK7n0yW-hDKXiK2B-INGPmaghgqzSHVKiNY8yoRPD6H9YlpaIlIJofWUccqRNizOukkfYgKxijpUEVON9daphGIM0ETuZQ7sJNHjF6WitiCb_D2MNORqQupX0dHXr7WZPdeWqGt6kW9FyiwS0D53boxTmre_oyYEJ3cmalAguKYyNbLZosemOtr3wzUPOVSK0ubqusguYo7hIXl9SyadJ4hKyvdO5kdS7Y_vDys6ybDqRJvseTtHkwDj2-EtCjEGiF979IqDn82b_f7yrjrRTT8p1AeSaDgtFDVghqBHZoxWx9IXNiJROk0mfJuTirs=";
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
                    $.log(`【签到奖励】+${result.data.score}金币`);
                    await GetSign1();
                    await $.wait(1000);
                }
                else
                {
                    $.log(`【签到奖励】${result.msg}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

//签到翻倍
function GetSign1() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/v5/CommonReward/toDouble.json";
        const headers = {
            'request_time': '1634422388',
            'access': '4G',
            'device-platform': 'android',
            'app-version': '8.1.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'ant.xunsl.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.2'
        };
        const body = "p=W7jvhIkVyrvg=ANvXoumpFwOrXuoVAqVeHT14bq1NhTJzbiqZqy_MXXKS5wUQIXgfDWO7_Ilv4K1nbRGCSK-Hxjb9hXdJ9XKEMvKUOuTNODlUYFP8SbH-vz1IvT96yV-RpDq5kSg9bttEzh5aX-8dMo3_SpTQLSaA2DatIOS47YdSe0iuczTrktPtViTtDLfTA9smSWFKi-5703qBbEAM8GrsZF0V5a9122OY-qgJgzaFMIiqC3RSflM9hpvsaWnOw_-rCYb8u9dDZQQ9KpPV82CDqQID-VyU5PbLk6rmZWHgYHx15pxsGP89SqnTRN9PsvOMj2xj5qFMvc33utOPWKMZA6AiYEBNYeedLZSclCwDeTqMrBolF7YY2VK1MdD-qTyYUcpM6CQ5C_sHD-NVg27ZBQpghfzdb8SdAglHdFZ4SeFMvN3CylL2V4RjCk1bWvWwfPd3oINJI_sNtnQTsExoYQ4wpRvvSyfAt799g0PM7I6iHQz2nJUBJ2k3F88xxwc0H6ypFhWbois2lqhUUozjkjR9Go3X9qZQZrw0a5ZhloJ0_Eb48tXnBRFnM2-L0kyi4W5QpAvOmiFPTROsM4pqTd2YqBHu_GKbKv36eKgbUJzhkuifYjrOtDM1HHghIHqky6tYnkLlbalbngnz6tTqR9fHNHvlPcncd4GAhfozrMzRbbJ6td4-49lQv1UdvTdOFzUjo8wmqWuFbnx3ApQZAKNWO0J8222kZen-Awa9Ev38s0IfFKPiBLsewdoo0HAhBYhhHXpsx_LWQgzZbNlZxxgRT32qU0s_iy2447W6Yuoptu4wNUj4GXc5bXhmD5vSWgjtJn01UfBLUfRAUZ98PAR6VAY96H0k3aujgzaMdfEIDgTzqCqcbuRzcVjZVbcOJMLU0c_nc44kREbswEDTu-mOSAQBjGVKKY8vfXjuVVKAGcZJF906pqJTN8V_Jd5phvdvZy-O7lOJV0MnVbDNc9oVbppdZu_mVVrfQnAP-At_Q-xnz-vG-qF1o97CwO_QcuLFlWHxWM3Ejt_fIkWQNntylvTnTdquIw5dXSnk7oic6za8YUimdFKAG-vyRHQHTbMchB94lFlia7vjBYTyVnRytTdAuOSf9cyOD9pb2F4qskxNxJINCkGI1esDZODlj0qASmO1ODHFHRrnvbL_140e858T3niH8Mn0HSb9eSaGPd4oSL6lVvEV43wWdg==G";
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
                    $.log(`【签到翻倍奖励】+${result.data.score}金币`);
                }
                else
                {
                    $.log(`【签到翻倍奖励】${result.msg}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

//首页
function HomePacket() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
        const headers = {
            'request_time': '1634422228',
            'access': '4G',
            'device-platform': 'android',
            'app-version': '8.1.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'ant.xunsl.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.2'
        };
        const body = "p=f4W7v2WlUNXk=OizDqIly7NWI8mNFoeFk-qq-O2z20KPpHBywxONYCcbTbQiIJDRliVhBapXgjWQOoEBDgVgHJ3g8IOaDulYUnlBtvn8C_DCOWMJoSAJIAhkR8vuuw8N8ga96-5rZpip4__QOeF7WUV2mXC6hT3VCv2r3lFGhJLkZ9RmTUGDSH-cyikDNzrZChL6dY4IVkO6xj98o4TrQoeXJFM6_snxIUiUW5dWWpqgtzYN9BbDPGW-EVZYoBOJnGiAvwkesmdz1f_KkI9dUJEjPKQrxde5aV8bVVPzcBkkRhln3q1REbA0ZpP4D_B_H00mbXXDtZuua29aeBD9mn7iifRqBqu43aQxCmD8dKxAWvWVmqpjV54GOXUlc43Fm_9ePx4M6VvdS1HaTh8eBsTTTHo_YUPyDJ-82pgIwBpg8mgBivAvf98CVBcv2LXPnvjHSUUKo5fWhrOnmEUun_YuXkeyu9ZOICqIw7UtJLnoBCf95O_Uf7sIrfqolZ4ZpY5fmNTL4QOLEdaCrx2J9YA9F5BCHSTZSrBGY4oKshZHLCDsrEdlNlittrIoLQ6fZIzHOzr0uJMzjXuItBcB8pxZl3DXrKh5BHe7M-_hNQshfL3WCTFToJaLPncE-jNdvEsgmaFJntSiIaj6npmly9EMIDrT0acw3vcahQq9ujwahKOEOb8mNzaLHs_nAgrWO8meqwdI6xOQHpvRPygHKOwOe7TLp_IADFjCwCjUz_XlbqubWul9mfwZsput1LVMn-OPQpjKdzWD7w30E_MTGu_1KQEPLjLiilluhk45q_oduZfS42ACmWKJVwGIHw0mJTTfUq4uZUrZ5_c5raNSth2SjebbkK5SrVNqav4lWCFHIECcKQQNVvl0cVJ0WTpvpdlcDGaKd9jLdG0_djsqmOj6Uh_m7ZWDA1Q3Bg7YlqzMV3SeTVnlHFpWwUZn_C4YGdonPWgzEe7l86U6ypkI7g3Xi0o1WnJtttRAEuUpkv1mufGfUHDVpWgiGzJBSjstHTrlMmuaCycmFiSGAaOBTiMZDdP9bjyyLovNfWO1A0sn4VAoPt1qJRjECRZOog0H6oZM6bIXFpRy-H8Di9zNiphEPgHmV60dfxWzeQEU4Ghs5BLvk1NkBnEwnWFcy5R1M9jaKgh54UTwe_bhMS5XN_B1HCzBXGWYtQUPmNkU7mylCNepS_a5Klh8=f4";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result=JSON.parse(data);           
                if(result.data&&result.items.score)
                {
                    $.log(`【首页红包奖励】+${result.items.score}金币`);
                }
                else
                {
                    $.log(`【首页红包奖励】${result.message}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

//首页视频
function Homevideo() {
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
                if(result.items&&result.items.dialog&&result.items.dialog.score)
                {
                    $.log(`【首页视频奖励】+${result.items.dialog.score}金币`);
                }
                else
                {
                    $.log(`【首页视频奖励】${result.message}`);
                }
                    
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

//时段奖励
function TimePacket() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/v5/CommonReward/toGetReward.json";
        const headers = {
            'request_time': '1634489188',
            'access': '4G',
            'device-platform': 'android',
            'app-version': '8.1.2',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'ant.xunsl.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.2'
        };
        const body = "p=q1HH-fn083Io=kcwK6k8y-7-OHdSqcwNtVie95kAmloPTuzq5WjMQiieyEQ0jp4gXthoch_OMNeK-D-w14_UAlHjiIx_8ZwkFGfETCf2INPpXURw5DEVSe9HsGDWklvgYSwTqo1WJW59gnOq5ESWQiGbydnG-uHFZDR57epDaFGYR8dgYDBPFJKTegJfIigUNJqwp6ff-mkjfKF-G74eRHBWazS3UKfdi6SRC1S4EKfVtRLwE7ZcUhIy4LRP4vKsecDFtlMw27U1mul8c7GHDc7zc0NVQSgK8YWk8ddHVc2F7ykBRUXS1yWUzgHFy2PrmFfElHRKPrnvvZxzrV10Mo9srIoqVFQjb4vUkyyZj-uq7l72ZB3f0Bx7OztE0wbYAjRprY4uEa432IdOyM80ICp-3duG1kEBVDRCmYiHbwldX0giginBsLv9grtdnQiW-yilFCNaBh5ilpay0Uu5HuU6chkolXI_AdZR5h4S4JmCxuEwp9u8tU4juh6Eg7aAtLpN5th4yzF_KtgyXnuQyFBfyJtxOIkQ5haJWJEiXDBqB2eMm0l8Hsn3SxupwJVuVTlVQ1OXTMK6nfLiO2Yymr369DHxfibx6loTU0OjFDxm-HoRtLfSTeCSVy6ulZu1zKn6nFDGFFZdFtw9YUdlvdRR-UIpvgHJoc9jywKpfI6MVdV8_O-RK8ebWNBB2ZobzO6q1Es4Q_DyG05iBu9EZQTn_WOP7s86Z4nSBoL0d5-f0Lk-qD6SW25e0pah_CwIlNpEqcSq520WnRQBpk4B5h3RygkyR8VYBIyB3ZEgl0vQhW7vOg6y3KyeLGasHAY38g1bwf7h2qTOWNH4Tqlu3AOYA5tqLrG0vSovpkQBIJV6yg5ozUWfAsK9e57SqqxhEA49lPNhRDUmQ2PZyod3mRAPwCr1gTQOOTrdfxdUIKQzFEcNReFLFgK3g1IvtEZfz_GC1Sg1_KVAhTG2sTxDECNRI7dExKBXxVZmPBhmyeLV9B2IMzxxXS8PCEyz1_uOH3pDLQXVEaG_EGdo5bwVU5CoEiMsDmL_0xw8XVyLrkr76MRP7iN_FHmebZ5wCNlSUBuhud7GMZMAXFP2AmCIF_uJ9SAs2P1CwjSGfMptgRDLFc3BICz_xmxphyYresKzDgoQv5_Tw3YzJQ5ZyFIo4S4M=";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result=JSON.parse(data);           
                if(result.data&&result.items.score)
                {
                    $.log(`【时段红包奖励】+${result.items.score}金币`);
                }
                else
                {
                    $.log(`【时段红包奖励】${result.message}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

//计时奖励
function TimePacket1() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/WebApi/TimePacket/getReward";
        const headers = {
            'Referer': 'https://ant.xunsl.com/h5/20200612makeMoney/?access=4G&app-version=8.3.2&app_type=jckd&app_version=8.3.2&carrier=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&channel=c1005&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdjW6FooabrqmiapqGcXY&cookie_id=57782dceeac7b9bf1b6bec24a730ce00&device_brand=SMARTISAN&device_id=6f9c21802e9e7d69&device_model=SM919&device_platform=android&device_type=android&inner_version=202109031457&mi=0&openudid=6f9c21802e9e7d69&os_api=23&os_version=MXB48T%20release-keys&phone_network=4G&phone_sim=1&request_time=1636964935&resolution=1440x2560&sim=1&sm_device_id=202109291605277cd2e35c7911bcbb3f30a0fecc28a12b01b20b831a219744&subv=1.2.2&time=1636964935&uid=55242014&uuid=a22b385d22664feb807ee85febb9ba55&version_code=832&version_name=%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdjW6FooabrqmiapqGcXY&zqkey_id=57782dceeac7b9bf1b6bec24a730ce00'
        };
        const body = "";
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

//定时宝箱
function TimingPacket() {
    return new Promise((resolve, reject) => {
        const url = "https://ant.xunsl.com/WebApi/invite/openHourRed";
        const headers = {
            //'Referer': ''
        };
        const body = "access=4G&app-version=8.3.2&app_type=jckd&app_version=8.3.2&carrier=CHN-CT&channel=c1005&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdhWmFjHrer7m6apqGcXY&cookie_id=1151e6340221527ef9fd47ec22857953&device_brand=SMARTISAN&device_id=6f9c21802e9e7d69&device_model=SM919&device_platform=android&device_type=android&inner_version=202109031457&mi=0&openudid=6f9c21802e9e7d69&os_api=23&os_version=MXB48T+release-keys&phone_network=4G&phone_sim=1&request_time=1634451167&resolution=1440x2560&sim=1&sm_device_id=202109291605277cd2e35c7911bcbb3f30a0fecc28a12b01b20b831a219744&subv=1.2.2&time=1634451167&uid=55242014&uuid=a22b385d22664feb807ee85febb9ba55&version_code=832&version_name=%E6%99%B6%E5%BD%A9%E7%9C%8B%E7%82%B9&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl6-FrWKwzXWxhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdhWmFjHrer7m6apqGcXY&zqkey_id=1151e6340221527ef9fd47ec22857953";
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
                    $.log(`【随机宝箱奖励】+${result.data.score}金币`);
                }
                else
                {
                    $.log(`【随机宝箱奖励】${result.msg}`);
                }

            } catch (e) {
                $.log(e)
            }
            resolve();
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
