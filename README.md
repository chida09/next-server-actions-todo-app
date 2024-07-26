## 概要
 - お試し用のTODOアプリ
 - 技術スタック： next, prisma, apollo, graphql

## 参考情報
[Next.js, Prisma, Apollo GraphQL, Nexusで作るシンプルTODOアプリ](https://zenn.dev/youichiro/articles/9e028d0a3b45e3)  
[Next.js 14でStableになったServer ActionsでCRUD操作 | アールエフェクト](https://reffect.co.jp/nextjs/next-js-server-action-14#Server_Actions-2)

```bash
// db console login
psql -d next_graphql_simple_todo_app

// データベースの内容を確認
npx prisma studio
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
