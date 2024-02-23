import request, { gql } from "graphql-request";



const API_URL: string = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsx6satq0kam07we5v6fg2ql/master";

const getPopularFeeds = async (): Promise<PopularFeed[] | null> => {
  const query = gql`
  query getPopularFeeds {
    popularFeeds {
      id
      title
      image {
        url
      }
    }
  }
  `
  try {
    const result: { popularFeeds: PopularFeed[] } = await request(API_URL, query)
    return result.popularFeeds;
  } catch (error) {
    console.log(`Error while getting feeds: ${error}`)
    return null;
  }
}

export default {
  getPopularFeeds
}