---
id: vp-resume-computing
title: VP RESUME COMPUTING
---


<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->
**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|<!-- END REF -->

#### Description

The `VP RESUME COMPUTING` command <!-- REF #_method_.VP RESUME COMPUTING.Summary --> restarts the calculation of formulas in *vpAreaName*<!-- END REF -->.

The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](vp-suspend-computing.md) command.
  
#### Example

See example in [VP SUSPEND COMPUTING](vp-suspend-computing.md).

#### See also

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)