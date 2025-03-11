---
id: tags
slug: tags
title: Balises de transformation
---

4D fournit un ensemble de balises de transformation qui vous permettent d'insérer des références à des variables ou des expressions 4D, ou d'effectuer différents types de traitement dans un texte source, appelé "template". Ces balises sont interprétées lors de l'exécution du texte source et génèrent un texte de sortie.

Ce principe est notamment utilisé par le serveur Web 4D pour créer [des pages de template Web](WebServer/templates.md).

Ces balises sont généralement insérées sous forme de commentaires de type HTML (`<!--#Tag Contents-->`) mais [une syntaxe alternative conforme à la norme xml](#alternative-syntax-for-4dtext-4dhtml-4deval) est disponible pour certaines d'entre elles.

Il est possible de combiner plusieurs types de balises. Par exemple, la structure HTML suivante est tout à fait envisageable :

```html
<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```

## Principes d'utilisation des balises

### Parsing

L'analyse ou le parsing du contenu d'une source de *template* peut être effectué dans deux contextes :

- En utilisant la commande `PROCESS 4D TAGS` ; cette commande accepte un *template*en entrée, ainsi que des paramètres optionnels et retourne un texte résultant du traitement.

- En utilisant le serveur HTTP intégré de 4D : [pages de templates](WebServer/templates.md) envoyées au moyen des commandes `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB), `WEB SEND TEXT` , ou appelées au moyen d'une URL. Dans ce dernier cas, à des fins d'optimisation, les pages suffixées par ".htm" et ".html" ne sont PAS parsées. Pour analyser les pages HTML dans ce cas, vous devez ajouter le suffixe ".shtm" ou ".shtml" (par exemple, [http://www.server.com/dir/page.shtm)](http://www.server.com/dir/page.shtm).

### Traitement récursif

Les balises 4D sont interprétées de manière récursive : 4D tente toujours de réinterpréter le résultat d'une transformation et, si une nouvelle transformation a eu lieu, une interprétation supplémentaire est effectuée, et ainsi de suite jusqu'à ce que le produit obtenu ne nécessite plus aucune transformation. Par exemple, étant donné l'énoncé suivant :

```html
<!--#4DHTML [Mail]Letter_type-->
```

Si le champ de texte `[Mail]Letter_type` contient lui-même une balise, telle que `<!--#4DSCRIPT/m_Gender-->`, cette balise sera évaluée récursivement après l'interprétation de la balise 4DHTML.

Ce principe puissant répond à la plupart des besoins liés à la transformation des textes. Note, however, that in some cases this can also allow malicious code to be inserted in the web context, [which can be avoided](../WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identifiants avec tokens

Pour garantir l'évaluation correcte des expressions traitées via les balises, quel que soit le langage ou la version de 4D, il est recommandé d'utiliser la syntaxe tokenisée pour les éléments dont le nom peut varier selon les versions (commandes, tables, champs, constantes). Par exemple, pour insérer la commande `Current time`, entrez `Current time:C178`.

### Utilisation du "." comme séparateur décimal

4D utilise toujours le caractère point (.) comme séparateur décimal lorsqu'il évalue une expression numérique à l'aide d'une balise `4DTEXT`, `4DHTML`, et `4DEVAL`. Les paramètres régionaux sont ignorés. Cette fonctionnalité facilite la maintenance du code et la compatibilité entre les langues et les versions de 4D.

## 4DBASE

#### Syntax: `<!--#4DBASE folderPath-->`

La balise `<!--#4DBASE -->` désigne le répertoire de travail à utiliser par la balise `<!--#4DINCLUDE-->`.

Lorsqu'elle est appelée dans une page Web, la balise `<!--#4DBASE -->` modifie tous les appels `<!--#4DINCLUDE-->` ultérieurs sur cette page, jusqu'au prochain `, if any. If the <code><!--#4DBASE -->` folder is modified from within an included file, it retrieves its original value from the parent file.

Le paramètre *folderPath* doit contenir un nom de chemin relatif à la page actuelle et il doit se terminer par une barre oblique (`/`). Le dossier désigné doit être situé à l'intérieur du dossier Web.

Passez le mot-clé "WEBFOLDER" pour rétablir le chemin par défaut (relatif à la page).

Le code suivant, qui doit spécifier un chemin relatif pour chaque appel :

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

...équivaut à :

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

Par exemple, pour définir un répertoire pour la page d'accueil :

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

Dans le fichier "head.html", le dossier courant est modifié par `<!--#4DBASE -->`, sans que cela ne change sa valeur dans "Index.html" :

```html
/* Head.htm */
/* the working directory here is relative to the included file (FR/ or US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### Syntax: `<!--#4DCODE codeLines-->`

La balise `4DCODE` permet d'insérer un bloc de code 4D de plusieurs lignes dans un template.

Lorsqu'une séquence `<!--#4DCODE` est détectée et qu'elle est suivie d'un espace, d'un caractère CR ou LF, 4D interprète toutes les lignes de code jusqu'à la séquence `-->` suivante. Le bloc de code lui-même peut contenir des retours chariot, des sauts de ligne ou les deux ; il sera interprété séquentiellement par 4D.

Par exemple, vous pouvez écrire dans un template :

```html
<!--#4DCODE
//PARAMETERS initialization
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...your code here
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->
```

Voici les caractéristiques de la balise 4DCODE :

- La commande `TRACE` est prise en charge et active le débogueur 4D, vous permettant ainsi de déboguer le code de votre modèle.
- Toute erreur affichera le dialogue d'erreur standard qui permet à l'utilisateur d'arrêter l'exécution du code ou d'entrer en mode débogage.
- Le texte entre `<!--#4DCODE` et `-->` est divisé en lignes acceptant toute convention de fin de ligne (cr, lf ou crlf).
- Le texte est tokenisé dans le contexte de la base de données qui a appelé `PROCESS 4D TAGS`. Ceci est important pour la reconnaissance des méthodes de projet par exemple. La propriété de la méthode [Available through tags et 4D URLs (4DACTION ...)](WebServer/allowProject.md) n'est pas prise en compte.
- Même si le texte utilise toujours l'anglais-US, il est recommandé d'utiliser la syntaxe token (:Cxxx) pour les noms de commandes et de constantes afin de se prémunir contre d'éventuels problèmes dus à des commandes ou des constantes renommées d'une version de 4D à une autre.

> Le fait que les balises 4DCODE puissent appeler n'importe quelle commande du langage 4D ou méthode du projet pourrait être considéré comme un problème de sécurité, en particulier lorsque la base de données est disponible via HTTP. Toutefois, étant donné qu'elle exécute du code côté serveur appelé à partir de vos propres fichiers de modèle, la balise elle-même ne représente pas un problème de sécurité. Dans ce contexte, comme pour tout serveur Web, la sécurité est principalement gérée au niveau des accès distants aux fichiers du serveur.

## 4DEACH et 4DENDEACH

#### Syntax: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

Le commentaire `<!--#4DEACH-->` permet d'itérer un élément spécifié sur toutes les valeurs de l'*expression*. L'élément est défini comme une *variable* dont le type dépend du type d'*expression*.

Le commentaire `<!--#4DEACH-->` peut itérer sur trois types d'expression :

- [collections](#--4deach-item-in-collection--) : boucle à travers chaque élément de la collection,
- [entity selections](#--4deach-entity-in-entityselection--) : boucle à travers chaque entity,
- [objets](#--4deach-property-in-object--) : boucle à travers chaque propriété d'objet.

Le nombre d'itérations est évalué au démarrage et ne changera pas pendant le traitement. L'ajout ou la suppression d'éléments pendant la boucle est donc déconseillé car il pourra en résulter une redondance ou un manque d'itérations.

### `<!--#4DEACH item in collection-->`

Cette syntaxe permet d'effectuer une itération sur chaque *élément* de la *collection*. La portion de code située entre `<!--#4DEACH -->` et `<!--#4DENDEACH-->` est répétée pour chaque élément de la collection.

Le paramètre de l'élément est une variable du même type que les éléments de la collection.

La collection ne doit contenir que des **éléments de même type**, sinon une erreur est retournée dès que la variable de l'élément se voit attribuer le premier type de valeur non concordant.

Le nombre de boucles est basé sur le nombre d'éléments de la collection. À chaque itération, la variable de l'élément correspond automatiquement à l'élément correspondant de la collection. Vous devez tenir compte des points suivants :

- Si la variable *item* est de type objet ou collection (c'est-à-dire si *'expression* est une collection d'objets ou de collections), la modification de cette variable modifiera automatiquement l'élément correspondant de la collection (car les objets et les collections partagent les mêmes références). Si la variable est de type scalaire, seule la variable sera modifiée.
- La variable *item* prend le même type que le premier élément de la collection. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
- Si la collection contient des éléments de valeur Null, une erreur sera générée si le type de la variable ne prend pas en charge la valeur *Null* (comme par exemple les variables entier long).

#### Exemple avec une collection de valeurs scalaires

*getNames* retourne une collection de chaînes de caractères. La méthode a été déclarée comme "[disponible via les balises 4D et les URL](WebServer/allowProject.md)".

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemple avec une collection d'objets

*getSalesPersons* retourne une collection d'objets.

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

Cette syntaxe permet d'effectuer une itération sur chaque *entity* de l'*entitySelection*. La portion de code située entre `<!--#4DEACH -->` et `<!--#4DENDEACH-->` est répétée pour chaque entity de l'entity selection.

Le paramètre *entity* est une variable objet de la classe entity selection.

Le nombre de boucles est basé sur le nombre d'entities présentes dans l'entity selection. À chaque itération, la variable de l'objet *entity* correspond automatiquement à l'entity de l'entity selection.

#### Exemple avec un tableau html

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemple avec des `BALISES 4D PROCESS`

```4d
var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->"
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->"
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

Cette syntaxe permet d'effectuer une itération sur chaque *propriété* de l'*objet*. La portion de code située entre `<!--#4DEACH -->` et `<!--#4DENDEACH-->` est répétée pour chaque propriété de l'objet.

Le paramètre " *property"* est une variable texte automatiquement remplie avec le nom de la propriété en cours de traitement.

Les propriétés de l'objet sont itérées en fonction de leur ordre de création. Pendant la boucle, il est possible d'ajouter ou de supprimer des propriétés dans l'objet, sans pour autant modifier le nombre de boucles qui reste basé sur le nombre de propriétés initial de l'objet.

#### Exemple avec les propriétés d'un objet

*getGamers* est une méthode projet qui renvoie un objet tel que ("Mary" ; 10 ; "Ann" ; 20 ; "John" ; 40) pour calculer les scores des joueurs.

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

## 4DEVAL

#### Syntax: `<!--#4DEVAL expression-->`

#### Syntaxe alternative : `$4DEVAL(expression)`

La balise `4DEVAL` permet d'évaluer une variable ou une expression 4D. Comme la balise [`4DHTML`](#4dhtml), `4DEVAL` n'échappe pas les caractères HTML lorsqu'elle renvoie du texte. Toutefois, contrairement à `4DHTML` ou [`4DTEXT`](#4dtext), `4DEVAL` vous permet d'exécuter n'importe quelle instruction 4D valide, y compris les affectations et les expressions qui ne renvoient aucune valeur.

Par exemple, vous pouvez exécuter :

```
 $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

En cas d'erreur lors de l'interprétation, le texte inséré sera de la forme : `<!--#4DEVAL expr-->: ## error # code d'erreur`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](../WebServer/templates.md#prevention-of-malicious-code-insertion).

## 4DHTML

#### Syntax: `<!--#4DHTML expression-->`

#### Alternative syntax: `$4DHTML(expression)`

Tout comme la balise `4DTEXT`, cette balise vous permet d'évaluer une variable ou une expression 4D qui renvoie une valeur, et de l'insérer en tant qu'expression HTML. Contrairement à la balise `4DTEXT`, cette balise n'échappe pas les caractères spéciaux HTML (par exemple, ">").

Par exemple, voici les résultats du traitement de la variable texte 4D myvar avec les balises disponibles :

| valeur de myvar      | Balises                      | Résultat            |
| -------------------- | ---------------------------- | ------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&lt;B&gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`         |

En cas d'erreur d'interprétation, le texte inséré sera `<!--#4DHTML myvar--> : ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](../WebServer/templates.md#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF et 4DENDIF

#### Syntaxe : `<!--#4DIF` `expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Utilisé avec les commentaires `<!--#4DELSEIF-->` (optionnel), `<!--#4DELSE-->` (optionnel) et `<!--#4DENDIF-->`, le commentaire `<!--#4DIF expression-->` offre la possibilité d'exécuter des portions de code de manière conditionnelle.

Le paramètre *expression* peut contenir n'importe quelle expression 4D valide renvoyant une valeur booléenne. Il doit être indiqué entre parenthèses et respecter les règles syntaxiques de 4D.


En cas d'erreur d'interprétation, le texte "`<!--#4DIF expression-->`: Une expression booléenne était attendue" est inséré à la place du contenu situé entre `<!--#4DIF -->` et `<!--#4DENDIF-->`. De même, s'il n'y a pas autant de `<!--#4DENDIF-->` que de `<!--#4DIF -->`, le texte "`<!--#4DIF expression-->`: 4DENDIF expected" est inséré à la place du contenu situé entre `<!--#4DIF -->` et `<!--#4DENDIF-->`.

En cas d'erreur d'interprétation, le texte "`<!--#4DIF expression-->`: Une expression booléenne était attendue" est inséré à la place du contenu situé entre `<!--#4DIF -->` et `<!--#4DENDIF-->`. `<!--#4DENDIF-->` peuvent être imbriqués à plusieurs niveaux. Comme dans 4D, chaque `<!--#4DIF expression-->` doit correspondre à un `<!--#4DENDIF-->`.

En utilisant la balise `<!--#4DELSEIF-->`, vous pouvez tester un nombre illimité de conditions. Seul le code qui suit la première condition évaluée à `True` est exécuté. Si aucune condition n'est vraie, aucune instruction n'est exécutée (s'il n'y a pas de `<!--#4DELSE-->` final). Vous pouvez utiliser une balise `<!--#4DELSE-->` après la dernière balise `<!--#4DELSEIF-->`. Si toutes les conditions sont fausses, les instructions qui suivent `<!--#4DELSE-->` sont exécutées.

Les deux codes suivants sont équivalents.

Code utilisant uniquement 4DELSE :

```html
<!--#4DIF Condition1-->
  /* Condition1 is true*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 is true*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 is true */
        <!--#4DELSE-->
            /*None of the conditions are true*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

Code similaire utilisant la balise `4DELSEIF`:

```
<!--#4DIF Condition1-->
     /* Condition1 is true*/
<!--#4DELSEIF Condition2-->
     /* Condition2 is true*/
<!--#4DELSEIF Condition3-->
    /* Condition3 is true */
<!--#4DELSE-->
    /* None of the conditions are true*/
<!--#4DENDIF-->
```

Cet exemple de code inséré dans une page HTML statique affiche un libellé différent en fonction du résultat de l'expression `vname#""`:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

Cet exemple insère des pages différentes en fonction de l'utilisateur connecté :

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### Syntax: `<!--#4DINCLUDE path-->`

Cette balise est principalement conçue pour inclure une page HTML (désignée par le paramètre *path* ) dans une autre page HTML. Par défaut, seul le body de la page HTML spécifiée, c'est-à-dire le contenu des balises `<body>` et `</body>`, est inclus (les balises elles-mêmes ne sont pas incluses). Cela permet d'éviter les conflits liés aux métabalises présentes dans les en-têtes.

Toutefois, si la page HTML spécifiée ne contient pas de balises `<body>` et `</body>`, la page entière est incluse. Il vous appartient de vérifier la cohérence des balises méta.

Le commentaire `<!--#4DINCLUDE -->` est très utile pour les tests (`<!--#4DIF-->`) ou les boucles (`<!--#4DLOOP-->`). Il est très pratique d'inclure des bannières en fonction d'un critère ou de manière aléatoire. Lors de l'inclusion, quelle que soit l'extension du nom de fichier, 4D analyse la page appelée et insère son contenu (modifié ou non) dans la page à l'origine de l'appel `4DINCLUDE`.

Une page incluse avec le commentaire `<!--#4DINCLUDE -->` est chargée dans le cache du serveur Web de la même manière que les pages appelées via une URL ou envoyées avec la commande `WEB SEND FILE`.

Dans *path*, indiquez le chemin menant au document à inclure. Attention : Dans le cas d'un appel à `4DINCLUDE`, le chemin est relatif au document analysé, c'est-à-dire au document "parent". Utilisez la barre oblique (/) comme séparateur de dossier et les deux points (..) pour remonter d'un niveau (syntaxe HTML). Lorsque vous utilisez la balise `4DINCLUDE` avec la commande `PROCESS 4D TAGS`, le dossier par défaut est le dossier du projet.

> Vous pouvez modifier le dossier par défaut utilisé par la balise `4DINCLUDE` dans la page courante, en utilisant la balise `<!--#4DBASE -->`.

Le nombre de `<!--#4DINCLUDE path-->` dans une page est illimité. Toutefois, les appels `<!--#4DINCLUDE path-->` ne peuvent être effectués qu'à un seul niveau. Cela signifie que, par exemple, vous ne pouvez pas insérer `<!--#4DINCLUDE mydoc3.html-->` dans le body de la page *mydoc2.html*, qui est appelé par `<!--#4DINCLUDE mydoc2-->` inséré dans *mydoc1.html*. En outre, 4D vérifie que les inclusions ne sont pas récursives.

En cas d'erreur, le texte inséré est "`<!--#4DINCLUDE path-->`: Le document ne peut pas être ouvert".

Exemples :

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP et 4DENDLOOP

#### Syntax: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

Ce commentaire permet de répéter une partie du code tant que la condition est remplie. La partie de code est délimitée par `<!--#4DLOOP-->` et `<!--#4DENDLOOP-->`.

Les blocs `<!--#4DLOOP condition-->`... `<!--#4DENDLOOP-->` peuvent être imbriqués. Comme dans le langage 4D, chaque `<!--#4DLOOP condition-->` doit correspondre à une `<!--#4DENDLOOP-->`.

Il existe cinq types de conditions :

### `<!--#4DLOOP [table]-->`

Cette syntaxe crée une boucle pour chaque enregistrement de la sélection courante de la table dans le process courant. La partie du code située entre les deux commentaires est répétée pour chaque enregistrement de la sélection courante.

> Lorsque la balise `4DLOOP` est utilisée avec une table, les enregistrements sont chargés en mode "lecture seule".

Le code suivant :

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... pourrait être exprimé en langage 4D de la manière suivante :

```4d
 NEXT RECORD([People])
 End while
    FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
```

### `<!--#4DLOOP array-->`

Cette syntaxe crée une boucle pour chaque élément du tableau. L'indice d'élément courant du tableau est augmenté lorsque chaque portion de code est répétée.

> Cette syntaxe ne peut pas être utilisée avec des tableaux à deux dimensions. Dans ce cas, il est préférable de combiner une méthode avec des boucles imbriquées.

L'exemple de code suivant :

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... pourrait être exprimé en langage 4D de la manière suivante :

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

Cette syntaxe crée une boucle tant que la méthode renvoie `True`. La méthode prend un paramètre de type entier long. Elle est d'abord appelée avec la valeur 0 pour permettre une étape d'initialisation (si nécessaire) ; elle est ensuite appelée avec les valeurs 1, puis 2, puis 3 et ainsi de suite, tant qu'elle renvoie `True`.

Pour des raisons de sécurité, dans un process Web, la méthode base `On Web Authentication` peut être appelée une seule fois juste avant la phase d'initialisation (exécution de la méthode avec 0 comme paramètre). Si l'authentification est correcte, l'étape d'initialisation se poursuit.

`C_BOOLEAN($0)` et `C_LONGINT($1)` DOIVENT être déclarés dans la méthode à des fins de compilation.

L'exemple de code suivant :

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... pourrait être exprimé en langage 4D de la manière suivante :

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

La méthode `my_method` peut être la suivante :

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Stops the loop
    End if
 End if
```

### `<!--#4DLOOP expression-->`

Avec cette syntaxe, la balise `4DLOOP` crée une boucle tant que l'*expression* renvoie `True`. L'expression peut être n'importe quelle expression booléenne valide et doit contenir une partie variable à évaluer dans chaque boucle afin d'éviter les boucles infinies.

Par exemple, le code suivant :

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...donne le résultat suivant :

```

0
1
2
3
```

### `<!--#4DLOOP pointerArray-->`

Dans ce cas, la balise `4DLOOP` fonctionne comme pour un tableau : elle effectue une boucle pour chaque élément du tableau référencé par le pointeur. L'indice de l'élément courant du tableau est augmenté à chaque fois que la portion de code est répétée.

Cette syntaxe est utile lorsque vous passez un pointeur de tableau en tant que paramètre de la commande `PROCESS 4D TAGS`.

Voici un exemple :

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

En cas d'erreur d'interprétation, le texte "`<!--#4DIF expression-->`: Une expression booléenne était attendue" est inséré à la place du contenu situé entre `<!--#4DIF -->` et `<!--#4DENDIF-->`.

Les messages suivants peuvent être affichés :

- Type d'expression inattendu (erreur standard) ;
- Nom de table incorrect (erreur sur le nom de la table) ;
- Un tableau était attendu (la variable n'est pas un tableau ou est un tableau à deux dimensions) ;
- La méthode n'existe pas ;
- Erreur de syntaxe (lors de l'exécution de la méthode) ;
- Erreur d'accès (vous ne disposez pas des privilèges d'accès appropriés pour accéder à la table ou à la méthode).
- 4DENDLOOP attendu (le nombre de `<!--#4DENDLOOP-->` ne correspond pas au nombre de `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Syntax: `<!--#4DSCRIPT/MethodName/MyParam-->`

La balise `4DSCRIPT` permet d'exécuter des méthodes 4D lors du traitement du modèle. La présence de la balise `<!--#4DSCRIPT/MyMethod/MyParam-->` en tant que commentaire HTML lance l'exécution de la méthode `MyMethod` avec le paramètre `Param` sous forme de chaîne de caractères en `$1`.

> Si la balise est appelée dans le contexte d'un process Web, lorsque la page est chargée, 4D appelle la méthode base `On Web Authentication` (si elle existe). Si elle retourne True, 4D exécute la méthode.

La méthode doit renvoyer du texte dans `$0`. Si la chaîne commence par le code de caractère 1, elle est considérée comme du HTML (le même principe s'applique à la balise `4DHTML` ).

Par exemple, supposons que vous insériez le commentaire suivant `"Aujourd'hui, nous sommes le <!--#4DSCRIPT/MYMETH/MYPARAM-->"` dans un modèle de page web. Lors du chargement de la page, 4D appelle la méthode base `On Web Authentication`, puis appelle la méthode `MYMETH` et transmet la chaîne "/MYPARAM" en tant que paramètre `$1`. La méthode renvoie du texte en $0 (par exemple "12/31/21") ; l'expression`"Aujourd'hui, nous sommes le<!--#4DSCRIPT/MYMETH/MYPARAM-->`" devient donc "Aujourd'hui, nous sommes le 12/31/21".

La méthode `MYMETH` est la suivante :

```4d
  //MYMETH
 C_TEXT($0;$1) //Ces paramètres doivent toujours être déclarés
 $0:=String(Current date)
```

> Une méthode appelée par `4DSCRIPT` ne doit pas appeler des éléments d'interface`(DIALOG`, `ALERT`, etc.).

Comme 4D exécute les méthodes dans leur ordre d'apparition, il est tout à fait possible d'appeler une méthode qui fixe la valeur de plusieurs variables référencées plus loin dans le document, quel que soit le mode utilisé. Vous pouvez insérer autant de `<!--#4DSCRIPT...-->` commentaires que vous le souhaitez dans un modèle.

## 4DTEXT

#### Syntax: `<!--#4DTEXT expression-->`

#### Syntaxe alternative : `4DTEXT(expression)`

La balise `<!--#4DTEXT expression-->` vous permet d'insérer une référence à une variable 4D ou à une expression retournant une valeur. Par exemple, si vous écrivez (dans une page HTML) :

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

La valeur de la variable 4D `vtSiteName` sera insérée dans la page HTML lors de son envoi. Cette valeur est insérée comme du texte simple, les caractères HTML spéciaux tels que ">" sont automatiquement échappés.

Vous pouvez également insérer des expressions 4D. Par exemple, vous pouvez insérer directement le contenu d'un champ (`<!--#4DTEXT [tableName]fieldName-->`), un élément de tableau (`<!--#4DTEXT tabarr{1}-->`) ou une méthode retournant une valeur (`<!--#4DTEXT mymethod-->`). La conversion des expressions suit les mêmes règles que celles des variables. De plus, l'expression doit respecter les règles de syntaxe 4D.

> For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](../WebServer/templates.md#prevention-of-malicious-code-insertion).

En cas d'erreur d'évaluation, le texte inséré apparaîtra sous la forme `<!--#4DTEXT myvar-->: ## erreur # code d'erreur`.

- Vous devez utiliser des variables process.
- Vous pouvez afficher le contenu d'un champ image. Cependant, il n'est pas possible d'afficher le contenu d'un élément de tableau d'images.
- Il est possible d'afficher le contenu d'un champ objet à l'aide d'une formule 4D. Par exemple, vous pouvez écrire `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- Vous travaillerez généralement avec des variables de type Texte. Cependant, vous pouvez également utiliser des variables BLOB. Il vous suffit de générer les BLOB en mode `Texte sans longueur`.

## Syntaxe alternative pour 4DTEXT, 4DHTML, 4DEVAL

Plusieurs balises de transformation 4D existantes peuvent être exprimées à l'aide d'une syntaxe fondée sur le symbole $ :

#### 4dtag (expression)

peut être utilisé à la place de

#### `<!--#4dtag expression-->`

Cette syntaxe alternative n'est disponible que pour les balises utilisées pour retourner des valeurs traitées :

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Les autres balises, telles que 4DIF ou 4DSCRIPT, doivent être écrites avec la syntaxe régulière).

Par exemple, vous pouvez écrire :

```html
$4DEVAL(UserName)
```

au lieu de :

```html
<!--#4DEVAL(UserName)-->
```

Le principal avantage de cette syntaxe est qu'elle vous permet d'écrire des modèles conformes à XML. Certains développeurs 4D ont besoin de créer et de valider des modèles basés sur XML à l'aide d'outils d'analyse syntaxique XML standard. Le caractère "<" n'étant pas valide dans une valeur d'attribut XML, il n'était pas possible d'utiliser la syntaxe " " des balises 4D sans rompre la syntaxe du document. D'autre part, ne pas mentionner le caractère "<" empêche 4D d'interpréter correctement les balises.

Par exemple, le code suivant provoquerait une erreur d'analyse XML en raison du premier caractère "<" dans la valeur de l'attribut :

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

En utilisant la syntaxe $, le code suivant est validé par le parseur :

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

A noter que `$4dtag` et `<--#4dtag -->` ne sont pas strictement équivalents : contrairement à `<--#4dtag -->`, le traitement de `$4dtag` n'interprète pas les balises 4D [de manière récursive](#recursive-processing). Les balises `$` sont toujours évaluées une fois et le résultat est considéré comme du texte brut.

Cette différence consiste à empêcher l'injection de code malveillant. As [explained below](../WebServer/templates.md#prevention-of-malicious-code-insertion), it is strongly recommended to use `4DTEXT` tags instead of `4DHTML` tags when handling user text to protect against unwanted reinterpretation of tags: with `4DTEXT`, special characters such as "<" are escaped, thus any 4D tags using the `<!--#4dtag expression -->` syntax will lose their particular meaning. Cependant, étant donné que `4DTEXT` n'échappe pas le symbole `$`, nous avons choisi de ne pas prendre en charge la récursion afin d'empêcher toute injection malveillante utilisant la syntaxe `$4dtag (expression)`.

Les exemples suivants illustrent le résultat du traitement en fonction de la syntaxe et de la balise  utilisées :

```4d
  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //injection malveillante
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //fait quitter 4D !
```

```4d
  // exemple 2
 myName:="<!--#4DHTML QUIT 4D-->" //injection malveillante
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //la sortie est "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // exemple 3
 myName:="$4DEVAL(QUIT 4D)" //injection malveillante
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //la sortie est "My name is: $4DEVAL(QUIT 4D)"
```

A noter que la syntaxe `$4dtag` prend en charge la correspondance de paires de guillemets ou de parenthèses. Par exemple, supposons que vous ayez besoin d'évaluer la chaîne complexe (fictive) suivante :

```
String(1) + "\"(hello)\""
```

Vous pouvez écrire :

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
```
