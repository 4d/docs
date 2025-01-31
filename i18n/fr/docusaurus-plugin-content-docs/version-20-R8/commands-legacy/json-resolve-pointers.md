---
id: json-resolve-pointers
title: JSON Resolve pointers
slug: /commands/json-resolve-pointers
displayed_sidebar: docs
---

<!--REF #_command_.JSON Resolve pointers.Syntax-->**JSON Resolve pointers** ( *objet* {; *options*} ) : Object<!-- END REF-->
<!--REF #_command_.JSON Resolve pointers.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet contenant des pointeurs JSON à résoudre |
| &#8592; | Objet avec pointeurs JSON résolus (uniquement si Résultat est un objet) |
| options | Object | &#8594;  | Options pour la résolution des pointeurs |
| Résultat | Object | &#8592; | Objet contenant le résultat du traitement |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Resolve pointers.Summary-->La commande **JSON Resolve pointers** résout tous les pointeurs JSON présents dans *objet*, en tenant compte des *options* définies (s'il y en a).<!-- END REF-->

Les pointeurs JSON sont particulièrement utiles pour : 

* intégrer une partie d'un document JSON externe ou réutiliser une partie d'un document JSON à divers endroits dans le même document JSON, afin de "factoriser" l'information,
* exprimer une structure cyclique en JSON,
* définir un objet modèle contenant des propriétés par défaut stockées en JSON.

Passez dans le paramètre *objet* un objet contenant des pointeurs JSON à résoudre (pour une description de la syntaxe des pointeurs JSON, veuillez vous reporter au paragraphe *Defining JSON Pointers* ci-dessous). 

**Note :** L'*objet* source sera mis à jour avec le résultat de la résolution des pointeurs après l'exécution de la commande (sauf si le résultat n'est pas un objet, voir ci-dessous). Si vous souhaitez conserver une version originale de *objet*, il sera nécessaire d'appeler la commande [OB Copy](ob-copy.md) au préalable. 

Optionnellement, vous pouvez passer dans *options* un objet contenant des propriétés spécifiques à utiliser lors de la résolution des pointeurs. Les propriétés suivantes sont prises en charge :

| **Propriété** | **Type de valeur** | **Description**                                                                                                                                                          |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rootFolder    | Chaîne             | Chemin absolu (en syntaxe 4D standard) du dossier à utiliser pour résoudre les pointeurs relatifs dans *objet*. Par défaut, le dossier Resources de la base est utilisé. |
| merge         | Booléen            | Fusionner les objets avec les objets pointeur (true) au lieu de les remplacer (false). Par défaut, l'option est à faux ![](../assets/en/commands/pict3516702.en.png)     |

Après l'exécution de la commande : 

* si le résultat de la résolution des pointeurs est un objet, *objet* est mis à jour et contient l'objet résultant.
* si le résultat de la résolution des pointeurs est une valeur scalaire (i.e. un texte, un numérique...), *objet* n'est pas modifié et la valeur résultante est retournée dans la propriété "value" du résultat de la fonction.

Dans tous les cas, la commande retourne un objet contenant les propriétés suivantes :

| **Propriété**           | **Type de valeur** | **Description**                                                                                                  |
| ----------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| value                   | tous               | Résultat du traitement de la commande sur *objet* ; si le résultat est un objet, est égal à l'*objet* en sortie. |
| success                 | Booléen            | true si tous les pointeurs ont été résolus avec succès                                                           |
| errors                  | Collection         | Collection d'erreurs (le cas échéant)                                                                            |
| errors\[\].code         | Nombre             | Code d'erreur                                                                                                    |
| errors\[\].message      | Chaîne             | Message d'erreur                                                                                                 |
| errors\[\].pointerURI   | Chaîne             | Valeur de pointeur                                                                                               |
| errors\[\].referredPath | Chaîne             | Chemin complet de document                                                                                       |

  
#### Définition des pointeurs JSON 

*JSON Pointer* est un standard qui définit une syntaxe de chaîne qui peut être utilisée pour accéder à un champ ou une valeur de clé particulière dans la totalité du document JSON. Ce standard a été décrit dans la [RFC 6901](https://tools.ietf.org/html/rfc6901). 

Un pointeur JSON est, à proprement parler, une chaîne composée de parties séparées par des '/'. Un pointeur JSON est généralement placé dans un URI qui spécifie le document dans lequel le pointeur sera résolu. Le caractère "#' est utilisé dans l'URI pour désigner le fragment contenant le pointeur JSON. Par convention, un URI contenant un pointeur JSON doit être placé dans une propriété d'objet JSON nommée "$ref".

```json
{
   "$ref":<chemin>#<pointeur_json>
}
```

**Note :** 4D ne prend pas en charge le caractère "-" en tant que référence d'éléments de tableau non existants. 

##### Récursivité et résolution des chemins 

Les pointeurs JSON sont résolus récursivement, ce qui signifie que si un pointeur résolu contient lui-même des pointeurs, ils sont résolus et ainsi de suite jusqu'à ce que tous les pointeurs soient résolus. Dans ce contexte, tous les chemins de fichiers situés dans les URIs des pointeurs JSON peuvent être relatifs ou absolus. Ils doivent utiliser le "/" en tant que délimiteur de chemin et sont résolus selon les principes suivants :

* Un chemin relatif ne doit pas débuter par '/'. Il est résolu relativement au document JSON contenant la chaîne du chemin.
* Un chemin absolu débute par '/'. Seuls les [chemins des filesystem](../Concepts/paths.md#chemins-des-filesystem) sont acceptés comme chemins absolus. Par exemple, "/RESOURCES/templates/myfile.json" pointe vers le fichier "myfile.json" situé dans le dossier Resources de la base courante.

**Notes :**

* La résolution de nom tient compte des majuscules/minuscules.
* 4D ne résout pas les chemins vers des fichiers JSON situés sur le réseau (débutant par "http/https").

#### Exemple 1 

Cet exemple basique illustre comment un pointeur JSON peut être défini et remplacé dans un objet :

```4d
  // création d'un objet avec valeurs
 var $o : Object
 $o:=New object("value";42)
 
  // création de l'objet pointeur JSON
 var $ref : Object
 $ref:=New object("$ref";"#/value")
 
  // ajout de l'objet pointeur JSON en tant que propriété
 $o.myJSONPointer:=$ref
 
  // résolution de l'ensemble et vérification que le pointeur a été résolu
 var $result : Object
 $options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)
 $result:=JSON Resolve pointers($o;$options)
 If($result.success)
    ALERT(JSON Stringify($result.value))
  //{"value":42,"myJSONPointer":42}
 Else
    ALERT(JSON Stringify($result.errors))
 End if
```

#### Exemple 2 

Vous voulez réutiliser l'adresse "billingAddress" comme adresse "shippingAddress" dans l'objet JSON suivant (nommé $oMyConfig):

```json
{
    "lastname": "Doe",
    "firstname": "John",
    "billingAddress": { 
        "street": "95 S. Market Street",
        "city": "San Jose",
        "state": "California" 
    },
    "shippingAddress": { "$ref": "#/billingAddress" }
}
```

Après l'exécution de ce code :

```4d
 $oResult:=JSON Resolve pointers($oMyConfig)
```

... l'objet suivant est retourné :

```json
{
    "success": true,
    "value": {
        "lastname": "Doe",
        "firstname": "John",
        "billingAddress": {
            "street": "95 S. Market Street",
            "city": "San Jose",
            "state": "California" 
        },
        "shippingAddress": {
            "street": "95 S. Market Street",
            "city": "San Jose",
            "state": "California" 
        }
    }
}
```

#### Exemple 3 

Cet exemple illustre l'effet de l'option "merge". Vous souhaitez modifier les droits d'un utilisateur, basés sur un fichier par défaut.

```json
{
    "rights": { 
        "$ref": "defaultSettings.json#/defaultRights",
        "delete": true,
        "id": 456
    }
}
```

Le fichier *defaultSettings.json* contient :

```json
{
    "defaultRights":
    {
        "edit": true,
        "add": false,
        "delete": false
    }
}
```

Si vous exécutez :

```4d
 var $options : Object
 $options:=New object("merge";False) //remplacer le contenu
 $oResult:=JSON Resolve pointers($oMyConfig;$options)
```

... la valeur résultante est exactement le contenu du fichier *defaultSettings.json* :

```json
{
    "success": true,
    "value": {
        "rights": {
            "edit": true,
            "add": false,
            "delete": false
        }
    }
}
```

Si vous exécutez :

```4d
 var $options : Object
 $options:=New object("merge";True) //fusionner les contenus
 $oResult:=JSON Resolve pointers($oMyConfig;$options)
```

... la valeur résultante est une version modifiée de l'objet original :

```json
{
    "success": true,
    "value": {
        "rights": {
            "edit": true,
            "add": false,
            "delete": true,
            "id": 456
        }
    }
}
```

#### Voir aussi 

  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1478 |
| Thread safe | &check; |


