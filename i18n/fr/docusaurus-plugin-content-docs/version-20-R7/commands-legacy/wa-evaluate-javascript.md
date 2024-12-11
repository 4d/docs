---
id: wa-evaluate-javascript
title: WA Evaluate JavaScript
slug: /commands/wa-evaluate-javascript
displayed_sidebar: docs
---

<!--REF #_command_.WA Evaluate JavaScript.Syntax-->**WA Evaluate JavaScript** ( {* ;} *objet* ; *codeJS* {; *type*} )  : any<!-- END REF-->
<!--REF #_command_.WA Evaluate JavaScript.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| codeJS | Text | &#8594;  | Code JavaScript |
| type | Integer | &#8594;  | Type dans lequel convertir le résultat |
| Résultat | Date, Time, Object, Pointer, Real, Text | &#8592; | Résultat de l’exécution |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Evaluate JavaScript.Summary-->La commande **WA Evaluate JavaScript** exécute dans la zone Web désignée par les paramètres *\** et *objet* le code JavaScript passé dans *codeJS* et retourne le résultat.<!-- END REF--> Cette commande doit être appelée après le chargement complet de la page (l'événement formulaire On End URL Loading doit avoir été généré).

Par défaut, la commande retourne le résultat sous forme de chaîne. Vous pouvez toutefois préciser le typage de la valeur retournée à l’aide du paramètre optionnel *type*. Pour cela, vous pouvez passer dans *type* une des constantes suivantes, placées dans le thème "*Types champs et variables*" :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is Boolean    | Entier long | 6      |
| Is collection | Entier long | 42     |
| Is date       | Entier long | 4      |
| Is longint    | Entier long | 9      |
| Is object     | Entier long | 38     |
| Is real       | Entier long | 1      |
| Is text       | Entier long | 2      |
| Is time       | Entier long | 11     |

**Attention :** L'utilisation de cette commande pour appeler directement une fonction JavaScript qui affiche un dialogue (**alert()**, **print().**..) n'est pas recommandée car l'utilisateur ne peut pas interagir avec la zone Web pendant l'exécution du code 4D. Si vous devez implémenter une telle interface, vous pouvez par exemple appeler **setTimeout(function(){alert();}, 50))** pour laisser l'exécution du code 4D se terminer et permettre l'interaction de l'utilisateur. 

#### Exemple 1 

Cet exemple de code JavaScript provoque l'affichage de l'url précédent : 

```4d
 $résultat:=WA Evaluate JavaScript(MaZoneW;"history.back()")
```

#### Exemple 2 

Cet exemple montre quelques évaluations avec conversion des valeurs reçues.

Des fonctions JavaScript sont placées dans un fichier html :

```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function evalLong(){
            return 123;
        }
        function evalTexte(){
            return "456";
        }
        function evalObjet(){
            return {a:1,b:"hello world"};
        }
        function evalDate(){
            return new Date();
        }
    </script>
    </head>
    <body>
        TEST PAGE
    </body>
</html>
```

Vous écrivez dans la méthode du formulaire 4D :

```4d
 If(Form event code=On Load)
    WA OPEN URL(*;"Web Area";"C:\\myBase\\index.html")
 End if
```

Vous pouvez alors évaluer le code JavaScript depuis 4D :

```4d
 $Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)
     //$Eval1 = 123
     //$Eval1 = "123" si le type est omis
 $Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalTexte()";Is text)
     //$Eval2 = "456"
 $Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObjet()";Is object)
     //$Eval3 = {"a":1,"b":"hello world"}
 $Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)
     //$Eval4 = 21/06/13
     //$Eval4 = "2013-06-21T14:45:09.694Z" si le type est omis
```

#### Voir aussi 

[WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1029 |
| Thread safe | &check; |
| Interdite sur le serveur ||


