import { image } from 'image-downloader'
import path from 'path'
import { fileURLToPath } from 'url';

export default defineEventHandler(async (event) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    console.log(path.join(__dirname.split('.nuxt')[0], '/assets/img'))

    const { filename } = await image({
        url: 'https://soshace.com/wp-content/uploads/2020/12/879-png-1.png',
        dest: path.join(__dirname.split('.nuxt')[0], '/assets/img/nuxt3.png')
    })

    return {
        message: 'downloaded at - ' + filename
    }
})