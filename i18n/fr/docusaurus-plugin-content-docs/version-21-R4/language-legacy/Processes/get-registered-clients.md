---
id: get-registered-clients
title: GET REGISTERED CLIENTS
slug: /commands/get-registered-clients
displayed_sidebar: docs
---

<!--REF #_command_.GET REGISTERED CLIENTS.Syntax-->**GET REGISTERED CLIENTS** ( *listeClients* : Text array ; *nbMéthodes* : Integer array )<!-- END REF-->
<!--REF #_command_.GET REGISTERED CLIENTS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| listeClients | Text array | &#8592; | Liste des 4D Client enregistrés |
| nbMéthodes | Integer array | &#8592; | Liste des méthodes restant à exécuter |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6.5|Créé|

</details>
</div>

## Description 

<!--REF #_command_.GET REGISTERED CLIENTS.Summary-->La commande **GET REGISTERED CLIENTS** remplit deux tableaux <!-- END REF-->:

* *listeClients*, qui contient la liste des clients “inscrits” à l’aide de la commande [REGISTER CLIENT](../commands/register-client).
* *nbMéthodes*, qui fournit liste des “charges de travail” de chaque client. La charge de travail est le nombre de méthodes qu’un 4D Client doit encore exécuter, à la demande de la commande [EXECUTE ON CLIENT](../commands/execute-on-client).

## Exemple 1 

Vous souhaitez obtenir la liste des clients inscrits et des méthodes restant à exécuter :

```4d
 ARRAY TEXT($clients;0)
 ARRAY LONGINT($nprocs;0)
 GET REGISTERED CLIENTS($clients;$nprocs)
```

## Exemple 2 

Reportez-vous à l’exemple de la commande [REGISTER CLIENT](../commands/register-client). 

## Variables et ensembles système 

Si l’opération se déroule correctement, la variable système OK prend la valeur 1.

## Voir aussi 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[REGISTER CLIENT](../commands/register-client)  
[UNREGISTER CLIENT](../commands/unregister-client)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 650 |
| Thread safe | no |
| Modifie les variables | OK |


