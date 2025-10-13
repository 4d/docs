---
id: vp-set-allowed-methods
title: VP SET ALLOWED METHODS
---

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->

**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| Paramètres | Type   |    | Description                                    |                  |
| ---------- | ------ | -- | ---------------------------------------------- | ---------------- |
| methodObj  | Object | -> | Méthodes autorisées dans les zones 4D View Pro | <!-- END REF --> |

> **Compatibilité**

> Pour une plus grande flexibilité, il est recommandé d'utiliser la commande [`VP SET CUSTOM FUNCTIONS`](vp-set-custom-functions.md) qui vous permet de désigner des formules 4D qui peuvent être appelées à partir des zones de 4D View Pro. Dès que `VP SET CUSTOM FUNCTIONS` est appelé, les appels de `VP SET ALLOWED METHODS` sont ignorés. 4D View Pro supporte également la commande générique `SET ALLOWED METHODS` de 4D si ni `VP SET CUSTOM FUNCTIONS` ni `VP SET ALLOWED METHODS` ne sont appelés, Cependant, l'utilisation de la commande générique n'est pas recommandée.

## Description

La commande `VP SET ALLOWED METHODS` <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->désigne les méthodes projets qui peuvent être appelées dans des formules 4D View Pro<!-- END REF -->. Cette commande s'applique à toutes les zones 4D View Pro qui ont été crées après l'appel de la commande durant la session. Elle peut être appelée à plusieurs reprises dans la même session pour créer différentes configurations.

Par défaut, pour des raisons de sécurité, si vous n'exécutez pas la commande `VP SET ALLOWED METHODS`, aucun appel de méthode n'est autorisé dans les zones de 4D View Pro -- sauf si la commande générique `SET ALLOWED METHODS` de 4D a été utilisée (voir la note de compatibilité). L'utilisation d'une méthode non autorisée dans une formule affiche une erreur #NAME? dans la zone 4D View Pro.

Dans le paramètre *methodObj*, passez un objet dans lequel chaque propriété est le nom d'une fonction à définir dans les zones 4D View Pro:

| Propriété        |            |                                                                                | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ---------- | ------------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |                                                                                | Object              | Description de la fonction personnalisée. The `<functionName>` property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  | method     |                                                                                | Text                | (obligatoire) Nom de la méthode projet 4D existante à autoriser                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                  | parameters |                                                                                | Collection d'objets | Collection de paramètres (dans l'ordre dans lequel ils sont définis dans la méthode). Pour plus d'informations, veuillez vous reporter à la section [Paramètres](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                  |            | \[ ].name | Text                | Name of a parameter to display for the `<functionName>`.**Note**: Parameter names must not contain space characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                  |            | \[ ].type | Number              | Type de paramètre. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* can be omitted (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If *type* is omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object.  If *type* is `Is object`, the object is sent in a `.value` property. See [Parameters](../formulas.md#parameters) section. |
|                  | summary    |                                                                                | Text                | Description de la fonction à afficher dans 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | minParams  |                                                                                | Number              | Nombre minimum de paramètres                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | maxParams  |                                                                                | Number              | Nombre maximum de paramètres. Si vous passez un nombre supérieur à la largeur de parameters, il est possible de déclarer des paramètres "optionnels" avec leur type par défaut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Exemple

Vous souhaitez autoriser deux méthodes dans vos zones 4D View Pro :

```4d
C_OBJECT($allowed)
$allowed:=New object //paramètre pour la commande
 
$allowed.Hello:=New object //créer une première fonction simple nommée "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"
 
$allowed.Byebye:=New object //créer une deuxième fonction avec des paramètres nommée "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3
 
VP SET ALLOWED METHODS($allowed)
```

Une fois ce code exécuté, les fonctions définies peuvent être utilisées dans des formules 4D View Pro :

![](../../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> Dans les formules de 4D View Pro, les noms des fonctions sont automatiquement affichés en majuscules.

## Voir également

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET CUSTOM FUNCTIONS](vp-set-custom-functions.md)