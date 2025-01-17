---
id: variant
title: Variant
---

Variant est un type de variable qui permet d'encapsuler des données de type valide et standard dans une variable. En règle générale, ce type de variable peut être utilisé pour écrire du code générique qui retourne ou reçoit des valeurs dont le type n'est pas connu. C'est le cas par exemple du code traitant des attributs d'objet.

Une variable de type variant peut contenir une valeur des types de données suivants :

- BLOB
- boolean
- collection
- date
- entier long
- object
- picture
- pointer
- réel
- text
- time
- Null
- undefined

> Les tableaux ne peuvent pas être stockés dans des variables de type variant.

En modes interprété et compilé, le même contenu peut être affecté à une même variable variant. Contrairement aux types de variable standard, le type de contenu des variable de type variant est différent du type de variable variant lui-même. Par exemple :

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

Vous pouvez utiliser des variables variant chaque fois qu'elles sont attendues. Vous devez simplement vous assurer que le type de données du contenu de la variable est du type attendu. Lorsque vous accédez à des variables de type variant, seule leur valeur courante est prise en compte. Par exemple :

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //assign variable to another variable

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

Le type Variant peut être utilisé pour déclarer [des paramètres de méthode](parameters.md) pouvant être de différents types. Dans ce cas, vous pouvez générer votre code en testant le type de valeur du paramètre, par exemple :

```4d
#DECLARE ($param : Variant)
Case of
: (Value type($param)=Is longint)
...
: (Value type($param)=Is text)
...
End case
```

> Lorsque des variables variant ne sont pas nécessaires (c'est-à-dire lorsque le type de données est connu), il est recommandé d'utiliser des variables typées standard. Les variables typées standard fournissent de meilleures performances, un code plus clair et permettent au compilateur d'éviter les bugs liés à des types de données passés qui sont inattendus.
