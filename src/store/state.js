import cats from '../Data/Cats'
import dogs from '../Data/Dogs'
export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
