# AIhome 展示站

这是给 Cloudflare Pages 准备的 AI Home Workbench 静态展示站，包含免安装版下载入口、原创使用说明、GitHub 链接、隐私页、SEO 基础文件和 AdSense 预留位。

## 部署到 Cloudflare Pages

1. 把 `aihome-site` 目录推送到 GitHub 仓库。
2. 在 Cloudflare Pages 新建项目并连接该仓库。
3. 如果仓库根目录就是本目录，构建命令留空，输出目录填 `.`。
4. 如果本目录只是仓库里的子目录，项目 Root directory 填 `aihome-site`，构建命令留空，输出目录填 `.`。
5. 绑定域名后，把 `sitemap.xml`、`robots.txt` 中的 `https://mindsetdiary.site/` 改成最终域名。

## 配置 AdSense

真实投放前需要先在 Google AdSense 中添加并审核域名。

审核通过后修改两个文件：

1. `adsense-config.js`
   - `enabled` 改成 `true`
   - `client` 改成你的 `ca-pub-xxxxxxxxxxxxxxxx`
   - 如果使用手动广告位，把 `top` 和 `guide` 改成广告单元 slot
2. `ads.txt`
   - 把 `pub-0000000000000000` 改成你的 AdSense 发布商 ID

如果只启用 Auto ads，可以先只填写 `client` 并保持 slot 为空。

## 主要链接

- GitHub 仓库：https://github.com/Yuzhirou-419/ai-home-workbench
- 免安装版：https://github.com/Yuzhirou-419/ai-home-workbench/releases
- 源码 ZIP：https://github.com/Yuzhirou-419/ai-home-workbench/archive/refs/heads/main.zip
- Releases：https://github.com/Yuzhirou-419/ai-home-workbench/releases
