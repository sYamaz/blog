# Blog

[eleventy](https://www.11ty.dev)製のシンプルなSSGブログサイト

## フォルダ

```
$PROJECT_ROOT
│   # レイアウト定義
├── _includes
│   # postsの記事が参照する画像置き場
├── img
│   # markdown記事
├── posts
│   # css
└── styles
```

## post(markdown)の書き方

1. 先頭にfrontmatterをつけること
```yml
---
title: タイトル
date: 2026-01-05
tags: post
layout: post
---
```

`tags`, `layout`は`post`固定

2. 見出しは1,2のみ使うこと（それ以降はcss非対応）。タイトルが見出し1なので主に見出し2を使うと良い