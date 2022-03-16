export const add_reminder = (reminder) => {
  return {
    type: "add",
    reminder,
  };
};
export const remove_reminder = (id) => {
  return {
    type: "remove",
    id,
  };
};
export const clear_reminder = () => {
  return {
    type: "clear",
  };
};
