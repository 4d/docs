---
id: set-table-titles
title: SET TABLE TITLES
slug: /commands/set-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE TITLES.Syntax-->**SET TABLE TITLES** {( *tableTitles* ; *tableNumbers* {; *})}<!-- END REF-->
<!--REF #_command_.SET TABLE TITLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableTitles | Text array | &#8594;  | ダイアログボックスに表示されるテーブル名 |
| tableNumbers | Integer array | &#8594;  | 実際のテーブル番号 |
| * | 演算子 | &#8594;  | フォーミュラエディタでカスタム名を使用 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET TABLE TITLES.Summary-->**SET TABLE TITLES**コマンドを使用すれば、アプリケーションモードにおいて、標準の4Dダイアログボックスに現れるデータベーステーブルを一部隠したり、表示名称を変更したり、並び順を変えたりできます(スタートアップモードが**アプリケーション**である、あるいは**実行**メニューの**アプリケーションをテスト**を選択した場合)。<!-- END REF-->例えばこのコマンドを使用すれば、アプリケーションモードでのクエリエディターのテーブル表示を変更できます。

さらにこのコマンドを使用すると、フォーム上のテーブル名のラベルを直ちに変更することが可能です。これには、ダイナミックな名前を使用します。ダイナミックなテーブル名とフィールド名の挿入についての詳細は、*4Dデザインリファレンスマニュアル*の*スタティックテキスト中で参照を使用する*を参照してください。

引数 *tableTitles* と *tableNumbers* 配列は同期させる必要があります。配列 *tableTitles* には、表示させたいテーブルの名前を渡します。

ある特定のテーブルを表示したくない場合には、そのテーブル名または新しく付けたタイトルを、配列含めないようにします。テーブルはこの配列に指定した順序で表示されます。

配列 *tableNumbers* の各要素には、配列 *tableTitles* にある同じ要素の数値に渡したテーブル名または新しいタイトルに対応する実際のテーブル番号を渡します。

例えば、テーブルA、B、Cで構成されるデータベースがあり、テーブルはこの順序で作成されたとします。表示の際には、これらのテーブルをX、Y、Zという名前にし、さらにテーブルBは表示したくないとします。最終的に、ZとXを、この順序で表示することにします。この場合、配列 *tableTitles* の2つの要素としてZとXを渡し、配列 *tableNumbers* の2つの要素として3と1を渡します。

オプションの *\** 引数は、のコマンドを使用して定義されたカスタムの名前("バーチャル"なストラクチャー)を4Dフォーミュラで使用するかを指定します。デフォルトではこの引数が省略された場合、4D で実行されたフォーミュラはこのカスタムの名前を使用することができないため、実際のテーブルの名前を使用する必要があります。この引数は、ユーザーに提供される情報を管理し、フォーミュラや式が使用されている場面でのインターフェースに必ず統一性をもたせたい場合に渡します。例えば:

* アプリケーションが(例えばクイックレポートエディターなどを経由して)フォーミュラエディターへのアクセスを提供してる場合
* アプリケーションが4D Write Pro ドキュメントなど、式参照を表示する場合

**注:** *\** 引数が渡された場合、4D によって実行されるフォーミュラの内部においてはこのコマンドによって定義される名前が使用されます。**この場合には次の点に注意が必要です。**カスタムの名前には4D ランゲージインタープリタで"禁止されている"文字( -?\*%! 等)を含めることはできません。例えば、"Rate\_in\_%" という名前はフォーミュラでは使用することはできません(詳細な情報については、*識別子* の章を参照してください)。

**SET TABLE TITLES** は、データベースの実際のストラクチャーは**変更しません。**このコマンドは、ランゲージコマンド経由で呼び出された標準の4D エディターとフォームがダイナミックな名前を使用している場合に、コマンドを呼び出した後の使用に影響することを念頭に設計されています。**SET TABLE TITLES**コマンドの有効範囲は、そのワークセッションです。クライアント/サーバにおける利点の1つは、複数の4Dクライアントステーションがそれぞれ異なる見方でデータベースを同時に "見る" ことができる点です。**SET TABLE TITLES** コマンドは、何度でも呼び出せます。

**SET TABLE TITLES**コマンドは、以下のような場合に使用します。

* データベースを動的にローカライズする。
* テーブル表示を、実際のデータベース定義に関係なく、独自のものとする。
* テーブル表示を、ユーザー固有のものや権限によるものとする。

**警告:**

* **SET TABLE TITLES**コマンドはフィールドの非表示属性を上書きしません。データベースの設計レベルでテーブルが非表示として設定されている場合、**SET TABLE TITLES**コマンドへの呼び出しにそのテーブルを指定しても、アプリケーションモードにおいてテーブルは表示されません。
* プラグインは常にコマンドによって指定された仮想ストラクチャへアクセスします。

**SET TABLE TITLES** を引数なしで実行した場合、セッション中のデータベース全体のバーチャルなストラクチャー(カスタムのテーブル名およびフィールド名)は全てリセットされます。

#### 例題 1 

各国で販売する予定の4Dアプリケーションを構築しているとします。この場合、ローカライズの問題を慎重に考慮する必要があります。アプリケーションモードで表示される標準の4Dダイアログボックスとダイナミックな名前を用いたフォームに注意すれば、\[Translations\] テーブルといくつかのプロジェクトメソッドを使用して、必要なだけ各国向けにローカライズされたフィールドを作成し、使用することによって、ローカライズのニーズに対応できます。  
  
データベースに以下のテーブルを追加します。  

![](../assets/en/commands/pict36594.en.png)

 次に、以下に示した TRANSLATE TABLES AND FIELDS プロジェクトメソッドを作成します。このメソッドはデータベースの実際のストラクチャをブラウズし、引数として渡される言語に対応するローカライズ版の作成に必要なすべての *\[Translations\]* レコードを作成します。  

```4d
  // TRANSLATE TABLES AND FIELDS プロジェクトメソッド
  // TRANSLATE TABLES AND FIELDS (Text)
  // TRANSLATE TABLES AND FIELDS (LanguageCode)
 
 var $1 : Text //ランゲージコード
 var $vlTable;$vlField : Integer
 var $Language : Text
 $Language:=$1
 
 For($vlTable;1;Last table number) //各テーブルを渡す
    If($vlTable#((->[Translations]))) //翻訳テーブルを翻訳しない
  //特定ランゲージ用のテーブル名の翻訳があるかどうかをチェックする
       QUERY([Translations];[Translations]LanguageCode=$Language;*) //目的のランゲージ
       QUERY([Translations]; & ;[Translations]TableID=$vlTable;*) //テーブル番号
       QUERY([Translations]; & ;[Translations]FieldID=0) //フィールド番号 = 0はテーブル名
       If(Is table number valid($vlTable)) //テーブルがまだ存在しているかチェックする
          If(Records in selection([Translations])=0)
  //なければ、レコードを作成
             CREATE RECORD([Translations])
             [Translations]LanguageCode:=$Language
             [Translations]TableID:=$vlTable
             [Translations]FieldID:=0
  //翻訳されたテーブル名を入力する必要がある
             [Translations]Translation:=Table name($vlTable)+" in "+$Language
             SAVE RECORD([Translations])
          End if
 
          For($vlField;1;Last field number($vlTable))
  //特定ランゲージ用のフィールド名の翻訳があるかどうかをチェックする
             QUERY([Translations];[Translations]LanguageCode=$Language;*) //目的のランゲージ
             QUERY([Translations]; & ;[Translations]TableID=$vlTable;*) //テーブル番号
             QUERY([Translations]; & ;[Translations]FieldID=$vlField) //フィールド番号
             If(Is field number valid($vlTable;$vlField))
                If(Records in selection([Translations])=0)
  //なければ、レコードを作成
                   CREATE RECORD([Translations])
                   [Translations]LanguageCode:=$Language
                   [Translations]TableID:=$vlTable
                   [Translations]FieldID:=$vlField
  //翻訳されたフィールド名を入力する必要がある
                   [Translations]Translation:=Field name($vlTable;$vlField)+" in "+$Language
                   SAVE RECORD([Translations])
                End if
             Else
                If(Records in selection([Translations])#0)
  //フィールドがもはや存在しない場合、翻訳を削除する
                   DELETE RECORD([Translations])
                End if
             End if
          End for
       Else
          If(Records in selection([Translations])#0)
  //テーブルがもはや存在しない場合、翻訳を削除する
             DELETE RECORD([Translations])
          End if
       End if
    End if
 End for
```
  
  
この時点で以下の行を実行すれば、テーブルタイトルとフィールドタイトルのスペイン語のローカライズ版に必要なすべてのレコードが作成されます。  

```4d
 TRANSLATE TABLES AND FIELDS("Spanish")
```
  
  
この呼び出しの実行後、新しく作成されたレコードのそれぞれに対して *\[Translations\]Translated Name* を入力できます。  
  
最後に、スペイン語のローカライズ版を使用して、データベースの標準な4Dダイアログボックスまたはダイナミックなタイトル付きのフォーム表示します。その際、LOCALIZED TABLES AND FIELDS プロジェクトメソッドを使用して、以下の行を実行します。  
  
```4d
 LOCALIZED TABLES AND FIELDS("Spanish")
```

```4d
  // LOCALIZED TABLES AND FIELDS global method
  // LOCALIZED TABLES AND FIELDS (Text)
  // LOCALIZED TABLES AND FIELDS (LanguageCode)
 
 var $1 : Text //ランゲージコード
 var $vlTable;$vlField : Integer
 var $Language : Text
 var $vlTableNum;$vlFieldNum : Integer
 $Language:=$1
 
  //テーブル名を更新する
 ARRAY TEXT($asNames;0) //SET TABLE TITLES と SET FIELD TITLESを初期化する
 ARRAY INTEGER($aiNumbers;0)
 QUERY([Translations];[Translations]LanguageCode=$Language;*)
 QUERY([Translations]; & ;[Translations]FieldID=0) //テーブル名
 SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]TableID;$aiNumbers)
 SET TABLE TITLES($asNames;$aiNumbers)
 
  //フィールド名を更新する
 $vlTableNum:=Last table number //データベース上のテーブルの数を数える
 For($vlTable;1;$vlTableNum) //テーブルを渡す
    If(Is table number valid($vlTable))
       QUERY([Translations];[Translations]LanguageCode=$Language;*)
       QUERY([Translations]; & ;[Translations]TableID=$vlTable;*)
       QUERY([Translations]; & ;[Translations]FieldID#0) //テーブル名として機能するゼロを避ける
       SELECTION TO ARRAY([Translations]Translation;$asNames;[Translations]FieldID;$aiNumbers)
       SET FIELD TITLES(Table($vlTable)->;$asNames;$aiNumbers)
    End if
 End for
```
  
  
コードを修正または再編集せずに、新しいローカライズ版をデータベースに追加することができます。

#### 例題 2 

定義されたカスタムのフィールド名およびテーブル名を全て削除したい場合を考えます:

```4d
 SET TABLE TITLES //全てのカスタムの名前を削除する
```

#### 参照 

[Last table number](last-table-number.md)  
[GET TABLE TITLES](get-table-titles.md)  
[Parse formula](parse-formula.md)  
[SET FIELD TITLES](set-field-titles.md)  
[Table name](table-name.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 601 |
| スレッドセーフである | &cross; |


