# Migration Plan: Move sandritica Pull Requests to Fork

## Overview
This issue tracks the migration of all pull requests from user `sandritica` from the main 4d/docs repository to the fork doc4d/docs.

## Current Status
As of September 2025, there are **16 pull requests** from sandritica in the 4d/docs repository:

### Open Pull Requests (9)
1. [#491](https://github.com/4d/docs/pull/491) - Update 4d-write-pro-attributes.md (Sep 23, 2025)
2. [#490](https://github.com/4d/docs/pull/490) - Update 4d-write-pro-attributes.md (Sep 23, 2025)
3. [#489](https://github.com/4d/docs/pull/489) - Update wp-new-bookmark.md (Sep 22, 2025)
4. [#488](https://github.com/4d/docs/pull/488) - Update 4d-write-pro-attributes.md (Sep 22, 2025)
5. [#487](https://github.com/4d/docs/pull/487) - Update wp-new-bookmark.md (Sep 22, 2025)
6. [#486](https://github.com/4d/docs/pull/486) - Update OpenAIParameters.md (Sep 22, 2025)
7. [#485](https://github.com/4d/docs/pull/485) - Update using-a-4d-write-pro-area.md (Sep 22, 2025)
8. [#484](https://github.com/4d/docs/pull/484) - Update wp-new-bookmark.md (Sep 22, 2025)
9. [#483](https://github.com/4d/docs/pull/483) - Update 4d-write-pro-attributes.md (Sep 22, 2025)

### Closed Pull Requests (7)
1. [#435](https://github.com/4d/docs/pull/435) - Pull request test (May 27, 2025) - Closed May 28, 2025
2. [#380](https://github.com/4d/docs/pull/380) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024
3. [#379](https://github.com/4d/docs/pull/379) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024
4. [#378](https://github.com/4d/docs/pull/378) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024
5. [#377](https://github.com/4d/docs/pull/377) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024
6. [#376](https://github.com/4d/docs/pull/376) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024
7. [#375](https://github.com/4d/docs/pull/375) - Update log-event.md (Dec 2, 2024) - Closed Dec 4, 2024

## Migration Plan

### Prerequisites
1. **Fork Creation**: Ensure the `doc4d/docs` fork repository exists and is properly configured
2. **Access Permissions**: Verify that sandritica has appropriate access to the fork repository
3. **Branch Protection**: Set up any necessary branch protection rules on the fork

### For Open Pull Requests
For each open PR (#491, #490, #489, #488, #487, #486, #485, #484, #483):

1. **Close with Comment**: Close the PR in 4d/docs with a comment explaining the migration
   - Template: "This PR is being migrated to the doc4d/docs fork repository. Please resubmit your changes there. Thank you for your contribution!"

2. **Notify Contributor**: Ensure sandritica is informed about:
   - The fork location: doc4d/docs
   - How to resubmit changes
   - Any new contribution guidelines

### For Closed Pull Requests
For historical tracking, document that closed PRs (#435, #380, #379, #378, #377, #376, #375) existed but do not require active migration.

### Communication Strategy
1. **Issue Creation**: Create a tracking issue in the main repository (this document)
2. **Contributor Notification**: Send a message to sandritica explaining the migration
3. **Documentation Update**: Update CONTRIBUTING.md if needed to reference the fork for certain types of contributions

## Action Items

### For Repository Maintainers
- [ ] Verify doc4d/docs fork exists and is properly configured
- [ ] Close open PRs with migration notice
- [ ] Update contribution guidelines if necessary
- [ ] Notify sandritica about the migration process

### For sandritica
- [ ] Review and understand the migration to doc4d/docs
- [ ] Resubmit open changes to the fork repository
- [ ] Follow any new contribution guidelines for the fork

## Timeline
- **Target Completion**: Within 2 weeks of issue creation
- **Communication Deadline**: Within 3 business days
- **PR Closure**: After contributor notification is complete

## Contact Information
- Primary Contact: Repository maintainers
- Contributor: @sandritica
- Fork Repository: doc4d/docs (to be confirmed)

---

**Note**: This migration is part of reorganizing contribution workflows. All valuable contributions will be preserved and properly attributed.