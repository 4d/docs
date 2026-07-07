---
id: soap-get-info
title: SOAP Get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Get info.Syntax-->**SOAP Get info** ( *numInfo* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.SOAP Get info.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numInfo | Integer | &#8594;  | Numéro du type d’information SOAP à lire |
| Résultat | Text | &#8592; | Information SOAP |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Renommé|
|13|Renommé|
|2003|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SOAP Get info.Summary-->La commande **SOAP Get info** permet de récupérer sous forme de chaîne de caractères différents types d’informations concernant une requête SOAP.<!-- END REF--> 

Lorsque vous traitez une requête SOAP, il peut être utile d’obtenir des informations supplémentaires — en-dehors des valeurs des paramètres RPC — sur la requête. Par exemple, pour des raisons de sécurité, vous pouvez utiliser cette commande dans la *Méthode base Sur authentification Web* afin de connaître le nom de la méthode Web Service demandée. 

Passez dans le paramètre *numInfo* le numéro du type d’information SOAP à connaître. Vous pouvez utiliser les constantes prédéfinies suivantes, placées dans le thème *Web Services (Serveur)* :

| Constante         | Type        | Valeur | Comment                                                                  |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------ |
| SOAP method name  | Entier long | 1      | Nom de la méthode offerte comme Web Service sur le point d’être exécutée |
| SOAP service name | Entier long | 2      | Nom du Web Service auquel appartient la méthode                          |

**Note :** Pour des raisons de sécurité également, il est possible de définir la taille maximale des requêtes Web Services adressées à 4D. Ce paramétrage est effectué à l’aide de la commande [SET DATABASE PARAMETER](../commands/set-database-parameter) (thème “Définition structure”).

## Voir aussi 

[SET DATABASE PARAMETER](../commands/set-database-parameter)  
[SOAP SEND FAULT](../commands/soap-send-fault)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 784 |
| Thread safe | yes |


