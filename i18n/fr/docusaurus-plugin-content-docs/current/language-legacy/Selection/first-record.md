---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** ({ *laTable* : Table })<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle charger le premier enregistrement de la sélection courantes ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.FIRST RECORD.Summary-->**FIRST RECORD** charge en mémoire le premier enregistrement de la sélection courante de *laTable* et en fait l'enregistrement courant.<!-- END REF--> Toutes les commandes de recherche, de sélection et de tri font également du premier enregistement l'enregistrement courant. Si la sélection courante est vide ou si l'enregistrement courant est déjà le premier enregistrement de la sélection, **FIRST RECORD** ne fait rien.

Cette commande est principalement utilisée après un appel à [USE SET](../commands/use-set), pour débuter une boucle dans la sélection d'enregistrements à partir du premier enregistrement. Cependant, il est tout à fait envisageable de l'appeler depuis une sous-routine lorsque vous souhaitez vous assurer que l'enregistrement est bien le premier.

## Exemple 

L'exemple suivant charge le premier enregistrement de la table \[Clients\] :

```4d
 FIRST RECORD([Clients])
```

## Voir aussi 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 50 |
| Thread safe | yes |
| Change l'enregistrement courant ||


