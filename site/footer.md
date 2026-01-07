% This defines the footer of the site, and is not parsed as a regular "page"
% We point to it with the following in `myst.yml`:
% site:
% parts:
% footer: footer.md

% Here we use `grid` to add a basic grid structure to the HTML,
% but the formatting column sizes are defined manually in css/footer.css
% see the `grid-template-columns` line.
:::::{grid} 3 3 5 5
:class: footer-grid

::::{image} ./logo.svg
:width: 60px
:align: left
::::

<!-- Link columns -->
% This a _second_ grid embedded within the first one, to create nicer
% responsive design experience. This grid will have a single column on narrow screens,
% and fan out into three columns on wide screens. However, it always remains within
% its parent grid column.
::::{grid} 1 1 3 3

:::{div}
- [About](/about)
- [Roadmap](/roadmap)
- [Code of Conduct](https://scientific-python.org/code_of_conduct/)
:::

:::{div}
- [SPECs](https://scientific-python.org/specs/)
- [Summits](https://scientific-python.org/summits/)
- [Calendars](https://scientific-python.org/calendars/)
:::

:::{div}
- [Press Kit](https://scientific-python.org/press-kit/)
:::

::::

::::{grid} 5 5 5 5
:class: social-links
:::{div}
[{scienceicon}`github`](http://github.com)
:::
:::{div}
[{scienceicon}`youtube`](http://youtube.com)
:::
:::{div}
[{scienceicon}`mastodon`](http://foo.bar)
:::
:::{div}
[{scienceicon}`discourse`](http://foo.bar)
:::
:::{div}
[{scienceicon}`discord`](http://foo.bar)
:::
::::

:::::
