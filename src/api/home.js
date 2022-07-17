import request from '@/utils/request'

export const getAllCitys = (params) => {
  return request({
    method: 'GET',
    url: '/v1/user',
    params,
    paramsSerializer: function paramsSerializer(params) {
      // "Hide" the `answer` param
      return Object.entries(Object.assign({}, params))
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    }
  })
}
