
# **01_学習を始める前に**

## **1-2 様々な種類のWebサイト**

- [ ] お気に入りのサイトを探してみよう！
- https://sankoudesign.com/

## **1-4 webサイトの仕組み**

![start](img/01_start1-1.png)

## **環境構築**

- [ ] VSCode  
- https://code.visualstudio.com/download
- [ ] Chrome  
- https://www.google.com/intl/ja_jp/chrome/
- [ ] googleアカウント作成  
- googleアカウントでログインしておくと後で楽
- [ ] 拡張子の表示  
- `[エクスプローラー]>[表示]>[ファイル名拡張子]`チェック

<br>

## **ブラウザに文字を表示してみる**

- [ ] ①フォルダとファイルの作り方  
- `[デスクトップ]>[プログラミング]>[練習]`  
<br>
- [ ] ②VSCodeからフォルダを開く  
- `[デスクトップ]>[プログラミング]`を指定  
<br>
- [ ] ③index.htmlを新規作成  
![start](img/01_start1-2.png)　　
<br>
- [ ] ④保存  
- 保存前  
![start](img/01_start1-3.png)  
- **ショートカットキー（Cntl + S）**  
- 保存後  
![start](img/01_start1-4.png)
<br>
- [ ] ⑤ブラウザ表示  
- `[デスクトップ]>[プログラミング]>[練習]>index.html`  をダブルクリック  
![start](img/01_start1-5.png)

## **コースで作成するサイト**
 
- [ ] ①猫のサイト（サンプルサイト作成）

- https://webgakushu.com/TRY/webcorse/

- [ ] ②自己紹介サイト（課題と自由制作）  
- [ ] ③Webアワードサイト（自由制作）

# **02_HTMLの基本**

- 完成形をイメージする
- サイトマップ
- 情報の意味を考える
- 情報の分類（見出し・文章・画像・箇条書き・表・リンク）
- グループの考え方  
  課題：完成サイトをみながら、情報を分類してみる
- ファイル・フォルダ作成  
    `[プログラミング]>[cat]`  
    `>[images]`  
    `>index.html`  
- 命名規約　トップページのファイル名
- HTMLの書き方
- タグの書き方　開始タグ　終了タグ
- VSCode予測入力をうまく使う
- 基本構造  
    `<html><head><body>`
- インデント、コメントアウト、ショートカットキー、emmet

# **02_TOPページのHTML**

## **TOPページのHTMLを書いてみよう**

- グループ化
`<header><main><footer>`
<!-- 大きな記事のグループ -->  
`<div class="content1">`  
`<div class="content2">`  
<!-- 小さな記事のグループ -->  
`<div class="cat_like">`  
<!-- 小さな記事３つ -->  
`<div class="article">`  

- 文字の表示
`<h1><h2><h3>`  
`<p>`  
- リスト
`<ul>`  
- 画像  
`<img>`  
- リンク  
`<a>`  
- テーブル  
`<table>`  

- 課題：自己紹介サイト再現課題　HTML編（完成をみて再現する）
- タイトル
- メインビジュアル
- 個人情報
- 記事

## **自己紹介サイトの企画**

- figmaの使い方
- Canvaの使い方
  

# **CSSの基本**

- CSSの書き方
- CSSファイルの作成
- htmlにリンク
- 別ファイルで作る意味
- background-colorで練習
- セレクタ・プロパティ・値の意味
- 順次実行　後ろに書いたものが優先
- リセットCSS
- ディベロッパーツールの使い方
- カラーピッカーの使い方
- ボックスモデルの説明

# **CSSデザイン（TOPページのデザイン）**

## **TOPページのデザイン**

### **全体のCSS**

- html,bodyに対して
- font-size
- color
- font-family

### **配置**

- flex
- 単位の説明%,rem,px

### **背景画像**

- background-image

### **文字の装飾**

- font-size
- text-align
- line-height
- font-family
- Webフォント
- width,height
- margin,padding  

課題：自己紹介サイト再現課題　CSS編①（完成形をみて再現する）

# **2ページ目以降の作成**

## **conceptページのHTMLを書く**

### **conceptページのファイルを作成**

- concept.html
  
### **共通部分の作成　どこが共通部分か把握**

### **ヘッダーの作成**

- タイトル
- ナビゲーション
- 
### **フッターの作成**

- ロゴ
- フッターナビゲーション

### **item,contact用にコピーする**

### **conceptメインの作成**

- flex  
課題：自己紹介サイト再現課題　CSS編②（完成形をみて再現する）  
課題：自己紹介サイト２ページ目以降　自由課題  

- itemページ
- itemメインの作成
- grid
- infomationページ
- infomationメインの作成
- googleMap
- table
- form

# **Webアワード制作**

## **企画**

- figjamの使い方
- ターゲット・効果・伝えたいこと・コンテンツ決め
- サイトマップ
- ワイヤーフレーム
- コーディング
- フォルダ・ファイル作成

# **CSSアニメーション**

- hover
- transition
- position:fixed
- animation　（必要な生徒だけ）
- position:absolute/relative（必要な生徒だけ）

# **レスポンシブ対応**

# **JQuery プラグイン（必要な生徒だけ）**

- スライダー
- スクロールで動き出すアニメーション
- ローディング
- ハンバーガーメニュー
