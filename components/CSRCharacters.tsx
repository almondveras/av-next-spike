import { useCharactersQuery } from "../graphql/generated"
import Character from "./character"

const CSRCharacters = () => {
  const {data} = useCharactersQuery({}, {
    suspense: true,
    cacheTime: 0,
  })
  const charactersData = data?.characters?.results

  return (
    <div>
      {
        charactersData?.map((character) => <Character key={character?.id} {...character} />)
      }
    </div>
  )
}

export default CSRCharacters