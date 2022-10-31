import etcRequest from '@/service'

export function getSongDetail(ids: number) {
  return etcRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return etcRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
