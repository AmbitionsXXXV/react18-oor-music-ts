import etcRequest from '@/service'

export function getBanners() {
  return etcRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return etcRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return etcRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return etcRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
