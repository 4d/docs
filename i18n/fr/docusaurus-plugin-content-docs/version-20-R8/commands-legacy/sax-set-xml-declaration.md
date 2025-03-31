---
id: sax-set-xml-declaration
title: SAX SET XML DECLARATION
slug: /commands/sax-set-xml-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SAX SET XML DECLARATION.Syntax-->**SAX SET XML DECLARATION** ( *document* ; *encodage* {; *autonome*} )<!-- END REF-->
<!--REF #_command_.SAX SET XML DECLARATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| encodage | Text | &#8594;  | Jeu de caractères du document XML |
| autonome | Boolean | &#8594;  | Vrai=le document est autonome, Faux (défaut)=le document n’est pas autonome |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX SET XML DECLARATION.Summary-->La commande **SAX SET XML DECLARATION** initialise le document XML référencé par *document* à l’aide de l'encodage défini.<!-- END REF--> Vous pouvez également déterminer l’attribut autonome (standalone) de manière facultative.

* *encodage* : indique le jeu de caractères employé dans le document. Par défaut (si la commande n’est pas appelée), le jeu de caractères UTF-8 (Unicode compressé) est utilisé.  
**Note :** Si vous passez un jeu de caractères non pris en charge par les commandes XML de 4D, l'UTF-8 sera utilisé. Reportez-vous au paragraphe *Jeux de caractères* pour connaître la liste des jeux de caractères pris en charge (l'UTF-8 est toutefois recommandé dans la plupart des cas).
* *autonome* : indique si le document est autonome (Vrai) ou s’il dépend, pour son fonctionnement, d’autres fichiers ou de ressources externes (Faux). Par défaut (si la commande n’est pas appelée ou si le paramètre est omis), le document n’est pas autonome.

**Note :** Vous pouvez définir l’indentation du document à l'aide de la commande [XML SET OPTIONS](xml-set-options.md) avant de commencer votre saisie.

Cette commande doit être appelée une seule fois par document et avant la première commande d’écriture XML dans le document, sinon une erreur est générée.

#### Exemple 

Le code suivant : 

```4d
 SAX SET XML DECLARATION($RefDoc;"UTF-16";True)
```

... inscrira cette ligne dans le document : 

```XML
<?xml version="1.0" encoding="UTF-16" standalone="yes"?>
```

#### Voir aussi 

[SAX GET XML DOCUMENT VALUES](sax-get-xml-document-values.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 858 |
| Thread safe | &check; |


