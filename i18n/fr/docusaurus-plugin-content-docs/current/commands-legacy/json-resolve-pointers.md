---
id: json-resolve-pointers
title: JSON Resolve pointers
slug: /commands/json-resolve-pointers
displayed_sidebar: docs
---

<!--REF #_command_.JSON Resolve pointers.Syntax-->**JSON Resolve pointers** ( *objet* {; *options*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.JSON Resolve pointers.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#x1F852; | Objet contenant des pointeurs JSON à résoudre |
| &#x1F858; | Objet avec pointeurs JSON résolus (uniquement si Résultat est un objet) |
| options | Object | &#x1F852; | Options pour la résolution des pointeurs |
| Résultat | Object | &#x1F850; | Objet contenant le résultat du traitement |

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

```undefined
{
   "$ref":<chemin>#<pointeur_json>
}
```

##### Récursivité et résolution des chemins 

Les pointeurs JSON sont résolus récursivement, ce qui signifie que si un pointeur résolu contient lui-même des pointeurs, ils sont résolus et ainsi de suite jusqu'à ce que tous les pointeurs soient résolus. Dans ce contexte, tous les chemins de fichiers situés dans les URIs des pointeurs JSON peuvent être relatifs ou absolus. Ils doivent utiliser le "/" en tant que délimiteur de chemin et sont résolus selon les principes suivants :

* Un chemin relatif ne doit pas débuter par '/'. Il est résolu relativement au document JSON contenant la chaîne du chemin.
* Un chemin absolu débute par '/'. Seuls les [chemins des filesystem](https://developer.4d.com/docs/fr/Concepts/paths/#chemins-des-filesystem) sont acceptés comme chemins absolus. Par exemple, "/RESOURCES/templates/myfile.json" pointe vers le fichier "myfile.json" situé dans le dossier Resources de la base courante.

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

```undefined
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

#### Exemple 3 

```undefined
{
    "rights": { 
        "$ref": "defaultSettings.json#/defaultRights",
        "delete": true,
        "id": 456
    }
}
```

#### Voir aussi 

  