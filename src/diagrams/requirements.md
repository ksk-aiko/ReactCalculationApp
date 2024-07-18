# 要件定義

## 目的
ReactのuseStateフックを利用して、シンプルかつ直感的な電卓アプリを作成する。

## 機能要件
1. ユーザーはボタンをクリックすることで数値を入力できる。
2. 加算、減算、乗算、除算が可能である。
3. 「=」ボタンをクリックすることで、入力された算術式の結果を計算し、表示する。
4. 「AC」ボタンをクリックすることで、現在の入力をクリアする。
5. 「▶️」ボタンをクリックすることで、最後に入力された文字を削除する。
6. 不正な算術式が入力された場合は、「error」と表示する。

## 非機能要件
1. UIはシンプルで直感的であること。
2. アプリは迅速に応答し、遅延を感じさせないこと。

## 前提条件
1. React開発環境が設定されていること。
2. 基本的なJavaScriptおよびReactの知識があること。