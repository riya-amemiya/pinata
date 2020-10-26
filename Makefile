C="commit-auto"
.PHONY: push
push: 
	npm run transpile
	git add .
	git commit -m "$C"
	npm version patch 
	git tag 
	git push origin tags/v1.0.1
	npm publish ./ 