---
id: versioning
title: バージョン管理キー
sidebar_label: バージョン管理
sidebar_position: 5
description: "Versioning ノードの BuildApplication XML キー: ビルドされるアプリケーションのバージョン番号、著作権、ファイル情報。"
keywords: ["BuildApplication", "XML key", "Versioning", "version", "copyright"]
---

これらのキーは、ビルドされるアプリケーションのバージョン番号とファイル情報を定義します。これらは `<Versioning>` ノードの下の、以下のいずれかのサブノードに配置されます:

| サブノード | キーのプレフィックス | 対象 | 省略時のデフォルト値 |
|---|---|---|---|
| `<Common>` | Common | ビルドされるすべてのアプリケーション | 4D アプリケーションの値 |
| `<RuntimeVL>` | RuntimeVL | シングルユーザーアプリケーション (4D Volume Desktop) | `Common...` キー、次に 4D Volume Desktop の値 |
| `<Client>` | Client | クライアントアプリケーション (4D Volume Desktop) | `Common...` キー、次に 4D Volume Desktop の値 |
| `<Server>` | Server | サーバーアプリケーション (4D Server) | `Common...` キー、次に 4D Server の値 |

各サブノードは同じ 10個のキーを受け付け、キー名は *プレフィックス* + *情報* の形式です (例: `CommonVersion`、`ClientVersion`、`ServerVersion`、`RuntimeVLVersion`)。特定のキーと、対応する `Common...` キーの両方が定義されている場合は、特定のキーが使用されます。

```xml
<Preferences4D>
  <BuildApp>
    <Versioning>
      <Common>
        <CommonVersion>1.0.5</CommonVersion>
        <CommonCopyright>© 2026 My Company</CommonCopyright>
        <CommonCompanyName>My Company</CommonCompanyName>
      </Common>
      <Server>
        <ServerFileDescription>My Application Server</ServerFileDescription>
      </Server>
    </Versioning>
  </BuildApp>
</Preferences4D>
```

## キー

| 情報 | キー | プラットフォーム | 値 | 更新されるフィールド |
|---|---|---|---|---|
| <a name="version"></a>Version | CommonVersion, RuntimeVLVersion, ClientVersion, ServerVersion | Windows, macOS | バージョン番号 (x.x.x) | Windows: 製品バージョン<br/>macOS: info.plist 内の `CFBundleShortVersionString` および `CFBundleVersion` |
| <a name="copyright"></a>Copyright | CommonCopyright, RuntimeVLCopyright, ClientCopyright, ServerCopyright | Windows, macOS | テキスト | Windows: 著作権<br/>macOS: info.plist 内の `NSHumanReadableCopyright` |
| <a name="creator"></a>Creator | CommonCreator, RuntimeVLCreator, ClientCreator, ServerCreator | macOS | 最大 4文字 | アプリケーションのクリエーターコード |
| <a name="comment"></a>Comment | CommonComment, RuntimeVLComment, ClientComment, ServerComment | Windows | 最大 31文字 | コメント |
| <a name="companyname"></a>CompanyName | CommonCompanyName, RuntimeVLCompanyName, ClientCompanyName, ServerCompanyName | Windows | 最大 31文字 | 会社名 |
| <a name="filedescription"></a>FileDescription | CommonFileDescription, RuntimeVLFileDescription, ClientFileDescription, ServerFileDescription | Windows | 最大 31文字 | ファイルの説明 |
| <a name="internalname"></a>InternalName | CommonInternalName, RuntimeVLInternalName, ClientInternalName, ServerInternalName | Windows | 最大 31文字 | 内部名 |
| <a name="legaltrademark"></a>LegalTrademark | CommonLegalTrademark, RuntimeVLLegalTrademark, ClientLegalTrademark, ServerLegalTrademark | Windows | 最大 31文字 | 商標 |
| <a name="privatebuild"></a>PrivateBuild | CommonPrivateBuild, RuntimeVLPrivateBuild, ClientPrivateBuild, ServerPrivateBuild | Windows | 最大 31文字 | プライベートビルド |
| <a name="specialbuild"></a>SpecialBuild | CommonSpecialBuild, RuntimeVLSpecialBuild, ClientSpecialBuild, ServerSpecialBuild | Windows | 最大 31文字 | スペシャルビルド |

Windows では、更新されたフィールドはアプリケーションファイルの **プロパティ** ウィンドウに表示されます。一方のプラットフォームにのみ適用されるキーは、もう一方のプラットフォームでは無視されます。

macOS の info.plist ファイルについては、[生成されるファイル](../Desktop/building.md#generated-files) も参照してください。
