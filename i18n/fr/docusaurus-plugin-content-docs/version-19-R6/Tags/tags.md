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

L'analyse ou le parsing du contenu d'une source de *template* se fait dans deux contextes :

- En utilisant la commande `PROCESS 4D TAGS` ; cette commande accepte un *template*en entrée, ainsi que des paramètres optionnels et retourne un texte résultant du traitement.

- En utilisant le serveur HTTP intégré de 4D : [pages de templates](WebServer/templates.md) envoyées au moyen des commandes `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB), `WEB SEND TEXT` , ou appelées au moyen d'une URL. Dans ce dernier cas, à des fins d'optimisation, les pages suffixées par ".htm" et ".html" ne sont PAS parsées. In order to parse HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, <http://www.server.com/dir/page.shtm>).

### Traitement récursif

Les balises 4D sont interprétées de manière récursive : 4D tente toujours de réinterpréter le résultat d'une transformation et, si une nouvelle transformation a eu lieu, une interprétation supplémentaire est effectuée, et ainsi de suite jusqu'à ce que le produit obtenu ne nécessite plus aucune transformation. Par exemple, étant donné l'énoncé suivant :

```html
<!--#4DHTML [Mail]Letter_type-->
```

Si le champ de texte `[Mail]Letter_type` contient lui-même une balise, telle que `<!--#4DSCRIPT/m_Gender-->`, cette balise sera évaluée récursivement après l'interprétation de la balise 4DHTML.

Ce principe puissant répond à la plupart des besoins liés à la transformation des textes. Notez toutefois que, dans certains cas, cela peut également permettre l'insertion d'un code malveillant dans le contexte web, [ce qui peut être évité](WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identifiants avec tokens

Pour garantir l'évaluation correcte des expressions traitées via les balises, quel que soit le langage ou la version de 4D, il est recommandé d'utiliser la syntaxe tokenisée pour les éléments dont le nom peut varier selon les versions (commandes, tables, champs, constantes). Par exemple, pour insérer la commande `Current time`, entrez `Current time:C178`.

### Utilisation du "." comme séparateur décimal

4D utilise toujours le caractère point (.) comme séparateur décimal lorsqu'il évalue une expression numérique à l'aide d'une balise `4DTEXT`, `4DHTML`, et `4DEVAL`. Les paramètres régionaux sont ignorés. Cette fonctionnalité facilite la maintenance du code et la compatibilité entre les langues et les versions de 4D.

## 4DBASE

#### Syntax: `<!--#4DBASE folderPath-->`

La balise `<!--#4DBASE -->` désigne le répertoire de travail à utiliser par la balise `<!--#4DINCLUDE-->`.

When it is called in a Web page, the `<!--#4DBASE -->` tag modifies all subsequent `<!--#4DINCLUDE-->` calls on this page, until the next `<!--........-->`, if any. If the`<!--#4DBASE -->` folder is modified from within an included file, it retrieves its original value from the parent file.

Le paramètre *folderPath* doit contenir un nom de chemin relatif à la page actuelle et il doit se terminer par une barre oblique (/). Le dossier désigné doit être situé à l'intérieur du dossier Web.

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

- The *item* variable gets the same type as the first collection element. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the *item* variable is of the object type or collection type (i.e. Si un seul élément de la collection n'est pas du même type que la variable, une erreur est générée et la boucle s'arrête.
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

This syntax iterates on each *property* of the *object*. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each property of the object.

The *property* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their creation order. Pendant la boucle, il est possible d'ajouter ou de supprimer des propriétés dans l'objet, sans pour autant modifier le nombre de boucles qui reste basé sur le nombre de propriétés initial de l'objet.

#### Example with the properties of an object

*getGamers* is a project method that returns an object like ("Mary"; 10; "Ann"; 20; "John"; 40) to figure gamer scores.

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

#### Alternative syntax: `$4DEVAL(expression)`

The `4DEVAL` tag allows you to assess a 4D variable or expression. Like the [`4DHTML`](#4dhtml) tag, `4DEVAL` does not escape HTML characters when returning text. However, unlike `4DHTML` or [`4DTEXT`](#4dtext), `4DEVAL` allows you to execute any valid 4D statement, including assignments and expressions that do not return any value.

For example, you can execute:

```
 $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

In case of an error during interpretation, the text inserted will be in the form: `<!--#4DEVAL expr-->: ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DHTML

#### Syntax: `<!--#4DHTML expression-->`

#### Alternative syntax: `$4DHTML(expression)`

The value of the 4D variable `vtSiteName` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped.

For example, here are the processing results of the 4D text variable myvar with the available tags:

| myvar Value          | Tags                         | Result              |
| -------------------- | ---------------------------- | ------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&lt;B&gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`         |

In case of an interpretation error, the inserted text will be `<!--#4DHTML myvar--> : ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF et 4DENDIF

#### Syntax: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Used with the `<!--#4DELSEIF-->` (optional), `<!--#4DELSE-->` (optional) and `<!--#4DENDIF-->` comments, the `<!--#4DIF expression-->` comment offers the possibility to execute portions of code conditionally.

The *expression* parameter can contain any valid 4D expression returning a Boolean value. It must be indicated within parenthesis and comply with the 4D syntax rules.

In case of an interpretation error, the text "`<!--#4DIF expression-->`: A Boolean expression was expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`. Likewise, if there are not as many `<!--#4DENDIF-->` as `<!--#4DIF -->`, the text "`<!--#4DIF expression-->`: 4DENDIF expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`.

In case of an interpretation error, the text "`<!--#4DIF expression-->`: A Boolean expression was expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`. The `<!--#4DIF expression-->` ... `<!--#4DENDIF-->` blocks can be nested in several levels. Like in 4D, each `<!--#4DIF expression-->` must match a `<!--#4DENDIF-->`.

Using the `<!--#4DELSEIF-->` tag, you can test an unlimited number of conditions. Only the code that follows the first condition evaluated as `True` is executed. If no conditions are true, no statement is executed (if there is no final `<!--#4DELSE-->`). You can use a <!--#4DELSE--> tag after the last <!--#4DELSEIF-->. . <!--#4DELSE--> If all the conditions are false, the statements following the

The two following codes are equivalent.

Code using 4DELSE only:

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

Similar code using the `4DELSEIF` tag:

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

This example of code inserted in a static HTML page displays a different label according the `vname#""` expression result:

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

This example inserts different pages depending on which user is connected:

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

This tag is mainly designed to include an HTML page (indicated by the *path* parameter) in another HTML page. By default, only the body of the specified HTML page, i.e. the contents found within the `<body>` and `</body>` tags, is included (the tags themselves are not included). This lets you avoid conflicts related to meta tags present in the headers.

However, if the HTML page specified does not contain `<body>``</body>` tags, the entire page is included. It is up to you to verify the consistency of the meta tags.

The `<!--#4DINCLUDE -->` comment is very useful for tests (`<!--#4DIF-->`) or loops (`<!--#4DLOOP-->`). It is very convenient to include banners according to a criteria or randomly. When including, regardless of the file name extension, 4D analyzes the called page and then inserts the contents (modified or not) in the page originating the `4DINCLUDE` call.

An included page with the `<!--#4DINCLUDE -->` comment is loaded in the Web server cache the same way as pages called via a URL or sent with the `WEB SEND FILE` command.

In *path*, put the path leading to the document to include. Warning: In the case of a `4DINCLUDE` call, the path is relative to the document being analyzed, that is, the "parent" document. Use the slash character (/) as a folder separator and the two dots (..) to go up one level (HTML syntax). When you use the `4DINCLUDE` tag with the `PROCESS 4D TAGS` command, the default folder is the project folder.

> You can modify the default folder used by the `4DINCLUDE` tag in the current page, using the `<!--#4DBASE -->` tag (see below).

The number of `<!--#4DINCLUDE path-->` within a page is unlimited. However, the `<!--#4DINCLUDE path-->` calls can be made only at one level. This means that, for example, you cannot insert `<!--#4DINCLUDE mydoc3.html-->` in the *mydoc2.html* body page, which is called by `<!--#4DINCLUDE mydoc2-->` inserted in *mydoc1.html*. Furthermore, 4D verifies that inclusions are not recursive.

In case of error, the inserted text is "`<!--#4DINCLUDE path-->` :The document cannot be opened".

Exemple :

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP et 4DENDLOOP

#### Syntax: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

This comment allows repetition of a portion of code as long as the condition is fulfilled. The portion is delimited by `<!--#4DLOOP-->` and `<!--#4DENDLOOP-->`.

The `<!--#4DLOOP condition-->` ... `<!--#4DENDLOOP-->` blocks can be nested. Like in 4D, each `<!--#4DLOOP condition-->` must match a `<!--#4DENDLOOP-->`.

There are five kinds of conditions:

### `<!--#4DLOOP [table]-->`

This syntax makes a loop for each record from the table current selection in the current process. The code portion located between the two comments is repeated for each current selection record.

> When the `4DLOOP` tag is used with a table, records are loaded in "Read only" mode.

Le code suivant :

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 FIRST RECORD([People])
 While(Not(End selec tion([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

This syntax makes a loop for each array item. The array current item is increased when each code portion is repeated.

> This syntax cannot be used with two dimension arrays. In this case, it is better to combine a method with nested loops.

The following code example:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

This syntax makes a loop as long as the method returns `True`. The method takes a Long Integer parameter type. First it is called with the value 0 to allow an initialization stage (if necessary); it is then called with the values 1 ,then 2, then 3 and so on, as long as it returns `True`.

For security reasons, within a Web process, the `On Web Authentication` database method can be called once just before the initialization stage (method execution with 0 as parameter). If the authentication is OK, the initialization stage will proceed.

`C_BOOLEAN($0)` and `C_LONGINT($1)` MUST be declared within the method for compilation purposes.

The following code example:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/> 
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

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

The `my_method` method can be as follows:

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

With this syntax, the `4DLOOP` tag makes a loop as long as the *expression* returns `True`. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.

For example, the following code:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...produces the following result:

```
0

1
2
3
```

### `<!--#4DLOOP pointerArray-->`

In this case, the `4DLOOP` tag works like it does with an array: it makes a loop for each element of the array referenced by the pointer. The current array element is increased each time the portion of code is repeated.

This syntax is useful when you pass an array pointer as a parameter to the `PROCESS 4D TAGS` command.

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

In case of an interpretation error, the text "`<!--#4DLOOP expression-->`: description" is inserted instead of the contents located between `<!--#4DLOOP -->` and `<!--#4DENDLOOP-->`.

The following messages can be displayed:

- Unexpected expression type (standard error);
- Incorrect table name (error on the table name);
- An array was expected (the variable is not an array or is a two dimension array);
- The method does not exist;
- Syntax error (when the method is executing);
- Access error (you do not have the appropriate access privileges to access the table or the method).
- 4DENDLOOP expected (the `<!--#4DENDLOOP-->` number does not match the `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Syntax: `<!--#4DSCRIPT/MethodName/MyParam-->`

The `4DSCRIPT` tag allows you to execute 4D methods when processing the template. The presence of the `<!--#4DSCRIPT/MyMethod/MyParam-->` tag as an HTML comment launches the execution of the `MyMethod` method with the `Param` parameter as a string in `$1`.

> If the tag is called in the context of a Web process, when the page is loaded, 4D calls the `On Web Authentication` database method (if it exists). If it returns True, 4D executes the method.

The method must return text in `$0`. If the string starts with the code character 1, it is considered as HTML (the same principle is true for the `4DHTML` tag).

For example, let’s say that you insert the following comment `“Today is<!--#4DSCRIPT/MYMETH/MYPARAM-->”` into a template Web page. When loading the page, 4D calls the `On Web Authentication` database method, then calls the `MYMETH` method and passes the string “/MYPARAM” as the parameter `$1`. The method returns text in $0 (for example "12/31/21"); the expression "`Today is<!--#4DSCRIPT/MYMETH/MYPARAM––>`" therefore becomes "Today is 12/31/21".

The `MYMETH` method is as follows:

```4d
  //MYMETH
 C_TEXT($0;$1) //These parameters must always be declared
 $0:=String(Current date)
```

> A method called by `4DSCRIPT` must not call interface elements (`DIALOG`, `ALERT`, etc.).

As 4D executes methods in their order of appearance, it is absolutely possible to call a method that sets the value of many variables that are referenced further in the document, whichever mode you are using. You can insert as many `<!--#4DSCRIPT...-->` comments as you want in a template.

## 4DTEXT

#### Syntax: `<!--#4DTEXT expression-->`

#### Syntaxe alternative : `4DTEXT(expression)`

La balise `<!--#4DTEXT expression-->` vous permet d'insérer une référence à une variable 4D ou à une expression retournant une valeur. Par exemple, si vous écrivez (dans une page HTML) :

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

Just like the `4DTEXT` tag, this tag lets you assess a 4D variable or expression that returns a value, and insert it as an HTML expression. Cette valeur est insérée comme du texte simple, les caractères HTML spéciaux tels que ">" sont automatiquement échappés.

Vous pouvez également insérer des expressions 4D. Par exemple, vous pouvez insérer directement le contenu d'un champ (`<!--#4DTEXT [tableName]fieldName-->`), un élément de tableau (`<!--#4DTEXT tabarr{1}-->`) ou une méthode retournant une valeur (`<!--#4DTEXT mymethod-->`). La conversion des expressions suit les mêmes règles que celles des variables. De plus, l'expression doit respecter les règles de syntaxe 4D.

> Pour des raisons de sécurité, il est recommandé d'utiliser cette balise lors du traitement de données introduites en dehors de l'application, afin d'éviter [l'insertion de code malveillant](#prevention-of-malicious-code-insertion).

En cas d'erreur d'évaluation, le texte inséré apparaîtra sous la forme `<!--#4DTEXT myvar--> : ## erreur # code d'erreur`.

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

Le principal avantage de cette syntaxe est qu'elle vous permet d'écrire des modèles conformes à XML. Certains développeurs 4D ont besoin de créer et de valider des modèles basés sur XML à l'aide d'outils d'analyse syntaxique XML standard. Le caractère "<" n'étant pas valide dans une valeur d'attribut XML, il n'était pas possible d'utiliser la syntaxe "<!-- -->" des balises 4D sans rompre la syntaxe du document. D'autre part, ne pas mentionner le caractère "<" empêche 4D d'interpréter correctement les balises.

Par exemple, le code suivant provoquerait une erreur d'analyse XML en raison du premier caractère "<" dans la valeur de l'attribut :

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

En utilisant la syntaxe $, le code suivant est validé par le parseur :

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

A noter que `$4dtag` et `<--#4dtag -->` ne sont pas strictement équivalents : contrairement à `<--#4dtag -->`, le traitement de `$4dtag` n'interprète pas les balises 4D [de manière récursive](#recursive-processing). Les balises `$` sont toujours évaluées une fois et le résultat est considéré comme du texte brut.

Cette différence consiste à empêcher l'injection de code malveillant. Comme [expliqué ci-dessous](#prevention-of-malicious-code-insertion), il est fortement recommandé d'utiliser les balises `4DTEXT` au lieu des balises `4DHTML` lorsque vous manipulez du texte utilisateur, afin de se protéger contre une réinterprétation indésirable des balises : avec `4DTEXT`, les caractères spéciaux tels que "<" ne sont pas mentionnés, ainsi toute balise 4D utilisant la syntaxe `<!--#4dtag expression -->` perdra sa signification particulière. Cependant, étant donné que `4DTEXT` n'échappe pas au symbole `$``, nous avons décidé de rompre la prise en charge de la récursion afin d'empêcher toute injection malveillante utilisant la syntaxe 4dtag (expression)`.

Les exemples suivants illustrent le résultat du traitement en fonction de la syntaxe et du tag utilisés :

```4d
  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D will quit!
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
