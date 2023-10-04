export const saveListToLocalStorage = (taskList) => {
    localStorage.setItem("wishlist", JSON.stringify(taskList));
  };