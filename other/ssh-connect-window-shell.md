# ssh连接到Windows的shell更改

当连接到 Windows 通过 SSH 后，你确实可以将默认终端更改为 Cmder，这需要一些配置步骤。以下是实现这一点的方法：

1. 首先，确保你已经在 Windows 系统上安装了 Cmder。

2. 配置 SSH 服务器以使用 Cmder：

   - 编辑 OpenSSH 服务器配置文件（通常在 `C:\ProgramData\ssh\sshd_config`）
   - 找到并修改 `Shell` 参数，指向 Cmder 的可执行文件

   ```
   Shell C:/path/to/cmder/cmder.exe
   ```

   或者使用 Cmder 的命令行模式：

   ```
   Shell C:/path/to/cmder/vendor/conemu-maximus5/ConEmu.exe /cmd cmd.exe
   ```

3. 重启 SSH 服务使更改生效：

   ```
   Restart-Service sshd
   ```

另一种方法是使用 SSH 客户端的配置：

如果你是从远程机器连接到 Windows，你可以在 SSH 会话建立后，在远程 Windows 上启动 Cmder。这可以通过在 SSH 连接后运行 Cmder 的路径来实现。

请注意，某些 SSH 实现可能对终端仿真有限制，而且直接替换 SSH 的默认 shell 可能会导致一些功能兼容性问题。

你也可以考虑配置 SSH 服务器来直接运行你想要的命令或脚本，这样在连接时自动启动 Cmder。