---
id: vp-convert-from-4d-view
title: VP Convert from 4D View
---

<!-- REF #_method_.VP Convert from 4D View.Syntax -->

**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

| Parâmetro      | Tipo   |                             | Descrição                          |
| -------------- | ------ | --------------------------- | ---------------------------------- |
| 4DViewDocument | Blob   | ->                          | Documento 4D View                  |
| Resultados     | Object | <- | Objeto 4D View Pro<!-- END REF --> |

#### Descrição

O comando `VP Convert from 4D View` <!-- REF #_method_.VP Convert from 4D View.Summary -->permite que você converta um documento legado do 4D View em um objeto do 4D View Pro<!-- END REF -->.

> Esse comando não exige que o plug-in legado do 4D View esteja instalado em seu ambiente.

No parâmetro *4DViewDocument*, passe uma variável ou campo BLOB que contenha o documento do 4D View a ser convertido. O comando retorna um objeto 4D View Pro no qual todas as informações originalmente armazenadas no documento 4D View são convertidas em atributos 4D View Pro.

#### Exemplo

Se quiser obter um objeto 4D View Pro de uma área 4D View armazenada em um BLOB:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```
