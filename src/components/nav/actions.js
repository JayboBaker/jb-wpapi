const createAction = type => payload => ({type, payload})

// Main Nav actions
export const GET_MAIN_NAV_STARTED = 'GET_MAIN_NAV_STARTED'
export const getMainNavStarted = createAction(GET_MAIN_NAV_STARTED)

export const GET_MAIN_NAV_SUCCEED = 'GET_MAIN_NAV_SUCCEED'
export const getMainNavSucceed = createAction(GET_MAIN_NAV_SUCCEED)

export const GET_MAIN_NAV_FAILED = 'GET_MAIN_NAV_FAILED'
export const getMainNavFailed = createAction(GET_MAIN_NAV_FAILED)

// Header Nav  actions
export const GET_HEADER_NAV_STARTED = 'GET_HEADER_NAV_STARTED'
export const getHeaderNavStarted = createAction(GET_HEADER_NAV_STARTED)

export const GET_HEADER_NAV_SUCCEED = 'GET_HEADER_NAV_SUCCEED'
export const getHeaderNavSucceed = createAction(GET_HEADER_NAV_SUCCEED)

export const GET_HEADER_NAV_FAILED = 'GET_HEADER_NAV_FAILED'
export const getHeaderNavFailed = createAction(GET_MAIN_NAV_FAILED)
