# Onify Flow Functions

## Release new version and publish to npm

1. Update `version` in `package.json`
2. Update `CHANGELOG.md`
3. Commit and push the changes
4. Run `git tag vX.X.X`
5. Run `git push --tags`
6. Publish to npm by running `npm publish --access public`