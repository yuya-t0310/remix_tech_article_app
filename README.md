# 環境構築
```
// プロジェクト作成
npx create-remix@latest

cd your-project-name
npm install

// Tailwind CSS導入
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// .envファイルで環境変数を管理
npm install dotenv

touch .env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

// prismaでデータベーススキーマを管理
npm install prisma @prisma/client
npx prisma init

// ユーザ認証
npm install remix-auth
```
  


# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
