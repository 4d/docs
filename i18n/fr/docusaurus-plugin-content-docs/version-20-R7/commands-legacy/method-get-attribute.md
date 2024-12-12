---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *chemin* ; *typeAttribut* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin de méthode projet |
| typeAttribut | Integer | &#8594;  | Type d’attribut à obtenir |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |
| Résultat | Boolean | &#8592; | Vrai = attribut sélectionné, sinon Faux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.METHOD Get attribute.Summary-->La commande **METHOD Get attribute** retourne la valeur de l’attribut *typeAttribut* pour la méthode projet désignée par le paramètre *chemin*.<!-- END REF--> Cette commande ne fonctionne qu’avec les méthodes projet. Si vous passez un *chemin* invalide, une erreur est générée. 

Passez dans le paramètre *typeAttribut* une valeur indiquant le type d’attribut à lire. Vous pouvez utiliser les constantes suivantes, placées dans le thème *Accès objets développement* :

| Constante                    | Type        | Valeur | Comment                                                                                                                   |
| ---------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| Attribute executed on server | Entier long | 8      | Correspond à l’option "Exécuter sur serveur"                                                                              |
| Attribute invisible          | Entier long | 1      | Correspond à l’option "Invisible"                                                                                         |
| Attribute published SOAP     | Entier long | 3      | Correspond à l’option "Offerte comme Web Service"                                                                         |
| Attribute published SQL      | Entier long | 7      | Correspond à l’option "Disponible via SQL"                                                                                |
| Attribute published Web      | Entier long | 2      | Correspond à l’option "Disponible via les balises HTML et les URLs 4D (4DACTION...)"                                      |
| Attribute published WSDL     | Entier long | 4      | Correspond à l’option "Publiée dans WSDL". N'est prise en compte que si l’option "Offerte comme Web Service" est activée. |
| Attribute shared             | Entier long | 5      | Correspond à l’option "Partagée entre composants et base hôte"                                                            |

Si la commande est exécutée depuis un composant, elle s’applique par défaut aux méthodes du composant. Si vous passez le paramètre *\**, elle accède aux méthodes de la base hôte. 

La commande retourne **Vrai** si un attribut est sélectionné et **Faux** s’il est désélectionné.

#### Voir aussi 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  