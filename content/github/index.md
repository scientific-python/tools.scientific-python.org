---
title: Github Actions and Bots
---

## Github Actions

The following GitHub actions provide workflows that simplify various developer tasks.

{{< grid columns="1 2 2 3" >}}

[[item]]
type = 'card'
header = '[upload-nightly-action](https://github.com/scientific-python/upload-nightly-action)'
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

[[item]]
type = 'card'
header = '[circleci-artifacts-redirector-action](https://github.com/scientific-python/circleci-artifacts-redirector-action)'
body = '''
Add a GitHub status link directly to a CircleCI artifact.
'''

[[item]]
type = 'card'
header = '[devstats-query-action](https://github.com/scientific-python/devstats-query-action)'
body = '''
Download devstats for one or more GitHub repositories as an artifact.
'''

[[item]]
type = 'card'
header = '[issue-from-pytest-log-action](https://github.com/scientific-python/issue-from-pytest-log-action)'
body = '''
Create an issue for failed tests from a ``pytest-reportlog`` file or update an existing one if it already exists.
'''

{{< /grid >}}

## Bots

The following bots for GitHub provide workflows that simplify various developer tasks.

{{< grid columns="1 2 2 3" >}}

[[item]]
type = 'card'
header = '[MeeseeksDev / Lumberbot (App)](https://github.com/scientific-python/MeeseeksDev)'
body = '''
A stateless GitHub bot that can backport PRs and perform other repository actions.
'''

{{< /grid >}}
