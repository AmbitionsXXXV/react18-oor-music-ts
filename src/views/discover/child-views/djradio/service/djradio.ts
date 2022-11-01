import etcRequest from '@/service'

export function getDjRadioCatelist() {
  return etcRequest.get({
    url: '/dj/catelist'
  })
}

export function getDjRadioRecommend(type: any) {
  return etcRequest.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

export function getDjRadios(cateId: any, limit: any, offset: any) {
  return etcRequest.get({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}
