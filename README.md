# mui-book !

Mui Component storybook with some extras.

## Deployment

The Storybook build (`npm run build-storybook` → `storybook-static/`) is published to GitHub Pages at `https://akington-boop.github.io/mui-book/`.

Deploys are automated via `.github/workflows/deploy-storybook.yml`:
* Triggers on every push to `main`, or manually via the Actions tab (`workflow_dispatch`).
* Builds Storybook with `npm ci` + `npm run build-storybook`.
* Publishes `storybook-static/` using GitHub's official Pages actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`).
* No `base` path config is needed — Storybook's static output already uses relative asset paths, so it works correctly when served from a subpath.

**One-time repo setup** (not done by the workflow itself): in the repo's Settings → Pages, set Source to "GitHub Actions".

**Action pinning**: workflow steps pin third-party/GitHub actions to a full commit SHA (with a `# vX.Y.Z` comment for readability) rather than a floating major-version tag, to avoid silently picking up a re-tagged or compromised action. When bumping a version, resolve the new tag's SHA (e.g. `gh api repos/<owner>/<repo>/commits/<tag> --jq '.sha'`) and update both the SHA and the version comment.
