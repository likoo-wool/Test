# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Sign2
on:
  workflow_dispatch:
  schedule:
    - cron: '8 0-23 * * *'
  watch:
    types: started
  repository_dispatch:
    types: Sign2
jobs:
  build:

    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: npm install
        run: |
          npm install
      - name: '运行 【Sign2】'
        run: |
          
          node Sign2.js
