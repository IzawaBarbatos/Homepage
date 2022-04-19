import Mock from "mockjs";
import avatar from "@/assets/images/head.jpg";
import qqQrCode from "@/assets/images/Qr_qq.jpg";
import weixinQrCode from "@/assets/images/Qr_weixin.jpg";
import favicon from "@/assets/images/head.jpg";

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar,
        siteTitle: "icore的小窝",
        github: "https://github.com/IzawaBarbatos",
        qq: "1263248187",
        qqQrCode,
        weixin: "ex_icore",
        weixinQrCode,
        mail: "izawa3110.@gmail.com",
        icp: "粤ICP备17001816号",
        githubName: "IzawaBarbatos",
        favicon,
    },
});