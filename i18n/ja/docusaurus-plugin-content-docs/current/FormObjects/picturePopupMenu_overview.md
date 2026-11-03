---
id: picturePopupMenuOverview
title: ピクチャーポップアップメニュー
---

ピクチャーポップアップメニューは、画像の二次元配列を表示するポップアップメニューです。ピクチャーポップアップメニューを使用して、[ピクチャー ボタン](pictureButton_overview.md) を置き換えることができます。ピクチャーポップアップメニューで使用するピクチャーの作成方法は、ピクチャーボタン用のピクチャーと似ています。その概念は [ボタングリッド](buttonGrid_overview.md) と同じですが、グラフィックがフォームオブジェクトではなくポップアップメニューとして使用される点が異なります。

## ピクチャーポップアップメニューの使用

ピクチャーポップアップメニューを作成するには、[画像を参照](properties_Picture.md#パス名) する必要があります。次の例は、ピクチャーポップアップメニューからインターフェース言語を選ぶことができます。各言語は対応する国旗で表わされています:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### プログラミング

ピクチャーポップアップメニューは、メソッドを使用して管理できます。[ボタングリッド](buttonGrid_overview.md) と同様、ピクチャーポップアップメニューに割り当てられた変数に、選択された要素の値が代入されます。項目が選択されなければ、この値は 0 になります。各ピクチャーには上の行から順に左から右へと番号が振られます。

### ページ指定アクション

ピクチャーポップアップメニューにページ指定用の `gotoPage` [標準アクション](/Desktop/standard-actions)を割り当てることができます。このアクションを選択すると、4D はピクチャー配列で選択されたピクチャー位置に相当するフォームのページを自動的に表示します。要素は左から右、上から下に向かって番号が割り当てられます。

たとえば、ユーザーが3番目の要素をクリックすると、4D はカレントフォームの 3ページ目 (存在する場合) を表示します。クリックをプログラムから管理したい場合は "動作なし" を選択します。

## サポートされる標準アクション

ピクチャーポップアップメニューでは、以下の標準アクションが利用可能です。説明とアクティベーション条件については、[標準アクション](../Desktop-legacy/standard-actions.md) を参照してください。

[`cancel`](../Desktop-legacy/standard-actions.md#cancel) - [`accept`](../Desktop-legacy/standard-actions.md#accept) - [`nextRecord`](../Desktop-legacy/standard-actions.md#nextrecord) - [`previousRecord`](../Desktop-legacy/standard-actions.md#previousrecord) - [`firstRecord`](../Desktop-legacy/standard-actions.md#firstrecord) - [`lastRecord`](../Desktop-legacy/standard-actions.md#lastrecord) - [`deleteRecord`](../Desktop-legacy/standard-actions.md#deleterecord) - [`nextPage`](../Desktop-legacy/standard-actions.md#nextpage) - [`previousPage`](../Desktop-legacy/standard-actions.md#previouspage) - [`firstPage`](../Desktop-legacy/standard-actions.md#firstpage) - [`lastPage`](../Desktop-legacy/standard-actions.md#lastpage) - [`editSubrecord`](../Desktop-legacy/standard-actions.md#editsubrecord) - [`displaySubrecord`](../Desktop-legacy/standard-actions.md#displaysubrecord) - [`deleteSubrecord`](../Desktop-legacy/standard-actions.md#deletesubrecord) - `addSublist` - [`addSubrecord`](../Desktop-legacy/standard-actions.md#addsubrecord) - [`undo`](../Desktop-legacy/standard-actions.md#undo) - [`redo`](../Desktop-legacy/standard-actions.md#redo) - [`cut`](../Desktop-legacy/standard-actions.md#cut) - [`copy`](../Desktop-legacy/standard-actions.md#copy) - [`paste`](../Desktop-legacy/standard-actions.md#paste) - [`clear`](../Desktop-legacy/standard-actions.md#clear) - [`selectAll`](../Desktop-legacy/standard-actions.md#selectall) - [`showClipboard`](../Desktop-legacy/standard-actions.md#showclipboard) - [`design`](../Desktop-legacy/standard-actions.md#designmode) - [`databaseSettings`](../Desktop-legacy/standard-actions.md#databasesettings) - `userMode` - [`quit`](../Desktop-legacy/standard-actions.md#quit) - `duplicate` - [`msc`](../Desktop-legacy/standard-actions.md#msc) - [`openBackURL`](../Desktop-legacy/standard-actions.md#openbackurl) - [`openForwardURL`](../Desktop-legacy/standard-actions.md#openforwardurl) - [`refreshCurrentURL`](../Desktop-legacy/standard-actions.md#refreshcurrenturl) - [`stopLoadingURL`](../Desktop-legacy/standard-actions.md#stoploadingurl) - [`font/showDialog`](../Desktop-legacy/standard-actions.md#fontshowdialog) - [`spell/grammarEnabled`](../Desktop-legacy/standard-actions.md#spellgrammarenabled) - [`spell/autoDashSubstitutionsEnabled`](../Desktop-legacy/standard-actions.md#spellautodashsubstitutionsenabled) - [`spell/autoQuoteSubstitutionsEnabled`](../Desktop-legacy/standard-actions.md#spellautoquotesubstitutionsenabled) - [`spell/autoLanguageEnabled`](../Desktop-legacy/standard-actions.md#spellautolanguageenabled) - [`computeExpressions`](../Desktop-legacy/standard-actions.md#computeexpressions) - [`freezeExpressions`](../Desktop-legacy/standard-actions.md#freezeexpressions) - [`writingTools`](../Desktop-legacy/standard-actions.md#writingtools) - [`spell/removeSubstitutions`](../Desktop-legacy/standard-actions.md#spellremovesubstitution) - [`spell/learn`](../Desktop-legacy/standard-actions.md#spelllearn) - [`spell/unLearn`](../Desktop-legacy/standard-actions.md#spellunlearn) - [`spell/ignore`](../Desktop-legacy/standard-actions.md#spellignore) - [`spell/forgetIgnore`](../Desktop-legacy/standard-actions.md#spellforgetignore) - [`spell/showDialog`](../Desktop-legacy/standard-actions.md#spellshowdialog) - [`insertSoftHyphen`](../WritePro/user-legacy/standard-actions.md#action-insertsofthyphen) - [`removeSoftHyphens`](../WritePro/user-legacy/standard-actions.md#action-removesofthyphens) - [`insertImage`](../WritePro/user-legacy/standard-actions.md#action-insertimage) - [`insertPageBreak`](../WritePro/user-legacy/standard-actions.md#action-insertpagebreak) - [`insertSectionBreak`](../WritePro/user-legacy/standard-actions.md#action-insertsectionbreak) - [`insertContinuousSectionBreak`](../WritePro/user-legacy/standard-actions.md#action-insertcontinuoussectionbreak) - [`insertColumnBreak`](../WritePro/user-legacy/standard-actions.md#action-insertcolumnbreak) - [`insertTextBox`](../WritePro/user-legacy/standard-actions.md#action-inserttextbox) - [`textBox/remove`](../WritePro/user-legacy/standard-actions.md#action-textbox-remove) - [`listLevelInc`](../WritePro/user-legacy/standard-actions.md#action-listlevelinc) - [`listLevelDec`](../WritePro/user-legacy/standard-actions.md#action-listleveldec) - [`listLevelAppend`](../WritePro/user-legacy/standard-actions.md#action-listlevelappend) - [`insertRowAbove`](../WritePro/user-legacy/standard-actions.md#action-insertrowabove) - [`insertRowBelow`](../WritePro/user-legacy/standard-actions.md#action-insertrowbelow) - [`insertColumnToTheLeft`](../WritePro/user-legacy/standard-actions.md#action-insertcolumntotheleft) - [`insertColumnToTheRight`](../WritePro/user-legacy/standard-actions.md#action-insertcolumntotheright) - [`deleteRows`](../WritePro/user-legacy/standard-actions.md#action-deleterows) - [`deleteColumns`](../WritePro/user-legacy/standard-actions.md#action-deletecolumns) - [`cell/merge`](../WritePro/user-legacy/standard-actions.md#action-merge) - [`cell/split`](../WritePro/user-legacy/standard-actions.md#action-split) - [`refreshImages`](../WritePro/user-legacy/standard-actions.md#action-refreshimages) - [`print`](../WritePro/user-legacy/standard-actions.md#action-print) - [`merge`](../WritePro/user-legacy/standard-actions.md#action-merge) - [`split`](../WritePro/user-legacy/standard-actions.md#action-split) - [`borderCollapse`](../WritePro/user-legacy/standard-actions.md#action-bordercollapse) - [`section/name/showDialog`](../WritePro/user-legacy/standard-actions.md#action-section-nameshowdialog) - [`header/remove`](../WritePro/user-legacy/standard-actions.md#action-header-remove) - [`footer/remove`](../WritePro/user-legacy/standard-actions.md#action-footer-remove) - [`backgroundColor/showDialog`](../Desktop-legacy/standard-actions.md#backgroundcolorshowdialog) - [`section/remove`](../WritePro/user-legacy/standard-actions.md#action-section-remove) - [`moveToFront`](../WritePro/user-legacy/standard-actions.md#action-movetofront) - [`moveToBack`](../WritePro/user-legacy/standard-actions.md#action-movetoback) - [`gotoPage`](../Desktop-legacy/standard-actions.md#gotopage).

[標準アクションの互換性表](../Desktop-legacy/standard-actions.md#supported-form-objects) を参照してください。

## プロパティ一覧

[タイプ](properties_Object.md#タイプ) -
[オブジェクト名](properties_Object.md#オブジェクト名) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[CSSクラス](properties_Object.md#cssクラス) -
[パス名](properties_Picture.md#パス名) -
[行](properties_Crop.md#行) -
[列](properties_Crop.md#列) -
[左](properties_CoordinatesAndSizing.md#左) -
[上](properties_CoordinatesAndSizing.md#上) -
[右](properties_CoordinatesAndSizing.md#右) -
[下](properties_CoordinatesAndSizing.md#下) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[高さ](properties_CoordinatesAndSizing.md#高さ) -
[横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) -
[縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) -
[表示状態](properties_Display.md#表示状態) -
[境界線カラー](./properties_BackgroundAndBorder.md#境界線カラー) -
[境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) -
[太字](properties_Text.md#太字) -
[ヘルプTips](properties_Help.md#ヘルプtips) -
[標準アクション](properties_Action.md#標準アクション)

## サポートされるイベント

[On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)