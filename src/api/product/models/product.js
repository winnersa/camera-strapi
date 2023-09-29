const clampRating = (rating) => Math.min(Math.max(rating, 0), 5);

module.exports = {
  lifecycles: {
    async beforeSave(data) {
      if (data.reviews && data.reviews.data) {
        // Clamp individual ratings
        data.reviews.data.forEach(review => {
          review.attributes.rating = clampRating(review.attributes.rating);
        });

        const totalRatings = data.reviews.data.reduce((acc, review) => acc + review.attributes.rating, 0);
        let averageRating = totalRatings / data.reviews.data.length;
        averageRating = clampRating(averageRating);

        data.averageRating = Math.round(averageRating * 10) / 10; // Round to one decimal place
      }
    },
    async beforeUpdate(params, data) {
      if (data.reviews && data.reviews.data) {
        // Clamp individual ratings
        data.reviews.data.forEach(review => {
          review.attributes.rating = clampRating(review.attributes.rating);
        });

        const totalRatings = data.reviews.data.reduce((acc, review) => acc + review.attributes.rating, 0);
        let averageRating = totalRatings / data.reviews.data.length;
        averageRating = clampRating(averageRating);

        data.averageRating = Math.round(averageRating * 10) / 10; // Round to one decimal place
      }
    }
  }
}
