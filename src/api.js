import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Oh14DF0gfckhW7DkFxBbvYI0KdxwLRqnoNErvGfXdpQ'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    return response;
}

export default searchImages;