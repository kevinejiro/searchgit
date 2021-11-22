import contributorsImageActive from "../../assets/images/contributorsActive.svg";
import repoActive from "../../assets/images/repoActive.svg";
import contributorsImage from "../../assets/images/contributors.svg";
import repoImage from "../../assets/images/repo.svg";

const ActiveFilterImageUtil = {
  getImageList(input: string) {
    let contributionsImageUrl;
    let repositoriesImageUrl;
    let urlList;
    switch (input) {
      case "user":
        contributionsImageUrl = contributorsImageActive;
        repositoriesImageUrl = repoImage;
        urlList = [contributionsImageUrl, repositoriesImageUrl];
        return urlList;
      case "org":
        contributionsImageUrl = contributorsImage;
        repositoriesImageUrl = repoActive;
        urlList = [contributionsImageUrl, repositoriesImageUrl];
        return urlList;
      default:
        contributionsImageUrl = contributorsImage;
        repositoriesImageUrl = repoImage;
        urlList = [contributionsImageUrl, repositoriesImageUrl];
        return urlList;
    }
  },
};

export default ActiveFilterImageUtil;
