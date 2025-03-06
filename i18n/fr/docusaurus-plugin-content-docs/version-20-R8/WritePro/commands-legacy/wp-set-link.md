---
id: wp-set-link
title: WP SET LINK
slug: /WritePro/commands/wp-set-link
displayed_sidebar: docs
---

<!--REF #_command_.WP SET LINK.Syntax-->**WP SET LINK** ( *objCible* ; *objLien* )<!-- END REF-->
<!--REF #_command_.WP SET LINK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| objLien | Object | &#8594;  | Valeur du lien hypertexte |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP SET LINK.Summary-->La commande **WP SET LINK** applique une référence de lien hypertexte au paramètre *objCible*.<!-- END REF--> Les liens vers les URL, les méthodes 4D et les signets sont pris en charge. Le lien déclenche une action lorsque l'utilisateur clique dessus (ou lorsqu'il utilise le raccource **Ctrl+clic** sur Windows ou **Cmd+clic** sur macOS si le texte n'est pas en lecture seule pour les URL ouvrants).

Dans *objCible*, passez l'objet 4D Write Pro à l'endroit où le lien sera créé. Vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied / section / sous-section), ou
* un document 4D Write Pro

Par exemple, si vous passez un en-tête, tout le contenu de l'en-tête sera affiché sous forme de lien hypertexte. Lorsque vous insérez des liens dans vos documents, 4D Write Pro applique les règles suivantes :

* Si vous fixez un lien dans le paramètre *objCible* qui contient plusieurs paragraphes, plusieurs liens séparés seront définis.
* Si vous fixez un lien dans le paramètre *objCible* qui contient déjà un ou plusieurs liens :  
   * tous les liens existants qui sont entièrement inclus dans *objCible* sont supprimés et le nouveau lien s'applique à *objCible*.  
   * si un lien est partiellement sélectionné (il croise l'*objCible*), il est réduit afin que la partie non sélectionnée conserve le lien précédent et que le nouveau lien s'applique à *objCible*.

Dans le paramètre *objLien*, passez un objet qui décrit le lien hypertexte. Il ne doit contenir qu'une seule des propriétés suivantes (exceptée la propriété du paramètre, qui peut être utilisée avec la propriété de la méthode) :

| **Propriété** | **Type**           | **Description**                                                                                                                                                               | **Action du lien hypertexte**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url           | Texte              | Destination du lien hypertexte d'un type d'URL (url crypté).                                                                                                                  | Crée un lien vers une adresse web standard (http ou https://*website*, mailto:*abc@xyz.com,* etc.) : ouvre l'URL dans l'application par défaut (généralement dans un navigateur)Crée un lien vers un chemin de fichier (absolu ou relatif au fichier de structure de 4D). Lorsque vous créer des liens vers des fichiers .4wp ou .4w7 (file://*filepath* ou *filepath/file.4wp*) : charge et remplace le document courant. Lorsque vous créez des liens vers d'autres types de fichiers, cela ouvre un fichier dans l'application par défaut du système pour le type de fichier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| bookmark      | Texte              | Nom du signet                                                                                                                                                                 | Accède au signet mentionné dans le document courant. (Voir *Gestion des signets*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| method        | Texte              | Nom de la méthode projet - la méthode doit être existante et autorisée à l'aide de la commande [SET ALLOWED METHODS](../../commands/set-allowed-methods.md).           | Exécute la méthode 4D lorsqu'elle est cliquée. La méthode reçoit automatiquement deux paramètres dans $1 et $2:<br/><table><tbody><tr><td>**Paramètre**</td><td>**Propriété**</td><td>**Type**</td><td>**Description**</td></tr><tr><td>$1</td><td></td><td>Texte</td><td>Nom de la zone 4D Write Pro</td></tr><tr><td>$2</td><td></td><td>Objet</td><td></td></tr><tr><td></td><td>method</td><td>Texte</td><td>Nom de la méthode 4D</td></tr><tr><td></td><td>parameter</td><td>Texte \| Numérique</td><td>Paramètre utilisateur envoyé à la méthode via la propriété *parameter* (facultatif, voir ci-dessous)</td></tr><tr><td></td><td>range</td><td>Objet</td><td>Plage de *objCible*</td></tr></tbody></table> |
| parameter     | Texte \| Numérique | Utilisé uniquement avec un lien de type *method*, non obligatoire si la méthode ne nécessite pas de paramétrage. Contient un paramètre supplémentaire à envoyer à la méthode. | Reçu en $2.parameter dans la méthode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

**Notes :**

* 4D Write Pro n'accepte que des URL valides (codés). Les caractères spéciaux contenus dans les liens ne sont pas traduits. Si des caractères spéciaux sont nécessaires (par exemple %20 au lieu de " " pour les espaces) , vous devez les coder clairement. Si le lien n'est pas valide, une erreur est générée.
* Les liens vers les méthodes 4D sont supprimés des documents 4D Write Pro lorsqu'ils sont exportés en format HTML, MIME HTML, ou .docx.
* Si vous souhaitez supprimer un lien de *objCible*, veuillez consulter le paragraphe *Gestion des liens*.

#### Exemple 1 

Vous souhaitez ajouter un lien dans votre site Web, au niveau du pied de page de votre document : 

```4d
 var $footer : Object
 $footer:=WP Get footer(WPArea;1)
 WP SET TEXT($footer;"Veuillez consulter notre site Web";wk replace)
 WP SET LINK($footer;New object("url";"http://www.4d.com"))
```

#### Exemple 2 

Vous souhaitez créer une table des matières contenant des liens à l'aide des signets de votre document :

```4d
 var $i;$n;$p;$memoStart : Integer
 var $range;$link;$toc;$tocRange;$positionInfo;$target : Object
 var $text : Text
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea1;$_bookmarks) //recenser tous les signets
 
 $n:=Size of array($_bookmarks)
 If($n>0)
    $tocRange:=WP Text range(WParea1;wk start text;wk start text) //trouver le début du texte
    WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range) //ajouter un saut de page avant le texte
 
    For($i;1;$n) // Insérer la table des matières et les liens
       $range:=WP Bookmark range(WParea1;$_bookmarks{$i})
       $positionInfo:=WP Get position($range)
       $memoStart:=$tocRange.end
       WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)
 
       $target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))
       $link:=New object("bookmark";$_bookmarks{$i})
       WP SET LINK($target;$link)
       WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)
    End for
 End if
```

#### Exemple 3 

Vous souhaitez fixer un lien dans une méthode 4D dans chaque chaîne "4D" d'un document :

```4d
 var $text,$find : Text
 var $p : Integer
 var $range;$link : Object
 
 $text:=WP Get text(wpArea;wk expressions as value) //récupérer tout le texte du document
 
 $find:="4D" //cible du lien
 
 $p:=Position($find;$text) //mettre une boucle dans le texte pour rechercher toutes les occurrences de la cible
 If($p>0)
    $range:=WP Text range(wpArea;$p;$p+LENGTH($find)) //fixer la longueur de la cible
  //créer l'objet lien
    $link:=New object("méthode";"myAlert";"paramètre";"Vive 4D!") //Ne pas oublier de donner l'autorisation à l'aide de la commande FIXER METHODES AUTORISEES  
 
    WP SET LINK($range;$link)
 End if
```

#### Voir aussi 

  
[WP Get links](wp-get-links.md)  