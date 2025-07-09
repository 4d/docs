---
id: wp-insert-formula
title: WP Insert formula
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert formula.Syntax-->**WP Insert formula** ( *targetObj* ; *formula* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert formula.Params-->

| Parâmetro   | Tipo   |                             | Descrição                                                          |
| ----------- | ------ | --------------------------- | ------------------------------------------------------------------ |
| targetObj   | Object | &#8594; | Range or element or 4D Write Pro document                          |
| formula     | Object | &#8594; | Objeto de fórmula OU Objeto com propriedades de fórmula e nome     |
| mode        | Number | &#8594; | Modo de inserção                                                   |
| rangeUpdate | Number | &#8594; | Inclui ou exclui o conteúdo inserido dentro do intervalo           |
| Resultado   | Object | &#8592; | Objeto de intervalo de texto que representa o resultado da fórmula |

<!-- END REF-->

## Descrição

O comando **WP Insert formula**<!--REF #_command_.WP Insert formula.Summary--> insere uma *fórmula* em *targetObj* de acordo com o *modo* de inserção especificado e retorna o intervalo de texto resultante.<!-- END REF-->

No parâmetro *targetObj*, você pode passar:

- um intervalo, ou
- um elemento (tabela / linha / célula(s) / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / imagem inline), ou
- um documento 4D Write Pro.

No parâmetro *formula*, passe a fórmula 4D a ser avaliada. Pode passar:

- um [objeto fórmula](../../commands/formula.md-objects) criado pelo comando [**Formula**](../../commands/formula.md) ou [**Formula from string**](../../commands/formula.md-from-string),
- ou um objeto que contém duas propriedades:

| **Propriedade** | **Tipo** | **Description**                                                                                                                                                                           |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Text     | Nome a ser exibido para a fórmula no documento                                                                                                                                            |
| formula         | Object   | O [objeto de fórmula](../../commands/formula.md-objects) criado pelo comando [**Formula**](../../commands/formula.md) ou [**Formula from string**](../../commands/formula.md-from-string) |

Quando você usa um objeto com uma fórmula *name*, esse nome é exibido no documento em vez da referência da fórmula quando as fórmulas são exibidas como referência e na dica da fórmula quando são exibidas como valor ou símbolos. Se a propriedade *name* contiver uma string vazia ou for omitida, ela será removida do objeto e a fórmula será exibida por padrão. Para obter mais informações, consulte a página [Gerenciar fórmulas](../managing-formulas.md).

No parâmetro *mode*, passe uma das seguintes constantes para indicar o modo de inserção a ser usado:

| Parâmetros | Tipo    | Valor | Comentário                             |
| ---------- | ------- | ----- | -------------------------------------- |
| wk append  | Integer | 2     | Insert contents at end of target       |
| wk prepend | Integer | 1     | Insert contents at beginning of target |
| wk replace | Integer | 0     | Replace target contents                |

- Se *targetObj* for um intervalo, você poderá usar o parâmetro opcional *rangeUpdate* para passar uma das seguintes constantes e especificar se a *fórmula* inserida está ou não incluída no intervalo resultante:

| Parâmetros            | Tipo    | Valor | Comentário                                                               |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------ |
| wk exclude from range | Integer | 1     | Inserted contents not included in updated range                          |
| wk include in range   | Integer | 0     | Inserted contents included in updated range (default) |

Se você não passar um parâmetro *rangeUpdate*, por padrão a *fórmula* inserida será incluída no intervalo resultante.

- Se *targetObj* não for um intervalo, *rangeUpdate* será ignorado.

:::note

Lembre-se de que, quando chamado, o objeto de fórmula é avaliado no contexto do banco de dados ou do componente que o criou.

:::

## Exemplo 1

Para substituir todas as fórmulas de data atuais por cadeias de caracteres formatadas:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // define a fórmula a ser encontrada
 $find:=Formula(Current date)
 
  // define a fórmula de substituição
 $newFormula:=Formula(String(Current date;System date long))
 
  // localizar todas as fórmulas no documento
 $_formulas:=WP Get formulas(WriteProArea)
 
  // consultar a coleção de WP Get formulas
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)
 
  // em seguida, substituir cada fórmula
 For each($formula;$_formulas)
    WP Insert formula($formula.range;$newFormula;wk replace)
 End for each
```

## Exemplo 2

Se quiser usar um nome de fórmula para o nome do cliente:

```4d
  //adicionar alguns dados
 $data:=New object("customer";New object("lastname"; "Smith"; "firstname"; "John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //criar um objeto de fórmula com um nome
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Nome do cliente"
 
  //insere como texto
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range; "Dear ";wk append)
 WP Insert formula($range;$o;wk append)
```

Resultados:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## Exemplo 3

Se quiser destacar uma fórmula em amarelo:

```4d
WParea:=WP New
WP SET TEXT(WParea; "The project was completed on: "; wk append)
$range1:=WP Insert formula(WParea; Formula(Current date); wk append)

WP SET ATTRIBUTES($range1; wk background color; "yellow")

```

Resultados:

![](../../assets/en/WritePro/commands/WPpic1.png)

## Veja também

*Managing formulas*\
[WP COMPUTE FORMULAS](../commands-legacy/wp-compute-formulas.md)</br>
[WP FREEZE FORMULAS](../commands-legacy/wp-freeze-formulas.md)</br>
[WP Get formulas](../commands-legacy/wp-get-formulas.md)