---
id: object-set-enterable
title: OBJECT SET ENTERABLE
slug: /commands/object-set-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENTERABLE.Syntax-->**OBJECT SET ENTERABLE** ( {* ;} *objeto* ; *editavel* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENTERABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| editavel | Boolean, Integer | &#8594;  | True se editável; False para não editável |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET ENTERABLE.Summary-->O comando **OBJECT SET ENTERABLE** torna editáveis ou não editáveis os objetos de formulário especificados por *objeto* e podem estabelecer o atributo *focável* 

**Note**: Um objeto de formulário focável pode obter o foco e ativar os eventos de formulário *On Getting focus* / *On Losing focus* .<!-- END REF--> Além disso, objetos focáveis de **input** e **área 4D Write Pro** podem ter seus conteúdos selecionados e copiados, mesmo se não forem editáveis. 

Se especificar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma string). Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é uma tabela, um campo ou uma variável. Neste caso, especifica uma referencia de um campo ou de uma variável (campo ou variável tipo objeto unicamente) ao invés de uma string. Para maior informação sobre nomes de objetos, consulte a seção 

Pode passar um valor booleano ou um valor Longint em enterable:

* Booleano - quando enterable/editável for True, o usuário pode digitar dados e mover o cursor na área.
* Quando enterable for False:  
   * em bancos binários, o usuário não pode entrar dados o atributo focável depende da opção Focável na lista de propriedades  
   * em Projetos, o usuário não pode digitar dados e o objeto é focável.
* Longint - passar um valor longint em editável permite controlar também a propriedade focável para Inputs e áreas 4D Write Pro. Pode usar uma das constantes abaixo:

| Constante                       | Valor | Comentário                                                                                                                                                                                                                                                   |
| ------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| obk enterable                   | 1     | Usuários podem entrar valores no objeto.                                                                                                                                                                                                                     |
| obk not enterable               | 0     | Usuários não podem entrar valores no objeto. Use obk not enterable not focusable se quiser remover também a propriedade **focusable** para um **objeto input** ou uma área **4D Write Pro** (outros objetos não enterable são automaticamente não focáveis). |
| obk not enterable not focusable | 2     | Usuários não podem entrar valores no objeto e conteúdos de **objetos inputs** e **áreas 4D Write Pro** não podem ser selecionados ou copiadas.                                                                                                               |

O comando **OBJECT SET ENTERABLE** também pode ser utilizado para ativar por programação o modo “Editável em lista” para os subformulários e formulários listados mostrados utilizando os comandos [MODIFY SELECTION](modify-selection.md) e [DISPLAY SELECTION](display-selection.md):

• Para os subformulários, no parâmetro *areaEntrada*, passe o nome da tabela do subformulário ou o nome do objeto do subformulário, por exemplo: **OBJECT SET ENTERABLE**(\*;"Subform";True). O comando funciona em subformulários só se estiver no método formulário do subformulário;  
• Para os formulários listados, deve passar o nome da tabela do formulário no parâmetro *areaEntrada*, por exemplo: OBJECT SET ENTERABLE(\[MinhaTabela\];True).

Tornar um objeto não editável não evita que modifique seu valor por programação.

**Nota**: Para fazer a célula de uma list box como não editável, deve passar o valor -1 para $0 no evento On Before Data Entry, veja *Gestão de entrada*.

#### Exemplo 1 

O exemplo a seguir define um campo de envio, dependendo do peso do pacote. Se o pacote pesa um 1 kilo ou menos, o envio é realizado através da Oficina Postal Nacional e o campo não é editável. Do contrário, o campo é editável. 

```4d
 If([Envio]Peso<=1)
    [Envio]Empresa:="Correio Nacional"
    OBJECT SET ENTERABLE([Envio]Empresa;False)
 Else
    OBJECT SET ENTERABLE([Envio]Empresa;True)
 End if
```

#### Exemplo 2 

Este é o método de objeto de uma caixa de seleção localizada no cabeçalho de uma lista para controlar o modo Entrada em lista: 

```4d
 var bEditavel : Boolean
 OBJECT SET ENTERABLE([Tabela1];bEditavel)
```

#### Ver também 

[OBJECT Get enterable](object-get-enterable.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 238 |
| Thread-seguro | &check; |
| Proibido no servidor ||


