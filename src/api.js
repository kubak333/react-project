import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Oh14DF0gfckhW7DkFxBbvYI0KdxwLRqnoNErvGfXdpQ'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;