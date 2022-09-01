---
id: upload
title: "$upload"
---


サーバーにアップロードしたファイルの ID を返します

## 詳細
サーバーにアップロードしたいファイルがある場合にこのリクエストを POST します。 画像の場合には `$rawPict=true` を渡します。 その他のファイルの場合は `$binary=true` を渡します。

デフォルトのタイムアウトは 120秒ですが、`$timeout` パラメーターに任意の数値を渡してタイムアウトを変更できます。

## 画像アップロードの例
画像をアップロードする前に、Webアプリケーションからのファイルの使用のための HTML 5 ビルトイン API を使ってクライアント上で対象となるファイルオブジェクトを選択しておく必要があります。 ファイルを適切に扱うため、4D はファイルオブジェクトの MIMEタイプ属性を使います。

次に、4D Server に選択した画像をアップロードします:

 `POST  /rest/$upload?$rawPict=true`

**結果**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

 この画像をエンティティに追加するには、返された ID を使い [`$method=update`]($method.md#methodupdate) で画像属性に保存します:

 `POST  /rest/Employee/?$method=update`

**POST データ**:

````
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
````

**レスポンス**:

更新後のエンティティが返されます:

````
{
    "__KEY": "12", 
    "__STAMP": 5, 
    "uri": "http://127.0.0.1:8081/rest/Employee(12)", 
    "ID": 12, 
    "firstName": "John", 
    "firstName": "Smith",
    "photo":
    {
        "__deferred":
        {
            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",
            "image": true
        }
    },}
````
 
