---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *filtre* {; *typeFiltre*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| filtre | Text, * | &#8594;  | Nom du jeu de caractères à utiliser ou * pour restaurer le jeu par défaut |
| typeFiltre | Integer | &#8594;  | 0 = Filtre d'exportation, 1 = Filtre d'importation |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE CHARACTER SET.Summary-->La commande **USE CHARACTER SET** permet de modifier le jeu de caractères utilisé par 4D pour toutes les opérations de transfert entre la base et un document ou un port série pour le process courant.<!-- END REF--> Cela inclut les données transférées par les commandes d'import/export Texte, SYLK et DIF, ainsi que celles envoyées par les commandes [SEND PACKET](send-packet.md) et [RECEIVE PACKET](receive-packet.md) (paquets de type texte) et [RECEIVE BUFFER](receive-buffer.md). Les filtres n'ont pas d'effet sur les données transférées par les commandes [SEND RECORD](send-record.md), [SEND VARIABLE](send-variable.md), [RECEIVE RECORD](receive-record.md), [SEND PACKET](send-packet.md), et [RECEIVE PACKET](receive-packet.md) (paquets de type BLOB) et [RECEIVE VARIABLE](receive-variable.md).

Le paramètre *filtre* doit correspondre au nom “IANA” du jeu de caractères à utiliser, ou l’un de ses alias. Par exemple, les noms “iso-8859-1” ou “utf-8” sont des noms valides, ainsi que les alias “latin1” ou “l1”. Pour plus d’informations sur ces noms, reportez-vous à l’adresse <http://www.iana.org/assignments/character-sets>. Des exemples de noms IANA sont également fournis dans la description de la commande [CONVERT FROM TEXT](convert-from-text.md). 

Si *typeFiltre* est égal à 0, le filtre est défini pour l'exportation. Si *typeFiltre* est égal à 1, il est défini pour l'importation. Si vous ne passez pas le paramètre *typeFiltre*, le filtre d'exportation est utilisé par défaut.

Lorsque le paramètre *\** est passé, le jeu de caractères par défaut est rétabli (filtre d'importation ou d'exportation, en fonction de la valeur de *typeFiltre*. Dans 4D, le jeu de caractères par défaut est UTF-8\. 

#### Exemple 

L'exemple suivant (mode Unicode) utilise le jeu de caractères UTF-16 pour exporter un texte, puis le jeu de caractères par défaut est rétabli :

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use le jeu de caractères UTF-16 'Little Endian'
 EXPORT TEXT([Ma Table];"Mon Texte") // Exporter les données avec le filtre
 USE CHARACTER SET(*;0) // Rétablir le jeu par défaut
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si le filtre est correctement chargé, sinon elle prend la valeur 0.

#### Voir aussi 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 205 |
| Thread safe | &check; |
| Modifie les variables | OK |


