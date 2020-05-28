# Vue with Express using vue-cli-express plugin

### Project Setup

```
# Make sure you have vue-cli 3.x.x:
vue --version

# Create a new app
vue create my-new-app

# Navigate to the newly created project and add the cli plugin
cd my-new-app
vue add express

# Run the server
npm run express
# You just then have to start the app:
npm run serve

# To run the server only once for production use, run:
npm run express:run
```

### Configuration
The Express Server can be configured via the pluginOptions in vue.config.js:

```
module.exports = {
  // Other options...
  pluginOptions: {
    // Express-related options
    express: {
        shouldServeApp: true,
        serverDir: './srv',
      },
    },
  },
}
```

# Use your app in production
Move @vue/cli-service from devDependenciesto dependencies.
Execute the following commands:
```
npm run build
npm run express:run
```
For most of cloud hosting services, you can add a start command that will be triggered automatically:

```{
  "scripts": {
    "start": "yarn express:run"
  }
}```

P.S. In this branch we've included @vue/cli-plugin-babel and @vue/cli-plugin-eslint

Source: https://www.npmjs.com/package/vue-cli-plugin-express
