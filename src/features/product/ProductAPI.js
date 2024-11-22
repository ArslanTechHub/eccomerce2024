// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}




export function fetchProductByFilters(filter, sort, pagination) {
  // Build query string for filters
  let queryString = '';
  
  // Handle multiple filter values
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      // Join multiple values with OR operator
      categoryValues.forEach((value) => {
        queryString += `${key}=${value}&`;
      });
    }
  }

  // Add sort and pagination params
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count');
    resolve({ data, totalItems }); // Return both data and total count
  });
}
