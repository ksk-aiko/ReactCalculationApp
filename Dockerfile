# ベースイメージとして公式のNode.jsイメージを使用
FROM node:14

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json ./
COPY package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY src ./src
COPY public ./public

# 開発サーバーを起動
CMD ["npm", "start"]

