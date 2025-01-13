---
id: propertiesHeaders
title: Cabeçalhos
---

## Exibir cabeçalhos

Esta propriedade é usada para exibir ou ocultar [cabeçalhos de coluna listbox](listbox_overview.md#list-box-headers). Existe um cabeçalho por coluna; cada cabeçalho é configurado separadamente.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| showHeaders | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Alto

Esta propriedade é usada para definir a altura da linha para um cabeçalho de list box em **píxeis** ou **linhas de texto** (quando exibido). Ambos os tipos de unidades podem ser utilizados no mesmo list box:

- *Píxel* - o valor da altura é aplicado diretamente à linha em questão, independentemente do tamanho da fonte contida nas colunas. Se um tipo de letra for demasiado grande, o texto é truncado. Além disso, as imagens são truncadas ou redimensionadas conforme o seu formato.

- *Linha* - a altura é calculada considerando o tamanho da fonte da linha em questão.
  - Se mais de um tamanho for definido, 4D usa o maior. Por exemplo, se uma linha contém "Verdana 18", "Geneva 12" e "Arial 9", 4D usa "Verdana 18" para determinar a altura da linha (por exemplo, 25 pixeis). Esta altura é depois multiplicada pelo número de linhas definido.
  - Este cálculo não tem em conta o tamanho das imagens nem os estilos aplicados aos tipos de letra.
  - In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.

> Esta propriedade também pode ser configurada dinamicamente usando o comando [LISTBOX SET HEADERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html).

Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".

Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. Este facto é ilustrado nas sequências seguintes:

- (fonte Arial 18)\*: 52 pixels -> 2 linhas -> 40 pixels
- (fonte Arial 12)\*: 3 pixels -> 0.4 linha arredondada para 1 linha -> 19 pixels

#### JSON Exemplo

```
 "List Box": {
  "type": "listbox",
  "showHeaders": true,
  "headerHeight": "22px",  
  ...
  }
```

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis             |
| ------------ | ------------- | ----------------------------- |
| headerHeight | string        | décimales positives +px \| em |

#### Objectos suportados

[List Box](listbox_overview.md)

#### Veja também

[Rodapies](properties_Footers.md) - [Cabeçalhos List box](listbox_overview.md#list-box-headers)
