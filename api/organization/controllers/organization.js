"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findFirst: async (ctx) => {
    const result = await strapi.services.organization.findFirst(ctx);
    ctx.send(result);
  },
};
