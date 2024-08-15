import { request } from "graphql-request";
import { gql } from "graphql-request";
export const getCarsList = async () => {
  const query = gql`
    query MyQuery {
      carLists {
        carAvg
        carManufacturor
        carType
        createdAt
        id
        name
        price
        createdBy {
          name
        }
        image {
          url
        }
        seats
      }
    }
  `;
  const result = await request(
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clztkmptg022l07uqvnrtrzwx/master",
    query
  );
  return result;
};
