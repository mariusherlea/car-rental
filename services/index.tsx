import { request } from "graphql-request";
import { gql } from "graphql-request";
const MASTER_URL =
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clztkmptg022l07uqvnrtrzwx/master";

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
  const result = await request(MASTER_URL, query);
  return result;
};
export const getStoreLocations = async () => {
  const query = gql`
    query MyQuery2 {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
