import request, { gql } from "graphql-request";



const API_URL: string = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsx6satq0kam07we5v6fg2ql/master";

const getPopularFeeds = async () => {
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
    const result = await request(API_URL, query);
    return result;
}