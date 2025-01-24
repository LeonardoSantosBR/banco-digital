const allowed_params = ['limit', 'page', 'where', 'orderBy'];

export const filterParams = (query) => {
  return Object.keys(query)
    .filter((key) => allowed_params.includes(key))
    .reduce((filtered, key) => {
      filtered[key] = query[key];
      return filtered;
    }, {});
};
