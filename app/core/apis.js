export const fetchRepositoriesApi = keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json());