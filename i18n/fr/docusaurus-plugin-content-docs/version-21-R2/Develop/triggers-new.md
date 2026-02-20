---
id: triggers-new
title: Triggers
---

to import

<!-- REF triggers.vs-events.Desc -->

## Triggers vs Evénements d'entité ORDA

Les **triggers** (également appelés événements de base de données) et les [**événements d'entité ORDA**](../ORDA/orda-events.md) ont des objectifs similaires : ils établissent des règles pour contrôler les opérations fondamentales sur les données (création, modification ou suppression). Cependant, ils n'opèrent pas au même niveau :

- les triggers sont gérés au niveau de la base de données, qui est le niveau le plus bas,
- les événements d'entité ORDA sont traités au niveau du [datastore](../ORDA/dsMapping.md#datastore), qui est lié à votre logique d'application.

Les actions sur les données exécutées via le datastore, telles que [`.save()`](../API/EntityClass.md#save) ou [`.drop`](../API/EntityClass.md#drop), appelleront les triggers, le cas échéant.

En revanche, les actions déclenchées au niveau de la base de données 4D à l'aide des commandes du langage 4D classique telles que [`SAVE RECORD`](../commands/save-record) ou les [actions standard](https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html#3371159) ne déclencheront PAS d'événements d'entité ORDA.

<!-- END REF -->
