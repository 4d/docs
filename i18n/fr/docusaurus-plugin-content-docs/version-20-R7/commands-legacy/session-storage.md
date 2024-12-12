---
id: session-storage
title: Session storage
slug: /commands/session-storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->
<!--REF #_command_.Session storage.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| id | Text | &#8594;  | Unique identifier (UUID) of the session on the server |
| Résultat | Object | &#8592; | Storage object of the session |

<!-- END REF-->

#### Note 

<!--REF #_command_.Session storage.Summary-->La commande **Session storage** renvoie l'objet de stockage de la session dont l'identifiant unique a été transmis dans le paramètre *id*.<!-- END REF--> 

Dans id, indiquez l'UUID de la session pour laquelle vous souhaitez obtenir le stockage. Il est automatiquement attribué par le serveur et stocké dans la propriété [**.id**](https://developer.4d.com/docs/fr/API/SessionClass/#id) de l'[objet session](https://developer.4d.com/docs/fr/API/SessionClass/). Si la session n'existe pas sur le serveur, la commande renvoie **Null**. 

**Note :** Vous pouvez obtenir les identifiants de session en utilisant la commande [Process activity](../commands/process-activity.md). 

L'objet renvoyé est la propriété **[.storage](https://developer.4d.com/docs/fr/API/SessionClass/#storage)** de la session. Il s'agit d'un objet partagé utilisé pour stocker des informations accessibles à tous les processus de la session.

#### Exemple 

Cette méthode modifie la valeur d'une propriété "settings" stockée dans l'objet de stockage d'une session spécifique :

```4d
  //Définir le stockage pour une session
  // La propriété de la méthode " Execute On Server " est définie.
 
 #DECLARE($id Text;$text Text)
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

#### Voir aussi 

  
[Process activity](../commands/process-activity.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1839 |
| Thread safe | &cross; |


