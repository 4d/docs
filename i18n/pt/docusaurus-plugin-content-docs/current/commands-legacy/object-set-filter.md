---
id: object-set-filter
title: OBJECT SET FILTER
slug: /commands/object-set-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FILTER.Syntax-->**OBJECT SET FILTER** ( {* ;} *objeto* ; *filtroEntrada* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FILTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| filtroEntrada | Text | &#8594;  | Novo filtro de entrada de dados para a área editável |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FILTER.Summary-->**OBJECT SET FILTER** substitui o filtro de entrada para os objetos especificados por *objeto* por *filtroEntrada*.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de um string.Para mais informações sobre nomes de objetos, consulte a seção 

**OBJECT SET FILTER** pode ser utilizado em formulários de entrada e diálogos e pode ser aplicado aos campos e variáveis editáveis que aceitem um filtro de entrada noambiente Desenho

Ao passar uma string vazia em *filtroEntrada* é eliminado o filtro de entrada atual para os objetos. 

**Nota:** este comando não pode ser utilizado com campos localizados no formulário listado de um subformulário.

**Nota:** em *filtroEntrada*, para utilizar filtros de entrada pré-definidos utilizando a Caixa de ferramentas, coloque um prefixo no filtro de entrada, uma barra vertical (|). 

#### Exemplo 1 

O exemplo a seguir define o filtro de entrada para o campo código postal CEP. Se a direção é de Espanha, o filtro é definido para os códigos postais espanhóis. Do contrário, pode aceitar todo valor de entrada: 

```4d
 If([Empresas]Pais ="ES") // Definir o filtro para um formato do código postal espanhol
    OBJECT SET FILTER([Empresas]Código Postal;"&9#####")
 Else // Definir o filtro para aceitar todo valor alfanumérico e maiúsculas
    OBJECT SET FILTER([Empresas]Código Postal;"~@")
 End if
```

#### Exemplo 2 

O exemplo a seguir permite unicamente a entrada das letras “a,” “b,” “c,” ou “g” em um campo de duas letras: 

```4d
 OBJECT SET FILTER([Tabela]Campo ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")
```

**Nota:** este exemplo define o filtro de entrada *&"a;b;c;g"##*.

#### Ver também 

[OBJECT Get filter](object-get-filter.md)  
[OBJECT SET FORMAT](object-set-format.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 235 |
| Thread-seguro | &check; |
| Proibido no servidor ||


