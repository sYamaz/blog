# Claude Code Instructions

## Language

このプロジェクトは日本人メンバーのみが参画しているため、すべてのコミュニケーション（コメント、ドキュメント、提案、レビューなど）は**日本語**で行ってください。

## Project Overview

[Eleventy](https://www.11ty.dev) (11ty) ベースの日本語技術ブログ。Nunjucksテンプレートとmarkdownでコンテンツを管理する静的サイト。

## Architecture & Key Components

- **`.eleventy.js`**: SSG設定のコア。コレクション・パススルーコピー・カスタムフィルターを定義。`sortedpost`コレクションは日付降順ソート。ソースディレクトリは`src/`。
- **`src/_includes/`**: Nunjucksレイアウトテンプレート。`layout.njk`がベースHTML構造；`post.njk`が個別記事ページ用。
- **`src/posts/`**: Markdownコンテンツ。各記事はフォルダ単位（例: `src/posts/post-slug/index.md`）で、画像は`img/`サブフォルダに配置。
- **`src/styles/`**: CSSファイル。`reset.css`で正規化；`custom.css`でスタイリング。パススルーコピーで出力。
- **`src/index.njk`**: `collections.sortedpost`をイテレートして記事一覧を表示するホームページテンプレート。

## Content & Frontmatter

すべてのMarkdown記事にはYAMLフロントマターが必要：
```yaml
---
title: 記事タイトル
date: YYYY-MM-DD
tags: post
layout: post
---
```

**重要**: `tags: post`がないとコレクションに含まれない。`layout: post`は`post.njk`テンプレートを使用する。

## Markdown Conventions

- **見出しレベル**: `##`（h2）と`###`（h3）のみ使用。`#`はテンプレートが自動生成するタイトル用に予約済み。
- **画像**: `src/posts/{post-slug}/img/`に配置し、ローカル参照：`![alt text](./img/filename.png)`
- **テキストlintルール**（`.textlintrc`）: 日本語スペーシングプリセット有効。漢字連続最大6文字（例外：「応用情報技術者試験」）。

## Development Workflows

- **ローカル開発**: `npm run dev` - `http://localhost:8080`でライブリロード付きウォッチモード起動
- **本番ビルド**: `npm run build` - `_site/`ディレクトリに静的サイト生成
- **テキストlint**: `npm run textlint` - `posts/**/*.md`の日本語テキストルール検証

## Custom Filters & Collections

- **`excerpt(content, length)`**: HTMLタグを除去してN文字（デフォルト140）に切り詰め。記事一覧プレビューで使用。
- **`date(dateObj)`**: 日付を`YYYY-MM-DD`形式でフォーマット。
- **`sortedpost`コレクション**: `tags: post`を持つすべてのMarkdownファイルを日付降順ソート。

## Output Structure

Eleventyは`_site/`（`.eleventy.js`で設定）にファイルを生成。ソースディレクトリは`src/`：
- `src/posts/post-slug/index.md` → `_site/posts/post-slug/index.html`
- `src/posts/post-slug/img/` → `_site/posts/post-slug/img/`

## Dependencies

- `@11ty/eleventy@^3.1.2` - SSGコア
- `textlint@^15.5.0` - 日本語テキストlint
- Textlintプラグイン: 日本語スペーシング・技術文書プリセット

## Common Tasks

**新規記事追加**: `src/posts/{slug}/index.md`を適切なフロントマター（`tags: post`, `layout: post`）で作成。

**テンプレート変更**: `src/_includes/`または`src/index.njk`の`.njk`ファイルを編集。devモードではホットリロードされる。

**画像配置**: `src/posts/{slug}/img/`にコンテンツと並べて配置。自動でパススルーコピーされる。

**スタイル更新**: `src/styles/custom.css`を変更。`layout.njk`経由で全ページに適用される。

## Content Review Guidelines

`posts/`のMarkdownファイルをレビューする際は、以下の専門エージェント指示を参照して包括的なフィードバックを行うこと：

@.github/agents/content-scope-review.md
@.github/agents/privacy-review.md
@.github/agents/compliance-review.md
