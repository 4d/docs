---
id: method-set-attribute
title: METHOD SET ATTRIBUTE
slug: /commands/method-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTE.Syntax-->**METHOD SET ATTRIBUTE** ( *chemin* ; *typeAttribut* ; *valeurAttribut* {; *typeAttribut2* ; *valeurAttribut2* ; ... ; *typeAttributN* ; *valeurAttributN*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin de méthode projet |
| typeAttribut | Integer | &#8594;  | Type d’attribut |
| valeurAttribut | Boolean, Text | &#8594;  | Vrai = sélectionner l’attribut, Faux = désélectionner l’attribut ou Nom du dossier |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET ATTRIBUTE.Summary-->La commande **METHOD SET ATTRIBUTE** permet de définir la valeur d'un ou plusieurs attribut(s) *typeAttribut* pour la méthode projet désignée par le paramètre *chemin*.<!-- END REF--> Cette commande ne fonctionne qu’avec les méthodes projet. Si vous passez un *chemin* invalide, une erreur est générée. 

Passez dans le paramètre *typeAttribut* une valeur indiquant le type d’attribut à définir. Vous pouvez utiliser les constantes suivantes, placées dans le thème *Accès objets développement* :

| Constante                    | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute executed on server | Entier long | 8      | Correspond à l’option "Exécuter sur serveur"                                                                                                                                                                                                                                                                                                                                                                         |
| Attribute folder name        | Entier long | 1024   | Nom de dossier pour la méthode (attribut "folder"). Lorsque vous passez cette constante, vous devez passer un nom de dossier dans *valeurAttribut* :<br/>si le nom correspond à un dossier valide, la méthode sera placée dans ce dossier parent,si le dossier n’existe pas, la commande ne change rien au niveau du dossier parent,si vous passez une chaîne vide, la méthode sera placée au niveau racine. |
| Attribute invisible          | Entier long | 1      | Correspond à l’option "Invisible"                                                                                                                                                                                                                                                                                                                                                                                    |
| Attribute published SOAP     | Entier long | 3      | Correspond à l’option "Offerte comme Web Service"                                                                                                                                                                                                                                                                                                                                                                    |
| Attribute published SQL      | Entier long | 7      | Correspond à l’option "Disponible via SQL"                                                                                                                                                                                                                                                                                                                                                                           |
| Attribute published Web      | Entier long | 2      | Correspond à l’option "Disponible via les balises HTML et les URLs 4D (4DACTION...)"                                                                                                                                                                                                                                                                                                                                 |
| Attribute published WSDL     | Entier long | 4      | Correspond à l’option "Publiée dans WSDL". N'est prise en compte que si l’option "Offerte comme Web Service" est activée.                                                                                                                                                                                                                                                                                            |
| Attribute shared             | Entier long | 5      | Correspond à l’option "Partagée entre composants et base hôte"                                                                                                                                                                                                                                                                                                                                                       |

Passez dans le paramètre *valeurAttribut* soit :

* **Vrai** pour sélectionner l’option correspondante et **Faux** pour la désélectionner,
* une chaîne (nom du dossier) si vous avez utilisé la constante Attribute folder name dans *typeAttribut*.

Vous pouvez passer plusieurs paires *typeAttribut*;*valeurAttribut* en un seul appel. 

Vous pouvez exécuter cette commande depuis un composant, mais dans ce cas vous devez passer le paramètre *\** car l’accès en écriture au code du composant n’est pas possible. Si vous omettez le paramètre *\** dans ce contexte, l’erreur -9763 est générée. 

##### 

Cette commande ne peut pas être exécutée en mode compilé. Dans ce mode, son appel génère l'erreur -9762\. 

#### Exemple 1 

Sélection de la propriété "Partagée entre composants et base hôte" pour la méthode projet "Choix dialogue" :

```4d
 METHOD SET ATTRIBUTE("Choix dialogue";Attribute shared;True)
```

#### Exemple 2 

Définition de plusieurs paires attribut/valeur :

```4d
 METHOD SET ATTRIBUTE(vChemin;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vDossier;*)
```

#### Voir aussi 

*Accès objets développement*  
[METHOD Get attribute](method-get-attribute.md)  
[METHOD SET ATTRIBUTES](method-set-attributes.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1192 |
| Thread safe | &check; |
| Interdite sur le serveur ||


