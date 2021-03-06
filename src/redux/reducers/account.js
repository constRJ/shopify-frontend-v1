const defaultState = {
  data: [],
  errors: null,
  success: null,
  isLoading: false,
  status: null,
  message: null,
  description: null,
};

const initialState = {
  account: defaultState,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_ACCOUNTS":
      return Object.assign({}, state, {
        account: {
          ...defaultState,
          isLoading: true,
        },
      });
    case "GET_ALL_ACCOUNTS_SUCCESS":
      return Object.assign({}, state, {
        account: {
          isLoading: false,
          error: false,
          success: true,
          data: action.payload.data.account,
          status: action.payload.status,
        },
      });

    case "GET_ALL_ACCOUNTS_FAILED":
      return Object.assign({}, state, {
        account: {
          isLoading: false,
          error: true,
          success: false,
          data: action.payload.data,
          status: action.payload.status,
        },
      });
    default:
      return state;
  }
};

export default reducers;
