---
id: wp-get-text
title: WP Get text
slug: /WritePro/commands/wp-get-text
displayed_sidebar: docs
---

<!--REF #_command_.WP Get text.Syntax-->**WP Get text** ( *objAlvo* {; *expressoes*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Range ou elemento ou documento 4D Write Pro |
| expressoes | Number | &#8594;  | Instruções para avaliação de expressões |
| Resultado | Text | &#8592; | Texto do objRange |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get text.Summary-->O comando **WP Get text** recupera o conteúdo de texto de um documento 4D Write Pro dentro do *objRange* especificado.<!-- END REF-->

**WP Get text** só devolve texto sem formato. Todo estilo aplicado (negrito, cursiva, etc.) será ignorado.

No parâmetro *objRange*, passe um objeto que contenha:

* uma range, ou
* um elemento (tabela / parágrafo / corpo / cabeçalho / rodapé), ou
* um documento 4D Write Pro

**Nota:** 

* Se passar um documento 4D Write Pro em *objAlvo*, o comando só retorna o texto do elemento corpo do documento
* Se passar uma subseção em *objRange*, o comando retorna o texto da seção pai.

O parâmetro opcional *expressões* dá instruções para a avaliação de expresões 4D dentro de *objRange*.(para saber mais *Gestão de fórmulas* ). As opções são:

| Constante                | Comentário                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| wk expressions as source | É devolvida a string original de referências de expressão 4D.                                                       |
| wk expressions as space  | Cada referência é devolvida como um caractere de espaço não disruptivo.                                             |
| wk expressions as value  | As referências de expressão 4D são devolvidas em seu formulário avaliado. (Como padrão se a opção não for passada). |

**Importante**: somente o texto sem formato com wk expressions as space é consistente com os índices de range (faixa) de texto utilizados pelos comandos WP ou ST, já que os comandos WP e ST sempre assumem o tamanho de expressão= 1 caractere.

**Notas**: 

* Se *objRango* contiver imágens, as imagens são ignoradas e devolvidas como caracteres espaciais ("").
* Se *objRango* contiver tabelas, o conteúdo de cada célula se trata como parágrafos individuais e são devolvidas como texto separado por abas. As filas estão separadas por retornos de carro.

#### Exemplo 

Para recuperar o texto neste documento:

![](../../assets/en/WritePro/commands/pict3772381.en.png)

pode escrever:

```4d
 $range:=WP Text range(myDoc2;wk start text;wk end text)
 vText:=WP Get text($range;wk expressions as value) //devolve "Alô mundo! Hoje é: 06/03/18."
 vText2:=WP Get text($range;wk expressions as source) //devolve "Alô mundo! Hoje é: Current date."
 vText3:=WP Get text($range;wk expressions as space) //devolve "Alô mundo! Hoje é:  ."
```

#### Ver também 

*Gestão de fórmulas*  
[WP SET TEXT](wp-set-text.md)  