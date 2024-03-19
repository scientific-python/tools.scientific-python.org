---
title: "GitHub Actions"
---

The following GitHub actions provide workflows that simplify various developer tasks.

{{< grid columns="1 2 2 3" >}}

[[item]]
type = 'card'
header = '[Upload Nightly Action](https://github.com/scientific-python/upload-nightly-action)'
body = '''
Uploads nightly builds to the [scientific-python conda channel](https://anaconda.org/scientific-python-nightly-wheels) as described in [SPEC4](https://scientific-python.org/specs/spec-0004/).
'''

[[item]]
type = 'card'
header = '[attach-next-milestone-action](https://github.com/scientific-python/attach-next-milestone-action)'
body = '''
When a PR is merged, attach it to the next upcoming milestone.
'''

[[item]]
type = 'card'
header = '[action-check-changelogfile](https://github.com/scientific-python/action-check-changelogfile)'
body = '''
Ensure that added changelog entries conform to certain rules.
'''

[[item]]
type = 'card'
header = '[action-towncrier-changelog](https://github.com/scientific-python/action-towncrier-changelog)'
body = '''
Ensure that added changelog entries conform to certain rules.
'''

[[item]]
type = 'card'
header = '[reverse-dependency-testing](https://github.com/scientific-python/reverse-dependency-testing)'
body = '''
Query the conda-forge dependency tree and run test suites for packages that depend on your package.
'''

[[item]]
type = 'card'
header = '[sync-teams-action](https://github.com/scientific-python/sync-teams-action)'
body = '''
Manage teams and team membership for the Scientific Python GitHub organization.
'''

{{< /grid >}}
