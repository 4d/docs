---
id: navigation
title: ナビゲーションドロップダウン
---

ナビゲーションドロップダウンは、コードを整理し、クラスやメソッド内の移動を助けるツールです。

![dropdown-list](assets/en/code-editor/dropdown-list.png)

いくつかのタグは自動的に追加されますが、[マーカー](#手動タグ) を使ってドロップダウンリストを補完することもできます。

## コードのナビゲーション

ドロップダウンリストの項目をクリックすると、当該項目のコードの先頭行に移動します。 また、矢印キーで項目を選択し **Enter** キーで決定して移動することもできます。

## 自動タグ

コンストラクター、メソッド宣言、関数、計算属性は自動的にタグ付けされ、ドロップダウンリストに追加されます。

クラス/メソッドにタグがない場合、ツールは "タグなし" アイコンを表示します。

次の項目が自動的に追加されます:

| アイコン                                                                     | 項目                              |
| ------------------------------------------------------------------------ | ------------------------------- |
| ![no-tag-icon](assets/en/code-editor/no-tag.png)                         | タグなし                            |
| ![constructor-icon](assets/en/code-editor/constructor.png)               | クラスコンストラクターまたはメソッド宣言            |
| ![computed-attribute-icon](assets/en/code-editor/computed-attribute.png) | 計算属性 (get, set, orderBy, query) |
| ![function-icon](assets/en/code-editor/function.png)                     | クラス関数名                          |


## 手動タグ

コードにマーカーを追加して、以下のタグをドロップダウンに追加できます:

| アイコン                                                 | 項目        |
| ---------------------------------------------------- | --------- |
| ![mark-tag-icon](assets/en/code-editor/mark-tag.png) | MARK: タグ  |
| ![todo-tag-icon](assets/en/code-editor/todo-tag.png) | TODO: タグ  |
| ![fixme-icon](assets/en/code-editor/fixme-tag.png)   | FIXME: タグ |

タグは、次のようにコメントを付けて宣言します:

```4d 
// FIXME: 要修正
```

タグ宣言の際、文字の大小は区別されません。`fixme:` と記述することもできます。

`MARK:` タグの後にハイフンを付けると、コードエディターとドロップダウンメニューに区切り線が引かれます。 つまり、次のように書くと:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

このような結果になります:

![mark-hyphen-image](assets/en/code-editor/dropdown-organize.png)

関数内のマーカーはドロップダウンリスト内でインデント (字下げ) されますが、関数末尾の `MARK:` タグの後に指示がない場合を除きます。 この場合は、インデントなしで表示されます。

## 表示順

タグは、メソッド/クラス内の出現順に表示されます。

メソッドやクラスのタグをアルファベット順に表示するには、次のいずれかを実行します:
* ドロップダウンツールを **右クリックする**
* macOS では **option**、Windows では **Alt** を押しながら、ドロップダウンツールをクリックします。

> 関数内のタグは、親項目と一緒に移動します。




