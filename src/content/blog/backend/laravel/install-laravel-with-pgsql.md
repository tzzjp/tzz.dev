---
title: "Laravelプロジェクト新規作成（with pgsql）"
tags:
    - laravel
    - pgsql
    - laravel sail
---

Laravel Sail で新規プロジェクト作成する時、デフォルトで mysql 使いますが、PostgreSQL を使いたいので、`with=pgsql` で PostgreSQL を使うようにします。

``` bash
curl -s "https://laravel.build/test-app?with=pgsql" | bash
```

*[test-app]は新規作成プロジェクト名*
