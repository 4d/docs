---
id: trigger-properties
title: TRIGGER PROPERTIES
slug: /commands/trigger-properties
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *niveauTrigger* ; *evenementBase* ; *numTable* ; *numEnreg* )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| niveauTrigger | Integer | &#8594;  | Niveau d'exécution du trigger |
| evenementBase | Integer | &#8592; | Evénement de base de données |
| numTable | Integer | &#8592; | Numéro de la table |
| numEnreg | Integer | &#8592; | Numéro de l'enregistrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->La commande **TRIGGER PROPERTIES** fournit des informations sur le niveau d'exécution du trigger que vous avez passé dans *niveauTrigger*.<!-- END REF--> Vous devez utiliser conjointement **TRIGGER PROPERTIES** et [Trigger level](trigger-level.md) pour effectuer différentes actions en fonction de la cascade du trigger. Reportez-vous à la description des triggers en cascade dans la section *Présentation des triggers*.

Si vous passez un niveau d'exécution de trigger inexistant, la commande retourne 0 (zéro) dans chaque paramètre.

La nature de l'événement de base de données pour le niveau d'exécution du trigger est retournée dans *evenementBase*. Les constantes prédéfinies suivantes sont fournies dans le thème "*Evénements trigger*" : 

| Constante                       | Type        | Valeur |
| ------------------------------- | ----------- | ------ |
| On Deleting Record Event        | Entier long | 3      |
| On Saving Existing Record Event | Entier long | 2      |
| On Saving New Record Event      | Entier long | 1      |

Le numéro de table et d'enregistrement pour l'enregistrement concerné par l'événement de base de données pour le niveau d'exécution du trigger sont retournés dans *numTable* et *numEnreg*.

#### Voir aussi 

*A propos des numéros d'enregistrements*  
*Présentation des triggers*  
[Trigger event](trigger-event.md)  
[Trigger level](trigger-level.md)  