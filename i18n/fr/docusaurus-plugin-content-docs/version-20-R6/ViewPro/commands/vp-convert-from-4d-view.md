---
id: vp-convert-from-4d-view
title: VP Convert from 4D View
---

<!-- REF #_method_.VP Convert from 4D View.Syntax -->

**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

| Paramètres     | Type   |    | Description                        |
| -------------- | ------ | -- | ---------------------------------- |
| 4DViewDocument | Blob   | -> | Document 4D View                   |
| Résultat       | Object | <- | 4D View Pro object<!-- END REF --> |

#### Description

The `VP Convert from 4D View` command <!-- REF #_method_.VP Convert from 4D View.Summary -->allows you to convert a legacy 4D View document into a 4D View Pro object<!-- END REF -->.

> Cette commande ne nécessite pas l'installation du plug-in 4D View dans votre environnement.

In the *4DViewDocument* parameter, pass a BLOB variable or field containing the 4D View document to convert. La commande retourne un objet 4D View Pro dans lequel toutes les informations stockées à l'origine dans le document 4D View sont converties en attributs 4D View Pro.

#### Exemple

Vous souhaitez obtenir un objet 4D View Pro à partir d'une zone 4D View stockée dans un BLOB :

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```
