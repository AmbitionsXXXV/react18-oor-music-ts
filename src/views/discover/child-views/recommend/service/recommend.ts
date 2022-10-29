import etcRequest from '@/service'

export function getBanners() {
  return etcRequest.get({
    url: '/banner'
  })
}
