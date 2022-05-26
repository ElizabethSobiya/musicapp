
import {gql} from "@apollo/client"

export const MyQuery = gql`
query MyQuery {
  artists {
    artists_bio
    artists_dob
    artists_image
    artists_name
    artists_songs
    id
  }
}
`;

