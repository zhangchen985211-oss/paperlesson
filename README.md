# 📖 PaperLesson — 精读课程网站

> 逐篇拆解论文与教材，构建个人知识体系的精读平台。

## 项目简介

PaperLesson 是一个纯静态的精读课程网站模板。它不依赖后端，所有课程内容通过数据驱动渲染，新增课程只需编辑一个数据文件，无需修改主页。

**核心理念**：少而精 — 每一页课程都是对一篇论文或一本教材的深度拆解，包含公式解读、代码验证、课后练习和开放思考。

**示例课程**：[注意力机制详解](lessons/0001-示例课程.html)（包含 MathJax 公式、交互练习、可运行代码）

## 文件结构

```
.
├── index.html                    # 🌐 主页（数据驱动，自动渲染课程列表）
├── shared/
│   └── theme.css                 # 🎨 全局主题样式（CSS 变量体系）
├── data/
│   └── course-catalog.js         # 📋 数据源（三分层结构）
├── lessons/
│   ├── assets/
│   │   ├── course.css            # 课程页专用排版样式
│   │   └── course.js             # 课程页交互脚本（折叠练习、复制代码等）
│   └── 0001-示例课程.html        # 示例课程（参考模板）
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages 自动部署
├── MISSION.md                    # 项目使命
├── README.md                     # 本文件
├── learning-records/
│   └── 0001-template.md          # 学习记录模板
└── .gitignore
```

### 三层数据结构

```
分馆 (group) → 来源块 (collection) → 课程页 (lesson)
   │                  │                   │
论文馆/教材馆      一篇论文/教材       一节课
```

- **分馆**：如「论文馆」、「教材馆」，对应不同内容类型
- **来源块**：如「Attention Is All You Need」、「深度学习（花书）」
- **课程页**：如「理解注意力机制」、「位置编码详解」——每节一个 HTML 文件

## 快速开始

### 本地预览

```bash
cd ~/paperlesson
python -m http.server 8000
```

然后访问 http://localhost:8000

### 添加新课程

1. 在 `lessons/` 下创建新 HTML 文件（参考 `0001-示例课程.html` 的格式）
2. 引用 `../shared/theme.css` 和 `assets/course.css`
3. 在 `data/course-catalog.js` 对应的 collection 的 `lessons` 数组中添加条目
4. 本地预览确认无误后推送

### 使用 Hermes 工作流（推荐）

```bash
# 1. 加载添加新课 skill
skill_view(name='paperlesson-course-workflow')

# 2. 输入指令
请添加新课："论文路径或主题"，把内容拆分成多节可连续学习的 HTML 课程。
```

## 课程 HTML 规范

每个课程文件应包含：

| 区块 | 说明 |
|------|------|
| `<header class="lesson-header">` | 课程标题、编号、时长、难度 |
| `<section class="lesson-section">` | 每节课的逻辑单元，含 h2 标题 |
| `<div class="formula-block">` | LaTeX 公式展示（\[...\]） |
| `<div class="concept-box">` | 核心概念高亮框 |
| `<div class="code-block">` | 代码示例（带语言标注） |
| `<details class="quiz">` | 课后练习（折叠交互） |
| `<div class="tip info/warning/success">` | 提示框 |
| `<nav class="lesson-nav">` | 底部导航 |
| `<script src="assets/course.js">` | 交互脚本 |

## 部署指南

### GitHub Pages 自动部署

项目已内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`），推送到 `main` 分支后自动部署。

1. 在 GitHub 创建 Public 仓库
2. 推送代码到 `main` 分支
3. 在仓库 Settings → Pages 中确认 Source 为 GitHub Actions
4. 等待 1-2 分钟，访问 `https://<用户名>.github.io/<仓库名>/`

### 手动部署

```bash
git add -A
git commit -m "📚 更新内容"
git push origin main
```

## 配色方案

| 变量 | 值 | 用途 |
|------|-----|------|
| `--bg` | `#F7F4EE` | 暖米纸色背景 |
| `--ink` | `#1A1A2E` | 墨色正文 |
| `--accent` | `#CC785C` | 赤陶橙点缀色 |
| `--border` | `#E8E4DC` | 边框颜色 |

## 技术栈

- **纯静态 HTML + CSS + JS** — 无需构建工具
- **MathJax v3** — LaTeX 公式渲染（CDN 引入）
- **Google Fonts** — Noto Serif SC + Inter + JetBrains Mono
- **GitHub Pages** — 免费托管
- **Hermes Agent Skill** — 工作流自动化

## License

MIT
