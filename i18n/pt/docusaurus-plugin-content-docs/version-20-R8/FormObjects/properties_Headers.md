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
 - No macOS, a altura da linha pode estar incorreta se o usuário inserir caracteres que não estejam disponíveis na fonte selecionada. Quando isso ocorre, uma fonte substituta é usada, o que pode causar variações no tamanho.

> Esta propriedade também pode ser configurada dinamicamente usando o comando [LISTBOX SET HEADERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html).

Conversão de unidades: quando você muda de uma unidade para a outra, 4D converte-os automaticamente e exibe o resultado na Lista de propriedades. Por exemplo, se a fonte usada for "Lucida grande 24", uma altura de "1 linha" será convertida em "30 píxeis" e uma altura de "60 píxeis" será convertida em "2 linhas".

Observe que a conversão para frente e para trás pode levar a um resultado diferente do valor inicial devido aos cálculos automáticos feitos por 4D. Este facto é ilustrado nas sequências seguintes:

- (fonte Arial 18)\*: 52 pixels -> 2 linhas -> 40 pixels
- (fonte Arial 12)\*: 3 pixels -> 0.4 linha arredondada para 1 linha -> 19 pixels

#### Exemplo JSON

```
 "List Box": {
  "type": "listbox",
  "showHeaders": true,
  "headerHeight": "22px",  
  ...
  }
```

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                     |
| ------------ | ------------- | ----------------------------------------------------- |
| headerHeight | string        | décimales positives +px &#124; em |

#### Objectos suportados

[List Box](listbox_overview.md)

#### Veja também

[Rodapies](properties_Footers.md) - [Cabeçalhos List box](listbox_overview.md#list-box-headers)
