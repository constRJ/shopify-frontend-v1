import request from "@api/index";

const processAction = async (dispatch, option) => {
  dispatch({
    type: option.request,
    payload: { params: option.params, body: option.body },
  });

  const result = await request[`${option.action}`](
    `${option.version ? option.version : ""}${option.service}${
      option.params ? "?" + option.params : ""
    }`,
    option.body || "",
    option.token
  );

  if (result.error) {
    dispatch({
      type: option.failed,
      payload: result,
      params: option.params,
      body: option.body,
    });
  } else {
    dispatch({
      type: option.success,
      payload: result,
    });
  }

  return result;
};

export default processAction;
