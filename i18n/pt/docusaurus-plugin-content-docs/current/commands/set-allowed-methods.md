---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->

<!--REF #_command_.SET ALLOWED METHODS.Params-->

| Parâmetro    | Tipo       |                             | Descrição                 |
| ------------ | ---------- | --------------------------- | ------------------------- |
| methodsArray | Text array | &#8594; | Array de nomes de métodos |

<!-- END REF-->

## Descrição

<!--REF #_command_.SET ALLOWED METHODS.Summary-->The **SET ALLOWED METHODS** command designates the project methods that can be entered via the application.<!-- END REF-->

4D includes a security mechanism that filters enterable project methods from the following contexts:

- The formula editor - allowed methods appear at the end of the list of default commands and can be used in formulas (see section *Description of formula editor*).
- The label editor - the allowed methods are listed in the **Apply** menu if they are also shared with the component (see section *Description of label editor*).
- Fórmulas inseridas em áreas de texto com estilo ou documentos do 4D Write Pro por meio do comando [ST INSERT EXPRESSION](../commands-legacy/st-insert-expression.md) - os métodos não permitidos são automaticamente rejeitados.
- 4D View Pro documents - by default, if the [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) command has never been called during the session, 4D View Pro formulas only accept methods defined by **SET ALLOWED METHODS**. No entanto, é recomendável usar [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md). Veja [Declarando o método permitido](../ViewPro/formulas.md#declaring-allowed-methods).

By default, if you do not use the **SET ALLOWED METHODS** command, no method is enterable (using an unauthorized method in an expression causes an error).

No parâmetro *methodsArray*, passe o nome de um array que contenha a lista de métodos a serem permitidos. The array must have been set previously.

You can use the wildcard character (@) in method names to define one or more authorized method groups.

If you would like the user to be able to call 4D commands that are unauthorized by default or plug-in commands, you must use specific methods that handle these commands.

**Nota:** acesso de filtragem de fórmulas pode ser desativado para todos os usuários ou para o Desenhador e Administrador através de [uma opção na página de "Segurança" dos parâmetros](../settings/security.md#options). Se a opção "Desabilitado para todos" estiver marcada, o comando **SET ALLOWED METHODS** não terá efeito.

:::warning

Esse comando filtra apenas a **entrada** dos métodos, não sua **execução**. It does not control the execution of formulas created outside the application.

:::

## Exemplo

This example authorizes all methods starting with “formula” and the “Total\_general” method to be entered by the user in protected contexts:

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

## Veja também

[EDIT FORMULA](../commands-legacy/edit-formula.md)\
[GET ALLOWED METHODS](../commands-legacy/get-allowed-methods.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 805                         |
| Thread safe       | &cross; |


