---
title: Github Actions and Bots
---

## Github Actions

The following GitHub actions provide workflows that simplify various developer tasks.

::::{grid}1 2 2 3

:::{card}
:header: [upload-nightly-action](https://github.com/scientific-python/upload-nightly-action)
Uploads nightly builds to the [scientific-python conda channel](https://anaconda.org/scientific-python-nightly-wheels) as described in [SPEC4](https://scientific-python.org/specs/spec-0004/).
:::

:::{card}
:header: [attach-next-milestone-action](https://github.com/scientific-python/attach-next-milestone-action)
When a PR is merged, attach it to the next upcoming milestone.
:::

:::{card}
:header: [action-check-changelogfile](https://github.com/scientific-python/action-check-changelogfile)
Ensure that added changelog entries conform to certain rules.
:::

:::{card}
:header: [action-towncrier-changelog](https://github.com/scientific-python/action-towncrier-changelog)
Ensure that added changelog entries conform to certain rules.
:::

:::{card}
:header: [reverse-dependency-testing](https://github.com/scientific-python/reverse-dependency-testing)
Query the conda-forge dependency tree and run test suites for packages that depend on your package.
:::

:::{card}
:header: [sync-teams-action](https://github.com/scientific-python/sync-teams-action)
Manage teams and team membership for the Scientific Python GitHub organization.
:::

:::{card}
:header: [circleci-artifacts-redirector-action](https://github.com/scientific-python/circleci-artifacts-redirector-action)
Add a GitHub status link directly to a CircleCI artifact.
:::

:::{card}
:header: [devstats-query-action](https://github.com/scientific-python/devstats-query-action)
Download devstats for one or more GitHub repositories as an artifact.
:::

:::{card}
:header: [issue-from-pytest-log-action](https://github.com/scientific-python/issue-from-pytest-log-action)
Create an issue for failed tests from a `pytest-reportlog` file or update an existing one if it already exists.
:::

::::

## Bots

The following bots for GitHub provide workflows that simplify various developer tasks.

::::{grid} 1 2 2 3

:::{card}
:header: [MeeseeksDev / Lumberbot (App)](https://github.com/scientific-python/MeeseeksDev)
A stateless GitHub bot that can backport PRs and perform other repository actions.
:::

::::
