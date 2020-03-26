import {fetch} from 'dva';

export default async function request(url: string, options: object|undefined) {

  const o:RequestInit = {
    body: null
  }
  const u: RequestInfo = ""

  const response:Response = await fetch(url, options)

  const data = await response.json()
  return data
}