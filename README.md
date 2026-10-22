# Legal AI Institute

A responsive, English-language institutional website, prepared for **https://legal-ai-institute.github.io/**.

## 文件与本地预览

- `index.html`：全部正文、人员、项目与活动链接。文字可直接编辑。
- `styles.css`：颜色、布局和移动端样式。
- `script.js`：移动端菜单、导航状态、页脚年份。关闭 JavaScript 后正文和所有链接仍可使用。
- `assets/`：原创 SVG 标识与首页图形，以及从港大个人主页取得的两位主任照片；所有资源本地保存，无外部字体或图片请求。
- `.nojekyll`：GitHub Pages 直接发布静态文件。

双击 `index.html` 可直接查看。也可在此目录执行 `python3 -m http.server 8765`，然后打开 `http://localhost:8765`。

## GitHub Pages 发布

1. 登录 **legal-ai-institute** 账号，在 GitHub 新建 **public** 仓库，名称必须是 **legal-ai-institute.github.io**。如果已经存在，先检查其内容，不要覆盖已有网站。
2. 将本目录内的文件上传到仓库的根目录，包括 `index.html`、`styles.css`、`script.js`、`assets/`、`.nojekyll`、`robots.txt` 和 `sitemap.xml`。不要把整个文件夹嵌套上传。
3. 打开仓库 **Settings → Pages**。在 **Build and deployment** 中选择 **Deploy from a branch**，选择 **main** 和 **/ (root)**，点击 **Save**。
4. 等待 GitHub Pages 构建完成，在同一设置页面查看发布状态和 **Visit site** 链接。目标网址为 **https://legal-ai-institute.github.io/**。生成本地网站无需登录；发布需要该仓库的管理权限。

GitHub 官方操作说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 更新人员

在 `index.html` 中搜索 `advisory-title`、`associates-title` 或 `assistants-title`，将对应的 `Members to be announced.` 替换为已确认的姓名和个人主页链接。可在该 section 中添加 `<ul><li><a href="https://...">Name</a></li></ul>`。当前未编造任何待定成员。

## 内容来源与编辑说明

机构名称、两位 Co-Directors、项目归属及 Organized Events 分类按委托人提供的信息设置。首页引言与 About 段落为本次设计拟写的介绍文案，可按最终机构定位调整。网站不使用 HKU 校徽，也不将机构标注为 HKU 官方下属单位；HKU 信息仅用于两位主任的个人学术任职。

两位主任的照片来自其港大法学院个人主页，原图本地保存，按原始比例显示。

- Benjamin Minhao Chen 照片：https://www.law.hku.hk/wp-content/uploads/2025/11/benchen_365x480_acf_cropped.jpg
- Yu Fan 照片：https://www.law.hku.hk/wp-content/uploads/2026/09/yu_profile_365x480_acf_cropped.jpeg
- 获取日期：2026-10-22。照片来源记录不构成开放许可声明。

- Benjamin Minhao Chen：https://www.law.hku.hk/academic_staff/benjamin-m-chen/
- Yu Fan：https://www.law.hku.hk/academic_staff/professor-yu-fan/
- ICML AI for Law Workshop：https://sites.google.com/view/ai4law-icml2026 （活动官网列明 10 July 2026、Seoul）
- HKLII：https://www.hklii.hk/
- CLIC：https://clic.org.hk/en ；项目简介核对来源：https://clic.org.hk/en/about-clic

无构建步骤、无 npm 依赖、无第三方追踪、无后台服务。没有添加未经提供的联系方式、招聘信息、论文、合作机构或成员名单。
