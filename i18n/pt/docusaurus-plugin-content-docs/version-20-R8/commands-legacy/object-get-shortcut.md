---
id: object-get-shortcut
title: OBJECT GET SHORTCUT
slug: /commands/object-get-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SHORTCUT.Syntax-->**OBJECT GET SHORTCUT** ( {* ;} *objeto* ; *tecla* ; *modificadores* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SHORTCUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| tecla | Text | &#8592; | Tecla associada ao objeto |
| modificadores | Integer | &#8592; | Máscara ou combinação de máscaras de teclas de modificação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT GET SHORTCUT.Summary-->O comando **OBJECT GET SHORTCUT** devolve o atalho de teclado associado ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\** no processo atual.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
O parâmetro *tecla* devolve o caracter associado à tecla (no caso de uma tecla estandarte) ou uma cadeia entre colchetes que designa a tecla (no caso de uma tecla função). Pode comparar este valor com as constantes do tema *Atalhos de teclado* (ver o comando [OBJECT SET SHORTCUT](object-set-shortcut.md)).  
  
O parâmetro *modificadores* devolve um valor que indica a(s) tecla(s) modificadora(s) associada(s) ao atalho. Se existe varias teclas modificadoras combinadas, o comando devolve a suma de seus valores. Pode comparar o valor recebido com as seguintes constantes, do tema *Eventos (Modificadores)*:

| Constante        | Tipo          | Valor | Comentário                                              |
| ---------------- | ------------- | ----- | ------------------------------------------------------- |
| Command key mask | Inteiro longo | 256   | Windows = tecla Ctrl, Mac OS = tecla Comando            |
| Control key mask | Inteiro longo | 4096  | Tecla Ctrl em OS X, ou clique direito em Windows e OS X |
| Option key mask  | Inteiro longo | 2048  | Windows = tecla Alt, Mac OS = tecla Opção               |
| Shift key mask   | Inteiro longo | 512   | Windows e Mac Os                                        |
  
  
Se nenhuma tecla de modificação foi definida para o atalho, modificadores devolve 0.  
  
**Nota**: se o parâmetro *objeto* designa vários objetos do formulário que contém diferentes configurações, o comando devolve "" em *tecla* 0 em *modificadores*. 

#### Ver também 

[OBJECT SET SHORTCUT](object-set-shortcut.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1186 |
| Thread-seguro | &cross; |


