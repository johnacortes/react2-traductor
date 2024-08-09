import axios from "axios";

const translateText = async (text, idiomaInput, idiomaOutput) => {
  try {
    const response = await axios.get(
      `https://api.mymemory.translated.net/get`,
      {
        params: {
          q: text,
          langpair: `${idiomaInput}|${idiomaOutput}`,
        },
      }
    );
    return response.data.responseData.translatedText;
  } catch (error) {
    console.log(error, 999999);
    throw error;
  }
};

export default translateText;
