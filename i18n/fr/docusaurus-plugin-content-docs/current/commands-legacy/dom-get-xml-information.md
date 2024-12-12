---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *refElément* ; *infoXML* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
| infoXML | Integer | &#8594;  | Type d’information à lire |
| Résultat | Text | &#8592; | Valeur de l’information XML |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Get XML information.Summary-->La commande **DOM Get XML information** permet de récupérer diverses informations sur l’élément XML désigné par *refElément*.<!-- END REF--> 

Passez dans *infoXML* un code indiquant le type d’information à récupérer. Vous pouvez utiliser les constantes prédéfinies suivantes, placées dans le thème “*XML*” :

| Constante    | Type        | Valeur | Comment                                                                                                                 |
| ------------ | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| DOCTYPE Name | Entier long | 3      | Nom de l’élément racine tel que défini dans la balise DOCTYPE                                                           |
| Document URI | Entier long | 6      | URI de la DTD                                                                                                           |
| Encoding     | Entier long | 4      | Encodage utilisé (UTF-8, ISO...)                                                                                        |
| PUBLIC ID    | Entier long | 1      | Identificateur public (FPI) de la DTD à laquelle le document se conforme (si la balise DOCTYPE xxx PUBLIC est présente) |
| SYSTEM ID    | Entier long | 2      | Identificateur système                                                                                                  |
| Version      | Entier long | 5      | Version de XML accepté                                                                                                  |

#### Voir aussi 

[XML GET ERROR](xml-get-error.md)  