To reproduce the jsi-pacmak issue described here https://github.com/aws/jsii/issues/4178, follow below steps:

1. git clone https://github.com/lalitkumarbTR/jsii-pacmak-issue.git
2. cd jsii-pacmak-issue
3. yarn install
4. yarn build
5. yarn copy:modules
6. yarn build:mycdk

Here notice the "dist-*" folders inside "packages/mycdk-lib/node_modules/@aws-sdk/util-utf8-browser". Now package the artifact using jsii-pacmak:

7. yarn pack:mycdk

Inside, "packages/mycdk-lib/dist/js" you will see the artifact. Go to that dir and extract the tarball:

`cd packages/mycdk-lib/dist/js`
`tar -xvf mycdk@0.0.1.jsii.tgz`

It will extract the artifact into "package" folder. Inisde it, go to "package/node_modules/@aws-sdk/util-utf8-browser/". You will see the "dist-*" folders missing. 