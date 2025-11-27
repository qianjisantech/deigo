import request from '@/utils/request'

/**
 * 获取组织列表（分页）
 * @param {object} data - 查询参数
 * @returns {Promise}
 */
export function getSpaceListPage(data) {
  return request({
    url: '/space/page',
    method: 'post',
    data,
    showLoading: true,
    loadingText: '正在加载组织列表...'
  })
}

/**
 * 获取组织列表（全部）
 * @returns {Promise}
 */
export function getSpaceList() {
  return request({
    url: '/space/list',
    method: 'get',
    showLoading: false  // 全部列表用于下拉选择，不需要loading
  })
}

/**
 * 创建组织
 * @param {object} data - 组织数据
 * @returns {Promise}
 */
export function createSpace(data) {
  return request({
    url: '/space',
    method: 'post',
    data
  })
}

/**
 * 更新组织
 * @param {number} id - 组织ID
 * @param {object} data - 组织数据
 * @returns {Promise}
 */
export function updateSpace(id, data) {
  return request({
    url: `/space/${id}`,
    method: 'put',
    data
  })
}

/**
 * 删除组织
 * @param {number} id - 组织ID
 * @returns {Promise}
 */
export function deleteSpace(id) {
  return request({
    url: `/space/${id}`,
    method: 'delete'
  })
}

/**
 * 获取组织详情
 * @param {number} id - 组织ID
 * @returns {Promise}
 */
export function getSpaceDetail(id) {
  return request({
    url: `/space/${id}`,
    method: 'get'
  })
}

/**
 * 根据用户ID获取组织列表
 * @param {number} ownerId - 用户ID
 * @returns {Promise}
 */
export function getSpaceListByOwner(ownerId) {
  return request({
    url: `/space/owner/${ownerId}`,
    method: 'get'
  })
}

/**
 * 获取组织成员列表（分页）
 * @param {object} params - 查询参数
 * @returns {Promise}
 */
export function getSpaceMemberPage(params) {
  return request({
    url: '/space/member/page',
    method: 'post',
    data: params
  })
}

/**
 * 添加组织成员
 * @param {object} data - 成员数据
 * @returns {Promise}
 */
export function addSpaceMember(data) {
  return request({
    url: '/space/member',
    method: 'post',
    data
  })
}

/**
 * 更新组织成员
 * @param {number} id - 成员ID
 * @param {object} data - 成员数据
 * @returns {Promise}
 */
export function updateSpaceMember(id, data) {
  return request({
    url: `/space/member/${id}`,
    method: 'put',
    data
  })
}

/**
 * 删除组织成员
 * @param {number} id - 成员ID
 * @returns {Promise}
 */
export function deleteSpaceMember(id) {
  return request({
    url: `/space/member/${id}`,
    method: 'delete'
  })
}

/**
 * 获取可添加到组织的用户列表
 * @param {number} spaceId - 组织ID
 * @returns {Promise}
 */
export function getAvailableUsers(spaceId) {
  return request({
    url: `/space/member/available-users/${spaceId}`,
    method: 'get'
  })
}
