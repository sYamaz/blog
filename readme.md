# Blog

[eleventy](https://www.11ty.dev)製のシンプルなSSGブログサイト

## フォルダ

```
$PROJECT_ROOT
├── src/
│   ├── _includes/       # レイアウト定義
│   ├── posts/           # markdown記事
│   │   └── {slug}/img/  # 記事の画像置き場
│   ├── styles/          # css
│   └── index.njk        # ホームページ
├── .github/
│   ├── copilot-instructions.md
│   └── agents/          # レビューエージェント
└── package.json
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

## 記事作成時のレビュー観点

記事を作成する際は、以下の3つの専門エージェントを活用してレビューしてください。各エージェントは独立した詳細なガイドラインを提供しています。

### 1. [コンテンツスコープ・意図レビュー](.github/agents/content-scope-review.md)
- 内容が自身の日常の出来事に範囲がとどまっているか
- 他者や社会を攻撃するような内容でないか
- 建設的で尊重のあるトーンになっているか

### 2. [プライバシー・個人情報レビュー](.github/agents/privacy-review.md)
- 自身や他者の個人情報（住所、電話番号、実名など）を漏洩していないか
- 意図しない識別情報のリークがないか

### 3. [企業機密・評判レビュー](.github/agents/compliance-review.md)
- 所属会社の機密情報や営業秘密を言及していないか
- 所属会社の評価を落とすような内容でないか
- 内部戦略やメトリクス、機密ビジネス実務の開示がないか