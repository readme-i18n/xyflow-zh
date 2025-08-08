![xyflow](https://github.com/xyflow/web/assets/2857535/36a86114-e925-4669-a2dd-d0ae35cce76d)

# xyflow/web

该单体仓库包含我们的团队网站及库文档。

- [xyflow.com](https://xyflow.com) - 团队官网与博客
- [reactflow.dev](https://reactflow.dev) - React Flow 库的官网与文档
- [svelteflow.dev](https://svelteflow.dev) - Svelte Flow 库的官网与文档

## 包含内容

我们使用 [Turborepo](https://turbo.build/repo) 管理这个单体仓库，因其涉及大量模块。

### apps/

apps 目录包含后端运行项目或开发期间可能需要运行的应用程序：

- `apps/example-apps` 存放 ReactFlow 和 SvelteFlow 的所有示例与教程
- `apps/ui-components` 包含 [React Flow Components](https://reactflow.dev/components) 的所有组件

### packages/

该仓库中的 packages 是可复用的独立模块，用于在应用和网站间共享。大部分内容是我们所用工具的相关配置：

- `packages/eslint-config-xyflow`
- `packages/xy-tailwind-config`  
- `packages/xy-tsconfig`  
- `packages/xy-ui` 是一个 React 组件库，包含我们在各网站间共享的所有组件。该包涵盖从页面布局、UI 基础构件到复杂小部件的所有内容。我们经常使用 [Shadcn](https://ui.shadcn.com) 来添加新组件，并使用 [Tailwind](https://tailwindcss.com) 进行样式设计。

### sites/

sites 文件夹中的每个目录都是我们部署的独立网站，目录名称始终对应网站的域名：

- `sites/reactflow.dev` 是 React Flow 的文档站点，它与其余站点均使用 [Nextra](https://nextra.site/) 和 [Next.js](https://nextjs.org/) 构建  
- `sites/svelteflow.dev` 是我们最新库 Svelte Flow 的文档  
- `sites/xyflow.com` 是我们组织的新首页，包含博客和一些关于我们开源开发方式的信息

## 快速开始

要在本地运行任何网站，首先需要安装依赖项和包。我们推荐使用 [pnpm](https://pnpm.io/) 管理依赖项。

```sh
pnpm install
```

查看 `package.json` 可以看到我们有几个不同的脚本来运行应用。如果想一次性运行所有内容，只需执行：

```sh
pnpm run dev
```

运行两个文档站点可以使用：

```sh
pnpm run dev:docs
```

对于其他应用，每个都有独立的运行脚本：

- `pnpm run dev:reactflow.dev`
- `pnpm run dev:svelteflow.dev`
- `pnpm run dev:xyflow.com`
- `pnpm run dev:style`

### 展示案例项目

我们在Notion中建立了使用我们库的项目数据库。React Flow和Svelte Flow网站都通过`getStaticProps`在构建时获取这些数据。本地运行时需要配置包含`NOTION_API_SECRET`的`.env.local`文件，否则将显示占位案例。

### 更新React Flow和Svelte Flow依赖

我们设有每日检查React Flow和Svelte Flow最新版本的GitHub Action，发现新版本时会自动创建PR。

---

## 通过React Flow Pro支持我们

React Flow和Svelte Flow是永久开源的MIT许可库，已助力Stripe、Linkedin等数千名独立开发者和组织构建节点应用。面对庞大的活跃用户群，维护库、文档和社区需要持续投入，您的支持至关重要。

[<img src="./assets/readme-pro.png">](https://reactflow.dev/pro)

为何订阅？您的订阅将确保 React Flow 和 Svelte Flow 获得可持续的维护与开发。这是我们保持这些库始终采用 MIT 许可证的方式。作为回报，您将获得高质量、持续维护且定期更新的库，同时享有直接技术支持、优先功能请求处理权限以及专业示例访问等权益。

---

## 联系我们

我们很乐意解答您关于库的任何疑问，也始终期待看到大家分享的项目成果。您可以通过以下方式与我们取得联系：

- 通过[官网](https://xyflow.com/contact)联系表单
- 发送邮件至 [info@xyflow.com](mailto:info@xyflow.com)
- 加入我们的[Discord社区](https://discord.com/invite/RVmnytFmGW)