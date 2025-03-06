---
id: wp-set-link
title: WP SET LINK
slug: /WritePro/commands/wp-set-link
displayed_sidebar: docs
---

<!--REF #_command_.WP SET LINK.Syntax-->**WP SET LINK** ( *targetObj* ; *linkObj* )<!-- END REF-->
<!--REF #_command_.WP SET LINK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| linkObj | Object | &#8594;  | ハイパーリンクの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP SET LINK.Summary-->**WP SET LINK** は*targetObj* 引数で指定したターゲットオブジェクトに、ハイパーリンク参照を割り当てます。<!-- END REF-->URL、4Dメソッド、そしてブックマークへのリンクがサポートされます。リンクは、ユーザーがそれをクリック(あるいはURLを開くのにテキストが編集可能な場合、Windows では**Ctrl+クリック**、macOS では**Cmd+クリック**)をすることでアクションがトリガーされます。

*targetObj* 引数には、リンクを適用したい4D Write Pro オブジェクトを渡します。以下のものを渡すことができます:

* レンジ
* 要素(テーブル / 行 / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション)
* 4D Write Pro ドキュメント

例えばヘッダーを渡した場合、ヘッダーのコンテンツ全体がハイパーリンクとして表示されます。ドキュメントにリンクを挿入する場合、4D Write Pro は以下のルールに基づいてリンクを適用します:

* 複数の段落を含む*targetObj* に対してリンクを設定した場合、複数の個別のリンクが定義されます。
* 既にリンクが適用されている*targetObj* に対してリンクを設定した場合:  
   * *targetObj* のターゲットオブジェクト内に完全に含まれている既存のリンクは全て削除され、*targetObj* には新しいリンクが適用されます。  
   * リンクの一部分が選択されていた場合(*targetObj* と一部交差していた場合)、リンクの範囲は縮小し、選択されていない部分は以前のリンクを保つ一方、*targetObj* の範囲内には新しいリンクが適用されます。

*linkObj* 引数には、ハイパーリンクの詳細を格納したオブジェクトを渡します。以下のプロパティのどれか一つだけを格納している必要があります(ただしparameter プロパティはmethod プロパティと同時に併用することが可能です):

| **プロパティ** | **型**      | **詳細**                                                                                                           | **ハイパーリンクアクション**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url       | テキスト       | URL型ハイパーリンクのリンク先(エンコードされたURL)。                                                                                   | 標準のWeb アドレスへの参照(http または https://*website*、mailto:*abc@xyz.com、*など): デフォルトアプリケーション(一般的にはブラウザ)でURLを開きますファイルパスへの参照(絶対パスあるいは4D ストラクチャーファイルからの相対パス)、または.4wp or .4w7 ファイルへの参照(file://*filepath* または *filepath/file.4wp*): ファイルを読み込みカレントのドキュメントを置き換えます。他のファイルタイプを参照していた場合、そのファイルタイプに対するシステムのデフォルトのアプリケーションでそのファイルを開きます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| bookmark  | テキスト       | ブックマーク名                                                                                                          | カレントフォキュメント内の指定されたブックマークにアクセスします(*ブックマークコマンド*参照)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| method    | テキスト       | プロジェクトメソッド名 - メソッドは存在しかつ[SET ALLOWED METHODS](../../commands/set-allowed-methods.md) コマンドで許可されている必要があります。 | クリックされると4Dメソッドを実行します。メソッドは自動的に二つの引数を$1と$2に受け取ります:<br/><table><tbody><tr><td>**引数**</td><td>**プロパティ**</td><td>**型**</td><td>**詳細**</td></tr><tr><td>$1</td><td></td><td>テキスト</td><td>4D Write Pro エリア名</td></tr><tr><td>$2</td><td></td><td>オブジェクト</td><td></td></tr><tr><td></td><td>method</td><td>テキスト</td><td>4D メソッド名</td></tr><tr><td></td><td>parameter</td><td>テキスト \| 数値</td><td>*parameter* プロパティを通してメソッドに送られるユーザー引数(任意、以下参照)</td></tr><tr><td></td><td>range</td><td>オブジェクト</td><td>*targetObj* のレンジ</td></tr></tbody></table> |
| parameter | テキスト \| 数値 | *method* 型のリンクでのみ使用可能、メソッドが引数を必要としない場合には必須ではありません。メソッドに送るための追加の引数を格納しています。                                       | メソッド内の$2.parameter に受け取られます                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**注:**

* 4D Write Pro は有効な(エンコードされた)URL しか受け付けません。リンク内の特殊文字は変換されません。特殊文字(例:スペースは %20 など)が必要な場合は、それらを別途明示的にエンコードする必要があります。リンクが有効でない場合、エラーが生成されます。
* 4D Write Pro ドキュメントから4D メソッドへのリンクは、ドキュメントがHTML、MIME HTML、あるいは .docx フォーマットに書き出される際に除去されます。
* *targetObj* のターゲットオブジェクトからリンクを除去したい場合、*リンクコマンド* の段落を参照してください。

#### 例題 1 

ウェブサイトへのリンクを、ドキュメントのフッターエリアに追加したい場合を考えます:

```4d
 var $footer : Object
 $footer:=WP Get footer(WPArea;1)
 WP SET TEXT($footer;"Please visit our website";wk replace)
 WP SET LINK($footer;New object("url";"http://www.4d.com"))
```

#### 例題 2 

ドキュメント内での全てのブックマークを使用して、リンクつきの目次ページを作成したい場合を考えます:

```4d
 var $i;$n;$p;$memoStart : Integer
 var $range;$link;$toc;$tocRange;$positionInfo;$target : Object
 var $text : Text
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea1;$_bookmarks) //全てのブックマークを検索
 
 $n:=Size of array($_bookmarks)
 If($n>0)
    $tocRange:=WP Text range(WParea1;wk start text;wk start text) //テキストの開始位置を探す
    WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range) //テキストの前に改ページを追加
 
    For($i;1;$n) // 目次とリンクを挿入
       $range:=WP Bookmark range(WParea1;$_bookmarks{$i})
       $positionInfo:=WP Get position($range)
       $memoStart:=$tocRange.end
       WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)
 
       $target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))
       $link:=New object("bookmark";$_bookmarks{$i})
       WP SET LINK($target;$link)
       WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)
    End for
 End if
```

#### 例題 3 

ドキュメントの"4D"という文字列にそれぞれ4Dメソッドへのリンクを設定したい場合を考えます:

```4d
 var $text,$find : Text
 var $p : Integer
 var $range;$link : Object
 
 $text:=WP Get text(wpArea;wk expressions as value) //ドキュメント内の全てのテキストを取得
 
 $find:="4D" //リンクをつけるターゲット
 
 $p:=Position($find;$text) //ターゲットの出現箇所を全て探すためにテキスト内をループ
 If($p>0)
    $range:=WP Text range(wpArea;$p;$p+Length($find)) //ターゲットの長さを設定
  //create the link object
    $link:=New object("method";"myAlert";"parameter";"4D rocks!") //SET ALLOWED METHODS でメソッドを許可することをお忘れなく
 
    WP SET LINK($range;$link)
 End if
```

#### 参照 

  
[WP Get links](wp-get-links.md)  