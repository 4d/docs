---
id: http-authenticate
title: HTTP AUTHENTICATE
slug: /commands/http-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.HTTP AUTHENTICATE.Syntax-->**HTTP AUTHENTICATE** ( *name* ; *password* {; *authMethod*} {; *} )<!-- END REF-->
<!--REF #_command_.HTTP AUTHENTICATE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | ユーザー名 |
| password | Text | &#8594;  | ユーザーパスワード |
| authMethod | Integer | &#8594;  | 認証方式: 0または省略時=指定しない、1=BASIC、2=DIGEST |
| * | 演算子 | &#8594;  | 指定時: プロクシ認証 |

<!-- END REF-->

:::info 互換性

このコマンドは互換性のためだけに維持されています。現在は [`4D.HTTPRequest クラス`](../API/HTTPRequestClass.md) を使用することが推奨されています。

:::


#### 説明 

<!--REF #_command_.HTTP AUTHENTICATE.Summary-->**HTTP AUTHENTICATE**コマンドはクライアントアプリケーションの認証を要求するサーバーへのHTTPリクエストを可能にします。<!-- END REF-->*と* *password*引数には必要な認証情報 (ユーザー名とパスワード) を渡します。この情報はエンコードされ、[HTTP Request](http-request.md)または[HTTP Get](http-get.md)を使用して送信されるHTTPリクエストに追加されます。

オプションの*authMethod*引数を使用して、使用する認証メソッドを指定できます。*HTTP Client*テーマの以下の定数を使用できます:

| 定数          | 型    | 値 | コメント              |
| ----------- | ---- | - | ----------------- |
| HTTP basic  | 倍長整数 | 1 | BASIC認証メソッドを使用する  |
| HTTP digest | 倍長整数 | 2 | DIGEST認証メソッドを使用する |

*authMethod*引数を省略するか0を渡した場合、適切なメソッドを4Dが選択します。この場合4Dは認証メソッドをネゴシエートするために追加のリクエストを送信します。

*\** 引数を渡すと、認証情報はHTTPプロクシに提供されることを意味します。この設定はクライアントとHTTPサーバーの間に認証を必要とするプロクシが存在する場合に必要となります。サーバー自身も認証を行い場合、二重の認証が必要となります。

デフォルトでは認証情報は一時的に保管され、カレントプロセス内においてはそれぞれのリクエスト毎に再使用されます。しかしながら[HTTP SET OPTION](http-set-option.md) コマンドでオプションを設定する事により各リクエスト後にこの情報をリセットする事ができます。この場合、[HTTP Request](http-request.md) または [HTTP Get](http-get.md)コマンドを呼び出す前に**HTTP AUTHENTICATE** コマンドを実行する必要があります。

#### 例題 

認証付きリクエストの例:

```4d
  // DIGESTモード
 HTTP AUTHENTICATE("httpUser";"123";2)
  // プロクシ経由デフォルトモード
 HTTP AUTHENTICATE("ProxyUser";"456";*)
 $httpStatus:=HTTP Get(...)
```

#### 参照 

[HTTP SET OPTION](http-set-option.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1161 |
| スレッドセーフである | &check; |


