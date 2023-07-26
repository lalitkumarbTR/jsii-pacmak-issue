To reproduce the jsii-pacmak issue described here https://github.com/aws/jsii/issues/4178, follow below steps:

Install yarn globally: `npm install -g yarn`

1. git clone https://github.com/lalitkumarbTR/jsii-pacmak-issue.git
2. cd jsii-pacmak-issue
3. yarn install
4. yarn build
5. yarn copy:modules
6. yarn build:mycdk

Navigate to "packages/mycdk-lib/node_modules/@aws-sdk/util-utf8-browser" and you will notice there are three "dist-" folders. These three "dist-*" folders will be missing in the tarball after packaging using jsii-pacmak. 

Now package the artifact using jsii-pacmak:

7. yarn pack:mycdk

Inside, "packages/mycdk-lib/dist/js" you will see the artifact. Go to that dir:

`cd packages/mycdk-lib/dist/js`

Extract the tarball:

`tar -xvf mycdk@0.0.1.jsii.tgz`

It will extract the artifact into "package" folder. Inside it, go to "package/node_modules/@aws-sdk/util-utf8-browser/". You will notice that the "dist-*" folders are missing.