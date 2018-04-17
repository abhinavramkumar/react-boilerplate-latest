export default (
  state = {
    user: {}
  },
  { type, payload }
) => {
  switch (type) {
    case "LOG_IN":
      return {
        user: payload.user
      };

    case "LOG_OUT":
      return {
        user: {}
      };

    default:
      return state;
  }
};
