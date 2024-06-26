/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:64RzXBZOErqc@ep-spring-hat-a50tr3l4.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
