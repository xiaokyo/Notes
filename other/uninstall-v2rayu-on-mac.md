# 在 mac 上彻底删除 v2rayU

```zsh
cd ~/Library/LaunchAgents/
/bin/launchctl remove yanue.v2rayu.v2ray-core
/bin/launchctl remove yanue.v2rayu.http

rm -f ~/Library/LaunchAgents/yanue.v2rayu.v2ray-core.plist
rm -f ~/Library/Preferences/net.yanue.V2rayU.plist
rm -f ~/Library/Logs/V2rayU.log

rm -fr ~/.V2rayU/
```
