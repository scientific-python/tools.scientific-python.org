.PHONY: help html serve clean
.DEFAULT_GOAL := help

help:
	@grep ": ##" Makefile | grep -v grep | tr -d '#'

team.md:
	team_query.py --org scientific-python --team "tools-team"  >  team.md

team-clean:
	rm -f team.md

team: ## generates team gallery
team: | team-clean team.md

html: ## Build site in `./site/_build`
html:
	(cd site; myst build --html;)

serve: ## Serve site, typically on http://localhost:3000
serve:
	(cd site; myst start;)

clean: ## Remove built files
clean:
	rm -rf site/_build
