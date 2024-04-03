import axios from "axios";

import {menulistAction,foodlistAction} from "./Actions";

import * as Constants from "./Contants";


export const getMenulist = () => async (dispatch) => {
  dispatch(menulistAction(Constants.MENULIST_DATA_START, {}, "", true));
  var config = {
    method: "get",
    url: "https://localhost:7183/api/Tomato/menulist",
   // headers: postHeader
  };
  await axios(config)
    .then((response) => {
      dispatch(
        menulistAction(
          Constants.MENULIST_DATA_SUCCESS,
          response?.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            menulistAction(
              Constants.MENULIST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            menulistAction(
              Constants.MENULIST_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            menulistAction(
              Constants.MENULIST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else
          dispatch(
            menulistAction(
              Constants.MENULIST_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
export const getFoodlist = () => async (dispatch) => {
  dispatch(foodlistAction(Constants.FOODLIST_DATA_START, {}, "", true));
  var config = {
    method: "get",
    url: "https://localhost:7183/api/Tomato/foodlist",
   // headers: postHeader
  };
  await axios(config)
    .then((response) => {
      dispatch(
        foodlistAction(
          Constants.FOODLIST_DATA_SUCCESS,
          response?.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            foodlistAction(
              Constants.FOODLIST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else if (error.response && error.response.status === 403) {
          dispatch(
            foodlistAction(
              Constants.FOODLIST_DATA_FAILURE,
              {},
              "Session Has Expired",
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            foodlistAction(
              Constants.FOODLIST_DATA_FAILURE,
              {},
              error.response.data.Message,
              false
            )
          );
        } else
          dispatch(
            foodlistAction(
              Constants.FOODLIST_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};