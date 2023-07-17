const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                  @import "src/Assets/Sass/utils/_variables.scss";
                  @import "src/Assets/Sass/utils/mixins.scss";
                  @import "src/Assets/Sass/utils/fonts.scss";
                  @import "src/Assets/Sass/utils/keyframes.scss";
                  @import "src/Assets/Sass/utils/placeholder.scss";
                `,
            },
        },
    }
}