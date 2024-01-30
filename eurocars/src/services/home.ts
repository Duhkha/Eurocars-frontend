import appAxios from "./appAxios";
import { MainPage } from "../utils/types"; 

const getMainPageData = async (): Promise<MainPage> => {
    const response = await appAxios.get<MainPage>('/main-page/');
    return response.data;
};

export default { getMainPageData };