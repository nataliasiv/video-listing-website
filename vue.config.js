module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Imports these reusable scss files in all <style lang="scss"> in the project
        prependData: `
          @import "@/scss/_media-queries.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
};
