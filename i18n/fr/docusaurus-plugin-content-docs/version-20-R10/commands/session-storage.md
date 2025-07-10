---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| Paramètres | Type   |                             | Description                                                |
| ---------- | ------ | --------------------------- | ---------------------------------------------------------- |
| id         | Text   | &#8594; | Identifiant unique (UUID) de la session |
| Résultat   | Object | &#8592; | Objet de stockage de la session                            |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                          |
| ------- | -------------------------------------- |
| 20 R8   | Prise en charge des sessions autonomes |
| 20 R6   | Ajout                                  |

</details>

## Description

<!--REF #_command_.Session storage.Summary-->La commande **Session storage** renvoie l'objet de stockage de la session dont l'identifiant unique a été passé dans le paramètre *id*.<!-- END REF--> 

Dans *id*, indiquez l'UUID de la session pour laquelle vous souhaitez obtenir le stockage. Il est automatiquement attribué par 4D (4D Server ou, pour les sessions autonomes, 4D monoposte) et est stocké dans la propriété [**.id**](../API/SessionClass.md#id) de l'[objet session](../API/SessionClass.md). Si la session n'existe pas, la commande renvoie **Null**.

**Note:** Vous pouvez obtenir les identifiants de session à l'aide de la commande [Process activity](process-activity.md).

L'objet renvoyé est la propriété [**.storage**](../API/SessionClass.md#storage) de la session. Il s'agit d'un objet partagé utilisé pour stocker des informations accessibles à tous les process de la session.

## Exemple

Cette méthode modifie la valeur d'une propriété "settings" stockée dans l'objet storage d'une session spécifique :

```4d
  //Définition du storage d'une session
  //La propriété de méthode "Execute On Server" est définie
 
 #DECLARE($id : Text; $text : Text)
 var $obj : Object
 
 $obj:=Session storage($id)
 
 If($obj.settings=Null)
    Use($obj)
       $obj.settings:=New shared object("text";$text)
    End use
 Else
    Use($obj.settings)
       $obj.settings.text:=$text
    End use
 End if
```

## Voir également

[Process activity](process-activity.md)\
[Session](./session.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1839                        |
| Thread safe        | &check; |


