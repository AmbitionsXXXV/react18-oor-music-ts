import etcRequest from '@/service'

export function getRankingList(id: number) {
  return etcRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getTopList() {
  return etcRequest.get({
    url: '/toplist'
  })
}
