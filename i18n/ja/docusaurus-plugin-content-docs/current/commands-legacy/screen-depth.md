---
id: screen-depth
title: SCREEN DEPTH
slug: /commands/screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN DEPTH.Syntax-->**SCREEN DEPTH** ( *depth* ; *color* {; *screen*} )<!-- END REF-->
<!--REF #_command_.SCREEN DEPTH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| depth | Integer | &#8592; | 画面の深度 (カラーの数 = 2^深度) |
| color | Integer | &#8592; | 1 = カラー画面、0 = 白黒またはグレイスケール |
| screen | Integer | &#8594;  | 画面番号、または省略した場合には主画面(メインスクリーン) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SCREEN DEPTH.Summary-->Screen depthコマンドは、モニターについての情報を引数*depth*と*color*に返します。<!-- END REF-->

 画面の深度が引数*depth*に返されます。画面の深度は、モニター上に表示されるカラーの数を表す2のべき乗の指数です。例えば、モニターが256色(2^8) に設定されている場合、画面の深度は8になります。  

4Dでは、以下の表の定義済み定数が用意されています。

| 定数                        | 型    | 値  |
| ------------------------- | ---- | -- |
| Black and white           | 倍長整数 | 0  |
| Four colors               | 倍長整数 | 2  |
| Millions of colors 24 bit | 倍長整数 | 24 |
| Millions of colors 32 bit | 倍長整数 | 32 |
| Sixteen colors            | 倍長整数 | 4  |
| Thousands of colors       | 倍長整数 | 16 |
| Two fifty six colors      | 倍長整数 | 8  |

モニターがカラーを表示するよう設定されている場合、*color*には*1*が返されます。モニターがグレイスケールを表示するよう設定されている場合、*color*には*0*が返されます。この値は、Macintoshのプラットフォーム上で重要であることに注意してください。

4Dでは、以下の表のように前もって定義された定数が用意されています。

| 定数            | 型    | 値 |
| ------------- | ---- | - |
| Is color      | 倍長整数 | 1 |
| Is gray scale | 倍長整数 | 0 |
  
  
オプションの引数*screen*は、得たい情報のモニターを指定します。引数*screen*を省略すると、コマンドは主画面 (メインスクリーン) の深度を返します。

#### 例題 

アプリケーションが多くのカラーグラフィックスを表示するとします。その場合には、データベースのどこかに以下のように記述することができます。

```4d
 SCREEN DEPTH($vlDepth;$vlColor)
 If($vlDepth<8)
    ALERT("The forms will look better if the monitor"+" was set to display 256 colors or more.")
 End if
```

#### 参照 

[Count screens](count-screens.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 439 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


