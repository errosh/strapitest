"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  findFirst: async (ctx) => {
    const result = await strapi
      .query("organization")
      .model.findOne()
      .sort({ createdAt: 1 });
    return sanitizeEntity(result, { model: strapi.models.organization });
  },
};
