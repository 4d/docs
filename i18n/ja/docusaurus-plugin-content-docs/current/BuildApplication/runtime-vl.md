---
id: runtime-vl
title: RuntimeVL
sidebar_label: RuntimeVL
sidebar_position: 2
description: "RuntimeVL キー"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

`<RuntimeVL>` ノードには、[LastDataPathLookup](#lastdatapathlookup) キーが 1つだけ含まれます。

```xml
<Preferences4D>
  <BuildApp>
    <RuntimeVL>
      <LastDataPathLookup>ByAppPath</LastDataPathLookup>
    </RuntimeVL>
  </BuildApp>
</Preferences4D>
```

## 概要

| キー | 値 | 説明 |
|---|---|---|
| [RuntimeVL/LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | シングルユーザーアプリケーションのデータリンクモード |


## シングルユーザーアプリケーション (RuntimeVL)

### LastDataPathLookup

```text title="XML パス"
/Preferences4D/BuildApp/RuntimeVL/LastDataPathLookup
```

シングルユーザーアプリケーションの [データリンクモード](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) を定義します:

| 値 | データファイルパスの検索 | データファイルパスの保存先 |
|---|---|---|
| InDbStruct | ストラクチャーファイルに保存されたパス | ストラクチャーファイル内 (以前の動作) |
| ByAppName | *LastDataPath.xml* 内の最新のエントリー | ユーザー環境設定 |
| ByAppPath | *executablePath* がアプリケーションのパスに合致するエントリー | ユーザー環境設定 |

クライアント/サーバーアプリケーションにも同じキーが存在します: [CS/LastDataPathLookup](./client-server.md#lastdatapathlookup)。
