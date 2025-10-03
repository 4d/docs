---
title: Move all sandritica pull requests from 4d/docs to fork doc4d/docs
labels: ["migration", "contributor-management", "documentation"]
assignees: []
---

## Summary

This issue tracks the migration of all pull requests from contributor `sandritica` from the main 4d/docs repository to the doc4d/docs fork.

## Current Situation

**Total PRs from sandritica: 16**
- **Open PRs: 9** (#491, #490, #489, #488, #487, #486, #485, #484, #483)
- **Closed PRs: 7** (#435, #380, #379, #378, #377, #376, #375)

All PRs are documentation updates, primarily to 4D Write Pro related files.

## Required Actions

### 1. Verify Fork Setup
- [ ] Confirm `doc4d/docs` fork exists and is properly configured
- [ ] Ensure sandritica has appropriate access to the fork

### 2. Migrate Open PRs
For each open PR:
- [ ] Close with migration notice comment
- [ ] Provide clear instructions for resubmission to fork

### 3. Communication
- [ ] Notify @sandritica about the migration process
- [ ] Update contribution guidelines if needed
- [ ] Document the change in repository documentation

### 4. Timeline
- **Target Completion**: 2 weeks from issue creation
- **Contributor Notification**: 3 business days

## Migration Notice Template

```
This PR is being migrated to the doc4d/docs fork repository as part of our contribution workflow reorganization. 

Please resubmit your changes to: [doc4d/docs repository link]

Thank you for your valuable contributions to the 4D documentation!
```

## Background

This migration is part of reorganizing contribution workflows to better manage documentation updates and maintain clear separation between different types of contributions.

---

See [detailed migration plan](.github/ISSUE_MIGRATION_SANDRITICA.md) for complete information.