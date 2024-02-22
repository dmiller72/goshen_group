module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            subject: "Test Subject", // Optional
            from: "mtech.websites@gmail.com", // Required
          },
        },
      ],
    },
  },
});
