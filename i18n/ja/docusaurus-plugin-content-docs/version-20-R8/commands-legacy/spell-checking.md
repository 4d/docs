---
id: spell-checking
title: SPELL CHECKING
slug: /commands/spell-checking
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECKING.Syntax-->**SPELL CHECKING**<!-- END REF-->
<!--REF #_command_.SPELL CHECKING.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SPELL CHECKING.Summary-->**SPELL CHECKING** コマンドは、フィールドまたは現在表示されているフォームでフォーカスを持つ変数のスペルチェックを行います。<!-- END REF-->チェックされるオブジェクトは文字列またはテキストタイプでなければなりません。

**注:** フォーム内のボタンをクリックする事に寄ってスペルチェックをトリガした場合には、ボタンが"フォーカス可"に設定されていないことを確認して下さい。

スペルチェックは、フィールドまたは変数の最初の文字から始まります。不明な単語が検知されると、スペルチックダイアログボックスが表示されます (詳細については、4DのDesign Referenceマニュアルを参照してください) 。[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) コマンドを使用していない限りは、4Dはカレントディクショナリを使用します(アプリケーションの言語に対応しています) 。

**警告:** **SPELL CHECKING** コマンドはフォームに関連づけられたデータソース(フィールドまたは変数)ではなく、フォーム内に入力されたテキストに対して影響します。これはつまりこのコマンドをOn Data Change または On Losing Focusフォームイベントから呼び出した場合(推奨されません)、4Dは既にこの時点で入力されたテキストをデータソースへと割り当ててしまっているので、保存されたテキストには影響しません。この場合、編集された結果を[Get edited text](get-edited-text.md)コマンドを使用してデータソース自身へと割り当てる必要があります。例えば以下のようなコードを使用して下さい:  

```4d
 If(Form event code=On Data Change)
    SPELL CHECKING
    theVariable:=Get edited text
 End if
```

#### 参照 

[SPELL CHECK TEXT](spell-check-text.md)  
[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 900 |
| スレッドセーフである | &cross; |


