
import { actions } from "./actionsAndReducers";
import { fetchRepositoriesApi } from "./apis";

export const fetchRepositoriesAsync = (keyword) => {
    return async (dispatch) => {
        try {
            const fetchedRepositories = await fetchRepositoriesApi(keyword);
            dispatch(actions.updateRepositories(fetchedRepositories.items));
        } catch (ex) {
            console.error("Ideally errors should be handled but for simplicity I will skip error handling");
            return { error: "cannot fetch repositories" };
        }

    };
}