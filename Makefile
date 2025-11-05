.PHONY: help themes html serve clean
.DEFAULT_GOAL := help

help:
	@grep ": ##" Makefile | grep -v grep | tr -d '#'

TEAM_DIR = site/about

$(TEAM_DIR)/team.md:
	$(TEAM_DIR)/team_query.py --org scientific-python --team "tools-team"  >  $(TEAM_DIR)/team.md

team-clean:
	rm -f $(TEAM_DIR)/team.md ;\

team: ## generates team gallery
team: | team-clean $(TEAM_DIR)/team.md

html: ## Build site in `./site/_build`
html:
	(cd site; myst build --html;)

serve: ## Serve site, typically on http://localhost:3000
serve:
	(cd site; myst start;)

clean: ## Remove built files
clean:
	rm -rf site/_build
