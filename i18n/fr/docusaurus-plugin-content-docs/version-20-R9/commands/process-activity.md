---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->

<!--REF #_command_.Process activity.Params-->

| Paramètres | Type    |                             | Description                                                                                                      |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| sessionID  | Text    | &#8594; | ID de session                                                                                                    |
| options    | Integer | &#8594; | Options de retour                                                                                                |
| Résultat   | Object  | &#8592; | Aperçu des process en cours d'exécution et/ou (4D Server uniquement) des sessions utilisateur |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                            |
| ------- | ---------------------------------------- |
| 20 R7   | Prise en charge du paramètre *sessionID* |

</details>

## Description

<!--REF #_command_.Process activity.Summary-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.<!-- END REF-->La commande **Process activity** retourne une vue instantanée des pocess en cours d'exécution et/ou (4D Server uniquement) de sessions utilisateur connectées à un moment donné. Cette commande retourne tous les process, y compris les process internes qui ne sont pas accessibles par la commande [Process info](process-info.md). 

Par défaut, lorsqu'elle est utilisée sans aucun paramètre, **Process activity** renvoie un objet contenant les propriétés suivantes :

- "processes", une collection de tous les process
- "sessions" (4D Server uniquement), une collection de toutes les sessions

Sur 4D Server, vous pouvez filtrer les informations à retourner en utilisant les paramètres facultatifs *sessionID* et *options*:

- Si vous passez un identifiant de session utilisateur dans le paramètre *sessionID*, la commande retourne uniquement les informations relatives à cette session. Par défaut, si le paramètre *options* est omis, l'objet retourné contient une collection avec tous les process liés à la session et une collection avec un seul objet décrivant la session. Si vous passez un identifiant de session invalide, un objet **null** est retourné.
- Vous pouvez sélectionner la ou les collection(s) à renvoyer en passant l'une des constantes suivantes dans le paramètre *options* :

| Constante              | Valeur | Commentaire                                                                       |
| ---------------------- | ------ | --------------------------------------------------------------------------------- |
| Processes and sessions | 0      | Renvoie les listes "process" et "sessions" (valeur par défaut) |
| Processes only         | 1      | Retourne uniquement la liste "process"                                            |
| Sessions only          | 2      | Retourne uniquement la liste "sessions"                                           |

:::note

Lorsqu'elle est exécutée sur 4D en mode local ou distant, `Process activity` renvoie toujours la liste des process en cours d'exécution (les paramètres *sessionID* et *options* sont ignorés).

:::

**Sessions**

La propriété "sessions" contient une collection d'objets décrivant toutes les sessions en cours d'exécution sur le serveur. Pour une description des propriétés de l'objet session, veuillez vous référer à la commande [`Session info`](session-info.md).

:::note Notes

- Vous pouvez obtenir l'objet d'une session en utilisant la commande [Session](session.md).
- `Process activity` renvoie les sessions des clients distants, les sessions des procédures stockées et les sessions REST, mais pas les sessions Web (limitation).

:::

**Processes**

La propriété "processes" contient une collection d'objets process décrivant tous les process en cours. Pour une description des propriétés des objets process, veuillez vous référer à la commande [`Process info`](process-info.md).

Sur le serveur, la commande `Process activity` renvoie une propriété "session" supplémentaire :

| Propriété supplémentaire | Type   | Description                                                                                                                                                                                                  |   |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| session                  | Object | La propriété [`.info`](../API/SessionClass.md#info) de la session dans laquelle le process est en cours d'exécution. *Undefined* si le paramètre `Processes only` est passé. |   |

## Exemple 1

Vous souhaitez obtenir la collection de toutes les sessions utilisateurs :

```4d
  //A exécuter sur le serveur
 
 var $o : Object
 var $i : Integer
 var $processName;$userName : Text

 
 $o:=Process activity  //Lire informations de process et de sessions
 For($i;0;($o.processes.length)-1) //itération sur la collection "processes"
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // Accès facile à userName
  //utiliser String car l'objet session peut être non défini
 End for
```

## Exemple 2

Vous souhaitez obtenir tous les process liés à la session courante :

```4d
  // à exécuter sur le serveur
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

## Voir également

[Session storage](session-storage.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)