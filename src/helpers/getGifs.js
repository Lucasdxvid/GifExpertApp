export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=k7xPjLGEJIfjvfJJinwJc75FG8mF92Gg&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json(); // Desesctructuracion de la Data del JSON

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  
  return gifs;
};
