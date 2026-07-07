---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *filtre* : Text, Operator {; *typeFiltre* : Integer} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| filtre | Text, * | &#8594;  | Nom du jeu de caractères à utiliser ou * pour restaurer le jeu par défaut |
| typeFiltre | Integer | &#8594;  | 0 = Filtre d'exportation, 1 = Filtre d'importation |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.USE CHARACTER SET.Summary-->La commande **USE CHARACTER SET** permet de modifier le jeu de caractères utilisé par 4D pour toutes les opérations de transfert entre la base et un document ou un port série pour le process courant.<!-- END REF--> Cela inclut les données transférées par les commandes d'import/export Texte, SYLK et DIF, ainsi que celles envoyées par les commandes [SEND PACKET](../commands/send-packet) et [RECEIVE PACKET](../commands/receive-packet) (paquets de type texte) et [RECEIVE BUFFER](../commands/receive-buffer). Les filtres n'ont pas d'effet sur les données transférées par les commandes [SEND RECORD](../commands/send-record), [SEND VARIABLE](../commands/send-variable), [RECEIVE RECORD](../commands/receive-record), [SEND PACKET](../commands/send-packet), et [RECEIVE PACKET](../commands/receive-packet) (paquets de type BLOB) et [RECEIVE VARIABLE](../commands/receive-variable).

Le paramètre *filtre* doit correspondre au nom “IANA” du jeu de caractères à utiliser, ou l’un de ses alias. Par exemple, les noms “iso-8859-1” ou “utf-8” sont des noms valides, ainsi que les alias “latin1” ou “l1”. Pour plus d’informations sur ces noms, reportez-vous à l’adresse <http://www.iana.org/assignments/character-sets>. Des exemples de noms IANA sont également fournis dans la description de la commande [CONVERT FROM TEXT](../commands/convert-from-text). 

Si *typeFiltre* est égal à 0, le filtre est défini pour l'exportation. Si *typeFiltre* est égal à 1, il est défini pour l'importation. Si vous ne passez pas le paramètre *typeFiltre*, le filtre d'exportation est utilisé par défaut.

Lorsque le paramètre *\** est passé, le jeu de caractères par défaut est rétabli (filtre d'importation ou d'exportation, en fonction de la valeur de *typeFiltre*. Dans 4D, le jeu de caractères par défaut est UTF-8\. 

## Exemple 

L'exemple suivant (mode Unicode) utilise le jeu de caractères UTF-16 pour exporter un texte, puis le jeu de caractères par défaut est rétabli :

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use le jeu de caractères UTF-16 'Little Endian'
 EXPORT TEXT([Ma Table];"Mon Texte") // Exporter les données avec le filtre
 USE CHARACTER SET(*;0) // Rétablir le jeu par défaut
```

## Variables et ensembles système 

La variable système OK prend la valeur 1 si le filtre est correctement chargé, sinon elle prend la valeur 0.

## Voir aussi 

[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[RECEIVE BUFFER](../commands/receive-buffer)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 205 |
| Thread safe | yes |
| Modifie les variables | OK |


