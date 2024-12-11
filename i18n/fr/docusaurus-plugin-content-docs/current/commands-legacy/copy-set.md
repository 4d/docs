---
id: copy-set
title: COPY SET
slug: /commands/copy-set
displayed_sidebar: docs
---

<!--REF #_command_.COPY SET.Syntax-->**COPY SET** ( *srcEns* ; *dstEns* )<!-- END REF-->
<!--REF #_command_.COPY SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| srcEns | Text | &#8594;  | Nom de l'ensemble source |
| dstEns | Text | &#8594;  | Nom de l'ensemble de destination |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY SET.Summary-->La commande **COPY SET** copie le contenu de l'ensemble *srcEns* dans l'ensemble *dstEns*.<!-- END REF-->

Chaque ensemble peut être de type process, interprocess ou local/client. Les deux ensembles peuvent être de type différent (comme dans les exemples ci-dessous), pourvu qu'ils soient visibles sur le poste. Pour plus d'informations sur ce point, reportez-vous au paragraphe "*Visibilité des ensembles*". 

#### Exemple 1 

L'exemple suivant, en client/serveur, copie l'ensemble local "*$SetA"*, conservé sur le poste client, vers l'ensemble process *"SetB"*, conservé sur le poste serveur :

```4d
 COPY SET("$SetA";"SetB")
```

#### Exemple 2 

L'exemple suivant, en client/serveur, copie l'ensemble process "*SetA*", conservé sur le poste serveur, vers l'ensemble local *"$SetB"*, conservé sur le poste client : 

```4d
 COPY SET("SetA";"$SetB")
```

#### Voir aussi 

*Présentation des ensembles*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 600 |
| Thread safe | &check; |
| Interdite sur le serveur ||


