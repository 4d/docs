---
id: licenses-signature
title: ライセンスと署名
sidebar_label: ライセンス＆署名
sidebar_position: 7
description: "Licenses および SignApplication ノードの BuildApplication XML キー: 埋め込みライセンスと macOS 署名。"
keywords: ["BuildApplication", "XML key", "Licenses", "SignApplication", "certificate", "signature"]
---

これらのキーは、アプリケーションビルダーの [ライセンス＆証明書ページ](../Desktop/building.md#licenses--certificate-page) に対応します。

## ライセンス

これらのキーは `<Licenses>` ノードの下に配置されます。これらは、ビルドされるアプリケーションに [運用ライセンス](../Admin/licenses.md#deployment-licenses) を埋め込む方法を定義します。ライセンスが埋め込まれていない場合、アプリケーションはデモモードで起動します。

| キー | 値 | 説明 |
|---|---|---|
| <a name="automaticlicenseintegration"></a>AutomaticLicenseIntegration | True / False (デフォルト) | True の場合、4D はアプリケーションに埋め込む [最適なライセンスを自動的に選択](../Desktop/building.md#application-automatically-embedding-available-licenses) します。False または省略された場合、ライセンスは ArrayLicenseWin / ArrayLicenseMac で指定する必要があります |
| <a name="arraylicensewin"></a>ArrayLicenseWin | パスの配列 | Windows 版のアプリケーションに埋め込むライセンスファイル。ファイルはマシン上の任意の場所に配置できます |
| <a name="arraylicensemac"></a>ArrayLicenseMac | パスの配列 | macOS 版のアプリケーションに埋め込むライセンスファイル。ファイルはマシン上の任意の場所に配置できます |
| <a name="evaluationmode"></a>EvaluationMode | True / False | True の場合、アプリケーションの [評価版](../Desktop/building.md#evaluation-application) がビルドされます |

```xml
<Preferences4D>
  <BuildApp>
    <Licenses>
      <ArrayLicenseWin>
        <ItemsCount>2</ItemsCount>
        <Item1>C:\MyLicenses\4DDP140HJDSOI00FAKE1861.license4D</Item1>
        <Item2>C:\MyLicenses\4UUD140DDE0DISFAKEBC5F.license4D</Item2>
      </ArrayLicenseWin>
      <ArrayLicenseMac>
        <ItemsCount>1</ItemsCount>
        <Item1>MacHD:4DDP140HJDSOI00FAKE1861.license4D</Item1>
      </ArrayLicenseMac>
    </Licenses>
  </BuildApp>
</Preferences4D>
```

## macOS 署名

これらのキーは `<SignApplication>` ノードの下に配置されます。[macOS 署名に使用する証明書](../Desktop/building.md#macos-signing-certificate) を参照してください。

| キー | 値 | 説明 |
|---|---|---|
| <a name="macsignature"></a>MacSignature | True / False | MacCertificate で指定された証明書でアプリケーションに署名するには True でなければなりません |
| <a name="maccertificate"></a>MacCertificate | テキスト | 証明書の名前: 証明書のコモンネーム、またはキーチェーンの完全な ID 優先設定の文字列。MacSignature が True の場合は必須で、指定されていない場合、アプリケーションは署名されません |
| <a name="adhocsign"></a>AdHocSign | True (デフォルト) / False | True または省略された場合、有効な署名が定義されていなければ (MacSignature が存在しない、または MacCertificate が無効)、アプリケーションは *アドホック* 署名で署名されます。False の場合、アドホック署名は適用されません |

```xml
<Preferences4D>
  <BuildApp>
    <SignApplication>
      <MacSignature>True</MacSignature>
      <MacCertificate>Developer ID Application: My Company (XXXXXXXXXX)</MacCertificate>
    </SignApplication>
  </BuildApp>
</Preferences4D>
```
