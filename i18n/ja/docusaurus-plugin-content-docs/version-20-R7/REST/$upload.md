---
id: upload
title: $upload
---

サーバーにアップロードしたファイルの ID を返します

## 説明

サーバーにアップロードしたいファイルがある場合にこのリクエストを POST します。 画像の場合には `$rawPict=true` を渡します。 その他のファイルの場合は `$binary=true` を渡します。

デフォルトのタイムアウトは 120秒ですが、`$timeout` パラメーターに任意の数値を渡してタイムアウトを変更できます。

## アップロードシナリオ

エンティティのピクチャー属性を更新するために、画像をアップロードしたい場合を考えます。

画像 (または任意のバイナリファイル) をアップロードするには、まずクライアントアプリケーションにてファイルを選択する必要があります。 ファイル自体はリクエストの **ボディ** に渡す必要があります。

次に、下のようなリクエストを使用して、選択した画像を 4D Server にアップロードします:

`POST  /rest/$upload?$rawPict=true`

その結果、サーバーからはファイルを識別する ID が返されます。

**レスポンス**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

この画像をエンティティに追加するには、返された ID を使い [`$method=update`]($method.md#methodupdate) で画像属性に保存します。 リクエストは次のようになります:

`POST  /rest/Employee/?$method=update`

**POST データ**:

```
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
```

**レスポンス**:

更新後のエンティティが返されます:

```
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
```

## 4D HTTPクライアントを使った例

次の例では、4D HTTPクライアントを使用して、_.pdf_ ファイルをサーバーにアップロードする方法を示します。

```4d
var $params : Text
var $response : Object
var $result : Integer
var $blob : Blob


ARRAY TEXT($headerNames; 1)
ARRAY TEXT($headerValues; 1)

$url:="localhost:80/rest/$upload?$binary=true" // RESTリクエストの準備

$headerNames{1}:="Content-Type"
$headerValues{1}:="application/octet-stream"

DOCUMENT TO BLOB("c:\\invoices\\inv003.pdf"; $blob) // バイナリの読み込み

 // ファイルをアップロードするための 1つ目の POSTリクエスト
$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)

If ($result=200) 
    var $data : Object
    $data:=New object
    $data.__KEY:="3"
    $data.__STAMP:="3"
    $data.pdf:=New object("ID"; String($response.ID)) 

    $url:="localhost:80/rest/Invoices?$method=update" // エンティティを更新するための 2つ目のリクエスト

    $headerNames{1}:="Content-Type"
    $headerValues{1}:="application/json"

    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)
Else
    ALERT(String($result)+" Error")
End if
```
