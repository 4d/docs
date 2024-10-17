---
id: delete-index
title: DELETE INDEX
slug: /commands/delete-index
displayed_sidebar: docs
---

<!--REF #_command_.DELETE INDEX.Syntax-->**DELETE INDEX** ( ptrChp | nomIndex {; *} )<!-- END REF-->
<!--REF #_command_.DELETE INDEX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrChp &#124; nomIndex | Pointeur, Chaîne | &#8594;  | Pointeur vers le champ duquel supprimer les index ou Nom de l’index à supprimer |
| * | Opérateur | &#8594;  | Si passé = opération asynchrone |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE INDEX.Summary-->La commande **DELETE INDEX** permet de supprimer un ou plusieurs index existant dans la base.<!-- END REF--> Vous pouvez passer en paramètre soit un pointeur vers un champ, soit un nom d’index :

* Si vous passez un pointeur vers un champ (*ptrChp*), tous les index associés au champ seront supprimés. Il peut s’agir d’index de mots-clés ou d’index standard. En revanche, si le champ est inclus dans un ou plusieurs index composite(s), ils ne sont pas supprimés (vous devez passer un nom d'index).
* Si vous passez nom d’index (*nomIndex*), seul l’index désigné sera supprimé. Il peut s’agir d’index de mots-clés, d’index standard ou d'index composites.

Le paramètre facultatif *\**, lorsqu’il est passé, permet d’effectuer la désindexation en mode asynchrone. Dans ce mode, la méthode d’origine poursuit son exécution après l’appel de la commande, que la suppression d’index soit terminée ou non.

S’il n’existe pas d’index correspondant à *ptrChp* ou à *nomIndex*, la commande ne fait rien.

#### Note pour le déploiement 

Étant donné que cette commande modifie la structure de la base de données, elle ne peut pas être utilisée dans une application packagée en lecture seule (fichier .4dc installé dans le dossier Program Files ou fichier .4dz).

#### Exemple 

Cet exemple illustre les deux syntaxes de la commande : 

```4d
  //Suppression de tous les index liés au champ Nom
 DELETE INDEX(->[Clients]Nom)
  //Suppression de l’index nommé “CPVille”
 DELETE INDEX("CPVille")
```

#### Voir aussi 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  
[SET INDEX](set-index.md)  