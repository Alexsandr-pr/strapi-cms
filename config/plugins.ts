
module.exports = ({env}) => ({
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
            },
        },
    },
    upload: {
      config: {
        provider: "strapi-provider-upload-do", 
        providerOptions: {
            key: env('DO_SPACE_ACCESS_KEY'),
            secret: env('DO_SPACE_SECRET_KEY'),
            endpoint: env('DO_SPACE_ENDPOINT'),
            space: env('DO_SPACE_BUCKET'),
        }
      },
    }, 
});