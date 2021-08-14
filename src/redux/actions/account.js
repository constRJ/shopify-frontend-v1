import processAction from "@utils/processAction";

export const getAccount = () => {
  return async (dispatch) => {
    await processAction(dispatch, {
      action: "get",
      service: "https://jsonplaceholder.typicode.com/users",
      request: "GET_ALL_ACCOUNTS",
      success: "GET_ALL_ACCOUNTS_SUCCESS",
      failed: "GET_ALL_ACCOUNTS_FAILED",
    });
  };
};
