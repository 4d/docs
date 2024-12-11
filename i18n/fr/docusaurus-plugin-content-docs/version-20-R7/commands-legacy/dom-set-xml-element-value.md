---
id: dom-set-xml-element-value
title: DOM SET XML ELEMENT VALUE
slug: /commands/dom-set-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Syntax-->**DOM SET XML ELEMENT VALUE** ( *refElément* {; *xPath*}; *valeurElément* {; *} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| xPath | Text | &#8594;  | Chemin XPath de l’élément XML |
| valeurElément | Text, Variable | &#8594;  | Nouvelle valeur de l’élément |
| * | Opérateur | &#8594;  | Si passé : définir la valeur en CDATA |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Summary-->La commande **DOM SET XML ELEMENT VALUE** permet de modifier la valeur de l’élément désigné par *refElément*.<!-- END REF-->

Si vous passez le paramètre facultatif *xPath*, vous choisissez d'utiliser la notation XPath pour désigner l’élément à modifier (pour plus d'informations, reportez-vous à la section*Utilisation de la notation XPath*). Les expressions de chemin suivantes sont prises en charge :

| **Expression** | **Action**                                         |
| -------------- | -------------------------------------------------- |
| /              | Désigne le noeud racine (chemin absolu)            |
| para\[1\]      | Désigne le premier para enfant du noeud contextuel |
| para\[last()\] | Désigne le dernier para enfant du noeud contextuel |

Dans ce cas, vous devez passer la référence d’un élément XML racine dans *refElément* et le chemin XPath de l’élément à modifier dans xPath.

**Note de compatibilité :** *A compter de v18 R3, le niveau de conformité de l'implémentation de XPath dans 4D est nettement plus élevé. Pour des raisons de compatibilité, l'implémentation antérieure non standard est maintenue par défaut dans les bases converties. Si vous souhaitez bénéficier des fonctionnalités avancées dans vos bases converties, vous devez cocher l'option de compatibilité *Utiliser XPath standard* de la* **Page Compatibilité.* 

Passez dans *valeurElément* une chaîne ou une variable (ou un champ) contenant la nouvelle valeur de l’élément :

* si vous passez une chaîne, la valeur sera affectée telle quelle dans la structure XML.
* si vous passez une variable ou un champ, 4D appliquera un traitement approprié à la valeur en fonction du type de *valeurElément*. Tous les types de données peuvent être utilisés, à l’exception des tableaux, images et pointeurs. Si valeurElément prend la valeur *indéfini*, 4D utilise une chaîne vide.

Lorsque le paramètre facultatif astérisque (*\**) est passé, vous indiquez que la valeur de l’élément doit être définie sous la forme CDATA. La forme spéciale CDATA permet d’écrire du texte sous forme brute (cf. exemple 2).

**Note :** Lorsque l’élément désigné par *refElément* est de type BLOB, **DOM SET XML ELEMENT VALUE** l'encode automatiquement en base64\. Dans ce cas, la commande [DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md) effectue automatiquement l'opération inverse.

##### Note sur le traitement des caractères de fin de ligne 

Par conformité avec les règles de traitement XML, toutes les séquences de caractères de fin de ligne CR et CRLF sont converties en caractères LF.

#### Exemple 1 

Soit la source XML suivante : 

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

Si le code suivant est exécuté, en admettant que *vRefElem* contienne la référence de l’élément ‘Title’ :

```4d
 DOM SET XML ELEMENT VALUE(vRefElem;"The Loser")
```

Nous obtenons :

```XML
<Book>
   <Title>The Loser</Title>
</Book>
```

#### Exemple 2 

Soit la source XML suivante : 

```XML
<Maths>
   <Postulate>1+2=3</Postulate>
</Maths>
```

Nous souhaitons écrire le texte “12 < 18” dans l’élément *<postulate>*. Cette chaîne ne peut pas être écrite telle quelle en XML car le caractère “<” n’est pas accepté. Ce caractère doit donc être transformé en “<”, ou la forme CDATA doit être utilisée. Si *vElemRef* désigne le noeud XML *<Postulate>* :

```4d
  // Forme normale
 DOM SET XML ELEMENT VALUE(vRefElem;"12 < 18")
```

Nous obtenons :

```XML
<Maths>
   <Postulate>12 < 18</Postulate>
</Maths>
```

  
```4d
  // Forme CDATA
 DOM SET XML ELEMENT VALUE(vRefElem;"12 < 18";*)
```

Nous obtenons :

```XML
<Maths>
   <Postulate><![CDATA[12 < 18]]></Postulate>
</Maths>
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée (par exemple, si la référence de l’élément n’est pas valide).

#### Voir aussi 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 868 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


