---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumes* )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| volumes | Text array | &#8592; | 現在マウントされているボリュームの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.VOLUME LIST.Summary-->**VOLUME LIST**コマンドは、テキスト配列の*volumes* に、現在コンピュータに定義 (Windowsの場合) またはマウント (Mac OSの場合) されているボリュームの名前を代入します。<!-- END REF-->

* Macintoshでは、Finderレベルに表示されるボリュームのリストが返されます。ボリュームの名前のみが返されます (例: "Macintosh HD"や"BootCamp"等)。
* Windowsでは、それぞれのボリュームが物理的に存在しているかどうかに関係なく、現在定義されているボリュームのリストを返します (つまり、CDやDVDが実際にドライブに入っているかどうかに関係なく、ボリューム**E:\\**が返されます) 。ボリューム名はフォルダー区切り文字付きで返されます ("C:\\")。

#### 例題 

*volumes\_t*テキスト配列に、コンピュータに定義またはマウントされているボリュームのリストを格納するには、以下のように記述します。

```4d
 var $event_l : Integer
 $event_l:=Form event code
 Case of
    :($event_l=On Load)
       ARRAY TEXT(volumes_t;0)
       VOLUME LIST(volumes_t)
 
  // ...
 End case
```

#### 参照 

[DOCUMENT LIST](document-list.md)  
[FOLDER LIST](folder-list.md)  
[VOLUME ATTRIBUTES](volume-attributes.md)  