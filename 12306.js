/***********************************************
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct
>作者：墨鱼
[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/W126-L/QuantumultX/main/12306.js

[mitm]
hostname = ad.12306.cn
***********************************************/

const version = 'V1.0.22';

var obj=JSON.parse($request.body),ddgksf2013={};"0007"==obj.placementNo?(ddgksf2013.materialsList=[{billMaterialsId:"6491",filePath:"ddgksf2013",creativeType:1}],ddgksf2013.advertParam={skipTime:1},ddgksf2013.code="00"):ddgksf2013="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(ddgksf2013)});
