const baseUrl = 'https://charlesclicksvtu.com/en/';

type props = {
  home: string;
  login: string;
  forgetPassword: string;
  signup: string;
  api: string;
};
const Urls = (): props => {
  return {
    home: `${baseUrl}home/`,
    login: `${baseUrl}login/`,
    forgetPassword: `${baseUrl}recovery/`,
    signup: `${baseUrl}register/`,
    api: `https://charlesclicksvtu.com/api/account/login/`,
  };
};

export default Urls;
