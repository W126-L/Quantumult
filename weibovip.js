/**************************
 *
 * 

\微\博\+\微\博\轻\享\版\/\国\际\版\
\解\锁\全\部\会\员\图\标\、\限\时\图\标\
\解\锁\部\分\个\性\小\尾\巴\

********************************
# XiaoMao · Tg频道频道：https://t.me/xiaomaoJT
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：

1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/W126-L/QuantumultX/main/weibovip.js

2、解锁位置：
微博 > 我 > 右上角设置 > 会员专属设置 > 个性图标/微博来源
微博轻享版 > 我 > 设置 > 通用 > 显示设置 > APP图标


********************************


[mitm]
hostname = new.vip.weibo.cn,api.weibo.cn,weibointl.api.weibo.cn

[rewrite_local]
https:\/\/new\.vip\.weibo\.cn\/aj\/appicon\/list url script-response-body https://raw.githubusercontent.com/W126-L/QuantumultX/main/wb.js
https:\/\/api\.weibo\.cn\/device\/get url script-response-body https://raw.githubusercontent.com/W126-L/QuantumultX/main/wb.js
https:\/\/weibointl\.api\.weibo\.cn\/portal\.php url script-response-body https://raw.githubusercontent.com/W126-L/QuantumultX/main/wb.js

********************************/
