import Axios from "@/utils/requester";
import api from "./api";
import md5 from "md5";

// 服务接口路径补全
const rq = name => `/inmanage_lb/${name}`;

export const API = {
  getAuthreSource: rq(api.GET_AUTHRESOURCE),
  getCheckCodeUrl: rq(api.GET_CHECKCODE_URL),
  getSession: rq(api.GET_SESSION),
  login: rq(api.SET_LOGIN),
  logout: rq(api.SET_LOGOUT),
  setPassword: rq(api.SET_PASSWORD),
  companyList: rq(api.QUERY_COMPANY_LIST),
  addCompanyInfo: rq(api.ADD_COMPANY_INFO),
  delCompanyInfo: rq(api.DELETE_COMPANY_INFO),
  queryModuleList: rq(api.QUERY_MODULE_LIST),
  queryOwnFunctionList: rq(api.QUERY_OWN_FUNCTION_LIST),
  changeFunctionList: rq(api.CHANGE_FUNCTION_LIST),
  queryMessageList: rq(api.QUERY_MESSAGE_LIST),
  submitModuleList: rq(api.SUBMIT_MODULE_LIST),
  getMessageTemplateList: rq(api.GET_MESSAGE_TEMPLATE_LIST),
  addMessageTemplate: rq(api.ADD_MESSAGE_TEMPLATE),
  delMessageTemplate: rq(api.DEL_MESSAGE_TEMPLATE),
  sendNewMessage: rq(api.SEND_NEW_MESSAGE),
  queryInformConfigList: rq(api.QUERY_INFORM_CONFIG_LIST),
  queryTagList: rq(api.QUERY_TAG_LIST),
  uploadCidFile: rq(api.UPLOAD_CID_FILE),
  queryService: rq(api.QUERY_SERVICE),
  queryNebulalistModuleList: rq(api.QUERY_NEBULALIST_MODULE_LIST),
  queryZipList: rq(api.QUERY_ZIP_LIST),
  uploadModuleZipFile: rq(api.UPLOAD_MODULE_ZIP_FILE),
  editService: rq(api.EDIT_SERVICE),
  delService: rq(api.DEL_SERVICE),
  managePackageInfo: rq(api.MANAGE_PACKAGE_INFO),
  submitModifiedInfo: rq(api.SUBMIT_MODIFIED_INFO),
  submitModuleInfo: rq(api.SUBMIT_MODULE_INFO),
  delModule: rq(api.DEL_MODULE),
  deleteZipVersion: rq(api.DELETE_ZIP_VERSION),
  getZipVersion: rq(api.GET_ZIP_VERSION),
  // 方法管理
  getModuleList: rq(api.GET_MODULE_LIST),
  getFunctionList: rq(api.GET_FUNCTION_LIST),
  addModule: rq(api.ADD_MODULE),
  modifyModule: rq(api.MODIFY_MODULE),
  delModuleService: rq(api.DEL_MODULE_SERVICE),
  addFunction: rq(api.ADD_FUNCTION),
  modifyFunction: rq(api.MODIFY_FUNCTION),
  delFunctionService: rq(api.DEL_FUNCTION_SERVICE),

  getBranchList: rq(api.GET_BRANCH_LIST),
  getBranchDetail: rq(api.GET_BRANCH_BY_ID),
  // 发布管理
  fileUploadService: rq(api.FILE_UPLOAD_SERVICE),
  getUpdateList: rq(api.GET_UPDATE_LIST),
  getUpgradeTask: rq(api.GET_UPGRADE_TASK),
  addUpgradeList: rq(api.ADD_UPGRADE_LIST),
  getVersionDetail: rq(api.GET_VERSION_DETAIL),
  changeVersionTaskStatus: rq(api.SET_UPGRADE_TASK_STATUS),
  getTaskResource: rq(api.GET_RESOURCE),
  addUpgradeTask: rq(api.ADD_UPGRADE_TASK),
  getUpgradeTaskDetail: rq(api.GET_UPGRADE_TASK_DETAIL),
  getAllRole: rq(api.GET_ROLE_LIST_URL),
  getRoleMenuItemRelList: rq(api.GET_ROLE_ALL_ITEM),
  getRoleItem: rq(api.GET_ROLE_ITEM),
  setRoleBindItem: rq(api.SET_ROLE_BIND_ITEM),
  setRoleUpdate: rq(api.SET_ROLE_UPDATE),
  addRole: rq(api.ADD_ROLE),
  delRole: rq(api.DEL_ROLE),
  getPostAllList: rq(api.GET_POST_ALL_LIST),
  addPostList: rq(api.GET_POST_LIST),
  updatePostList: rq(api.SET_POST_QUERY_LIST),
  delPostList: rq(api.DEL_POST_LIST),
  getBsnList: rq(api.GET_BSN_LIST),
  editBranch: rq(api.SET_BRANCH),
  addBsnList: rq(api.ADD_BRANCH),
  delBsnList: rq(api.DEL_BRANCH),
  setCheckOperate: rq(api.SET_CHECK_OPERATE),
  getUserList: rq(api.GET_USER_BY_BRH),
  getCheckHistoryList: rq(api.GET_CHECK_HISTORY_LIST),
  getPenHisList: rq(api.GET_CHECK_STATE_LIST),
  addUser: rq(api.ADD_USER),
  updateUser: rq(api.SET_UPDATE_USER),
  getUserDetail: rq(api.GET_ROLE_BY_USER),
  delUser: rq(api.DEL_USER),
  bindRole: rq(api.SET_USER_BIND_ROLE),
  createUserToRole: rq(api.CONNET_USER_AND_ROLE_URL),
  getCheckList: rq(api.GET_CHECK_LIST),
  getStrategyList: rq(api.GET_STRATEGY_LIST),
  editRel: rq(api.SET_CONNECTION),
  getRelDetail: rq(api.GET_STRATEGY),
  addAuth: rq(api.ADD_STRATEGY),
  // 白名单管理
  qryWhiteList: rq(api.GET_WHITELIST),
  addWhiteList: rq(api.ADD_WHITELIST),
  deleteWhiteList: rq(api.DEL_WHITELIST),
  addWhiteListIds: rq(api.ADD_WHITELIST_INFO),
  qryMappingService: rq(api.QRY_MAPPING_SERVICE),
  getMappingMessageService: rq(api.GET_MAPPING_MESSAGE_SERVICE),
  getMappingTaskListService: rq(api.GET_MAPPING_TASK_LIST_SERVICE),
  createZipMappingTask: rq(api.CREATE_ZIP_MAPPING_TASK),
  qryResourceList: rq(api.GET_RESOURCE),
  getWhitelistService: rq(api.GET_WHITELIST_SERVICE), // IM10027
  reimportWhiteListService: rq(api.REIMPORT_WHITELIST_SERVICE), // IM10027
  // 离线包配置映射表增加
  addMappingService: rq(api.ADD_MAPPING_SERVICE),
  delMapping: rq(api.DEL_MAPPING),
  getMappingVersion: rq(api.GET_MAPPING_VERSION),
  rollBackMapping: rq(api.ROLL_BACK_MAPPING),

  // 热修复管理
  changeTaskStatus: rq(api.SET_PAUSE_HOTPATCH_TASK), // IM10015
  createHotpatchResource: rq(api.ADD_HOTPATCH_LIST), // IM10016
  getHotpatchResourceList: rq(api.GET_HOTPATCH_LIST), // IM10017
  createHotpatchTask: rq(api.ADD_HOTPATCH_TASK), // IM10018
  getHotpatchTaskListByPackageId: rq(api.GET_QUERY_HOTPATCH_LIST), // IM10019
  // fileUploadService: rq(api.GET_FILE_UPLOAD_SERVICE), // IM10026

  // 资源管理
  getRouList: rq(api.GET_RESOURCE),
  addRes: rq(api.ADD_RESOURCE),
  updateAuthSer: rq(api.SET_STRATEGY),
  delAuth: rq(api.DEL_STRATEGY),
  delResList: rq(api.DEL_RESOURCE),
  updateResList: rq(api.SET_RESOURCE),

  //WNF菜单配置
  getMenuSearch: rq(api.GET_MENU_SEARCH),
  getMenuList: rq(api.GET_MENU_LIST),
  getMenuDetail: rq(api.GET_MENU_DETAIL),
  getMenuUpdate: rq(api.GET_MENU_UPDATE),
  getMenuDelete: rq(api.GET_MENU_DELETE),
  getMenuId: rq(api.GET_MENU_ID),
  getAddMenu: rq(api.ADD_MENU),
  uploadImg: rq(api.UPLOAD_IMG),
  getAppInfo: rq(api.QUERY_APP_DATA),
  newAppInfo: rq(api.NEW_APP_DATA),
  updateAppInfo: rq(api.UPDATE_APP_DATA),
  deleteAppInfo: rq(api.DELETE_APP_DATA),
  getParentMenuInfo: rq(api.GET_PARENT_MENU_INFO),
  getPeerMenuInfo: rq(api.GET_PERR_MENU_INFO),
  getMenuAppInfo: rq(api.GET_MENU_App_INFO),
  copyMenuData: rq(api.COPY_MENU_DATA),
  changeMenuState: rq(api.CHANGE_MENU_STATE),

  //素材管理
  newGroupImage: rq(api.NEW_GROUP_IMG),
  deleteGroupImage: rq(api.DELETE_GROUP_IMG),
  updateGroupImage: rq(api.UPDATE_GROUP_IMG),
  getGroupImage: rq(api.GET_GROUP_IMG),
  newImageInfo: rq(api.NEW_IMGINFO),
  deleteImageInfo: rq(api.DELETE_IMGINFO),
  updateImageInfo: rq(api.UPDATE_IMGINFO),
  groupingImageInfo: rq(api.GROUOPING_IMGINFO),
  getInitImageList: rq(api.GET_INIT_IMAGE_LIST),

  //搜索词配置
  getSearchInfo: rq(api.SEARCH_GET_INFO),
  saveSearchInfo: rq(api.SEARCH_SAVE_INFO),

  // 广告管理
  getAdvertInfo: rq(api.ADERT_MANAGE_INFO),
  delAdeert: rq(api.DEL_ADERT),
  addAdertMessage: rq(api.ADD_ADERT_MESSAGE),
  getAdertMsg: rq(api.GET_ADERT_MESSAGE),
  getLaunchStrategy: rq(api.GET_LAUNCH_STRATEGY),
  queryProductList: rq(api.QUERY_PRODUCT_LIST),

  // 广告投放策略
  getAdertLaunchStrategy: rq(api.ADERT_LAUNCH_STRATEGY),
  addLaunchStrategy: rq(api.ADD_LAUNCH_STRATEGY),
  getAdertList: rq(api.GET_ADERT_LIST),
  removeLaunchStrategy: rq(api.REMOVE_LAUNCH_STRATEGY),

  // 城市投放
  getCityLaunch: rq(api.LAUNCH_CITY),
  // 投放位置
  getPositionLaunch: rq(api.LAUNCH_POSITION),
  getAllCityList: rq(api.GETALL_CITY),
  // 投放查询
  getSeachLaunchList: rq(api.SEACH_LAYNCH),

  // 首屏楼层配置
  getFloorMessage: rq(api.GET_FOOLR_MESSAGE),
  delFloorMessage: rq(api.DEL_FLOOR_MESSAGE),
  releaseFloorMessage: rq(api.RELEASE_FLOOR_MESSAGE),
  copyFloorMessage: rq(api.COPY_FLOOR_MESSAGE),
  editFloorMessage: rq(api.EDIT_FLOOR_MESSAGE),
  getFloorShowMessage: rq(api.GET_FLOOR_SHOW_MESSAGE),

  addFloorStyleAllocation: rq(api.ADD_FLOOR_STYLE_ALLOCATION),
  createPageMessage: rq(api.CREATE_PAGE_MESSAGE),
  floorOrderNum: rq(api.FLOOR_ORDER_NUM),
  delFloor: rq(api.DEL_FLOOR),

  addFloor: rq(api.ADD_FLOOR),
  editFloor: rq(api.EDIT_FLOOR),
  editStyle: rq(api.EDIT_STYLE),
  editPalaceStyle: rq(api.EDIT_PALACESTYLE),
  editPageNormal: rq(api.EDIT_PAGE_NORMAL),

  getCustomList: rq(api.GET_CUSTOM_LIST),
  addCustomMsg: rq(api.ADD_CUSTOM_MSG),
  delCustomMsg: rq(api.DEL_CUSTOM_MSG),
  changeCustomMsg: rq(api.CHANGE_CUSTOM_MSG),
  aliasParameter: rq(api.ALIAS_PARAMETER),

  //APP版本管理
  getAppVersionInfo: rq(api.GET_APP_VERSION_INFO),
  addAppVersionInfo: rq(api.ADD_APP_VERSION),
  updateAppVersionInfo: rq(api.UPDATE_APP_VERSION),
  delAppVersionInfo: rq(api.DELETE_APP_VERSION),
  getMenuVersionList: rq(api.GET_MENU_VERSION_LIST),

  //消息中心
  addMessageCenterInfo: rq(api.ADD_MESSAGE_CENTER_INFO),
  delMessageCenterInfo: rq(api.DEL_MESSAGE_CENTER_INFO),
  updateMessageCenterInfo: rq(api.UPDATE_MESSAGE_CENTER_INFO),
  getMessageCenterInfo: rq(api.GET_MESSAGE_CENTER_INFO),
  getCustomerList: rq(api.GET_CUSTOMER_LIST),
  getCityCustomer: rq(api.GET_CITYS_CUSTOMER),

  // 用户分群
  getTagList: rq(api.TAG_LIST),
  getAppUserList: rq(api.APP_USER_LIST),
  getTagInfo: rq(api.TAG_INFO),
  updateUserTag: rq(api.UPDATE_USER_TAG),
  removeTagUser: rq(api.DEL_TAG_USER),
  updateTag: rq(api.UPDATE_TAG),
  removeTag: rq(api.DEL_TAG),
  getUserTagInfo: rq(api.USER_TAG_INFO),

  //系统菜单
  getSystemMenuList: rq(api.GET_SYSTEM_LIST),
  upadteSystemMenu: rq(api.UPDATE_SYSTEM),
  delSystemMenu: rq(api.DELETE_SYSTEM),
  newSystemMenu: rq(api.NEW_SYSTEM_MENU),
  //功能列表
  newFeture: rq(api.NEW_FETURE),
  updateFeture: rq(api.UPDATE_FETURE),
  deletFeture: rq(api.DELETE_FETURE),
  getFetureList: rq(api.GET_FETURE_LIST),
  //功能关联关系
  newAssocited: rq(api.NEW_ASSOCITED),
  updateAssocited: rq(api.UPDATE_ASSOCITED),
  delAssocited: rq(api.DEL_ASSOCITED),
  getAssocitedList: rq(api.GET_ASSOCITED_LIST),
  getFunctionLevel: rq(api.GET_FUNCTION_LEVEL),
  functionLevelList: rq(api.FUNCTION_LEVEL_LIST),
  newFunctionMenu: rq(api.NEW_FUNCTION_MENU),
  //营销活动 奖品
  prizePhysicalList: rq(api.PRIZE_PHYSICAL_LIST),
  newPrizePhysical: rq(api.NEW_PRIZE_PHYSICAL),
  updatePrizePhysical: rq(api.UPDATE_PRIZE_PHYSICAL),
  queryPrizePhysical: rq(api.QUERY_PRIZE_PHYSICAL),
  getPrizeVirtual: rq(api.PRIZE_VIRTUAL_LIST),
  newPrizeVirtual: rq(api.NEW_PRIZE_VIRTUAL),
  updatePrizeVirtual: rq(api.UPDATE_PRIZE_VIRTUAL),
  queryPrizeVirtual: rq(api.QUERY_PRIZE_VIRTUAL),
  associtedActivityList: rq(api.ASSOCIATE_ACTIVITY_LIST),
  newMoreVirtual: rq(api.NEW_MORE_VIRTUAL),
  prizeInfoDel: rq(api.PRIZE_INFO_DEL),
  prizeCardNew: rq(api.PRIZE_CARD_NEW),
  prizeCardDetail: rq(api.PRIZE_CARD_DETAIL),
  prizeCardUpdate: rq(api.PRIZE_CARD_UPDATE),
  prizeCardDel: rq(api.PRIZE_CARD_DEL),

  marketActivityAdd: rq(api.MARKET_ACTIVITY_ADD),
  marketActivitySetUpdate: rq(api.MARKET_ACTIVITY_SET_UPDATE),
  marketActivityList: rq(api.MARKET_ACTIVITY_LIST),
  marketActivityStateUpdate: rq(api.MARKET_ACTIVITY_STATE_UPDATE),
  marketActivityInfo: rq(api.MARKET_ACTIVITY_INFO),
  marketActivityDel: rq(api.MARKET_ACTIVITY_DEL),
  activityCommitCount: rq(api.ACTIVITY_COMMIT_COUNT),
  activityLookCount: rq(api.ACTIVITY_LOOK_COUNT),
  activityGuessAdd: rq(api.ACTIVITY_GUESS_ADD),
  activityGuessUpdate: rq(api.ACTIVITY_GUESS_UPDATE),
  activityGuessDetail: rq(api.ACTIVITY_GUESS_DETAIL),
  activityGrantPrize: rq(api.ACTIVITY_GRANT_PRIZE),
  activityWinPrize: rq(api.ACTIVITY_WIN_PRIZE),
  activityPrizeInventory: rq(api.ACTIVITY_PRIZE_INVENTORY),
  activitySubmitNum: rq(api.ACTIVITY_SUBMIT_NUM), // 与上方 ACTIVITY_COMMIT_COUNT 调用的是同一个接口
  activityShareNum: rq(api.ACTIVITY_SHARE_NUM),
  activityUVAndPVNum: rq(api.ACTIVITY_UVANDPV_NUM),
  activityUVAndPVCount: rq(api.ACTIVITY_UVANDPV_COUNT),
  //渠道部分接口
  addChannel: rq(api.ADD_CHANNEL),
  getUserInfoActionService: rq(api.GET_USER_INFO_ACTION_SERVICE),
  getChannelList: rq(api.GET_CHANNEL_LIST),
  changeChannel: rq(api.CHANGE_CHANNEL),
  removeChannel: rq(api.REMOVE_CHANNEL)
};

// 获取登录所需的参数
export const getSession = () =>
  Axios({
    method: "post",
    url: API.getSession
  });
// 登录接口
export const getLogin = data =>
  Axios({
    method: "post",
    url: API.login,
    data: data
  });
// 登出接口
export const getLogout = () =>
  Axios({
    method: "post",
    url: API.logout
  });
// 修改密码
export const changePassword = ({ newPassword, oldPassword }) =>
  Axios({
    method: "post",
    url: API.setPassword,
    data: {
      oldPassword: md5(oldPassword),
      newPassword: md5(newPassword)
    }
  });
// 获取首页信息
export const getAuthreSource = () =>
  Axios({
    method: "post",
    url: API.getAuthreSource
  });
// 获取公司列表信息
export const queryCompanyList = data =>
  Axios({
    method: "post",
    url: API.companyList,
    data: data
  });
// 添加公司信息
export const addCompanyInfo = data =>
  Axios({
    method: "post",
    url: API.addCompanyInfo,
    data: data
  });
// 删除公司信息
export const delCompanyInfo = data =>
  Axios({
    method: "post",
    url: API.delCompanyInfo,
    data: data
  });
// 查询模块信息
export const queryModuleList = data =>
  Axios({
    method: "post",
    url: API.queryModuleList,
    data: data
  });
// 查询模块对应的功能
export const queryOwnFunctionList = data =>
  Axios({
    method: "post",
    url: API.queryOwnFunctionList,
    data: data
  });
// 修改模块
export const submitModuleList = data =>
  Axios({
    method: "post",
    url: API.submitModuleList,
    data: data
  });
// 修改功能
export const changeFunctionList = data =>
  Axios({
    method: "post",
    url: API.changeFunctionList,
    data: data
  });
// 获取消息列表
export const queryMessageList = data =>
  Axios({
    method: "post",
    url: API.queryMessageList,
    data: data
  });
// 获取消息模板列表
export const getMessageTemplateList = () =>
  Axios({
    method: "post",
    url: API.getMessageTemplateList
  });
// 添加消息模板
export const addMessageTemplate = data =>
  Axios({
    method: "post",
    url: API.addMessageTemplate,
    data: data
  });
// 删除消息模板
export const delMessageTemplate = data =>
  Axios({
    method: "post",
    url: API.delMessageTemplate,
    data: data
  });
// 发送消息
export const sendNewMessage = data =>
  Axios({
    method: "post",
    url: API.sendNewMessage,
    data: data,
    type: "J"
  });
// 获取消息模板
export const queryInformConfigList = data =>
  Axios({
    method: "post",
    url: API.queryInformConfigList,
    data: data
  });
// 获取标签列表
export const queryTagList = data =>
  Axios({
    method: "post",
    url: API.queryTagList,
    data: data
  });
// 上传文件
export const uploadCidFile = data =>
  Axios({
    method: "post",
    url: API.uploadCidFile,
    data: data
  });
// 获取资源版本号
export const getZipVersion = () =>
  Axios({
    method: "post",
    url: API.getZipVersion
  });
// 查询服务
export const queryService = () =>
  Axios({
    method: "post",
    url: API.queryService
  });
// 查询服务下的包
export const queryNebulalistModuleList = data =>
  Axios({
    method: "post",
    url: API.queryNebulalistModuleList,
    data: data
  });
// 查询包的详情
export const queryZipList = data =>
  Axios({
    method: "post",
    url: API.queryZipList,
    data: data
  });
// 修改/增加服务
export const editService = data =>
  Axios({
    method: "post",
    url: API.editService,
    data: data
  });
// 删除服务
export const delService = data =>
  Axios({
    method: "post",
    url: API.delService,
    data: data
  });
// 打包/重新打包接口
export const managePackageInfo = data =>
  Axios({
    method: "post",
    url: API.managePackageInfo,
    data: data
  });
// 修改包信息
export const submitModifiedInfo = data =>
  Axios({
    method: "post",
    url: API.submitModifiedInfo,
    data: data
  });
// 服务下增加/修改包信息
export const submitModuleInfo = data =>
  Axios({
    method: "post",
    url: API.submitModuleInfo,
    data: data
  });
// 删除服务下包的信息
export const delModule = data =>
  Axios({
    method: "post",
    url: API.delModule,
    data: data
  });
// 删除离线包
export const deleteZipVersion = data =>
  Axios({
    method: "post",
    url: API.deleteZipVersion,
    data: data
  });
// 获取模块列表
export const getModuleList = () =>
  Axios({
    method: "post",
    url: API.getModuleList
  });
// 获取方法列表
export const getFunctionList = data =>
  Axios({
    method: "post",
    url: API.getFunctionList,
    data: data
  });
// 添加模块
export const addModule = data =>
  Axios({
    method: "post",
    url: API.addModule,
    data: data
  });
// 修改模块
export const modifyModule = data =>
  Axios({
    method: "post",
    url: API.modifyModule,
    data: data
  });
// 删除模块
export const delModuleService = data =>
  Axios({
    method: "post",
    url: API.delModuleService,
    data: data
  });
// 添加方法
export const addFunction = data =>
  Axios({
    method: "post",
    url: API.addFunction,
    data: data
  });
// 修改方法
export const modifyFunction = data =>
  Axios({
    method: "post",
    url: API.modifyFunction,
    data: data
  });
// 删除方法
export const delFunctionService = data =>
  Axios({
    method: "post",
    url: API.delFunctionService,
    data: data
  });

// 曹琴负责代码区域
// 发布管理
export const fileUploadService = data =>
  Axios({
    method: "post",
    url: API.fileUploadService,
    data: data
  });
export const getUpdateList = data =>
  Axios({
    method: "post",
    url: API.getUpdateList,
    data: data
  });
// 发布包列表
export const getUpgradeTask = data =>
  Axios({
    method: "post",
    url: API.getUpgradeTask,
    data: data
  });
// 增加发布包
export const addUpgradeList = data =>
  Axios({
    method: "post",
    url: API.addUpgradeList,
    data: data
  });
// 获取版本更新状态信息
export const getVersionDetail = data =>
  Axios({
    method: "post",
    url: API.getVersionDetail,
    data: data
  });
// 修改发布包状态
export const changeVersionTaskStatus = data =>
  Axios({
    method: "post",
    url: API.changeVersionTaskStatus,
    data: data
  });
// 资源列表查询
export const getTaskResource = data =>
  Axios({
    method: "post",
    url: API.getTaskResource,
    data: data
  });
// 创建发布任务
export const addUpgradeTask = data =>
  Axios({
    method: "post",
    url: API.addUpgradeTask,
    data: data
  });
// 任务详情
export const getUpgradeTaskDetail = data =>
  Axios({
    method: "post",
    url: API.getUpgradeTaskDetail,
    data: data
  });
// 角色模块
// 获取所有角色
export const getAllRole = () =>
  Axios({
    method: "get",
    url: API.getAllRole
  });
// 角色详情
export const getRoleItem = data =>
  Axios({
    method: "post",
    url: API.getRoleItem,
    data: data
  });
// 查询角色与菜单功能关联
export const getRoleMenuItemRelList = data =>
  Axios({
    method: "post",
    url: API.getRoleMenuItemRelList,
    data: data
  });
// 设置角色绑定功能
export const setRoleBindItem = data =>
  Axios({
    method: "post",
    url: API.setRoleBindItem,
    data: data
  });
// 更新角色信息
export const setRoleUpdate = data =>
  Axios({
    method: "post",
    url: API.setRoleUpdate,
    data: data
  });
// 增加角色
export const addRole = data =>
  Axios({
    method: "post",
    url: API.addRole,
    data: data
  });
// 删除角色
export const delRole = data =>
  Axios({
    method: "post",
    url: API.delRole,
    data: data
  });
// 岗位模块
// 获取所有岗位
export const getPostAllList = data =>
  Axios({
    method: "post",
    url: API.getPostAllList,
    data: data
  });
// 新增岗位
export const addPostList = data =>
  Axios({
    method: "post",
    url: API.addPostList,
    data: data
  });
//修改岗位
export const updatePostList = data =>
  Axios({
    method: "post",
    url: API.updatePostList,
    data: data
  });
//删除岗位
export const delPostList = data =>
  Axios({
    method: "post",
    url: API.delPostList,
    data: data
  });
// 审查管理
// 审查列表
export const getCheckList = data =>
  Axios({
    method: "post",
    url: API.getCheckList,
    data: data
  });
// 审查同意or驳回
export const setCheckOperate = data =>
  Axios({
    method: "post",
    url: API.setCheckOperate,
    data: data
  });
// 审查历史
export const getCheckHistoryList = data =>
  Axios({
    method: "post",
    url: API.getCheckHistoryList,
    data: data
  });
// 审查记录
export const getPenHisList = data =>
  Axios({
    method: "post",
    url: API.getPenHisList,
    data: data
  });

// 朱栋豪负责代码区域
//机构管理模块列表树
export const getBranchList = data =>
  Axios({
    method: "get",
    url: API.getBranchList,
    data: data
  });
//保存修改机构
export const editBranch = data =>
  Axios({
    method: "post",
    url: API.editBranch,
    data: data
  });
//增加机构管理
export const addBsnList = data =>
  Axios({
    method: "post",
    url: API.addBsnList,
    data: data
  });
export const updateUser = data =>
  Axios({
    method: "post",
    url: API.updateUser,
    data: data
  });
//删除机构
export const delBsnList = data =>
  Axios({
    method: "post",
    url: API.delBsnList,
    data: data
  });
//机构管理模块详情
export const getBranchDetail = data =>
  Axios({
    method: "post",
    url: API.getBranchDetail,
    data: data
  });
//用户列表
export const getUserList = data =>
  Axios({
    method: "post",
    url: API.getUserList,
    data: data
  });
//获取用户详情列表
export const getUserDetail = data =>
  Axios({
    method: "post",
    url: API.getUserDetail,
    data: data
  });
export const addUser = data =>
  Axios({
    method: "post",
    url: API.addUser,
    data: data
  });
//删除用户列表
export const delUser = data =>
  Axios({
    method: "post",
    url: API.delUser,
    data: data
  });
// 用户角色绑定
export const bindRole = data =>
  Axios({
    method: "post",
    url: API.bindRole,
    data: data
  });
//用户列表关联
export const createUserToRole = data =>
  Axios({
    method: "post",
    url: API.createUserToRole,
    data: data
  });
//审查设置列表
export const getBsnList = data =>
  Axios({
    method: "post",
    url: API.getBsnList,
    data: data
  });
//策略设置
export const getStrategyList = data =>
  Axios({
    method: "post",
    url: API.getStrategyList,
    data: data
  });
// 设置关联
export const editRel = data =>
  Axios({
    method: "post",
    url: API.editRel,
    data: data
  });
// 权限详情
export const getRelDetail = data =>
  Axios({
    method: "post",
    url: API.getRelDetail,
    data: data
  });
// 增加策略
export const addAuth = data =>
  Axios({
    method: "post",
    url: API.addAuth,
    data: data
  });
// 修改策略
export const updateAuthSer = data =>
  Axios({
    method: "post",
    url: API.updateAuthSer,
    data: data
  });
// 删除策略
export const delAuth = data =>
  Axios({
    method: "post",
    url: API.delAuth,
    data: data
  });
export const getRouList = data =>
  Axios({
    //获取资源配置列表
    method: "post",
    url: API.getRouList,
    data: data
  });
export const addRes = data =>
  Axios({
    //增加资源配置列表
    method: "post",
    url: API.addRes,
    data: data
  });
export const updateResList = data =>
  Axios({
    //修改资源配置列表
    method: "post",
    url: API.updateResList,
    data: data
  });
export const delResList = data =>
  Axios({
    //删除资源配置列表
    method: "post",
    url: API.delResList,
    data: data
  });
// 接口演示无用区域
export const getHome = () => {
  return Axios({
    method: "get",
    url: API.home
  });
};

export const getLessons = () => {
  return Axios({
    method: "get",
    url: API.channel
  });
};

export const getAssets = () => {
  return Axios({
    method: "get",
    url: API.assets
  });
};

export const getAddress = () => {
  return Axios({
    method: "get",
    url: API.address
  });
};

// 赵榆负责代码区域
// 离线包管理中的配置部分
export const qryMappingService = data => {
  return Axios({
    method: "post",
    url: API.qryMappingService,
    data: data
  });
};
// 离线包管理中配置部分的详情接口
export const getMappingMessageService = data => {
  return Axios({
    method: "post",
    url: API.getMappingMessageService,
    data: data
  });
};
// 离线包管理配置部分手风琴展开页面接口
export const getMappingTaskListService = data => {
  return Axios({
    method: "post",
    url: API.getMappingTaskListService,
    data: data
  });
};
// 离线包配置页面创建发布调用接口
export const createZipMappingTask = data => {
  return Axios({
    method: "post",
    url: API.createZipMappingTask,
    data: data
  });
};
// 资源列表查询
export const qryResourceList = data => {
  return Axios({
    method: "post",
    url: API.qryResourceList,
    data: data
  });
};
// 离线包配置映射表增加
export const addMappingService = data => {
  return Axios({
    method: "post",
    url: API.addMappingService,
    data: data
  });
};
// 配置项删除
export const delMapping = data => {
  return Axios({
    method: "post",
    url: API.delMapping,
    data: data
  });
};
// 校验版本
export const getMappingVersion = data => {
  return Axios({
    method: "post",
    url: API.getMappingVersion,
    data: data
  });
};
// 回滚
export const rollBackMapping = data => {
  return Axios({
    method: "post",
    url: API.rollBackMapping,
    data: data
  });
};

// 於南峰
// 白名单列表查询
export const qryWhiteList = () => {
  return Axios({
    method: "get",
    url: API.qryWhiteList
  });
};
// 添加白名单
export const addWhiteList = data => {
  return Axios({
    method: "post",
    url: API.addWhiteList,
    data: data
  });
};
// 新增白名单
export const addWhiteListIds = data => {
  return Axios({
    method: "post",
    url: API.addWhiteListIds,
    data: data
  });
};
// 删除白名单
export const deleteWhiteList = data => {
  return Axios({
    method: "post",
    url: API.deleteWhiteList,
    data: data
  });
};
// 获取热修复列表
export const getHotpatchResourceList = data => {
  return Axios({
    method: "post",
    url: API.getHotpatchResourceList,
    data: data
  });
};
// 添加热修复
export const createHotpatchResource = data => {
  return Axios({
    method: "post",
    url: API.createHotpatchResource,
    data: data
  });
};
// 创建热修复任务
export const createHotpatchTask = data => {
  return Axios({
    method: "post",
    url: API.createHotpatchTask,
    data: data
  });
};
// 任务列表查询
export const getHotpatchTaskListByPackageId = data => {
  return Axios({
    method: "post",
    url: API.getHotpatchTaskListByPackageId,
    data: data
  });
};
// 状态修改
export const changeTaskStatus = data => {
  return Axios({
    method: "post",
    url: API.changeTaskStatus,
    data: data
  });
};
// 白名单表分页
export const getWhitelistService = data => {
  return Axios({
    method: "post",
    url: API.getWhitelistService,
    data: data
  });
};
// 重新导入白名单
export const reimportWhiteListService = data => {
  return Axios({
    method: "post",
    url: API.reimportWhiteListService,
    data: data
  });
};

//wnf菜单配置
export const getMenuSearch = data => {
  return Axios({
    method: "post",
    url: API.getMenuSearch,
    data: data
  });
};

export const getMenuList = data => {
  return Axios({
    method: "post",
    url: API.getMenuList,
    data: data
  });
};
export const getMenuDetail = data => {
  return Axios({
    method: "post",
    url: API.getMenuDetail,
    data: data
  });
};
export const getMenuUpdate = data => {
  return Axios({
    method: "post",
    url: API.getMenuUpdate,
    data: data
  });
};
export const getMenuDelete = data => {
  return Axios({
    method: "post",
    url: API.getMenuDelete,
    data: data
  });
};
export const getMenuId = data => {
  return Axios({
    method: "post",
    url: API.getMenuId,
    data: data
  });
};
export const getAddMenu = data => {
  return Axios({
    method: "post",
    url: API.getAddMenu,
    data: data
  });
};
export const getParentMenuInfo = data => {
  return Axios({
    method: "post",
    url: API.getParentMenuInfo,
    data: data
  });
};
export const getPeerMenuInfo = data => {
  return Axios({
    method: "post",
    url: API.getPeerMenuInfo,
    data: data
  });
};
export const getMenuAppInfo = data => {
  return Axios({
    method: "post",
    url: API.getMenuAppInfo,
    data: data
  });
};

export const newGroupImage = data => {
  return Axios({
    method: "post",
    url: API.newGroupImage,
    data: data
  });
};
export const deleteGroupImage = data => {
  return Axios({
    method: "post",
    url: API.deleteGroupImage,
    data: data
  });
};
export const updateGroupImage = data => {
  return Axios({
    method: "post",
    url: API.updateGroupImage,
    data: data
  });
};
export const getGroupImage = data => {
  return Axios({
    method: "post",
    url: API.getGroupImage,
    data: data
  });
};
export const newImageInfo = data => {
  return Axios({
    method: "post",
    url: API.newImageInfo,
    data: data
  });
};
export const deleteImageInfo = data => {
  return Axios({
    method: "post",
    url: API.deleteImageInfo,
    data: data
  });
};
export const updateImageInfo = data => {
  return Axios({
    method: "post",
    url: API.updateImageInfo,
    data: data
  });
};
export const getAppInfo = data => {
  return Axios({
    method: "post",
    url: API.getAppInfo,
    data: data
  });
};
export const newAppInfo = data => {
  return Axios({
    method: "post",
    url: API.newAppInfo,
    data: data
  });
};
export const updateAppInfo = data => {
  return Axios({
    method: "post",
    url: API.updateAppInfo,
    data: data
  });
};
export const deleteAppInfo = data => {
  return Axios({
    method: "post",
    url: API.deleteAppInfo,
    data: data
  });
};
export const groupingImageInfo = data => {
  return Axios({
    method: "post",
    url: API.groupingImageInfo,
    data: data
  });
};
export const getInitImageList = data => {
  return Axios({
    method: "post",
    url: API.getInitImageList,
    data: data
  });
};
//搜索词配置
export const getSearchInfo = data => {
  return Axios({
    method: "post",
    url: API.getSearchInfo,
    data: data
  });
};
export const saveSearchInfo = data => {
  return Axios({
    method: "post",
    url: API.saveSearchInfo,
    data: data
  });
};
//App版本管理
export const getAppVersionInfo = data => {
  return Axios({
    method: "post",
    url: API.getAppVersionInfo,
    data: data
  });
};
export const addAppVersionInfo = data => {
  return Axios({
    method: "post",
    url: API.addAppVersionInfo,
    data: data
  });
};
export const updateAppVersionInfo = data => {
  return Axios({
    method: "post",
    url: API.updateAppVersionInfo,
    data: data
  });
};
export const delAppVersionInfo = data => {
  return Axios({
    method: "post",
    url: API.delAppVersionInfo,
    data: data
  });
};
export const getMenuVersionList = data => {
  return Axios({
    method: "post",
    url: API.getMenuVersionList,
    data: data
  });
};

//消息中心
export const addMessageCenterInfo = data => {
  return Axios({
    method: "post",
    url: API.addMessageCenterInfo,
    data: data
  });
};
export const delMessageCenterInfo = data => {
  return Axios({
    method: "post",
    url: API.delMessageCenterInfo,
    data: data
  });
};
export const updateMessageCenterInfo = data => {
  return Axios({
    method: "post",
    url: API.updateMessageCenterInfo,
    data: data
  });
};
export const getMessageCenterInfo = data => {
  return Axios({
    method: "post",
    url: API.getMessageCenterInfo,
    data: data
  });
};
//投放客群
export const getCustomerList = data => {
  return Axios({
    method: "post",
    url: API.getCustomerList,
    data: data
  });
};
export const getCityCustomer = data => {
  return Axios({
    method: "post",
    url: API.getCityCustomer,
    data: data
  });
};
// 广告管理
export const getAdvertInfo = data => {
  return Axios({
    method: "post",
    url: API.getAdvertInfo,
    data: data
  });
};

export const delAdeert = data => {
  return Axios({
    method: "post",
    url: API.delAdeert,
    data: data
  });
};

export const addAdertMessage = data => {
  return Axios({
    method: "post",
    url: API.addAdertMessage,
    data: data
  });
};

export const uploadImg = data => {
  return Axios({
    method: "post",
    url: API.uploadImg,
    data: data
  });
};

export const getAdertMsg = data => {
  return Axios({
    method: "post",
    url: API.getAdertMsg,
    data: data
  });
};

export const queryProductList = data => {
  return Axios({
    method: "post",
    url: API.queryProductList,
    data: data
  });
};
// 广告投放管理
export const getAdertLaunchStrategy = data => {
  return Axios({
    method: "post",
    url: API.getAdertLaunchStrategy,
    data: data
  });
};
export const addLaunchStrategy = data => {
  return Axios({
    method: "post",
    url: API.addLaunchStrategy,
    data: data
  });
};

export const getLaunchStrategy = data => {
  return Axios({
    method: "post",
    url: API.getLaunchStrategy,
    data: data
  });
};

export const getAdertList = data => {
  return Axios({
    method: "post",
    url: API.getAdertList,
    data: data
  });
};

export const removeLaunchStrategy = data => {
  return Axios({
    method: "post",
    url: API.removeLaunchStrategy,
    data: data
  });
};
export const getCityList = data => {
  return Axios({
    method: "post",
    url: API.getCityLaunch,
    data: data
  });
};
export const getPositionList = data => {
  return Axios({
    method: "post",
    url: API.getPositionLaunch,
    data: data
  });
};

export const allCityList = data => {
  return Axios({
    method: "post",
    url: API.getAllCityList,
    data: data
  });
};

export const SeachLaunchList = data => {
  return Axios({
    method: "post",
    url: API.getSeachLaunchList,
    data: data
  });
};

// 首屏楼层配置

export const getFloorMessage = data => {
  return Axios({
    method: "post",
    url: API.getFloorMessage,
    data: data
  });
};

export const delFloorMessage = data => {
  return Axios({
    method: "post",
    url: API.delFloorMessage,
    data: data
  });
};

export const releaseFloorMessage = data => {
  return Axios({
    method: "post",
    url: API.releaseFloorMessage,
    data: data
  });
};

export const copyFloorMessage = data => {
  return Axios({
    method: "post",
    url: API.copyFloorMessage,
    data: data
  });
};

export const editFloorMessage = data => {
  return Axios({
    method: "post",
    url: API.editFloorMessage,
    data: data
  });
};

export const getFloorShowMessage = data => {
  return Axios({
    method: "post",
    url: API.getFloorShowMessage,
    data: data
  });
};

export const addFloorStyleAllocation = data => {
  return Axios({
    method: "post",
    url: API.addFloorStyleAllocation,
    data: data
  });
};

export const createPageMessage = data => {
  return Axios({
    method: "post",
    url: API.createPageMessage,
    data: data
  });
};

export const floorOrderNum = data => {
  return Axios({
    method: "post",
    url: API.floorOrderNum,
    data: data
  });
};

export const delFloor = data => {
  return Axios({
    method: "post",
    url: API.delFloor,
    data: data
  });
};

export const addFloor = data => {
  return Axios({
    method: "post",
    url: API.addFloor,
    data: data
  });
};

export const eidtFloor = data => {
  return Axios({
    method: "post",
    url: API.editFloor,
    data: data
  });
};

export const eidtStyle = data => {
  return Axios({
    method: "post",
    url: API.editStyle,
    data: data
  });
};

export const eidtPalaceStyle = data => {
  return Axios({
    method: "post",
    url: API.editPalaceStyle,
    data: data
  });
};

export const editPageNormal = data => {
  return Axios({
    method: "post",
    url: API.editPageNormal,
    data: data
  });
};

export const getTagList = data => {
  return Axios({
    method: "post",
    url: API.getTagList,
    data: data
  });
};

export const getAppUserList = data => {
  return Axios({
    method: "post",
    url: API.getAppUserList,
    data: data
  });
};

export const getTagInfo = data => {
  return Axios({
    method: "post",
    url: API.getTagInfo,
    data: data
  });
};

export const updateUserTag = data => {
  return Axios({
    method: "post",
    url: API.updateUserTag,
    data: data
  });
};

export const removeTagUser = data => {
  return Axios({
    method: "post",
    url: API.removeTagUser,
    data: data
  });
};

export const updateTag = data => {
  return Axios({
    method: "post",
    url: API.updateTag,
    data: data
  });
};

export const removeTag = data => {
  return Axios({
    method: "post",
    url: API.removeTag,
    data: data
  });
};

export const getUserTagInfo = data => {
  return Axios({
    method: "post",
    url: API.getUserTagInfo,
    data: data
  });
};

export const getSystemMenuList = data => {
  return Axios({
    method: "post",
    url: API.getSystemMenuList,
    data: data
  });
};
export const upadteSystemMenu = data => {
  return Axios({
    method: "post",
    url: API.upadteSystemMenu,
    data: data
  });
};

export const delSystemMenu = data => {
  return Axios({
    method: "post",
    url: API.delSystemMenu,
    data: data
  });
};

export const newSystemMenu = data => {
  return Axios({
    method: "post",
    url: API.newSystemMenu,
    data: data
  });
};
// 功能列表
export const newFeture = data => {
  return Axios({
    method: "post",
    url: API.newFeture,
    data: data
  });
};
export const updateFeture = data => {
  return Axios({
    method: "post",
    url: API.updateFeture,
    data: data
  });
};
export const deletFeture = data => {
  return Axios({
    method: "post",
    url: API.deletFeture,
    data: data
  });
};
export const getFetureList = data => {
  return Axios({
    method: "post",
    url: API.getFetureList,
    data: data
  });
};
// 功能关联关系
export const newAssocited = data => {
  return Axios({
    method: "post",
    url: API.newAssocited,
    data: data
  });
};
export const updateAssocited = data => {
  return Axios({
    method: "post",
    url: API.updateAssocited,
    data: data
  });
};
export const delAssocited = data => {
  return Axios({
    method: "post",
    url: API.delAssocited,
    data: data
  });
};
export const getAssocitedList = data => {
  return Axios({
    method: "post",
    url: API.getAssocitedList,
    data: data
  });
};

// 自定义配置接口
export const getCustomList = data => {
  return Axios({
    method: "post",
    url: API.getCustomList,
    data: data
  });
};

export const aliasParameter = data => {
  return Axios({
    method: "post",
    url: API.aliasParameter,
    data: data
  });
};

export const addCustomMsg = data => {
  return Axios({
    method: "post",
    url: API.addCustomMsg,
    data: data
  });
};

export const delCustomMsg = data => {
  return Axios({
    method: "post",
    url: API.delCustomMsg,
    data: data
  });
};
export const getFunctionLevel = data => {
  return Axios({
    method: "post",
    url: API.getFunctionLevel,
    data: data
  });
};
export const functionLevelList = data => {
  return Axios({
    method: "post",
    url: API.functionLevelList,
    data: data
  });
};
export const newFunctionMenu = data => {
  return Axios({
    method: "post",
    url: API.newFunctionMenu,
    data: data
  });
};

//营销活动奖品
export const prizePhysicalList = data => {
  return Axios({
    method: "post",
    url: API.prizePhysicalList,
    data: data
  });
};
export const newPrizePhysical = data => {
  return Axios({
    method: "post",
    url: API.newPrizePhysical,
    data: data
  });
};
export const updatePrizePhysical = data => {
  return Axios({
    method: "post",
    url: API.updatePrizePhysical,
    data: data
  });
};
export const queryPrizePhysical = data => {
  return Axios({
    method: "post",
    url: API.queryPrizePhysical,
    data: data
  });
};
export const getPrizeVirtual = data => {
  return Axios({
    method: "post",
    url: API.getPrizeVirtual,
    data: data
  });
};
export const newPrizeVirtual = data => {
  return Axios({
    method: "post",
    url: API.newPrizeVirtual,
    data: data
  });
};
export const updatePrizeVirtual = data => {
  return Axios({
    method: "post",
    url: API.updatePrizeVirtual,
    data: data
  });
};
export const queryPrizeVirtual = data => {
  return Axios({
    method: "post",
    url: API.queryPrizeVirtual,
    data: data
  });
};
export const associtedActivityList = data => {
  return Axios({
    method: "post",
    url: API.associtedActivityList,
    data: data
  });
};
export const newMoreVirtual = data => {
  return Axios({
    method: "post",
    url: API.newMoreVirtual,
    data: data
  });
};
export const prizeInfoDel = data => {
  return Axios({
    method: "post",
    url: API.prizeInfoDel,
    data: data
  });
};
export const prizeCardNew = data => {
  return Axios({
    method: "post",
    url: API.prizeCardNew,
    data: data
  });
};
export const prizeCardDetail = data => {
  return Axios({
    method: "post",
    url: API.prizeCardDetail,
    data: data
  });
};
export const prizeCardUpdate = data => {
  return Axios({
    method: "post",
    url: API.prizeCardUpdate,
    data: data
  });
};
export const prizeCardDel = data => {
  return Axios({
    method: "post",
    url: API.prizeCardDel,
    data: data
  });
};

export const marketActivityAdd = data => {
  return Axios({
    method: "post",
    url: API.marketActivityAdd,
    data: data
  });
};
export const marketActivitySetUpdate = data => {
  return Axios({
    method: "post",
    url: API.marketActivitySetUpdate,
    data: data
  });
};
export const marketActivityList = data => {
  return Axios({
    method: "post",
    url: API.marketActivityList,
    data: data
  });
};
export const marketActivityStateUpdate = data => {
  return Axios({
    method: "post",
    url: API.marketActivityStateUpdate,
    data: data
  });
};
export const marketActivityInfo = data => {
  return Axios({
    method: "post",
    url: API.marketActivityInfo,
    data: data
  });
};
export const marketActivityDel = data => {
  return Axios({
    method: "post",
    url: API.marketActivityDel,
    data: data
  });
};
export const activityCommitCount = data => {
  return Axios({
    method: "post",
    url: API.activityCommitCount,
    data: data
  });
};
export const activityLookCount = data => {
  return Axios({
    method: "post",
    url: API.activityLookCount,
    data: data
  });
};
export const activityGuessAdd = data => {
  return Axios({
    method: "post",
    url: API.activityGuessAdd,
    data: data
  });
};
export const activityGuessUpdate = data => {
  return Axios({
    method: "post",
    url: API.activityGuessUpdate,
    data: data
  });
};
export const activityGuessDetail = data => {
  return Axios({
    method: "post",
    url: API.activityGuessDetail,
    data: data
  });
};
export const activityGrantPrize = data => {
  return Axios({
    method: "post",
    url: API.activityGrantPrize,
    data: data
  });
};
export const activityWinPrize = data => {
  return Axios({
    method: "post",
    url: API.activityWinPrize,
    data: data
  });
};
export const activityPrizeInventory = data => {
  return Axios({
    method: "post",
    url: API.activityPrizeInventory,
    data: data
  });
};
export const activitySubmitNum = data => {
  return Axios({
    method: "post",
    url: API.activitySubmitNum,
    data: data
  });
};
export const activityShareNum = data => {
  return Axios({
    method: "post",
    url: API.activityShareNum,
    data: data
  });
};
export const activityUVAndPVNum = data => {
  return Axios({
    method: "post",
    url: API.activityUVAndPVNum,
    data
  });
};
export const activityUVAndPVCount = data => {
  return Axios({
    method: "post",
    url: API.activityUVAndPVCount,
    data
  });
};

export const changeCustomMsg = data => {
  return Axios({
    method: "post",
    url: API.changeCustomMsg,
    data: data
  });
};

// 复制菜单
export const copyMenuData = data => {
  return Axios({
    method: "post",
    url: API.copyMenuData,
    data: data
  });
};

export const changeMenuState = data => {
  return Axios({
    method: "post",
    url: API.changeMenuState,
    data: data
  });
};

// 渠道添加
export const addChannel = data => {
  return Axios({
    method: "post",
    url: API.addChannel,
    data: data
  });
};
// 获取渠道列表
export const getChannelList = data => {
  return Axios({
    method: "post",
    url: API.getChannelList,
    data: data
  });
};
// 修改渠道
export const changeChannel = data => {
  return Axios({
    method: "post",
    url: API.changeChannel,
    data: data
  });
};
// 删除渠道
export const removeChannel = data => {
  return Axios({
    method: "post",
    url: API.removeChannel,
    data: data
  });
};
// session 中的用户信息
export const getUserInfoActionService = data => {
  return Axios({
    method: "post",
    url: API.getUserInfoActionService,
    data: data
  });
};
