---
id: object-to-path
title: Object to path
slug: /commands/object-to-path
displayed_sidebar: docs
---

<!--REF #_command_.Object to path.Syntax-->**Object to path** ( *pathObject* : Object ) : Text<!-- END REF-->
<!--REF #_command_.Object to path.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pathObject | Object | &#8594; | パスの中身を定義するオブジェクト |
| 戻り値 | Text | &#8592; | パス名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16 R6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Object to path.Summary-->**Object to path** コマンドは*pathObject* 引数に渡したパス情報をもとにしたパス名(文字列)を返します。<!-- END REF-->以下のパスがサポートされます:

* システムパス(Windows あるいはmacOS)あるいはPosix パス。パスのタイプは*parentFolder* プロパティの最後の文字によって定義されます(詳細後述)。
* 相対パスあるいは絶対パス(詳細は*絶対 / 相対パス名*を参照してください)。

*pathObject* 引数には、生成したいパスを定義するオブジェクトを渡します。渡すオブジェクトには以下のプロパティが含まれて居る必要があります:

| **プロパティ**    | **型** | **詳細**                                                                                                                                          |
| ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| parentFolder | テキスト  | パスのディレクトリ情報。最後の文字はフォルダセパレータである必要があります。コマンドはこの文字を使用してパスのタイプを判別しています。最後の文字がPosixセパレータ("/")である場合、パスはPosixシンタックスで作成されます。それ以外の場合にはシステムシンタックスが使用されます。 |
| name         | テキスト  | 拡張子を含まない、指定されたパスの最後のファイル名あるいはフォルダ名                                                                                                              |
| extension    | テキスト  | 最後のファイル名あるいはフォルダ名の拡張子。"."で始まります(省略可能)。拡張子をつけない場合には" "(空の文字列)を渡します。                                                                              |
| isFolder     | ブール   | 名前がフォルダ名である場合にはTrue、それ以外の場合にはFalse(デフォルトはFalse です)                                                                                              |

通常、*pathObject* は[Path to object](../commands/path-to-object) コマンドによって生成されますが、オブジェクトはどのような手段を用いて作成しても構いません。**Object to path** コマンドは文字列を受け取るだけだという点に注意してください。パスが指定されたパスタイプに対して有効であるかをチェックすることはしませんし、指定されたファイルあるいはフォルダが実際に存在するかどうかもチェックはしません。

## 例題 

ファイルを同じフォルダ内に複製して名前を変更したい場合を考えます:

```4d
 var $o : Object
 $o:=New object
 var $path : Text
 $path:="C:\\MyDocs\\file.txt"
 
 $o:=Path to object($path)
 $o.name:=$o.name+"_copy"
 COPY DOCUMENT($path;Object to path($o))
```

## 参照 

[Convert path POSIX to system](../commands/convert-path-posix-to-system)  
[Convert path system to POSIX](../commands/convert-path-system-to-posix)  
[File](../commands/file)    
[Folder](../commands/folder)    
[Path to object](../commands/path-to-object)  
[Test path name](../commands/test-path-name)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1548 |
| スレッドセーフである | yes |



