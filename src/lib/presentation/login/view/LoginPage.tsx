import { Form } from "antd";
import LoginController from "../controller/LoginController.ts";

import CustomInput from "../../../shared/CustomInput.tsx";
import BaseColumn from "../../../shared/BaseColumn.tsx";

import Images from "../../../theme/images/Images.ts";
import { useController } from "../../../util/Hooks.ts";
import { LoginServiceImpl } from "../service/LoginService.ts";
import HttpUtilImpl from "../../../network/HttpUtilImpl.ts";
import { useAuth } from "../../layout/auth_provider/view/AuthProviderContext.tsx";
import LoginViewModel from "../model/LoginViewModel.ts";
import BaseText from "../../../shared/flutter/text/BaseText.tsx";
import { TextAlign, TextOverflow, FontWeight, FontStyle } from "../../../shared/flutter/text/BaseTextEnum.ts";
import { TextStyle } from "../../../shared/flutter/text/BaseTextStyle.ts";


LoginPage.page = "/login_page";

export default function LoginPage() {
    const auth = useAuth();
    const controller = useController(() => {
        const http = new HttpUtilImpl();
        const service = new LoginServiceImpl({ http });
        const model = new LoginViewModel(auth);
        return new LoginController({
            service: service,
            model: model,
        });
    });

    return (
        <div className="relative flex h-[100vh] w-[100vw] items-center justify-center bg-login bg-cover bg-no-repeat">
            <div className="w-[600px] rounded-xl bg-black/50 px-8 py-8 xl:w-[700px]">
                <Form onFinish={() => controller.mock()}>
                    <div className="mb-5 flex flex-col items-center justify-center space-y-5">
                        <img src={Images.img_avantrade_logo} alt="avantrade logo" />

                    </div>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Username is required" }]}
                    >
                        <CustomInput placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Password is required" }]}
                    >
                        <CustomInput placeholder="Password" type="password" />
                    </Form.Item>

                    <Form.Item>
                        <button type="submit" className="w-full">
                            Login
                        </button>
                    </Form.Item>


                </Form>



                <BaseColumn
                    mainAxis="start"
                    crossAxis="center"
                    gap={10}
                    className="mb-5"
                >
                    <img src={Images.img_avantrade_logo} alt="avantrade logo" />

                    <BaseText
                        textAlign={TextAlign.right}
                        overflow={TextOverflow.ellipsis}
                        maxLines={1}
                        style={
                            new TextStyle(
                                {
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                    // fontFamily: 'font-lato',
                                    fontStyle: FontStyle.underline,
                                    color: "#0818A8"
                                }
                            )
                        }
                    >
                        kontol
                    </BaseText>


                    <BaseText
                        textAlign={TextAlign.left}
                        overflow={TextOverflow.ellipsis}
                        maxLines={3}
                        style={
                            new TextStyle(
                                {
                                    fontSize: 32,
                                    fontWeight: FontWeight.semiBold,
                                    fontFamily: 'font-lato',
                                    fontStyle: FontStyle.italic,
                                    color: "#00FFFF"
                                }
                            )
                        }
                    >
                        Ini adalah contoh teks yang sangat panjang dan sengaja dibuat bertele-tele untuk keperluan pengujian komponen Text atau BaseText di aplikasi React yang menggunakan Tailwind CSS, terutama untuk memastikan bahwa fitur seperti text overflow, ellipsis, maxLines, textAlign, fontWeight, fontStyle, serta perilaku layout di dalam Column atau Row dapat berjalan dengan benar tanpa adanya bug layout, pemotongan teks yang tidak diinginkan, atau perilaku aneh ketika teks dirender dalam berbagai ukuran layar, container flex, maupun kondisi responsive yang berbeda-beda.

                    </BaseText>

                </BaseColumn>

            </div>
        </div>
    );
}
