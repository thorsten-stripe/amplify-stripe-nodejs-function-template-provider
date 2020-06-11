# AWS Amplify Stripe NodeJS function templates plugin

## Install

1. Run `npm install -g amplify-stripe-nodejs-function-template-provider` to install the plugin to your global `node_modules` directory.
1. Run `amplify plugin scan` so the Amplify CLI plugin platform will pick up the newly added plugin.

For additional details on plugins, see the AWS Amplify CLI plugins [docs](https://docs.amplify.aws/cli/usage/plugin).

## Usage

Once installed, you can use this plugin to generate Amplify API Lambda handlers for you:

- Run `amplify add api` to add a new backend API or run `amplify update api` to add a new path to an existing API.
- [...]
- ? Choose a Lambda source > Create a new Lambda function
- ? Choose the function runtime that you want to use: > NodeJS
- ? Choose the function template that you want to use: > { Select one of the Stripe templates }
- [...]

![Amplify CLI recording](https://github.com/thorsten-stripe/demo-gifs/blob/master/amplify-stripe-plugin.gif?raw=true)

### Reference implementation

You can view this [reference implementation](https://github.com/thorsten-stripe/checkout-amplify-serverless) to see how the function templates fit into a full-stack Amplify web application.

## Contributing

1. To contribute to this plugin, fork this repository then clone your fork to your local machine.
1. Install the dependencies: `yarn`.
1. Build the project: `yarn build`.
1. Add the local plugin to your Amplify CLI: `amplify plugin add` and provide the path to your repository root.
1. Follow the [usage steps](#usage) to run the local plugin.
