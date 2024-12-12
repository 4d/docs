---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *rota* ; *tipoAtributo* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594;  | Rota do método projeto |
| tipoAtributo | Integer | &#8594;  | Tipo de atributo a obter |
| * | Operador | &#8594;  | Se passado = o comando aplica ao banco de dados local quando é executado desde um componente (parâmetro ignorado fora deste contexto) |
| Resultado | Boolean | &#8592; | True = Atributo selecionado, do contrário False |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.METHOD Get attribute.Summary-->O comando**METHOD Get attribute**retorna o valor do atributo *tipoAtributo* para o método projeto designado pelo parâmetro *rota*.<!-- END REF-->

Este comando somente funciona com métodos projeto. Se passar uma *rota* não válida, é gerado um erro.

No parâmetro *tipoAtributo*, passe um valor indicando o tipo de atributo a obter. Pode usar as seguintes constantes do tema *Design Object Access*:

| Constante                    | Tipo          | Valor | Comentário                                                                        |
| ---------------------------- | ------------- | ----- | --------------------------------------------------------------------------------- |
| Attribute executed on server | Inteiro longo | 8     | Corresponde a opção "Executar no servidor"                                        |
| Attribute invisible          | Inteiro longo | 1     | Corresponde a opção "Invisível"                                                   |
| Attribute published SOAP     | Inteiro longo | 3     | Corresponde à opção "Oferecido como serviço web"                                  |
| Attribute published SQL      | Inteiro longo | 7     | Corresponde à opção "Disponível via SQL"                                          |
| Attribute published Web      | Inteiro longo | 2     | Corresponde à opção "Disponível via as etiquetas HTML e os URLs 4D (4DACTION...)" |
| Attribute published WSDL     | Inteiro longo | 4     | Corresponde à opção "Publicado em WSDL"                                           |
| Attribute shared             | Inteiro longo | 5     | Corresponde à opção "Compartilhado entre componentes e base local"                |

Se o comando for executado desde uma componente, é aplicado por padrão aos métodos do componente. Se passar o parâmetro *\**, irá acessar aos métodos do banco local.  
  
O comando retorna **True** se for selecionado um atributo e **False** se for desse-lecionado.

#### Ver também 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  