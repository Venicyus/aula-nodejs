import axios from 'axios'
import { IUserResponse } from './types/user-response'

async function main(): Promise<void> {
  console.time('Exec')
  const { data } = await axios.get<IUserResponse>('https://reqres.in/api/users')

  const userFound = data.data.find(({ id }) => {
    return id === 5
  })

  console.log(userFound)

  console.timeEnd('Exec')
}

main()
