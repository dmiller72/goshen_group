module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "mtech.websites@gmail.com",
        defaultReplyTo: "mtech.websites@gmail.com",
      },
    },
  },
  // "netlify-deployments": {
  //   enabled: true,
  //   config: {
  //     accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
  //     sites: [
  //       {
  //         name: "goshengroup",
  //         id: "cf04d56d-7b42-4ce1-bed5-604d64005303",
  //         buildHook:
  //           "https://api.netlify.com/build_hooks/65f34ed8723a5a1e86b0b3bc",
  //         branch: "main", // optional
  //       },
  //     ],
  //   },
  // },
});
