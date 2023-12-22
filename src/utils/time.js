export const timestampToDate = (timestamp) => {
  // Constvert timestamp to date
  const currentDate = new Date(timestamp);

  // Extract year, month, and date components
  const year = currentDate.getFullYear();
  // Month is zero-based, so add 1 to get the actual month
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const date = currentDate.getDate().toString().padStart(2, "0");

  // Format the "year-month-date" string
  const formattedDate = `${year}-${month}-${date}`;

  return formattedDate;
};
