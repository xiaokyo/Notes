# csrf详解

### 1. 攻击原理

1. 用户登陆了WebA

2. 然后用户接着访问了HackWeb

3. HackWeb有引导到WebA的操作, 而且是用户不知情的引导下让用户自己操作
4. 被攻击的接口直接在登录下可以直接请求处理成功, 导致操作成功, 用户损失

### 2. 防范措施

1. 操作接口改成POST来操作
2. 设置短一点的会话过期, 防止高频触发类似问题
3. 同源检测, Referer
4. 随机数一致性检测: 用户登陆后生成一个随机数, 正常提交带上这个, 服务端校验正确性即可, 而且还可以在cookie中也带上生成的随机数, 三个地方保持一致, 即可验证是用户本人操作



原文(https://segmentfault.com/a/1190000024490213)