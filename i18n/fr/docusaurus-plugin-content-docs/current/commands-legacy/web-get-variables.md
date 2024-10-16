---
id: web-get-variables
title: WEB GET VARIABLES
slug: /commands/web-get-variables
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET VARIABLES.Syntax-->**WEB GET VARIABLES** ( *tabNoms* ; *tabValeurs* )<!-- END REF-->
<!--REF #_command_.WEB GET VARIABLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNoms | Text array | &#8592; | Noms des variables du formulaire Web |
| tabValeurs | Text array | &#8592; | Valeurs des variables du formulaire Web |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET VARIABLES.Summary-->La commande **WEB GET VARIABLES** remplit les tableaux texte *tabNoms* et *tabValeurs* avec, respectivement, les noms et les valeurs des variables contenues dans un formulaire Web “soumis” (c’est-à-dire envoyé) au serveur Web.<!-- END REF-->   
Cette commande récupère la valeur de toutes les variables pouvant être incluses dans des pages HTML : zones de saisie, boutons, cases à cocher, boutons radio, pop up menus, listes d’options... 

**Note :** Dans le cas des cases à cocher, le nom de la variable et sa valeur ne sont retournés que si la case est effectivement cochée. 

La commande fonctionne quel que soit le type d’URL ou de formulaire (méthode POST ou GET) envoyé au serveur Web.   
Cette commande peut être appelée, selon les besoins, dans la [QR SET DESTINATION](qr-set-destination.md) ou toute autre méthode 4D qui résulte de la soumission d’un formulaire.

##### Précisions sur les formulaires Web et les actions associées 

Un formulaire est composé de “zones de saisie” (zones de texte, boutons, cases à cocher), chacune ayant un nom. Lorsqu’un formulaire est “soumis” au serveur Web (une requête est envoyée au serveur), la requête comporte, entre autres, la liste des zones de saisie et leurs valeurs respectives.  
Il y a deux “méthodes” pour soumettre un formulaire (4D accepte indifféremment l’une ou l’autre) : 

* POST, généralement utilisée pour l’insertion de données dans le serveur Web — vers une base de données,
* GET, généralement utilisée pour l’interrogation du serveur Web — données en provenance d’une base de données.

#### Exemple 

Un formulaire contient deux champs, vNOM et vVILLE, qui reçoivent les valeurs “MARTIN” et “PARIS”. L’action associée au formulaire est “*/4DACTION/WEBFORM*”.

* Si la méthode du formulaire est POST (cas le plus souvent utilisé), les données saisies ne seront pas visibles dans l’URL (c’est-à-dire http://127.0.0.1/4DACTION/WEBFORM).
* Si la méthode du formulaire est GET, les données seront visibles dans l’URL (c’est-à-dire http://127.0.0.1/4DACTION/WEBFORM?vNOM=MARTIN&vVILLE=PARIS).

La méthode WEBFORM peut être de la forme suivante :

```4d
 ARRAY TEXT($tnoms;0)
 ARRAY TEXT($tvaleurs;0)
 WEB GET VARIABLES($tnoms;$tvaleurs)
```

On obtient alors :

```4d
 $tnoms{1}="vNOM"
 $tnoms{2}="vVILLE"
 $tvaleurs{1}="MARTIN"
 $tvaleurs{2}="PARIS"
```

#### Voir aussi 

[WEB GET BODY PART](web-get-body-part.md)  