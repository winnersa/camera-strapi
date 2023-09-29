const clampRating = (rating) => Math.min(Math.max(rating, 0), 5);

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      await updateProductAverageRating(data.product);
    },
    async afterUpdate(data) {
      await updateProductAverageRating(data.product);
    }
  }
};

async function updateProductAverageRating(productId) {
  const strapi = require('@strapi/strapi');
  const product = await strapi.services.product.findOne({ id: productId, _populate: 'reviews' });

  if (product && product.reviews && product.reviews.length) {
    const totalRatings = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    let averageRating = totalRatings / product.reviews.length;
    averageRating = clampRating(averageRating);
    product.averageRating = Math.round(averageRating * 10) / 10;

    await strapi.services.product.update({ id: productId }, { averageRating: product.averageRating });
  }
}
