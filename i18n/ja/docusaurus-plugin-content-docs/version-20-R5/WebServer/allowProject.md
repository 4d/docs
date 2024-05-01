---
id: allowProject
title: プロジェクトメソッドの許可
---

The 4D tags such as `4DEVAL`, `4DTEXT`, `4DHTML`... as well as the [`/4DACTION URL`](httpRequests.md#/4daction) allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request _http://www.server.com/4DACTION/login_ causes the execution of the _**login**_ project method, if it exists.

このメカニズムは具体的には、インターネット上のユーザーが故意に (あるいは予期せず) Web用でないメソッドを実行してしまうというような、アプリケーションのセキュリティを脅かすリスクをもたらします。 このリスクは以下の 3つの方法で回避できます:

- Filter the methods called via the URLS using the [`On Web Authentication`](authentication.md#on-web-authentication) database method. 欠点: データベースに多くのメソッドが定義されている場合、この方法は管理が困難になります。

- Use the **Available through 4D tags and URLs (4DACTION...)** option found in the Method properties dialog box:

![](../assets/en/WebServer/methodProperties.png)

This option is used to individually designate each project method that can be called using the `4DACTION` special URL, or the `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` tags. このオプションがチェックされていない場合、そのプロジェクトメソッドは HTTPリクエストから直接実行することはできません。 他方、他のタイプの呼び出し (フォーミュラや他のメソッドからの呼び出しなど) ではこれらのメソッドを実行することができます。

このオプションはデフォルトでチェックされていません。 Methods that can be executed through `4DACTION` or specific tags must be specifically indicated.

このプロパティが指定されたプロジェクトメソッドは、エクスプローラーで以下のアイコンが表示されます:

![](../assets/en/WebServer/methodIcon.png)
