---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| alias | Text | &#8594;  | Nom d'utilisateur qui remplace celui du compte utilisateur 4D ou "" pour réinitialiser |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17 R5|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SET USER ALIAS.Summary-->La commande **SET USER ALIAS** définit un nom personnalisé à utiliser à la place de celui du compte utilisateur 4D pour la session courante.<!-- END REF--> Cet autre nom est gardé en mémoire et s'applique uniquement à l'utilisateur courant. 

**Note :** Cette commande ne peut être appelée que depuis un 4D distant ou un 4D monoposte. Elle n'est pas autorisée sur 4D Server. 

Dans le paramètre *alias*, passez le nom personnalisé à afficher à la place de celui du compte utilisateur 4D courant. 

Une fois que la commande est exécutée, l'*alias* est utilisé là où le compte utilisateur 4D a été retourné ou affiché, en particulier dans les commandes [Current user](../commands/current-user), [Process activity](../commands/process-activity) et [LOCKED BY](../commands/locked-by), ou dans la [ORDER BY FORMULA](../commands/order-by-formula) de la fenêtre d'administration de 4D Server. Dans les environnements en client/serveur, cette commande doit être exécutée sur des applications distantes afin que chaque utilisateur soit identifié sur le serveur à l'aide, par exemple, de la commande [Current user](../commands/current-user), même si toutes les applications distantes utilisent le même compte utilisateur 4D.

Pour supprimer l'*alias* de l'utilisateur 4D courant, appelez **SET USER ALIAS**("").

**Note :** La commande [CHANGE CURRENT USER](../commands/change-current-user) réinitialise l'alias de l'utilisateur courant. 

## Exemple 

Vos utilisateurs sont gérés via une table personnalisée et utilisent le même compte utilisateur 4D. Sur chaque machine cliente, vous pouvez exécuter :

```4d
 SET USER ALIAS([myUsers]userName)
```

## Voir aussi 

[CHANGE CURRENT USER](../commands/change-current-user)  
[Current user](../commands/current-user)  
[SET GROUP ACCESS](../commands/set-group-access)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1666 |
| Thread safe | yes |
| Interdite sur le serveur ||


