export function filterData(searchText, allUsers) {
  const res = allUsers.filter((user) =>
    user.first_name.toLowerCase().includes(searchText.toLowerCase())
  );
  return res;
}
