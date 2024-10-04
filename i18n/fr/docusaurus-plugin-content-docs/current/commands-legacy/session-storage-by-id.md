---
id: session-storage-by-id
title: Session storage by ID
slug: /commands/session-storage-by-id
displayed_sidebar: docs
---

<!--REF #_command_.Session storage by ID.Syntax-->**Session storage by ID** ( *id* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Session storage by ID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| id | Texte | &#x1F852; | Unique identifier (UUID) of the session on the server |
| Résultat | Objet | &#x1F850; | Storage object of the session |

<!-- END REF-->

#### Note 

<!--REF #_command_.Session storage by ID.Summary-->La commande **Session storage by ID** renvoie l'objet de stockage de la session dont l'identifiant unique a été transmis dans le paramètre *id*.<!-- END REF--> 

Dans id, indiquez l'UUID de la session pour laquelle vous souhaitez obtenir le stockage. Il est automatiquement attribué par le serveur et stocké dans la propriété [**.id**](https://developer.4d.com/docs/fr/API/SessionClass/#id) de l'[objet session](https://developer.4d.com/docs/fr/API/SessionClass/). Si la session n'existe pas sur le serveur, la commande renvoie **Null**. 

**Note :** Vous pouvez obtenir les identifiants de session en utilisant la commande [Get process activity](get-process-activity.md). 

L'objet renvoyé est la propriété **[.storage](https://developer.4d.com/docs/fr/API/SessionClass/#storage)** de la session. Il s'agit d'un objet partagé utilisé pour stocker des informations accessibles à tous les processus de la session.

#### Exemple 

Cette méthode modifie la valeur d'une propriété "settings" stockée dans l'objet de stockage d'une session spécifique :

```4d
  //Définir le stockage pour une session
  // La propriété de la méthode " Execute On Server " est définie.
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage by ID($id)
 
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

#### Voir aussi 

  
[Get process activity](get-process-activity.md)  