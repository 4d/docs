---
id: vp-set-data-context
title: VP SET DATA CONTEXT
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP SET DATA CONTEXT.Syntax -->

**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataObj* : Object {; *options* : Object } {; *sheet* : Integer} )<br/>**VP SET DATA CONTEXT** ( *vpAreaName* : Text ; *dataColl* : Collection ; {*options* : Object } {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET DATA CONTEXT.Params -->

| Paramètres | Type       |    | Description                                                 |                  |
| ---------- | ---------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nom d'objet formulaire zone 4D View Pro                     |                  |
| dataObj    | Object     | -> | Objet de données à charger dans le contexte de données      |                  |
| dataColl   | Collection | -> | Collection de données à charger dans le contexte de données |                  |
| options    | Object     | -> | Options supplémentaires                                     |                  |
| sheet      | Integer    | -> | Numéro d'indice de la feuille                               | <!-- END REF --> |

## Description

La commande `VP SET DATA CONTEXT` <!-- REF #_method_.VP SET DATA CONTEXT.Summary -->définit le contexte de données d'une feuille<!-- END REF -->. Un contexte de données est un objet ou une collection lié à une feuille de calcul et dont le contenu peut être utilisé pour remplir automatiquement les cellules de la feuille, soit en utilisant une option de génération automatique, soit la méthode [VP SET BINDING PATH](vp-set-binding-path.md). En revanche, la commande [VP Get data context](vp-get-data-context.md) peut renvoyer un contexte contenant des modifications apportées par l'utilisateur.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Dans *dataObj* ou *dataColl*, passez un objet ou une collection contenant les données à charger dans le contexte de données. Les images sont converties en schémas URI de données.

Pour passer une valeur Time dans *dataObj* ou *dataColl*, encapsulez-la dans un objet avec les propriétés suivantes (voir [exemple 4](#example-4---date-and-time-syntax)):

| Propriété | Type                                     | Description                                                             |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur à placer dans le contexte                                        |
| time      | Real                                     | Valeur heure (en secondes) à placer dans le contexte |

Dans *options*, vous pouvez passer un objet qui spécifie des options supplémentaires. Il peut contenir les propriétés suivantes :

| Propriété           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reset               | Object | Vrai pour réinitialiser le contenu de la feuille avant de charger le nouveau contexte, Faux (par défaut) dans le cas contraire.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| autoGenerateColumns | Object | Utilisé uniquement lorsque les données sont une collection. Vrai (par défaut) pour spécifier que les colonnes doivent être générées automatiquement lorsque le contexte de données est lié. Dans ce cas, les règles suivantes s'appliquent : <ul><li>Si *dataColl* est une collection d'objets, les noms d'attributs sont utilisés comme titres de colonnes (voir exemple 2).</li><li>Si *dataColl* contient des sous-collections de valeurs scalaires, chaque sous-collection définit les valeurs d'une ligne (voir exemple 3). La première sous-collection détermine le nombre de colonnes créées.</li></ul> |

Dans *sheet*,, transmettez l'index de la feuille qui recevra le contexte de données. Si aucun numéro d'indice n'est passé, le contexte est appliqué à la feuille courante.

Si vous exportez votre document vers un objet en utilisant [VP Export to object](vp-export-to-object.md), ou vers un document 4DVP en utilisant [VP EXPORT DOCUMENT] (vp-export-document.md), l'option `includeBindingSource` vous permet de copier le contenu des contextes actuels en tant que valeurs de cellules dans l'objet ou le document exporté. Pour plus de détails, reportez-vous à la description de ces méthodes.

## Exemple

Passer un objet et lier les données de contexte aux cellules de la première ligne :

```4d
var $data : Object

$data:=New object

$data.firstName:="Freehafer"
$data.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $data)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

## Exemple 2

Passer une collection d'objets et générer automatiquement des colonnes :

```4d
var $options : Object
var $data : Collection

$data:=New collection()
$data.push(New object("firstname"; "John"; "lastname"; "Smith"))
$data.push(New object("firstname"; "Mary"; "lastname"; "Poppins"))

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-2.png)

## Exemple 3

Les *données* passées en paramètre sont une collection qui contient des sous-collections. Chaque sous-collection définit les valeurs des cellules de la ligne :

```4d
var $data : Collection
var $options : Object

$data:=New collection
$data.push(New collection(1; 2; 3; False; ""))  // 5 colonnes sont créées
$data.push(New collection)  // la 2e ligne est vide
$data.push(New collection(4; 5; Null; "hello"; "world"))  // la 3e ligne a 5 valeurs
$data.push(New collection(6; 7; 8; 9))  // la 4e ligne a 4 valeurs

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

![](../../assets/en/ViewPro/vp-set-data-context-3.png)

## Exemple 4 - Syntaxe date et heure

```4d
var $data : Collection
var $options : Object

$data:= New collection()

// Les valeurs Date peuvent être passées sous forme de valeurs scalaires.
$data.push(New collection("Date"; Current date)) 

// Les valeurs Time doivent être passées en tant qu'attributs d'objet.
$data.push(New collection("Time"; New object("time"; 5140)))

// Exemple de Date + Time
$data.push(New collection("Date + Time"; New object("value"; Current date; "time"; 5140))) 

$options:=New object("autoGenerateColumns"; True)

VP SET DATA CONTEXT("ViewProArea"; $data; $options)
```

Voici le résultat une fois les colonnes générées :

![](../../assets/en/ViewPro/vp-set-data-context-date-time.png)

## Voir également

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)