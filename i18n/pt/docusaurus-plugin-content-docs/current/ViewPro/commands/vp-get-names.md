---
id: vp-get-names
title: VP Get names
---

<!-- REF #_method_.VP Get names.Syntax -->

**VP Get names** ( vpAreaName : Text { ; scope : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                      |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nome de objeto formulário área 4D View Pro                     |                  |
| scope      | Integer    | ->                          | Escopo de destino (padrão = planilha atual) |                  |
| Resultados | Collection | <- | Nomes existentes no âmbito definido                            | <!-- END REF --> |

#### Descrição

The `VP Get names` command <!-- REF #_method_.VP Get names.Summary -->returns a collection of all defined "names" in the current sheet or in the scope designated by the *scope* parameter<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

You can define where to get the names in *scope* using either the sheet index (counting begins at 0) or the following constants:

- `vk current sheet`
- `vk workbook`

##### Coleção devolvida

A coleção devolvida contém um objeto por nome. As seguintes propriedades do objeto podem ser devolvidas:

| Propriedade                                                                             | Tipo | Descrição                      |
| --------------------------------------------------------------------------------------- | ---- | ------------------------------ |
| result\[ ].name    | Text | nome da célula ou do intervalo |
| result\[ ].formula | Text | formula                        |
| result\[ ].comment | Text | Comentário associado ao nome   |

Propriedades disponíveis dependendo do tipo de elemento nomeado (célula com nome, intervalo com nome ou fórmula com nome)

#### Exemplo

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //nomes na 3ª folha
```

#### Veja também

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Name](vp-name.md)
