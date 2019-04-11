workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "run build"
  needs = ["Install"]
}

action "Deploy" {
  uses = "nchaulet/github-action-gh-pages@master"
  secrets = [
    "GITHUB_TOKEN",
  ]
  needs = ["Build"]
  env = {
    PUBLIC_PATH = "build"
  }
}