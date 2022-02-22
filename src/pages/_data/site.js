module.exports = function () {
  console.log(`Environment: ${process.env.ELEVENTY_ENV}`);
  
  return {
      environment: process.env.ELEVENTY_ENV
  };
};