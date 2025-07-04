import Produto from '../components/Produto'
import { useGetGamesQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetGamesQuery()

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
