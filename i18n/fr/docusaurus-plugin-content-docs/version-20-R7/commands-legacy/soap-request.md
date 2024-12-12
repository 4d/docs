---
id: soap-request
title: SOAP Request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP Request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si la requête est SOAP, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.SOAP Request.Summary-->La commande **SOAP Request** retourne Vrai si le code en cours d’exécution fait partie d’une requête SOAP.<!-- END REF--> 

Cette commande peut être utilisée pour des raisons de sécurité dans la *Méthode base Sur authentification Web* afin de déterminer la nature des requêtes reçues.

#### Voir aussi 

[SOAP DECLARATION](soap-declaration.md)  