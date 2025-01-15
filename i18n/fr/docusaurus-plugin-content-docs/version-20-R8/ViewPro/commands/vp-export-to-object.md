---
id: vp-export-to-object
title: VP Export to object
---

<!-- REF #_method_.VP Export to object.Syntax -->

**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

| Paramètres | Type   |                             | Description                             |                  |
| ---------- | ------ | --------------------------- | --------------------------------------- | ---------------- |
| vpAreaName | Text   | ->                          | Nom d'objet formulaire zone 4D View Pro |                  |
| options    | Object | ->                          | Options d'export                        |                  |
| Résultat   | Object | <- | Objet 4D View Pro                       | <!-- END REF --> |

#### Description

La commande `VP Export to object` <!-- REF #_method_.VP Export to object.Summary --> retourne l'objet 4D View Pro attaché à la zone 4D View Pro *vpAreaName*<!-- END REF -->. Vous pouvez utiliser cette commande par exemple pour stocker la zone 4D View Pro dans un champ objet de la base de données 4D.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans le paramètre *options*, vous pouvez passer les options d'exportation suivantes, si nécessaire :

| Propriété            | Type    | Description                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo    | Boolean | True (défaut) pour inclure les informations de formatage, sinon False. Les informations de formatage sont utiles dans certains cas, par exemple pour un export en SVG. D'un autre côté, mettre cette propriété à <strong x-id="1">false</strong> permet de réduire la durée de l'export. |
| includeBindingSource | Boolean | True (par défaut) pour exporter les valeurs du contexte de données courant en tant que valeurs de cellule dans l'objet exporté (les contextes de données eux-mêmes ne sont pas exportés). Sinon Faux. La liaison de cellule est toujours exportée.                    |

Pour plus d'informations sur les objets 4D View Pro, veuillez vous référer au paragraphe [Objet 4D View Pro](../configuring.md#4d-view-pro-objet).

#### Exemple 1

Vous souhaitez lire la propriété "version" de la zone 4D View Pro courante :

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Exemple 2

Vous souhaitez exporter la zone, en excluant les informations de formatage :

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### Voir également

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP IMPORT FROM OBJECT](vp-import-from-object.md)
