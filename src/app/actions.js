const createAction = type => payload => ({type, payload})

// App actions
export const APP_LOADING_STARTED = 'APP_LOADING_STARTED'
export const appLoadingStarted = createAction(APP_LOADING_STARTED)

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED'
export const appLoadingSucceed = createAction(APP_LOADING_SUCCEED)

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED'
export const appLoadingFailed = createAction(APP_LOADING_FAILED)
