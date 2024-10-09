---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *arrMetodos* )<!-- END REF-->
<!--REF #_command_.SET ALLOWED METHODS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrMetodos | Text array | &srarr; | Array de nomes de métodos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET ALLOWED METHODS.Summary-->O comando SET ALLOWED METHODS lhe \[#descv\]permite definir os métodos de projeto que podem ser chamados diretamente da aplicação  
  
4D inclui um mecanismo de segurança que filtra métodos de projeto chamados dos contextos abaixo:

* O editor de fórmulas - métodos permitidos aparecem no final da lista dos comandos padrão e podem ser usados em fórmulas (ver *Descrição do Editor de fórmulas*).<!-- END REF-->
* O editor de etiquetas - os métodos permitidos são listados no menu **Apply**  se também forem partilhados com o componente (ver *Descrição do editor de etiquetas*).
* Fórmulas são inseridas em áreas de texto estilizadas ou documentos 4D Write Pro através do comando [ST INSERT EXPRESSION](st-insert-expression.md) \- métodos não aprovados são automaticamente rejeitados
* Documentos 4D View Pro -como padrão, se o comando *VP SET ALLOWED METHODS* nunca foi chamado durante a sessão, fórmulas 4D View Pro aceitam apenas métodos definidos por **SET ALLOWED METHODS**. Entretanto, é recomendado usar *VP SET ALLOWED METHODS*. Veja *Project method references*.

Como padrão, se não usar o comando SET ALLOWED METHODS, nenhum método é chamado (usando um método não autorizado em uma expressão causa um erro de sintaxe).

No Parâmetro *arrMetodos* passe o nome do array que contenha a lista de métodos a oferecer no editor de fórmulas. O array deve ter sido definido previamente.

Pode utilizar o caractere arroba (@) nos nomes dos métodos para definir um ou mais grupos de métodos autorizados.

Se deseja que o usuário possa chamar os comandos 4D não autorizados automaticamente ou aos comandos de plug-ins, deve utilizar os métodos específicos encarregados de executar estes comandos.

**Nota**: o mecanismo de restrição de acesso aos comandos e métodos no editor de formulários pode ser desativado por todos os usuários ou pelo Designer e Administrador através de uma opção na página "Segurança" das Propriedades do banco ().. Se a opção "Desativada para todos" está selecionada, o comando SET ALLOWED METHODS não terá efeito.

#### Exemplo 

Este exemplo autoriza todos os métodos que começam por “formula” e o método “Total\_general” a ser executado pelo usuário em contextos protegidos: 

```4d
 ARRAY TEXT(arrMetodos;2)
 arrMetodos{1}:="formula@"
 arrMetodos{2}:="Total_general"
 SET ALLOWED METHODS(arrMetodos)
```

#### Ver também 

[EDIT FORMULA](edit-formula.md)  
[GET ALLOWED METHODS](get-allowed-methods.md)  