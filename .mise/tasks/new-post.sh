#!/usr/bin/env bash
set -euo pipefail

# スラグの入力（引数またはインタラクティブ）
if [ $# -ge 1 ]; then
  SLUG="$1"
else
  read -rp "Slug（ケバブケース英語）: " SLUG
fi

# タイトルの入力
if [ $# -ge 2 ]; then
  TITLE="$2"
else
  read -rp "タイトル（日本語）: " TITLE
fi

# 今日の日付
DATE=$(date +%Y-%m-%d)

# パスの構築
POST_DIR="src/posts/$SLUG"
POST_FILE="$POST_DIR/index.md"
IMG_DIR="$POST_DIR/img"

# 既存チェック
if [ -d "$POST_DIR" ]; then
  echo "エラー: $POST_DIR は既に存在します" >&2
  exit 1
fi

# ディレクトリ・ファイル作成
mkdir -p "$IMG_DIR"
cat > "$POST_FILE" <<EOF
---
title: $TITLE
date: $DATE
tags: post
layout: post
---

EOF

echo "作成完了: $POST_FILE"
echo "画像フォルダ: $IMG_DIR"
mise run edit "$POST_FILE"
