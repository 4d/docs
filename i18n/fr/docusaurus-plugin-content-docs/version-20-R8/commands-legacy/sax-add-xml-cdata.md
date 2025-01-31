---
id: sax-add-xml-cdata
title: SAX ADD XML CDATA
slug: /commands/sax-add-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML CDATA.Syntax-->**SAX ADD XML CDATA** ( *document* ; *données* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML CDATA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
| données | Blob, Text | &#8594;  | Texte ou BLOB à insérer dans le document entre balises CData |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML CDATA.Summary-->La commande **SAX ADD XML CDATA** ajoute dans le document XML référencé par *document* des *données* de type texte ou BLOB.<!-- END REF--> Ces données seront automatiquement encadrées par les balises *<!\[CDATA\[* et *\]\]>*.   
Le texte compris dans une section CData est ignoré par l’interpréteur XML. 

Si vous souhaitez encoder le contenu de *données*, vous devez utiliser la commande [BASE64 ENCODE](base64-encode.md). Dans ce cas bien entendu, vous devez passer un BLOB dans *données*. 

Pour que cette commande fonctionne, un élément doit être ouvert. Dans le cas contraire, une erreur est générée. 

#### Exemple 

Vous souhaitez insérer les lignes suivantes dans votre document XML :

```XML
function matchwo(a,b)
{
if (a < b && a < 0) then
      {
      return 1
      }
else
      {
      return 0
      }
}
```

Pour cela, il vous suffit d’exécuter le code suivant :

```4d
 var vtMontexte : Text
 ... // placez ici le texte dans la variable vtMontexte
 SAX ADD XML CDATA($RefDoc;vtMontexte)
```

Le résultat sera alors :

```XML
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
   {
   return 1
   }
else
   {
   return 0
   }
}
]]>
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.

#### Voir aussi 

[SAX GET XML CDATA](sax-get-xml-cdata.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 856 |
| Thread safe | &check; |
| Modifie les variables | OK |


