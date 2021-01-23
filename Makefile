# include local environment variables
include .env

.PHONY: build
build:
	@echo "Building project"
	tsc

.PHONY: deploy
deploy:
	@echo "Creating temporary directory"
	mkdir temp
	@echo "Copying index.js and node_modules into tempo"
	cp built/index.js temp/
	cp -r node_modules temp/
	@echo "Zipping files"
	cd temp && zip -r function.zip index.js node_modules
	@echo "Updating existing deployment"
	cd temp && aws lambda update-function-code --function-name ${FUNCTION_NAME} --zip-file fileb://function.zip
	@echo "Cleaing up"
	rm -r temp
	@echo "Deployment complete!"