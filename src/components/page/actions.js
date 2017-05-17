const createAction = type => payload => ({type, payload})

// Page actions
export const GET_PAGE_STARTED = 'GET_PAGE_STARTED'
export const getPageStarted = createAction(GET_PAGE_STARTED)

export const GET_PAGE_SUCCEED = 'GET_PAGE_SUCCEED'
export const getPageSucceed = createAction(GET_PAGE_SUCCEED)

export const GET_PAGE_FAILED = 'GET_PAGE_FAILED'
export const getPageFailed = createAction(GET_PAGE_FAILED)
