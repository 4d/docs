---
id: variant
title: Variant
---

Variant ist ein Variablentyp, um Daten von beliebigem regulären Typ in eine Variable zu setzen. Dieser Typ lässt sich z.B. zum Schreiben von generischem Code verwenden, der Werte von nicht bekanntem Typ zurückgibt oder empfängt. Das ist beispielsweise bei Code zum Verwalten von Objektattributen der Fall.

Eine Variable vom Typ Variant kann einen Wert in folgenden Datentypen enthalten:

- BLOB
- boolean
- collection
- date
- Lange Ganzzahl
- object
- picture
- pointer
- Zahl
- Text
- time
- Null
- Undefiniert

> Arrays lassen sich nicht in Variablen vom Typ Variant speichern.

Sowohl im interpretierten als auch im kompilierten Modus kann derselben Variablen vom Typ Variant Inhalt mit unterschiedlichen Typen zugewiesen werden. Im Gegensatz zu festen Variablentypen ist der Inhaltstyp von Variant unterschiedlich von der Variable selbst. Beispiel:

```4d
C_VARIANT($variant)

$variant:="hello world"
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 2 (Is text)

$variant:=42
$vtype:=Type($variant) // 12 (Is variant)
$vtypeVal:=Value type($variant) // 1 (Is real)
```

Sie können Variablen vom Typ Variant immer verwenden, wo Variablen erwartet werden. Sie müssen nur sicherstellen, dass der Datentyp des Variableninhalts vom erwarteten Typ ist. Beim Zugriff auf Variablen vom Typ Variant wird nur ihr aktueller Wert berücksichtigt. Beispiel:

```4d
C_VARIANT($v)
$v:="hello world"
$v2:=$v //assign variable to another variable

$t:=Type($v) // 12 (Is variant)
$t2:=Type($v2) // 2 (Is text)
```

Mit Variant lassen sich Parameter in Methoden ($0, $1,...) deklarieren, die von unterschiedlichem Typ sein können. In diesem Fall können Sie Code schreiben, der den Typ des Parameterwertes testet, zum Beispiel:

```4d
C_VARIANT($1)
Case of
: (Value type($1)=Is longint)
...
: (Value type($1)=Is text)
...
End case
: (Value type($1)=Is text)
...
End case
```

> Sind Variablen vom Typ Variant nicht erforderlich (z.B. wenn der Datentyp bekannt ist), empfehlen wir, Variablen mit festen Typen zu verwenden. Denn sie bieten bessere Performance, klareren Code und sind für den Compiler hilfreich, da sie Fehler durch Übergeben unerwarteter Datentypen vermeiden. 