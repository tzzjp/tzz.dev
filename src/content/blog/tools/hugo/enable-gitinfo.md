---
title: "Git情報を使う"
---

作成者、作成時間などGit情報を使うには、設定が必要です。

1. 設定ファイル修正

    ```toml
    enableGitInfo = "true"
    ```

1. テンプレートで使う

    ```go
    {{with .GitInfo}}
        {{.AuthorName}}{{.AuthorDate}}
    {{end}}
    ```
