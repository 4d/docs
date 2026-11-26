---
id: auto-update
title: AutoUpdate
sidebar_label: AutoUpdate
sidebar_position: 6
description: "AutoUpdate ノードの BuildApplication XML キー: アップデーターのインストール権限の昇格。"
keywords: ["BuildApplication", "XML key", "AutoUpdate", "StartElevated", "updater"]
---

これらのキーはインストール権限を昇格させ、"アップデーター" ユーティリティが [更新された組み込みアプリケーション](../Desktop/managing-updates.md) をシステムの保護された場所にインストールできるようにします。これらは `<AutoUpdate>` ノードの下に配置されます。

キーが True に設定されていて、アップデーターが保護された場所にあるアプリケーションを更新する必要がある場合、管理者権限が必要であることをユーザーに知らせるダイアログボックスが表示され、管理者アカウントでログオンできるようになります。

:::note

Windows では、組み込みアプリケーションを "Program Files" フォルダーにインストールすることは推奨されません。このフォルダーには、4D アプリケーションと互換性のない特有の機構が含まれているためです。

:::

```xml
<Preferences4D>
  <BuildApp>
    <AutoUpdate>
      <CS>
        <Client>
          <StartElevated>True</StartElevated>
        </Client>
        <Server>
          <StartElevated>True</StartElevated>
        </Server>
      </CS>
    </AutoUpdate>
  </BuildApp>
</Preferences4D>
```

## StartElevated

**値**: True / False (デフォルト)

True の場合、更新はマシンの管理者権限で実行されます。False の場合、更新は権限を昇格させずに実行されます。

| XML パス | 更新されるアプリケーション | プラットフォーム |
|---|---|---|
| `AutoUpdate/RuntimeVL/StartElevated` | シングルユーザーアプリケーション | Windows のみ (macOS では常に False) |
| `AutoUpdate/CS/Server/StartElevated` | サーバーアプリケーション | Windows のみ (macOS では常に False) |
| `AutoUpdate/CS/Client/StartElevated` | クライアントアプリケーション | Windows のみ (macOS では常に False) |
| `AutoUpdate/CS/ClientUpdateWin/StartElevated` | macOS 上でビルドされた Windows クライアントアプリケーション | macOS のみ (Windows では無視されます) |
