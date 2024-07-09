.PHONY: help themes html serve clean
.DEFAULT_GOAL := help

help:
	@grep ": ##" Makefile | grep -v grep | tr -d '#'

themes/scientific-python-hugo-theme:
	@if [ ! -d "$<" ]; then \
	  echo "*** ERROR: missing theme" ; \
	  echo ; \
	  echo "It looks as though you are missing the themes directory."; \
	  echo "You need to add the scientific-python-hugo-theme as a submodule."; \
	  echo ; \
	  echo "Please see https://theme.scientific-python.org/user_guide/getstarted/"; \
	  echo ; \
	  exit 1; \
	fi

themes: themes/scientific-python-hugo-theme

TEAMS_DIR = content/about
TEAMS = tools-team
TEAMS_QUERY = python themes/scientific-python-hugo-theme/tools/team_query.py

$(TEAMS_DIR)/%.toml:
	$(TEAMS_QUERY) --org scientific-python --team "$*"  >  $(TEAMS_DIR)/$*.toml

teams-clean:
	for team in $(TEAMS); do \
	  rm -f $(TEAMS_DIR)/$${team}.toml ;\
	done

teams: ## generates team gallery pages
teams: | teams-clean $(patsubst %,$(TEAMS_DIR)/%.toml,$(TEAMS))

html: ## Build site in `./public`
html: themes
	hugo

serve: ## Serve site, typically on http://localhost:1313
serve: themes
	@hugo --printI18nWarnings server

clean: ## Remove built files
clean:
	rm -rf public
