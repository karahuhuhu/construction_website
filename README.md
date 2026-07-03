# Regan Construction

> Architecture for a more thoughtful future.

一个高端建筑事务所风格的极简、高级、图片主导型网站，总部位于加州。灵感来自 Snøhetta / Foster + Partners / BIG 一类的国际建筑事务所官网，未复制任何现有网站。

## 技术栈

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** 5.5
- **Tailwind CSS** 3.4
- 字体：Inter（通过 `next/font/google` 自托管）

## 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 → http://localhost:3000
```

## 可用命令

| 命令 | 作用 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run build` | 生产构建 |
| `npm run start` | 启动生产模式服务器（需先 build） |
| `npm run lint` | ESLint 检查 |
| `npm run typecheck` | TypeScript 类型检查 |

## 项目结构

```
app/
  layout.tsx          根布局（字体、元数据）
  page.tsx            首页（组装所有区块）
  globals.css         全局样式 + 滚动淡入动画
components/
  Navbar.tsx          固定顶栏，滚动时背景由透明渐变为毛玻璃
  Hero.tsx            全屏视觉 Hero + 双 CTA
  FeaturedProjects.tsx 6 个项目卡片，悬停轻微缩放 + 网格叠加
  Philosophy.tsx      公司理念（空间 / 环境 / 材料 / 人）
  Studio.tsx          事务所介绍 + 数据 + 设计流程
  News.tsx            3 条新闻 / 文章卡片
  Footer.tsx          联系方式、3 地办公室、社交链接、版权
  Reveal.tsx          滚动进入视口的淡入动画（IntersectionObserver）
```

## 设计要点

- **极简黑白灰**：以 Tailwind `stone` 色阶 + 深黑 `ink` 为主，无彩色
- **大量留白**：版心 `max-w-[1600px]`，区块纵向间距 `py-24 md:py-36`
- **响应式**：手机端导航切换为汉堡菜单，所有栅格在 `md:` 断点重排
- **滚动淡入**：`.reveal` + `IntersectionObserver`；遵守 `prefers-reduced-motion`
- **悬停动画克制**：图片 `scale-[1.05]` + 1.4s 缓动，避免花哨
- **图片占位**：以 CSS 渐变模拟建筑光影；Hero 内用 SVG 绘制城市天际线剪影

## 部署

### Vercel（推荐）

本项目已部署在 Vercel：

- **生产地址**：https://construction-website-sage-psi.vercel.app
- **GitHub 仓库**：https://github.com/karahuhuhu/construction_website

自动部署：在 Vercel 项目 Settings → Git 中连接 `karahuhuhu/construction_website` 后，
每次 `git push origin main` 会自动触发生产部署。

```bash
# 日常更新流程
git add .
git commit -m "your message"
git push
```

手动部署（CLI）：

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 其他平台

`next build` 产物可部署到任何支持 Node.js 的平台。详见
Next.js 部署文档：https://nextjs.org/docs/app/building-your-application/deploying

## License

© Regan Construction. All rights reserved.
