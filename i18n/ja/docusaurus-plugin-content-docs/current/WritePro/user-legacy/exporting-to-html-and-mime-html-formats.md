---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

#### 

4D Write Pro ドキュメントは、[WP EXPORT DOCUMENT](../commands/wp-export-document) および [WP EXPORT VARIABLE](../commands/wp-export-variable) コマンドを使用することでHTML およびMIME HTML フォーマットで書き出すことができます。以下の一覧表は、どの4D Write Pro 属性や機能がHTML およびMIME HTML に書き出されるのかを表したものです。属性/機能はアルファベット順に並べられています。属性の詳細な一覧については、*4D Write Pro属性* を参照してください。

#### 共通の属性 

| **属性/機能**                           | **書き出されるか** | **補足** |
| ----------------------------------- | ----------- | ------ |
| Background clip (背景切り落とし)           | はい          |        |
| Background color (文字ではなく要素の背景色)     | はい          |        |
| Background image (背景画像)             | はい          |        |
| Background repeat (背景の繰り返し)         | はい          |        |
| Background origin (背景の原点の位置)        | はい          |        |
| Background position (背景の位置)         | はい          |        |
| Background width / height (背景の幅/高さ) | はい          |        |
| Border color (背景色)                  | はい          |        |
| Border radius (角の丸い境界線)             | はい          |        |
| Border style (境界線のスタイル)             | はい          |        |
| Border width (境界線の幅)                | はい          |        |
| Element id (要素のID)                  | はい          |        |
| Margin (余白)                         | はい          |        |
| Padding (パッディング)                    | はい          |        |
| Protected (プロテクション/保護)              | いいえ         |        |
| Style sheet (スタイルシート)               | はい          |        |

#### 文字 

| **属性/機能**                            | **書き出されるか** | **補足**                              |
| ------------------------------------ | ----------- | ----------------------------------- |
| Background color (文字の背景色)            | はい          |                                     |
| Font / font styles (フォントとフォントスタイル)   | はい          |                                     |
| Font size (フォントサイズ)                  | はい          |                                     |
| Strikethrough color (打ち消し線色)         | いいえ         |                                     |
| Strikethrough styles (打ち消し線スタイル)     | 一部のみ        | 実線のみが書き出されます                        |
| Superscript, subscript (上付き文字、下付き文字) | はい          |                                     |
| Text color (テキストカラー)                 | はい          |                                     |
| Text shadow (テキストの影)                 | はい          |                                     |
| Text transform (大文字/小文字の変換)          | 一部のみ        | Small uppercase(スモールキャップス)は書き出されません |
| Underline color (下線色)                | いいえ         |                                     |
| Underline styles (下線のスタイル)           | 一部のみ        | 実線のみが書き出されます                        |

#### 列 

| **属性/機能**                     | **書き出されるか** | **補足** |
| ----------------------------- | ----------- | ------ |
| Column count (列数)             | いいえ         |        |
| Column rule color (列区切り線色)    | いいえ         |        |
| Column rule style (列区切り線スタイル) | いいえ         |        |
| Column rule width (列区切り線幅)    | いいえ         |        |
| Column spacing (列間隔)          | いいえ         |        |

#### ドキュメント 

| **属性/機能**                                               | **書き出されるか** | **補足**            |
| ------------------------------------------------------- | ----------- | ----------------- |
| Break paragraphs in formulas (フォーミュラのCRを改段落として使用するかどうか) | いいえ         |                   |
| Document (meta) information (ドキュメントのメタ情報)               | 一部のみ        | タイトルの主題のみが書き出されます |
| Dpi                                                     | いいえ         |                   |
| Font default (デフォルトのフォント)                               | いいえ         |                   |
| Header and footer autofit (ヘッダーとフッターの自動リサイズ)            | いいえ         |                   |
| Page margin (ページの余白)                                    | いいえ         |                   |
| Page orientation (ページの向き)                               | いいえ         |                   |
| Page width/height (ページの幅/高さ)                            | いいえ         |                   |
| Protection enabled (保護の有効化)                             | いいえ         |                   |
| Tab decimal separator (小数点として使用される文字)                   | いいえ         |                   |
| User unit (ユーザー単位)                                      | いいえ         |                   |

#### 画像 

| **属性/機能**                                           | **書き出されるか** | **補足**                              |
| --------------------------------------------------- | ----------- | ----------------------------------- |
| Alternate text (代替テキスト)                             | はい          |                                     |
| Anchor align (アンカーの揃え)                              | 一部のみ        | 右、左、上、下のみ                           |
| Anchor embedded (アンカーの埋め込み)                         | はい          |                                     |
| Anchor offset (アンカーのオフセット)                          | はい          |                                     |
| Anchor origin (アンカーの原点)                             | 一部のみ        | コンテナボックス(Webページの境界線)に対してのみ          |
| Anchor to a single page (単一ページのアンカー)                | いいえ         |                                     |
| Anchor to all pages (全てのページのアンカー)                   | いいえ         |                                     |
| Anchor to all sections of a page (ページの全セクションへのアンカー) | いいえ         |                                     |
| Background image (背景画像、およびそれに関連する背景の属性)             | はい          |                                     |
| Image display mode (画像表示モード)                        | 一部のみ        | 画像に背景画像がある場合、拡大/縮小して合致するように書き出しされます |
| Image URL (画像URL)                                   | はい          |                                     |
| Vertical align (縦方向の揃え)                             | はい          |                                     |

#### テキストボックス 

| **属性/機能**                                           | **書き出されるか** | **補足**                                               |
| --------------------------------------------------- | ----------- | ---------------------------------------------------- |
| Anchor align (アンカーの揃え)                              | はい          |                                                      |
| Anchor embedded (アンカーの埋め込み)                         | はい          | as div                                               |
| Anchor offset (アンカーのオフセット)                          | はい          |                                                      |
| Anchor origin (アンカーの原点)                             | 一部のみ        | Only for the container box (borders of the web page) |
| Anchor to a single page (単一ページのアンカー)                | いいえ         |                                                      |
| Anchor to all pages (全てのページのアンカー)                   | いいえ         |                                                      |
| Anchor to all sections of a page (ページの全セレクションのアンカー) | いいえ         |                                                      |
| Vertical align (縦方向の揃え)                             | はい          |                                                      |

#### 段落 

| **属性/機能**                                     | **書き出されるか** | **補足**                                                                        |
| --------------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Absolute tab stops (絶対タブリード)                  | いいえ         |                                                                               |
| Column break after(後の列ブレーク)                   | はい          | 単一の列のみ(複数の列はサポートされません)                                                        |
| Direction (テキストの方向)                           | はい          |                                                                               |
| Keep with next(次の段落とつなげる)                     | はい          |                                                                               |
| Line height (行の高さ)                            | はい          |                                                                               |
| List font (フォントの一覧)                           | いいえ         |                                                                               |
| List image (リスト項目マーカーの画像)                     | はい          |                                                                               |
| List image height (リスト項目マーカーの画像の高さ)           | いいえ         |                                                                               |
| List start number (リストの開始番号)                  | はい          |                                                                               |
| List string format (リスト文字列フォーマット、カスタムのフォーマット) | いいえ         |                                                                               |
| List style type (リストスタイルのタイプ)                 | 一部のみ        | Hollow-square、diamond、およびclub は書き出されません。またdecimal-greek はlower-greek と同じになります |
| Min-height (最小の高さ)                            | はい          |                                                                               |
| Min-width (最小の幅)                              | いいえ         |                                                                               |
| New line style sheet (新規の行スタイルシート)            | いいえ         |                                                                               |
| Page break after(後の改ページ)                      | はい          |                                                                               |
| Page break inside (内部の改ページ)                   | はい          |                                                                               |
| Section break after (後のセクションブレーク、継続かどうかに関わらず) | いいえ         |                                                                               |
| Text align (テキストの揃え)                          | はい          |                                                                               |
| Text indent (テキストのインデント)                      | はい          |                                                                               |
| Vertical-align (縦方向の揃え)                       | はい          |                                                                               |
| Widow and orphan control (ウィドウとオルファンコントロール)   | いいえ         |                                                                               |
| Width (幅)                                     | はい          |                                                                               |

#### セクションおよびページ要素 

| **属性/機能**                                           | **書き出されるか** | **補足**                          |
| --------------------------------------------------- | ----------- | ------------------------------- |
| First page sub-section (最初のページのサブセクション)             | いいえ         |                                 |
| Headers and footers (ヘッダーとフッター)                     | いいえ         |                                 |
| Left and right page sub-sections (左および右ページのサブセクション) | いいえ         |                                 |
| Main sections (メインセクション)                            | いいえ         | ドキュメントレベルの属性のみがhtml 本文へと書き出されます |
| Page margin (ページの余白)                                | いいえ         |                                 |
| Page orientation (ページの向き)                           | いいえ         |                                 |

#### 表 

| **属性/機能**                         | **書き出されるか** | **補足**                 |
| --------------------------------- | ----------- | ---------------------- |
| Background image (背景画像、および関連した属性) | はい          |                        |
| Column break after (後の列ブレーク)      | はい          | 単一の列のみ(複数の列はサポートされません) |
| Horizontal alignment (横方向並び)      | はい          |                        |
| Page break after (後の改ページ)         | はい          |                        |
| Page break inside (途中での改ページ)      | はい          |                        |
| Section break after (後のセクションブレーク) | いいえ         |                        |
| Bottom carry-over rows            | いいえ         |                        |

#### 表のセル 

| **属性/機能**                         | **書き出されるか** | **補足** |
| --------------------------------- | ----------- | ------ |
| Background image (背景画像、および関連した属性) | はい          |        |
| Height (高さ)                       | はい          |        |
| Vertical align (縦方向並び)            | はい          |        |
| Width (幅)                         | はい          |        |

#### 表の行 

| **属性/機能**                         | **書き出されるか** | **補足**                 |
| --------------------------------- | ----------- | ---------------------- |
| Background image (背景画像、および関連した属性) | はい          |                        |
| Column break after (後の列ブレーク)      | はい          | 単一の列のみ(複数の列はサポートされません) |
| Height (高さ)                       | はい          |                        |
| Page break after (後の改ページ)         | はい          |                        |

#### その他の機能 

| **属性/機能**                                           | **書き出されるか** | **補足**             |
| --------------------------------------------------- | ----------- | ------------------ |
| 4D formulas (4Dフォーミュラ)                              | いいえ         | 書き出しに際し計算/固定化がされます |
| 4D method links (4Dメソッドへのリンク)                       | いいえ         |                    |
| Bookmarks and bookmark links (ブックマークおよびブックマークへのリンク) | はい          |                    |
| URL links (URLリンク)                                  | はい          |                    |