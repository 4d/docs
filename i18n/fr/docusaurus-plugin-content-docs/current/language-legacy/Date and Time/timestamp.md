---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Heure courante au format ISO avec millisecondes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|16 R2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Timestamp.Summary-->La commande **Timestamp** retourne l'heure UTC courante au format ISO avec millisecondes, i.<!-- END REF-->e. aaaa-MM-jjTHH:mm:ss.SSSZ. Notez que le caractère "Z" indique le fuseau horaire GMT.

Chaque heure retournée par **Timestamp** est exprimée selon le standard ISO 8601\. Pour plus d'informations sur ce standard, veuillez consulter [la page qui lui est consacrée](https://fr.wikipedia.org/wiki/ISO%5F8601) sur Wikipedia.

**Note :** Cette fonction n'est pas adaptée aux fonctions de chronométrage. Si vous souhaitez mesurer le temps écoulé, il est préférable d'utiliser la commande [Milliseconds](../commands/milliseconds).

## Exemple 

Vous pouvez utiliser **Timestamp** dans un fichier journal pour savoir précisément à quel moment les événements se produisent. Comme le montre l'exemple ci-dessous, il est possible que plusieurs opérations s'exécutent durant la même seconde :

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Journal avec timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

Résultat : 

```RAW
2016-12-12T13:31:29.477Z   Journal avec timestamp2016-12-12T13:31:29.478Z   Connection of user12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z   Click on button16842016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

## Voir aussi 

[Milliseconds](../commands/milliseconds)  
[String](../commands/string)  
[Time](../commands/time)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1445 |
| Thread safe | yes |


